import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* 免責事項 */}
      <div className="bg-orange-100 border-t-4 border-orange-500 py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 text-orange-600 text-2xl">⚠️</div>
            <div className="text-sm text-gray-800">
              <p className="font-bold text-gray-900 mb-2">重要な免責事項</p>
              <p>
                本サイトは、米国政府公式サイト（
                <a 
                  href="https://esta.cbp.dhs.gov" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  esta.cbp.dhs.gov
                </a>
                ）とは一切関係がありません。
                ESTA渡航認証に関する情報提供を目的としたガイドサイトです。
                公式サイトでの申請費用は$21です。代行サービスを利用する場合は、サービス内容と料金を十分にご確認ください。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* フッターメイン */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* サイト情報 */}
          <div>
            <h3 className="text-white font-montserrat font-bold text-lg mb-4">ESTA GUIDE</h3>
            <p className="text-sm mb-4">
              米国渡航認証システム（ESTA）に関する包括的なガイドサイトです。
              申請方法から費用比較まで、必要な情報をすべて提供します。
            </p>
          </div>

          {/* クイックリンク */}
          <div>
            <h3 className="text-white font-semibold mb-4">クイックリンク</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  トップページ
                </Link>
              </li>
              <li>
                <Link href="/application-guide" className="hover:text-white transition">
                  申請手順ガイド
                </Link>
              </li>
              <li>
                <Link href="/cost-comparison" className="hover:text-white transition">
                  費用比較
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition">
                  よくある質問
                </Link>
              </li>
            </ul>
          </div>

          {/* 公式リンク */}
          <div>
            <h3 className="text-white font-semibold mb-4">公式サイト</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://esta.cbp.dhs.gov" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  米国公式ESTA申請サイト ↗
                </a>
              </li>
              <li>
                <a 
                  href="https://jp.usembassy.gov/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  在日米国大使館 ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* コピーライト */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <p className="text-sm text-center">
            © {new Date().getFullYear()} ESTA Guide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
