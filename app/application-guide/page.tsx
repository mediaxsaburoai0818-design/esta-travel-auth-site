import Link from "next/link";

export const metadata = {
  title: "ESTA申請手順ガイド - ステップバイステップで解説 | ESTA Guide",
  description: "米国ESTA申請の詳細な手順をスクリーンショット付きで解説。申請前の準備から承認までの全ステップを網羅した完全ガイドです。",
  keywords: "ESTA申請, 申請手順, 申請方法, 記入方法, パスポート, 手続き, ステップガイド",
  openGraph: {
    title: "ESTA申請手順ガイド - ステップバイステップで解説",
    description: "米国ESTA申請の詳細な手順を8ステップで解説。よくある記入ミスも紹介",
    type: "article",
  },
};

export default function ApplicationGuidePage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* ページヘッダー */}
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="font-montserrat font-bold text-4xl mb-4">
            ESTA申請手順ガイド
          </h1>
          <p className="text-xl text-gray-600">
            公式サイトでのESTA申請方法を、ステップバイステップで詳しく解説します。
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* 申請前の準備 */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="font-bold text-2xl mb-6 text-blue-600">
              申請前の準備
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg mb-2">必要なもの</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>有効なパスポート（渡航予定日から6ヶ月以上有効期限があるもの）</li>
                  <li>クレジットカードまたはPayPal（支払い用）</li>
                  <li>メールアドレス（確認通知受信用）</li>
                  <li>渡航情報（滞在先住所など）</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">所要時間</h3>
                <p className="text-gray-700">
                  フォーム記入: 約15-20分<br />
                  承認待ち: 数分〜最長72時間
                </p>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <p className="text-sm text-gray-800">
                  <strong>重要:</strong> 渡航予定日の少なくとも72時間前には申請を完了させることをおすすめします。
                </p>
              </div>
            </div>
          </section>

          {/* ステップ1 */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div>
                <h2 className="font-bold text-2xl text-blue-600">
                  公式サイトへアクセス
                </h2>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700">
                公式URL: 
                <a 
                  href="https://esta.cbp.dhs.gov" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800 ml-2"
                >
                  https://esta.cbp.dhs.gov
                </a>
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <p className="text-sm text-gray-800">
                  <strong>詐欺サイトに注意!</strong> 公式サイト以外のURLで高額な料金を請求するサイトは詐欺の可能性があります。
                  必ず上記の公式URLから申請してください。
                </p>
              </div>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                <li>公式サイト（esta.cbp.dhs.gov）にアクセス</li>
                <li>トップページで「新規の申請」ボタンをクリック</li>
                <li>言語を選択（日本語対応）</li>
              </ol>
            </div>
          </section>

          {/* ステップ2 */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div>
                <h2 className="font-bold text-2xl text-blue-600">
                  個人情報の入力
                </h2>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700">
                パスポート通りに正確に入力してください。1文字でも間違えると拒否される可能性があります。
              </p>
              <div className="bg-blue-50 p-4 rounded">
                <h3 className="font-bold mb-2">入力項目:</h3>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                  <li>姓名（パスポート記載通り）</li>
                  <li>生年月日</li>
                  <li>出生地</li>
                  <li>国籍</li>
                  <li>性別</li>
                </ul>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <p className="text-sm text-gray-800">
                  <strong>ヒント:</strong> パスポートを手元に用意し、見ながら入力すると間違いを防げます。
                </p>
              </div>
            </div>
          </section>

          {/* ステップ3 */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div>
                <h2 className="font-bold text-2xl text-blue-600">
                  パスポート情報
                </h2>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded">
                <h3 className="font-bold mb-2">入力項目:</h3>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                  <li>パスポート番号</li>
                  <li>発行日</li>
                  <li>有効期限日</li>
                  <li>発行国（日本）</li>
                </ul>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <p className="text-sm text-gray-800">
                  <strong>重要:</strong> パスポートの有効期限は、米国出国予定日から6ヶ月以上残っている必要があります。
                </p>
              </div>
            </div>
          </section>

          {/* ステップ4 */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                4
              </div>
              <div>
                <h2 className="font-bold text-2xl text-blue-600">
                  連絡先情報
                </h2>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded">
                <h3 className="font-bold mb-2">入力項目:</h3>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                  <li>現住所（日本の住所）</li>
                  <li>電話番号（国際形式: +81から始まる）</li>
                  <li>メールアドレス</li>
                </ul>
              </div>
              <p className="text-gray-700 text-sm">
                住所の入力形式:<br />
                例: 1-1-1 Chiyoda, Chiyoda-ku, Tokyo 100-0001, Japan
              </p>
            </div>
          </section>

          {/* ステップ5 */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                5
              </div>
              <div>
                <h2 className="font-bold text-2xl text-blue-600">
                  渡航情報
                </h2>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded">
                <h3 className="font-bold mb-2">入力項目:</h3>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                  <li>渡航予定日（未定の場合は大まかな予定日）</li>
                  <li>米国での滞在先住所（ホテル名と住所）</li>
                  <li>緊急連絡先（米国内）</li>
                </ul>
              </div>
              <p className="text-gray-700 text-sm">
                滞在先が未定の場合は、「UNKNOWN」と入力できます。
              </p>
            </div>
          </section>

          {/* ステップ6 */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                6
              </div>
              <div>
                <h2 className="font-bold text-2xl text-blue-600">
                  適格性に関する質問
                </h2>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700">
                9つのYES/NO質問に答えます。これらの質問は非常に重要で、正直に答える必要があります。
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <p className="text-sm text-gray-800">
                  <strong>警告:</strong> 虚偽の申告をすると、米国への永久入国禁止になる可能性があります。
                  必ず正直に答えてください。
                </p>
              </div>
              <div className="space-y-3 text-sm text-gray-700">
                <p><strong>質問例:</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>伝染病や精神疾患がありますか？</li>
                  <li>犯罪歴がありますか？</li>
                  <li>麻薬の使用または所持の経歴がありますか？</li>
                  <li>テロ活動に関与したことがありますか？</li>
                  <li>過去に米国ビザが拒否されたことがありますか？</li>
                </ul>
                <p className="mt-3">
                  <strong>ほとんどの人は全て「NO」と答えます。</strong>
                  交通違反（スピード違反、駐車違反）は該当しません。
                </p>
              </div>
            </div>
          </section>

          {/* ステップ7 */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                7
              </div>
              <div>
                <h2 className="font-bold text-2xl text-blue-600">
                  確認と支払い
                </h2>
              </div>
            </div>
            <div className="space-y-4">
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                <li>すべての入力内容を確認</li>
                <li>間違いがないか慎重にチェック</li>
                <li>利用規約に同意</li>
                <li>支払いページへ進む</li>
                <li>クレジットカードまたはPayPalで$21を支払う</li>
              </ol>
              <div className="bg-blue-50 p-4 rounded">
                <h3 className="font-bold mb-2">支払い詳細:</h3>
                <p className="text-gray-700 text-sm">
                  料金: $21<br />
                  内訳: 申請処理費$4 + 承認費$17<br />
                  支払い方法: Visa、Mastercard、Amex、PayPal
                </p>
              </div>
            </div>
          </section>

          {/* ステップ8 */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                8
              </div>
              <div>
                <h2 className="font-bold text-2xl text-blue-600">
                  承認待ち
                </h2>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700">
                申請が完了すると、申請番号が発行されます。この番号を必ず控えてください。
              </p>
              <div className="bg-green-50 p-4 rounded">
                <h3 className="font-bold mb-2">承認までの流れ:</h3>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                  <li><strong>ほとんどの場合:</strong> 数分で承認</li>
                  <li><strong>審査中:</strong> 72時間以内に結果が出ます</li>
                  <li><strong>メール通知:</strong> 承認されるとメールが届きます</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h3 className="font-bold mb-2">ステータス確認方法:</h3>
                <ol className="list-decimal pl-6 space-y-1 text-gray-700 text-sm">
                  <li>公式サイトにアクセス</li>
                  <li>「申請状況の確認」をクリック</li>
                  <li>申請番号とパスポート情報を入力</li>
                </ol>
              </div>
            </div>
          </section>

          {/* よくある記入ミス */}
          <section className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-8">
            <h2 className="font-bold text-2xl mb-6 text-yellow-900">
              ⚠️ よくある記入ミス TOP5
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg mb-1">1. 名前のスペルミス</h3>
                <p className="text-gray-800 text-sm">
                  パスポートと1文字でも違うと拒否されます。必ずパスポートを見ながら入力してください。
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">2. パスポート番号の間違い</h3>
                <p className="text-gray-800 text-sm">
                  「0（ゼロ）」と「O（オー）」を間違えやすいので注意。
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">3. 国民ID番号の入力</h3>
                <p className="text-gray-800 text-sm">
                  日本にはない制度なので、「該当なし」を選択してください。
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">4. 住所の記入形式</h3>
                <p className="text-gray-800 text-sm">
                  米国形式ではなく、日本の住所をローマ字で記入すればOKです。
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">5. 適格性質問への誤回答</h3>
                <p className="text-gray-800 text-sm">
                  よく読まずに回答すると、誤って「YES」を選んでしまうことがあります。
                  慎重に読んでください。
                </p>
              </div>
            </div>
          </section>

          {/* 次のステップ */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 text-center">
            <h2 className="font-montserrat font-bold text-2xl mb-4">
              さらに詳しい情報
            </h2>
            <p className="mb-6 opacity-90">
              費用比較やよくある質問もご確認ください
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Link 
                href="/cost-comparison"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
              >
                費用を比較
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
