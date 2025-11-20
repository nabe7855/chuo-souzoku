import React from 'react';
import { SimulationResult, WorryItem, AdviceContent } from '@/types/chat';

export const WORRY_LIST: WorryItem[] = [
  { rank: 1, id: 'start', label: '何から手をつければいいかわからない' },
  { rank: 2, id: 'tax_anxiety', label: '相続税がこれで合っているか不安' },
  { rank: 3, id: 'real_estate', label: '不動産の評価額が妥当かわからない' },
  { rank: 4, id: 'dispute', label: '遺産分割で揉めないか心配' },
  { rank: 5, id: 'procedures', label: '銀行・保険・年金などの名義変更が大変' },
  { rank: 6, id: 'secondary', label: '二次相続で損しないか不安' },
  { rank: 7, id: 'cost', label: '専門家に頼むと費用が高そう' },
  { rank: 8, id: 'deadline', label: '相続発生後に期限まで終わるか不安' },
  { rank: 9, id: 'preparation', label: '親が元気なうちに何を準備すべきかわからない' },
  { rank: 10, id: 'remote', label: '家族が遠方・忙しくて手続きが進まない' },
];

export const generateAdvice = (result: SimulationResult, worryId: string): AdviceContent => {
  const isTaxable = result.isTaxable;
  const taxAmount = result.totalTax;
  const totalAssets = result.totalAssets;

  // Common phrases using standard HTML string for dangerous insertion to handle styling
  const taxPhrase = isTaxable 
    ? `今回の概算では<span class="font-bold text-red-600">${taxAmount.toLocaleString()}万円</span>の相続税が発生する可能性があります。` 
    : `今回の概算では相続税は<span class="font-bold text-emerald-600">0円（かからない）</span>見込みです。`;

  let title = "";
  let content = "";
  let cta = "無料で状況を整理してもらう";

  switch (worryId) {
    case 'start': // 1. 何から手をつければいいかわからない
      title = "「何もしない」が一番のリスクです";
      content = `
        ${taxPhrase}<br/><br/>
        相続手続きは90種類以上あると言われ、期限を過ぎるとペナルティが発生することもあります。<br/>
        特に「何から手をつけるべきか」で止まってしまうと、気づかないうちに特例適用の期限を逃してしまうケースが多いです。<br/><br/>
        当事務所では、まずあなたの状況で<strong>「絶対にやるべきこと」と「やらなくていいこと」を仕分ける</strong>ところからお手伝いします。
      `;
      cta = "やるべきことリストを無料作成する";
      break;

    case 'tax_anxiety': // 2. 相続税がこれで合っているか不安
      title = "自己判断の計算は、数百万円の誤差を生みます";
      content = `
        ${taxPhrase}<br/><br/>
        しかし、これはあくまで一般的な計算式です。実際には「特例」や「控除」を正しく適用できるかどうかで、最終的な税額が大きく変わります。<br/>
        逆に、申告漏れがあると<strong>最大40%以上のペナルティ</strong>が課される恐れもあります。<br/><br/>
        正確な税額を知るために、一度専門家のダブルチェックを受けてみませんか？
      `;
      cta = "専門家の無料チェックを受ける";
      break;

    case 'real_estate': // 3. 不動産の評価額が妥当かわからない
      title = "不動産評価が1割ズレれば、税額は激変します";
      content = `
        ${taxPhrase}<br/><br/>
        不動産の評価には「路線価」だけでなく、土地の形状や道路付けなど細かい補正が必要です。<br/>
        この補正を正しく行うことで、<strong>評価額を下げ、相続税を数百万円単位で節税できる</strong>可能性があります。<br/><br/>
        あなたの不動産に適正な評価減の余地があるか、無料で簡易診断いたします。
      `;
      cta = "不動産の評価減を無料診断する";
      break;

    case 'dispute': // 4. 遺産分割で揉めないか心配
      title = "「うちは仲が良いから」が一番危険です";
      content = `
        ${taxPhrase}<br/><br/>
        遺産総額が${totalAssets.toLocaleString()}万円規模の場合、分け方によっては不公平感が生まれやすく、最もトラブルになりやすい価格帯です。<br/>
        一度感情的な対立が起きると、解決まで数年かかることも珍しくありません。<br/><br/>
        <strong>「家族が納得する分割案」</strong>を第三者の視点からご提案します。
      `;
      cta = "円満相続の分割案を相談する";
      break;

    case 'procedures': // 5. 銀行・保険・年金などの名義変更が大変
      title = "平日休めない方にとって、手続きは過酷です";
      content = `
        ${taxPhrase}<br/><br/>
        税金以外にも、銀行口座の凍結解除や不動産の名義変更など、平日の日中にしかできない手続きが山積みになります。<br/>
        書類に一文字でも不備があればやり直しになり、貴重な時間を浪費してしまいます。<br/><br/>
        面倒な名義変更や書類収集を<strong>すべて丸投げできるプラン</strong>をご用意しています。
      `;
      cta = "手続き代行の無料見積もりをとる";
      break;

    case 'secondary': // 6. 二次相続で損しないか不安
      title = "「とりあえず配偶者へ」は損する可能性があります";
      content = `
        ${taxPhrase}<br/><br/>
        配偶者の税軽減を使って今回は0円にできても、次の相続（二次相続）で子供たちに多額の税金がかかるケースが非常に多いです。<br/>
        <strong>トータルで数百万円損しない</strong>ためには、一次相続の時点での分割方法が鍵を握ります。<br/><br/>
        将来を見据えた最適な分割シミュレーションを無料で行います。
      `;
      cta = "二次相続まで含めて無料試算する";
      break;

    case 'cost': // 7. 専門家に頼むと費用が高そう
      title = "専門家報酬よりも、節税額の方が大きい場合があります";
      content = `
        ${taxPhrase}<br/><br/>
        「費用がもったいない」と自分で手続きをして、特例を使い忘れたり評価を間違えたりして、結果的に報酬以上の税金を払うことになる方が後を絶ちません。<br/>
        当事務所では、事前に<strong>「依頼した場合の費用」と「見込まれる節税効果」</strong>を明確にご提示します。<br/><br/>
        まずは見積もりを見てから判断してみませんか？
      `;
      cta = "費用対効果を無料で見積もる";
      break;

    case 'deadline': // 8. 相続発生後に期限まで終わるか不安
      title = "10ヶ月は意外とすぐに過ぎてしまいます";
      content = `
        ${taxPhrase}<br/><br/>
        相続税の申告期限は10ヶ月以内です。資料収集や遺産分割協議に時間がかかると、あっという間に期限が迫ります。<br/>
        期限を過ぎると、<strong>特例が使えなくなり税金が跳ね上がる</strong>リスクがあります。<br/><br/>
        最短スケジュールで間に合うかどうか、今の進捗状況を無料で診断します。
      `;
      cta = "スケジュール診断を無料で受ける";
      break;

    case 'preparation': // 9. 親が元気なうちに何を準備すべきかわからない
      title = "元気なうちだからこそ、打てる対策があります";
      content = `
        ${taxPhrase}<br/><br/>
        現状の資産規模（約${totalAssets.toLocaleString()}万円）であれば、生前贈与や生命保険の活用で、将来の税金を大幅に減らせる可能性があります。<br/>
        認知症になってからでは、ほとんどの対策ができなくなってしまいます。<br/><br/>
        <strong>今から始められる効果的な生前対策</strong>を無料でアドバイスします。
      `;
      cta = "生前対策の無料プランを見る";
      break;

    case 'remote': // 10. 家族が遠方・忙しくて手続きが進まない
      title = "集まらなくても、手続きは完結できます";
      content = `
        ${taxPhrase}<br/><br/>
        相続人が離れて暮らしていると、遺産分割協議書の押印ひとつ集めるのも大変です。<br/>
        当事務所では、郵送やオンラインを活用し、<strong>皆様が一堂に会さなくてもスムーズに完了する</strong>サポート体制を整えています。<br/><br/>
        遠方のご家族の負担を最小限にする進め方をご提案します。
      `;
      cta = "オンライン対応について相談する";
      break;

    default:
      title = "あなたの状況に合わせた最適なサポートを";
      content = `${taxPhrase}<br/><br/>相続の悩みは人それぞれです。当事務所では無料相談を行っています。`;
      cta = "無料相談を予約する";
  }

  return {
    title,
    message: React.createElement('span', { dangerouslySetInnerHTML: { __html: content } }),
    ctaText: cta
  };
};