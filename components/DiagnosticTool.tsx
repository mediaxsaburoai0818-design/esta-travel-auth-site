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
        result: "Zalecamy zlozenie wniosku na oficjalnej stronie",
        color: "text-[#2b6cb0]",
        bgColor: "bg-[#ebf4ff]",
        borderColor: "border-[#2b6cb0]",
        reason: "Dla osob bieglych w angielskim, ktore chca samodzielnie zalatwic formalnosci, oficjalna strona jest najbardziej oplacalnym wyborem."
      };
    } else {
      return {
        result: "Zalecamy skorzystanie z uslug posrednika",
        color: "text-[#d69e2e]",
        bgColor: "bg-amber-50",
        borderColor: "border-[#d69e2e]",
        reason: "Jesli potrzebujesz wsparcia lub nie czujesz sie pewnie z angielskim, usluga posrednika zapewni Ci spokojne przejscie przez procedure."
      };
    }
  };

  const recommendation = getRecommendation();

  return (
    <div className="bg-gradient-to-br from-[#0f2440] via-[#1a365d] to-[#234681] text-white rounded-xl p-8 shadow-lg">
      <div className="text-center mb-6">
        <h2 className="font-montserrat font-bold text-2xl mb-2">
          Co wybrac? Sprawdz!
        </h2>
        <p className="text-blue-200 text-sm">Odpowiedz na pytania, aby uzyskac rekomendacje</p>
      </div>
      <div className="bg-white text-gray-800 rounded-lg p-6 space-y-4">
        <div className="space-y-3">
          {[
            { id: "q1" as const, label: "Czuje sie pewnie, wypelniajac formularze po angielsku" },
            { id: "q2" as const, label: "Wole samodzielnie zalatiwac formalnosci" },
            { id: "q3" as const, label: "Chce zminimalizowac koszty" },
            { id: "q4" as const, label: "Rozumiem ryzyko bledu przy samodzielnym wypelnianiu" },
          ].map((item) => (
            <div key={item.id} className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50 transition">
              <input
                type="checkbox"
                id={item.id}
                className="mt-1 w-5 h-5 cursor-pointer accent-[#2b6cb0] rounded"
                checked={checks[item.id]}
                onChange={() => handleCheckChange(item.id)}
              />
              <label htmlFor={item.id} className="cursor-pointer text-gray-700">
                {item.label}
              </label>
            </div>
          ))}
        </div>

        <div className={`border-t pt-4 mt-4 ${recommendation.bgColor} ${recommendation.borderColor} border-l-4 p-4 rounded-r-lg`}>
          <p className="text-sm text-gray-500 mb-2 font-medium">
            Wynik (zaznaczono: {checkedCount}/4)
          </p>
          <p className={`text-lg font-bold ${recommendation.color} mb-2`}>
            {recommendation.result}
          </p>
          <p className="text-sm text-gray-600">
            {recommendation.reason}
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-2">
            {checkedCount >= 3 ? (
              <>
                <a
                  href="https://esta.cbp.dhs.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#1a365d] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#234681] transition text-center"
                >
                  Zloz wniosek na oficjalnej stronie
                </a>
                <Link
                  href="/application-guide"
                  className="inline-block bg-white text-[#1a365d] border-2 border-[#1a365d] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#ebf4ff] transition text-center"
                >
                  Sprawdz procedure
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/cost-comparison"
                  className="inline-block bg-[#d69e2e] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#b7791f] transition text-center"
                >
                  Porownaj uslugi posrednikow
                </Link>
                <a
                  href="https://esta.cbp.dhs.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-[#d69e2e] border-2 border-[#d69e2e] px-4 py-2 rounded-lg text-sm font-medium hover:bg-amber-50 transition text-center"
                >
                  Zobacz oficjalna strone
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
