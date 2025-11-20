import { AssetValues, LiabilityValues, SimulationResult } from '@/types/chat';

/**
 * Calculates the progressive tax based on the statutory share amount.
 * Uses the standard Japanese inheritance tax bracket table (Sokusannhyou).
 * 
 * @param amount Amount in Yen
 */
const calculateBracketTax = (amount: number): number => {
  if (amount <= 10_000_000) return amount * 0.10;
  if (amount <= 30_000_000) return amount * 0.15 - 500_000;
  if (amount <= 50_000_000) return amount * 0.20 - 2_000_000;
  if (amount <= 100_000_000) return amount * 0.30 - 7_000_000;
  if (amount <= 200_000_000) return amount * 0.40 - 17_000_000;
  if (amount <= 300_000_000) return amount * 0.45 - 27_000_000;
  if (amount <= 600_000_000) return amount * 0.50 - 42_000_000;
  return amount * 0.55 - 72_000_000;
};

/**
 * Performs the full inheritance tax simulation with detailed inputs.
 */
export const calculateInheritanceTax = (
  assets: AssetValues,
  liabilities: LiabilityValues,
  hasSpouse: boolean,
  childrenCount: number
): SimulationResult => {
  
  // 1. Calculate Statutory Heirs
  const statutoryHeirsCount = (hasSpouse ? 1 : 0) + childrenCount;

  // 2. Calculate Gross Assets & Life Insurance Exemption
  // Life Insurance Non-taxable limit = 5 million yen * number of statutory heirs
  const insuranceExemption = 5_000_000 * statutoryHeirsCount;
  const lifeInsuranceYen = assets.lifeInsurance * 10_000;
  const taxableInsuranceYen = Math.max(0, lifeInsuranceYen - insuranceExemption);
  
  const totalAssetsYen = (assets.deposits + assets.realEstate + assets.securities + assets.other) * 10_000 + lifeInsuranceYen;
  const grossAssetsForTaxYen = (assets.deposits + assets.realEstate + assets.securities + assets.other) * 10_000 + taxableInsuranceYen;

  // 3. Calculate Liabilities
  const totalLiabilitiesYen = (liabilities.debts + liabilities.funeral) * 10_000;

  // 4. Net Assets
  const netAssetsYen = Math.max(0, grossAssetsForTaxYen - totalLiabilitiesYen);

  // 5. Basic Deduction
  // 30 million + (6 million * statutory heirs)
  const basicDeduction = 30_000_000 + (6_000_000 * statutoryHeirsCount);

  // 6. Taxable Estate
  const taxableEstate = Math.max(0, netAssetsYen - basicDeduction);

  if (taxableEstate <= 0) {
    return {
      taxableAssets: 0,
      basicDeduction: basicDeduction / 10_000,
      totalTax: 0,
      isTaxable: false,
      netAssets: netAssetsYen / 10_000,
      heirCount: statutoryHeirsCount,
      totalAssets: totalAssetsYen / 10_000,
      totalLiabilities: totalLiabilitiesYen / 10_000,
      taxableInsurance: taxableInsuranceYen / 10_000
    };
  }

  // 7. Calculate Statutory Shares (Legal Inheritance Ratio)
  let spouseShare = 0;
  let childShare = 0;

  if (hasSpouse && childrenCount > 0) {
    spouseShare = taxableEstate * 0.5;
    childShare = (taxableEstate * 0.5) / childrenCount;
  } else if (hasSpouse && childrenCount === 0) {
    spouseShare = taxableEstate;
  } else if (!hasSpouse && childrenCount > 0) {
    childShare = taxableEstate / childrenCount;
  }

  // 8. Calculate Tax for each share
  let totalTax = 0;

  if (hasSpouse) {
    totalTax += calculateBracketTax(spouseShare);
  }
  
  if (childrenCount > 0) {
    const taxPerChild = calculateBracketTax(childShare);
    totalTax += taxPerChild * childrenCount;
  }

  return {
    taxableAssets: taxableEstate / 10_000,
    basicDeduction: basicDeduction / 10_000,
    totalTax: Math.floor(totalTax / 10_000),
    isTaxable: true,
    netAssets: netAssetsYen / 10_000,
    heirCount: statutoryHeirsCount,
    totalAssets: totalAssetsYen / 10_000,
    totalLiabilities: totalLiabilitiesYen / 10_000,
    taxableInsurance: taxableInsuranceYen / 10_000
  };
};
