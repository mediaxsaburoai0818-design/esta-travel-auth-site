import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* ロゴ */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-montserrat font-bold text-blue-600">
              ESTA GUIDE
            </div>
          </Link>

          {/* ナビゲーション */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition">
              トップ
            </Link>
            <Link href="/application-guide" className="text-gray-700 hover:text-blue-600 font-medium transition">
              申請手順
            </Link>
            <Link href="/cost-comparison" className="text-gray-700 hover:text-blue-600 font-medium transition">
              費用比較
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-blue-600 font-medium transition">
              よくある質問
            </Link>
          </nav>

          {/* 言語切替（将来実装） */}
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 border border-gray-300 rounded-md hover:border-blue-600 transition">
              🇯🇵 日本語
            </button>
          </div>
        </div>

        {/* モバイルメニュー */}
        <nav className="md:hidden mt-4 flex flex-col space-y-2">
          <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium py-2">
            トップ
          </Link>
          <Link href="/application-guide" className="text-gray-700 hover:text-blue-600 font-medium py-2">
            申請手順
          </Link>
          <Link href="/cost-comparison" className="text-gray-700 hover:text-blue-600 font-medium py-2">
            費用比較
          </Link>
          <Link href="/faq" className="text-gray-700 hover:text-blue-600 font-medium py-2">
            よくある質問
          </Link>
        </nav>
      </div>
    </header>
  );
}
