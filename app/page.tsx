import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
            ELECTRONIC SYSTEM FOR
            <br />
            TRAVEL AUTHORIZATION
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90">
            米国渡航認証システム（ESTA）完全ガイド
          </p>
          <p className="text-lg mb-8 opacity-80">
            ビザ免除プログラム参加国からの米国渡航に必要な電子認証
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/application-guide"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg"
            >
              申請手順ガイド →
            </Link>
            <Link 
              href="/cost-comparison"
              className="bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition border-2 border-white"
            >
              費用を比較
            </Link>
          </div>
        </div>
      </section>

      {/* 重要な3つの情報（K-ETAスタイル） */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 申請対象 */}
            <div className="border-2 border-blue-100 rounded-lg p-6 hover:border-blue-300 transition">
              <div className="text-blue-600 text-3xl mb-3">👥</div>
              <h3 className="font-bold text-lg mb-3">申請対象</h3>
              <p className="text-gray-700 text-sm mb-4">
                米国にビザなしで入国可能な国の国民
              </p>
              <Link href="/who-needs-esta" className="text-blue-600 text-sm font-medium hover:underline">
                詳しく見る →
              </Link>
            </div>

            {/* 手数料 */}
            <div className="border-2 border-blue-100 rounded-lg p-6 hover:border-blue-300 transition">
              <div className="text-blue-600 text-3xl mb-3">💵</div>
              <h3 className="font-bold text-lg mb-3">手数料</h3>
              <p className="text-gray-700 text-sm mb-4">
                公式サイト: $21<br />
                代行サービス: $80-200
              </p>
              <Link href="/cost-comparison" className="text-blue-600 text-sm font-medium hover:underline">
                詳しく見る →
              </Link>
            </div>

            {/* 審査所要時間 */}
            <div className="border-2 border-blue-100 rounded-lg p-6 hover:border-blue-300 transition">
              <div className="text-blue-600 text-3xl mb-3">⏱️</div>
              <h3 className="font-bold text-lg mb-3">審査所要時間</h3>
              <p className="text-gray-700 text-sm mb-4">
                通常72時間以内<br />
                ほとんどは数分で承認
              </p>
              <Link href="/application-guide" className="text-blue-600 text-sm font-medium hover:underline">
                詳しく見る →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ESTAとは */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-montserrat font-bold text-3xl text-center mb-8">
            ESTAとは？
          </h2>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 mb-4">
              ESTA（Electronic System for Travel Authorization）は、米国への渡航を希望する
              ビザ免除プログラム（VWP）参加国の国民が、事前に渡航認証を取得するシステムです。
            </p>
            <p className="text-gray-700 mb-4">
              2009年に導入され、90日以内の観光・ビジネス目的での米国訪問に必要となります。
              オンラインで簡単に申請でき、承認されれば2年間有効です。
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
              <p className="text-sm text-gray-800">
                <strong>重要:</strong> ESTAは米国への入国を保証するものではありません。
                入国の可否は、米国到着時の入国審査官が最終的に判断します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3ステップ申請プロセス */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-montserrat font-bold text-3xl text-center mb-12">
            簡単3ステップで申請完了
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* ステップ1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-xl mb-3">フォーム記入</h3>
              <p className="text-gray-600">
                公式サイトでオンラインフォームに必要事項を入力。
                所要時間は約15-20分です。
              </p>
            </div>

            {/* ステップ2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-xl mb-3">支払い</h3>
              <p className="text-gray-600">
                クレジットカードまたはPayPalで$21を支払います。
              </p>
            </div>

            {/* ステップ3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-xl mb-3">承認待ち</h3>
              <p className="text-gray-600">
                ほとんどの場合、数分で承認されます。
                最長72時間かかる場合もあります。
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/application-guide"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition shadow-lg"
            >
              詳細な申請手順を見る →
            </Link>
          </div>
        </div>
      </section>

      {/* よくある3つの質問 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-montserrat font-bold text-3xl text-center mb-12">
            よくある質問
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {/* 質問1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg mb-3">Q: ESTAとビザの違いは何ですか？</h3>
              <p className="text-gray-700">
                A: ESTAは短期滞在（90日以内）の観光・ビジネス目的で、オンラインで申請できる電子認証です。
                費用は$21で、承認まで通常数分から72時間です。
                一方、ビザは長期滞在や就労目的で、大使館での面接が必要で、費用は$185以上、承認まで数週間から数ヶ月かかります。
              </p>
            </div>

            {/* 質問2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg mb-3">Q: 申請にどれくらい時間がかかりますか？</h3>
              <p className="text-gray-700">
                A: フォーム記入は約15-20分です。承認は通常数分で完了しますが、
                最長72時間かかる場合もあるため、渡航予定日の少なくとも72時間前には申請することをおすすめします。
              </p>
            </div>

            {/* 質問3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg mb-3">Q: ESTAが拒否されたらどうなりますか？</h3>
              <p className="text-gray-700">
                A: ESTAが拒否された場合、米国大使館でB-2観光ビザを申請する必要があります。
                $4の処理費は返金されませんが、$17の承認費は承認された場合のみ請求されます。
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link 
              href="/faq"
              className="text-blue-600 font-bold text-lg hover:underline"
            >
              すべてのFAQを見る →
            </Link>
          </div>
        </div>
      </section>

      {/* 詐欺サイト警告（K-ETAスタイル） */}
      <section className="py-12 bg-red-50 border-t-4 border-red-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 text-red-600 text-4xl">⚠️</div>
              <div>
                <h2 className="font-montserrat font-bold text-2xl text-red-900 mb-4">
                  詐欺サイトにご注意ください
                </h2>
                <p className="text-gray-800 mb-4">
                  ESTA申請は公式サイト（<strong>https://esta.cbp.dhs.gov</strong>）でのみ可能です。
                  申請手数料は$21です。
                </p>
                <p className="text-gray-800 mb-4">
                  ESTA申請代行（または優先受付）サービスを提供するという名目で
                  高額の手数料（$100以上）を騙し取る代行詐欺・フィッシングサイトにご注意ください。
                </p>
                <p className="text-gray-800">
                  代行サービスを利用する場合は、サービス内容と料金を十分にご確認の上、
                  ご自身の判断でご利用ください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-3xl mb-6">
            米国への渡航準備を始めましょう
          </h2>
          <p className="text-xl mb-8 opacity-90">
            詳しい申請手順や費用比較、よくある質問をご確認ください
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/application-guide"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg"
            >
              申請手順ガイド
            </Link>
            <Link 
              href="/cost-comparison"
              className="bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition border-2 border-white"
            >
              費用比較
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
