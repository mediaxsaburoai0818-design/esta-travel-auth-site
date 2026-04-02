import Link from "next/link";
import DiagnosticTool from "@/components/DiagnosticTool";

export const metadata = {
  title: "ESTA費用比較 - 公式サイト vs 代行サービス | ESTA Guide",
  description: "ESTA申請の費用を徹底比較。公式サイト$21と代行サービス$80-200の違い、どちらを選ぶべきかを詳しく解説します。",
  keywords: "ESTA費用, 料金比較, 代行サービス, 公式サイト, 手数料, コスト, 価格",
  openGraph: {
    title: "ESTA費用比較 - 公式サイト vs 代行サービス",
    description: "公式$21 vs 代行$80-200。メリット・デメリットと診断ツールで最適な選択を",
    type: "article",
  },
};

export default function CostComparisonPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* ページヘッダー */}
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="font-montserrat font-bold text-4xl mb-4">
            ESTA費用比較
          </h1>
          <p className="text-xl text-gray-600">
            公式サイトと代行サービスの費用・サービス内容を徹底比較
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* 費用比較表 */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="font-bold text-2xl mb-6 text-blue-600">
              料金比較表
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-blue-600">
                    <th className="text-left py-4 px-4 font-bold">項目</th>
                    <th className="text-center py-4 px-4 font-bold bg-blue-50">
                      公式サイト<br />
                      <span className="text-2xl text-blue-600">$21</span>
                    </th>
                    <th className="text-center py-4 px-4 font-bold">
                      代行サービスA<br />
                      <span className="text-2xl">$89</span>
                    </th>
                    <th className="text-center py-4 px-4 font-bold">
                      代行サービスB<br />
                      <span className="text-2xl">$149</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-4 px-4 font-medium">基本料金</td>
                    <td className="py-4 px-4 text-center bg-blue-50">$21</td>
                    <td className="py-4 px-4 text-center">$89</td>
                    <td className="py-4 px-4 text-center">$149</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium">言語対応</td>
                    <td className="py-4 px-4 text-center bg-blue-50">英語中心<br /><span className="text-xs">(日本語ガイドあり)</span></td>
                    <td className="py-4 px-4 text-center">日本語完全対応</td>
                    <td className="py-4 px-4 text-center">日本語完全対応</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium">サポート</td>
                    <td className="py-4 px-4 text-center bg-blue-50">なし</td>
                    <td className="py-4 px-4 text-center">メール対応<br /><span className="text-xs">(平日10-18時)</span></td>
                    <td className="py-4 px-4 text-center">24/7サポート<br /><span className="text-xs">(電話・チャット)</span></td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium">エラーチェック</td>
                    <td className="py-4 px-4 text-center bg-blue-50">自己責任</td>
                    <td className="py-4 px-4 text-center">✓ あり</td>
                    <td className="py-4 px-4 text-center">✓ あり</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium">返金保証</td>
                    <td className="py-4 px-4 text-center bg-blue-50">-</td>
                    <td className="py-4 px-4 text-center">拒否時返金<br /><span className="text-xs">(条件あり)</span></td>
                    <td className="py-4 px-4 text-center">拒否時全額返金</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium">修正対応</td>
                    <td className="py-4 px-4 text-center bg-blue-50">再申請が必要</td>
                    <td className="py-4 px-4 text-center">無料修正1回</td>
                    <td className="py-4 px-4 text-center">無料修正無制限</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 公式サイトの詳細 */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                $21
              </div>
              <h2 className="font-bold text-2xl text-blue-600">
                公式サイト（esta.cbp.dhs.gov）
              </h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg mb-2 flex items-center">
                  <span className="text-green-600 mr-2">✓</span> メリット
                </h3>
                <ul className="list-disc pl-10 space-y-1 text-gray-700">
                  <li>最も安い（$21のみ）</li>
                  <li>公式サイトの信頼性</li>
                  <li>直接申請できる</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-2 flex items-center">
                  <span className="text-red-600 mr-2">✗</span> デメリット
                </h3>
                <ul className="list-disc pl-10 space-y-1 text-gray-700">
                  <li>英語での入力が必要（日本語ガイドはあるが）</li>
                  <li>サポートがない（自己責任）</li>
                  <li>記入ミスがあっても修正できない</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <p className="text-sm text-gray-800">
                  <strong>こんな人におすすめ:</strong><br />
                  ・英語が得意な方<br />
                  ・自分で手続きしたい方<br />
                  ・費用を最小限に抑えたい方
                </p>
              </div>
            </div>
          </section>

          {/* 代行サービスの詳細 */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                $89-149
              </div>
              <h2 className="font-bold text-2xl text-orange-600">
                代行サービス
              </h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg mb-2 flex items-center">
                  <span className="text-green-600 mr-2">✓</span> メリット
                </h3>
                <ul className="list-disc pl-10 space-y-1 text-gray-700">
                  <li>日本語で完全サポート</li>
                  <li>エラーチェックで記入ミスを防止</li>
                  <li>返金保証がある（サービスによる）</li>
                  <li>24/7サポート（サービスによる）</li>
                  <li>修正対応が含まれる</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-2 flex items-center">
                  <span className="text-red-600 mr-2">✗</span> デメリット
                </h3>
                <ul className="list-disc pl-10 space-y-1 text-gray-700">
                  <li>公式サイトの4-7倍の費用</li>
                  <li>サービス内容が業者によって異なる</li>
                  <li>詐欺サイトに注意が必要</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                <p className="text-sm text-gray-800">
                  <strong>こんな人におすすめ:</strong><br />
                  ・英語が苦手な方<br />
                  ・手続きに不安がある方<br />
                  ・サポートが欲しい方<br />
                  ・時間がない方
                </p>
              </div>
            </div>
          </section>

          {/* 診断ツール */}
          <DiagnosticTool />

          {/* 詐欺サイト警告 */}
          <section className="bg-red-50 border-2 border-red-500 rounded-lg p-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 text-red-600 text-4xl">⚠️</div>
              <div>
                <h2 className="font-bold text-2xl text-red-900 mb-4">
                  詐欺サイトに注意してください
                </h2>
                <div className="space-y-3 text-gray-800">
                  <p>
                    代行サービスを利用する場合、以下の点に注意してください：
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>公式サイトを装った詐欺サイトが存在します</strong><br />
                      公式サイトは <strong>https://esta.cbp.dhs.gov</strong> のみです。
                    </li>
                    <li>
                      <strong>異常に高額な料金を請求するサイトは避けましょう</strong><br />
                      相場は$80-150です。$200以上は高すぎます。
                    </li>
                    <li>
                      <strong>会社情報を確認してください</strong><br />
                      住所、電話番号、運営会社名が明記されているか確認しましょう。
                    </li>
                    <li>
                      <strong>返金保証の条件を確認してください</strong><br />
                      「返金保証あり」と書いてあっても、条件が厳しい場合があります。
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* よくある質問 */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="font-bold text-2xl mb-6 text-blue-600">
              費用に関するよくある質問
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2">
                  Q: 拒否された場合、返金されますか？
                </h3>
                <p className="text-gray-700">
                  A: 公式サイトの場合、$4の処理費は返金されませんが、$17の承認費は承認された場合のみ請求されます。
                  代行サービスの場合、返金保証があるかどうかはサービスによって異なります。
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-2">
                  Q: クレジットカードがない場合は？
                </h3>
                <p className="text-gray-700">
                  A: 公式サイトではPayPalも利用できます。代行サービスの場合、銀行振込やコンビニ払いに対応している場合もあります。
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-2">
                  Q: グループで申請すると安くなりますか？
                </h3>
                <p className="text-gray-700">
                  A: 公式サイトでは割引はありません（1人$21）。代行サービスの一部では、グループ割引を提供している場合があります。
                </p>
              </div>
            </div>
          </section>

          {/* 次のステップ */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 text-center">
            <h2 className="font-montserrat font-bold text-2xl mb-4">
              申請の準備はできましたか？
            </h2>
            <p className="mb-6 opacity-90">
              申請手順ガイドで詳しい手順を確認しましょう
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Link 
                href="/application-guide"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
              >
                申請手順ガイド
              </Link>
              <Link 
                href="/faq"
                className="bg-blue-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800 transition border-2 border-white"
              >
                FAQ
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
