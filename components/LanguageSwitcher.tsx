"use client";

import { useState } from "react";

// 将来的に多言語対応する際に使用するコンポーネント
export default function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState("ja");

  const languages = [
    { code: "ja", label: "🇯🇵 日本語", flag: "🇯🇵" },
    { code: "pl", label: "🇵🇱 Polski", flag: "🇵🇱" },
    { code: "sv", label: "🇸🇪 Svenska", flag: "🇸🇪" },
    { code: "de", label: "🇩🇪 Deutsch", flag: "🇩🇪" },
    { code: "fr", label: "🇫🇷 Français", flag: "🇫🇷" },
    { code: "en", label: "🇺🇸 English", flag: "🇺🇸" },
  ];

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode);
    // 実際の実装では、ここでルーティングを行う
    // 例: router.push(`/${langCode}/`)
    console.log(`Language changed to: ${langCode}`);
  };

  return (
    <div className="relative group">
      <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 border border-gray-300 rounded-md hover:border-blue-600 transition">
        {languages.find(l => l.code === currentLang)?.flag} {languages.find(l => l.code === currentLang)?.label.split(' ')[1]}
      </button>
      
      {/* ドロップダウンメニュー（ホバーで表示） */}
      <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition ${
              currentLang === lang.code ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
            }`}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
}
