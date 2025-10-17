import React, { useState, useMemo } from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Calculator, Users, AlertTriangle, PiggyBank, Home, AreaChart, ShieldCheck, Gem, Landmark, Receipt, Plus, Minus, Equal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const IconInputRow: React.FC<{
    icon: React.ReactNode;
    name: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    unit?: string;
}> = ({ icon, name, label, value, onChange, unit = '万円' }) => (
    <div className="flex items-center gap-3">
        <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center text-navy bg-navy/10 rounded-lg">{icon}</div>
        <label htmlFor={name} className="flex-1 text-gray-700 font-medium">{label}</label>
        <div className="relative w-36">
            <input
                type="text"
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md text-right focus:outline-none focus:ring-2 focus:ring-gold transition"
                inputMode="numeric"
                placeholder="0"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">{unit}</span>
        </div>
    </div>
);


const SimulatorSection: React.FC = () => {
    const [inputs, setInputs] = useState({
        cash: '',
        realEstate: '',
        securities: '',
        insurance: '',
        other: '',
        debt: '',
        funeral: '',
        heirs: '1',
    });
    const [taxAmount, setTaxAmount] = useState<number | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (/^\d*$/.test(value)) {
            setInputs(prev => ({ ...prev, [name]: value }));
        }
    };
    
    const parseInput = (value: string) => Number(value) || 0;

    const { totalAssets, totalLiabilities, netAssetsValue } = useMemo(() => {
        const assetValues = [inputs.cash, inputs.realEstate, inputs.securities, inputs.insurance, inputs.other].map(parseInput);
        const liabilityValues = [inputs.debt, inputs.funeral].map(parseInput);
        const totalAssets = assetValues.reduce((sum, val) => sum + val, 0);
        const totalLiabilities = liabilityValues.reduce((sum, val) => sum + val, 0);
        const netAssetsValue = totalAssets - totalLiabilities;
        return { totalAssets, totalLiabilities, netAssetsValue };
    }, [inputs]);

    const calculateTax = () => {
        const heirs = parseInput(inputs.heirs);

        if (heirs === 0) {
            alert('法定相続人の数は1人以上にしてください。');
            return;
        }
        
        const netAssetsInYen = netAssetsValue * 10000;
        const basicDeduction = 30_000_000 + (6_000_000 * heirs);
        const taxableEstate = Math.max(0, netAssetsInYen - basicDeduction);

        if (taxableEstate === 0) {
            setTaxAmount(0);
            return;
        }

        const perHeirShare = taxableEstate / heirs;

        const getTaxForShare = (share: number): number => {
            if (share <= 10_000_000) return share * 0.10;
            if (share <= 30_000_000) return share * 0.15 - 500_000;
            if (share <= 50_000_000) return share * 0.20 - 2_000_000;
            if (share <= 100_000_000) return share * 0.30 - 7_000_000;
            if (share <= 200_000_000) return share * 0.40 - 17_000_000;
            if (share <= 300_000_000) return share * 0.45 - 27_000_000;
            if (share <= 600_000_000) return share * 0.50 - 42_000_000;
            return share * 0.55 - 72_000_000;
        };

        const totalTax = getTaxForShare(perHeirShare) * heirs;
        setTaxAmount(Math.floor(Math.max(0, totalTax)));
    };

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <SectionTitle title="かんたん相続税シミュレーター" subtitle="Tax Simulation" />
                <Card>
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-bold text-xl text-navy mb-4">資産の入力</h3>
                                <div className="space-y-3">
                                    <IconInputRow icon={<PiggyBank />} name="cash" label="預貯金" value={inputs.cash} onChange={handleInputChange} />
                                    <IconInputRow icon={<Home />} name="realEstate" label="不動産" value={inputs.realEstate} onChange={handleInputChange} />
                                    <IconInputRow icon={<AreaChart />} name="securities" label="有価証券" value={inputs.securities} onChange={handleInputChange} />
                                    <IconInputRow icon={<ShieldCheck />} name="insurance" label="生命保険" value={inputs.insurance} onChange={handleInputChange} />
                                    <IconInputRow icon={<Gem />} name="other" label="その他財産" value={inputs.other} onChange={handleInputChange} />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-navy mb-4">負債の入力</h3>
                                <div className="space-y-3">
                                    <IconInputRow icon={<Landmark />} name="debt" label="借入金" value={inputs.debt} onChange={handleInputChange} />
                                    <IconInputRow icon={<Receipt />} name="funeral" label="葬儀費用" value={inputs.funeral} onChange={handleInputChange} />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-navy mb-4 flex items-center gap-2"><Users size={24}/>法定相続人</h3>
                                <div className="space-y-3">
                                     <IconInputRow icon={<Users />} name="heirs" label="相続人の数" value={inputs.heirs} onChange={handleInputChange} unit="人" />
                                </div>
                            </div>
                        </div>

                        <div className="sticky top-8">
                             <div className="p-4 bg-navy/5 rounded-lg space-y-2 mb-6">
                                <div className="flex justify-between items-center">
                                    <span className="font-medium text-gray-600 flex items-center"><Plus size={16} className="mr-2 text-green-500"/>資産合計</span>
                                    <span className="font-bold text-lg text-green-600">{totalAssets.toLocaleString()} 万円</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-medium text-gray-600 flex items-center"><Minus size={16} className="mr-2 text-red-500"/>負債合計</span>
                                    <span className="font-bold text-lg text-red-600">{totalLiabilities.toLocaleString()} 万円</span>
                                </div>
                                <hr className="my-2 border-navy/20"/>
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-navy flex items-center"><Equal size={16} className="mr-2 text-navy"/>課税対象前の財産額</span>
                                    <span className="font-bold text-xl text-navy">{netAssetsValue.toLocaleString()} 万円</span>
                                </div>
                            </div>
                            <div className="text-center bg-light-gray p-6 rounded-lg">
                                <Button onClick={calculateTax} size="lg" className="w-full mb-6">
                                    <Calculator size={28} /> 相続税を計算する
                                </Button>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={taxAmount === null ? 'initial' : taxAmount > 0 ? 'hasTax' : 'noTax'}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.4 }}
                                        className="h-32 flex flex-col items-center justify-center"
                                    >
                                        {taxAmount !== null ? (
                                            taxAmount > 0 ? (
                                                <>
                                                    <p className="text-lg text-gray-600">概算の相続税額は...</p>
                                                    <p className="text-4xl md:text-5xl font-bold text-gold-dark my-1">
                                                        約 <span className="text-6xl md:text-7xl">{(taxAmount / 10000).toLocaleString()}</span> 万円
                                                    </p>
                                                </>
                                            ) : (
                                                <p className="text-2xl font-bold text-navy text-center">
                                                    相続税はかからない見込みです。
                                                </p>
                                            )
                                        ) : (
                                            <div className="text-gray-500 text-center">
                                                <p>財産と相続人の数を入力し<br/>「計算する」ボタンを押してください。</p>
                                            </div>
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                                <div className="mt-4 p-3 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 text-left text-xs flex items-start">
                                    <AlertTriangle className="w-8 h-5 mr-2 flex-shrink-0" />
                                    <div>
                                        これはあくまで簡易計算です。配偶者控除などの各種特例は考慮されていません。正確な税額は専門家にご相談ください。
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default SimulatorSection;
