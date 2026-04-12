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
        result: "Zalecamy złożenie wniosku na oficjalnej stronie",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-500",
        reason: "Dla osób biegłych w angielskim, które chcą samodzielnie załatwić formalności, oficjalna strona jest najbardziej opłacalnym wyborem."
      };
    } else {
      return {
        result: "Zalecamy skorzystanie z usług pośrednika",
        color: "text-orange-600",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-500",
        reason: "Jeśli potrzebujesz wsparcia lub nie czujesz się pewnie z angielskim, usługa pośrednika zapewni Ci spokojne przejście przez procedurę."
      };
    }
  };

  const recommendation = getRecommendation();

  return (
    <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-lg p-8">
      <h2 className="font-montserrat font-bold text-2xl mb-6 text-center">
        Co wybrać? Sprawdź!
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
              Czuję się pewnie, wypełniając formularze po angielsku
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
              Wolę samodzielnie załatwiać formalności
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
              Chcę zminimalizować koszty
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
              Rozumiem ryzyko błędu przy samodzielnym wypełnianiu
            </label>
          </div>
        </div>

        <div className={`border-t pt-4 mt-4 ${recommendation.bgColor} ${recommendation.borderColor} border-l-4 p-4 rounded`}>
          <p className="text-sm text-gray-600 mb-2 font-medium">
            Wynik (zaznaczono: {checkedCount}/4)
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
                  Złóż wniosek na oficjalnej stronie →
                </a>
                <Link
                  href="/application-guide"
                  className="inline-block bg-white text-blue-600 border-2 border-blue-600 px-4 py-2 rounded text-sm font-medium hover:bg-blue-50 transition text-center"
                >
                  Sprawdź procedurę
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/cost-comparison"
                  className="inline-block bg-orange-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-orange-700 transition text-center"
                >
                  Porównaj usługi pośredników →
                </Link>
                <a
                  href="https://esta.cbp.dhs.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-orange-600 border-2 border-orange-600 px-4 py-2 rounded text-sm font-medium hover:bg-orange-50 transition text-center"
                >
                  Zobacz oficjalną stronę
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
