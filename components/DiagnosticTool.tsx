"use client";

import { useState } from "react";
import Link from "next/link";

export default function DiagnosticTool() {
  const [checks, setChecks] = useState({
    q1: false,
    q2: false,
    q3: false,
    q4: false,
  });

  const handleCheckChange = (question: keyof typeof checks) => {
    setChecks(prev => ({
      ...prev,
      [question]: !prev[question]
    }));
  };

  const checkedCount = Object.values(checks).filter(Boolean).length;
  
  const getRecommendation = () => {
    if (checkedCount >= 3) {
      return {
        result: "公式サイトでの申請をおすすめします",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-500",
        reason: "英語に自信があり、自分で手続きできる方には公式サイトが最もコストパフォーマンスが良い選択です。"
      };
    } else {
      return {
        result: "代行サービスの利用をおすすめします",
        color: "text-orange-600",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-500",
        reason: "サポートが必要な場合や英語に不安がある場合は、代行サービスの方が安心して申請できます。"
      };
    }
  };

  const recommendation = getRecommendation();

  return (
    <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-lg p-8">
      <h2 className="font-montserrat font-bold text-2xl mb-6 text-center">
        どちらを選ぶべきか？診断
      </h2>
      <div className="bg-white text-gray-800 rounded-lg p-6 space-y-4">
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <input 
              type="checkbox" 
              id="q1" 
              className="mt-1 w-4 h-4 cursor-pointer"
              checked={checks.q1}
              onChange={() => handleCheckChange('q1')}
            />
            <label htmlFor="q1" className="cursor-pointer">
              英語での入力に自信がある
            </label>
          </div>
          <div className="flex items-start space-x-3">
            <input 
              type="checkbox" 
              id="q2" 
              className="mt-1 w-4 h-4 cursor-pointer"
              checked={checks.q2}
              onChange={() => handleCheckChange('q2')}
            />
            <label htmlFor="q2" className="cursor-pointer">
              自分で手続きするのが好きだ
            </label>
          </div>
          <div className="flex items-start space-x-3">
            <input 
              type="checkbox" 
              id="q3" 
              className="mt-1 w-4 h-4 cursor-pointer"
              checked={checks.q3}
              onChange={() => handleCheckChange('q3')}
            />
            <label htmlFor="q3" className="cursor-pointer">
              費用を最小限に抑えたい
            </label>
          </div>
          <div className="flex items-start space-x-3">
            <input 
              type="checkbox" 
              id="q4" 
              className="mt-1 w-4 h-4 cursor-pointer"
              checked={checks.q4}
              onChange={() => handleCheckChange('q4')}
            />
            <label htmlFor="q4" className="cursor-pointer">
              記入ミスのリスクを理解している
            </label>
          </div>
        </div>
        
        <div className={`border-t pt-4 mt-4 ${recommendation.bgColor} ${recommendation.borderColor} border-l-4 p-4 rounded`}>
          <p className="text-sm text-gray-600 mb-2 font-medium">
            判定結果（チェック数: {checkedCount}/4）
          </p>
          <p className={`text-lg font-bold ${recommendation.color} mb-2`}>
            {recommendation.result}
          </p>
          <p className="text-sm text-gray-700">
            {recommendation.reason}
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-2">
            {checkedCount >= 3 ? (
              <>
                <a
                  href="https://esta.cbp.dhs.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition text-center"
                >
                  公式サイトで申請 →
                </a>
                <Link
                  href="/application-guide"
                  className="inline-block bg-white text-blue-600 border-2 border-blue-600 px-4 py-2 rounded text-sm font-medium hover:bg-blue-50 transition text-center"
                >
                  申請手順を確認
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/cost-comparison"
                  className="inline-block bg-orange-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-orange-700 transition text-center"
                >
                  代行サービスを比較 →
                </Link>
                <a
                  href="https://esta.cbp.dhs.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-orange-600 border-2 border-orange-600 px-4 py-2 rounded text-sm font-medium hover:bg-orange-50 transition text-center"
                >
                  公式サイトも見る
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
