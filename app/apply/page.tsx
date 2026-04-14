"use client";

import { useState } from "react";
import Link from "next/link";

interface FormData {
  // Step 1: Passport
  passportNumber: string;
  issuingCountry: string;
  issueDate: string;
  expirationDate: string;
  citizenship: string;
  lastName: string;
  firstName: string;
  birthDate: string;
  birthCity: string;
  birthCountry: string;
  gender: string;
  // Step 2: Personal
  otherNames: string;
  dualCitizenship: string;
  dualCitizenshipCountry: string;
  otherPassport: string;
  fatherLastName: string;
  fatherFirstName: string;
  motherLastName: string;
  motherFirstName: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  stateProvince: string;
  country: string;
  zipCode: string;
  // Step 3: Employment
  occupation: string;
  employerName: string;
  employerAddress: string;
  employerPhone: string;
  jobTitle: string;
  // Step 4: Travel
  usContactName: string;
  usContactAddress: string;
  usContactPhone: string;
  usStayAddress: string;
  emergencyName: string;
  emergencyPhone: string;
  flightNumber: string;
  arrivalCity: string;
  // Step 5: Eligibility
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
  q6: string;
  q7: string;
  q8: string;
  q9: string;
  // Step 6: Documents (UI only)
  passportPhoto: string;
  idPhoto: string;
}

const initialFormData: FormData = {
  passportNumber: "",
  issuingCountry: "",
  issueDate: "",
  expirationDate: "",
  citizenship: "",
  lastName: "",
  firstName: "",
  birthDate: "",
  birthCity: "",
  birthCountry: "",
  gender: "",
  otherNames: "",
  dualCitizenship: "",
  dualCitizenshipCountry: "",
  otherPassport: "",
  fatherLastName: "",
  fatherFirstName: "",
  motherLastName: "",
  motherFirstName: "",
  email: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  stateProvince: "",
  country: "",
  zipCode: "",
  occupation: "",
  employerName: "",
  employerAddress: "",
  employerPhone: "",
  jobTitle: "",
  usContactName: "",
  usContactAddress: "",
  usContactPhone: "",
  usStayAddress: "",
  emergencyName: "",
  emergencyPhone: "",
  flightNumber: "",
  arrivalCity: "",
  q1: "",
  q2: "",
  q3: "",
  q4: "",
  q5: "",
  q6: "",
  q7: "",
  q8: "",
  q9: "",
  passportPhoto: "",
  idPhoto: "",
};

const stepTitles = [
  "Dane paszportowe",
  "Dane osobowe",
  "Zatrudnienie",
  "Informacje o podrozy",
  "Pytania kwalifikacyjne",
  "Dokumenty",
  "Potwierdzenie",
];

const eligibilityQuestions = [
  "Czy masz lub miałeś(aś) zaburzenie fizyczne lub psychiczne, lub jesteś uzależniony(a) od narkotyków, lub jesteś aktualnie chory(a) na chorobę zakaźną?",
  "Czy zostałeś(aś) kiedykolwiek aresztowany(a) lub skazany(a) za przestępstwo związane z zepsuciem moralnym, lub za naruszenie prawa dotyczącego substancji kontrolowanych?",
  "Czy zostałeś(aś) kiedykolwiek aresztowany(a) lub skazany(a) za dwa lub więcej przestępstw, za które łączna kara wyniosła 5 lat pozbawienia wolności lub więcej?",
  "Czy próbujesz wjechać do USA w celu prowadzenia działalności związanej z szpiegostwem, sabotażem, eksportem towarów objętych kontrolą lub inną nielegalną działalnością?",
  "Czy próbujesz wjechać do USA w celu prowadzenia działalności terrorystycznej lub byłeś(aś) zaangażowany(a) w działalność terrorystyczną?",
  "Czy próbujesz wjechać do USA w celu oszustwa lub świadomego i umyślnego wprowadzenia w błąd w celu uzyskania wizy lub wjazdu do USA?",
  "Czy zostałeś(aś) kiedykolwiek deportowany(a) z USA lub próbowałeś(aś) uzyskać wjazd na granicy USA w sposób niezgodny z prawem?",
  "Czy przebywałeś(aś) w USA ponad okres dozwolony przez urząd imigracyjny?",
  "Czy podróżowałeś(aś) do Iraku, Syrii, Iranu, Sudanu, Libii, Somalii lub Jemenu od 1 marca 2011 roku?",
];

export default function ApplyPage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [agreed, setAgreed] = useState(false);

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step < stepTitles.length - 1) setStep(step + 1);
  };
  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = () => {
    if (typeof window !== "undefined") {
      window.location.href = "/apply/complete/";
    }
  };

  const inputClass =
    "w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#1a365d] focus:ring-1 focus:ring-[#1a365d] transition";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";
  const selectClass =
    "w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#1a365d] bg-white";

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1
        className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-2"
        style={{ fontFamily: "var(--font-noto-serif), serif" }}
      >
        Wniosek ESTA
      </h1>
      <p className="text-gray-500 text-sm mb-8">
        Wypelnij formularz ponizej. Wszystkie pola oznaczone * sa wymagane.
      </p>

      {/* Step indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          {stepTitles.map((title, i) => (
            <div key={i} className="flex flex-col items-center flex-1">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition ${
                  i === step
                    ? "bg-[#1a365d] text-white"
                    : i < step
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {i < step ? "\u2713" : i + 1}
              </div>
              <span className="text-[10px] text-gray-500 mt-1 hidden md:block text-center">
                {title}
              </span>
            </div>
          ))}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div
            className="bg-[#1a365d] h-1.5 rounded-full transition-all"
            style={{
              width: `${(step / (stepTitles.length - 1)) * 100}%`,
            }}
          />
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded p-6 md:p-8">
        <h2 className="text-xl font-bold text-[#1a365d] mb-6">
          {stepTitles[step]}
        </h2>

        {/* Step 1: Passport */}
        {step === 0 && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Numer paszportu *</label>
                <input
                  type="text"
                  className={inputClass}
                  value={formData.passportNumber}
                  onChange={(e) => updateField("passportNumber", e.target.value)}
                  placeholder="np. AB1234567"
                />
              </div>
              <div>
                <label className={labelClass}>Kraj wydania *</label>
                <input
                  type="text"
                  className={inputClass}
                  value={formData.issuingCountry}
                  onChange={(e) => updateField("issuingCountry", e.target.value)}
                  placeholder="np. Polska"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Data wydania *</label>
                <input
                  type="date"
                  className={inputClass}
                  value={formData.issueDate}
                  onChange={(e) => updateField("issueDate", e.target.value)}
                />
              </div>
              <div>
                <label className={labelClass}>Data waznosci *</label>
                <input
                  type="date"
                  className={inputClass}
                  value={formData.expirationDate}
                  onChange={(e) =>
                    updateField("expirationDate", e.target.value)
                  }
                />
              </div>
            </div>
            <div>
              <label className={labelClass}>Obywatelstwo *</label>
              <input
                type="text"
                className={inputClass}
                value={formData.citizenship}
                onChange={(e) => updateField("citizenship", e.target.value)}
                placeholder="np. Polska"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Nazwisko *</label>
                <input
                  type="text"
                  className={inputClass}
                  value={formData.lastName}
                  onChange={(e) => updateField("lastName", e.target.value)}
                />
              </div>
              <div>
                <label className={labelClass}>Imie (imiona) *</label>
                <input
                  type="text"
                  className={inputClass}
                  value={formData.firstName}
                  onChange={(e) => updateField("firstName", e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className={labelClass}>Data urodzenia *</label>
                <input
                  type="date"
                  className={inputClass}
                  value={formData.birthDate}
                  onChange={(e) => updateField("birthDate", e.target.value)}
                />
              </div>
              <div>
                <label className={labelClass}>Miasto urodzenia *</label>
                <input
                  type="text"
                  className={inputClass}
                  value={formData.birthCity}
                  onChange={(e) => updateField("birthCity", e.target.value)}
                />
              </div>
              <div>
                <label className={labelClass}>Kraj urodzenia *</label>
                <input
                  type="text"
                  className={inputClass}
                  value={formData.birthCountry}
                  onChange={(e) => updateField("birthCountry", e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className={labelClass}>Plec *</label>
              <select
                className={selectClass}
                value={formData.gender}
                onChange={(e) => updateField("gender", e.target.value)}
              >
                <option value="">Wybierz...</option>
                <option value="M">Mezczyzna</option>
                <option value="F">Kobieta</option>
              </select>
            </div>
          </div>
        )}

        {/* Step 2: Personal Info */}
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <label className={labelClass}>
                Inne uzywane nazwiska / pseudonimy
              </label>
              <input
                type="text"
                className={inputClass}
                value={formData.otherNames}
                onChange={(e) => updateField("otherNames", e.target.value)}
                placeholder="Jesli nie dotyczy, pozostaw puste"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Podwojne obywatelstwo?</label>
                <select
                  className={selectClass}
                  value={formData.dualCitizenship}
                  onChange={(e) =>
                    updateField("dualCitizenship", e.target.value)
                  }
                >
                  <option value="">Wybierz...</option>
                  <option value="tak">Tak</option>
                  <option value="nie">Nie</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>
                  Kraj drugiego obywatelstwa
                </label>
                <input
                  type="text"
                  className={inputClass}
                  value={formData.dualCitizenshipCountry}
                  onChange={(e) =>
                    updateField("dualCitizenshipCountry", e.target.value)
                  }
                />
              </div>
            </div>
            <div>
              <label className={labelClass}>
                Czy posiadasz paszport innego kraju?
              </label>
              <select
                className={selectClass}
                value={formData.otherPassport}
                onChange={(e) => updateField("otherPassport", e.target.value)}
              >
                <option value="">Wybierz...</option>
                <option value="tak">Tak</option>
                <option value="nie">Nie</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Nazwisko ojca</label>
                <input
                  type="text"
                  className={inputClass}
                  value={formData.fatherLastName}
                  onChange={(e) =>
                    updateField("fatherLastName", e.target.value)
                  }
                />
              </div>
              <div>
                <label className={labelClass}>Imie ojca</label>
                <input
                  type="text"
                  className={inputClass}
                  value={formData.fatherFirstName}
                  onChange={(e) =>
                    updateField("fatherFirstName", e.target.value)
                  }
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Nazwisko matki</label>
                <input
                  type="text"
                  className={inputClass}
                  value={formData.motherLastName}
                  onChange={(e) =>
                    updateField("motherLastName", e.target.value)
                  }
                />
              </div>
              <div>
                <label className={labelClass}>Imie matki</label>
                <input
                  type="text"
                  className={inputClass}
                  value={formData.motherFirstName}
                  onChange={(e) =>
                    updateField("motherFirstName", e.target.value)
                  }
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Adres e-mail *</label>
                <input
                  type="email"
                  className={inputClass}
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                />
              </div>
              <div>
                <label className={labelClass}>Numer telefonu *</label>
                <input
                  type="tel"
                  className={inputClass}
                  value={formData.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  placeholder="+48 ..."
                />
              </div>
            </div>
            <div>
              <label className={labelClass}>Adres zamieszkania (linia 1) *</label>
              <input
                type="text"
                className={inputClass}
                value={formData.addressLine1}
                onChange={(e) => updateField("addressLine1", e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>Adres zamieszkania (linia 2)</label>
              <input
                type="text"
                className={inputClass}
                value={formData.addressLine2}
                onChange={(e) => updateField("addressLine2", e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className={labelClass}>Miasto *</label>
                <input
                  type="text"
                  className={inputClass}
                  value={formData.city}
                  onChange={(e) => updateField("city", e.target.value)}
                />
              </div>
              <div>
                <label className={labelClass}>Wojewodztwo</label>
                <input
                  type="text"
                  className={inputClass}
                  value={formData.stateProvince}
                  onChange={(e) => updateField("stateProvince", e.target.value)}
                />
              </div>
              <div>
                <label className={labelClass}>Kod pocztowy *</label>
                <input
                  type="text"
                  className={inputClass}
                  value={formData.zipCode}
                  onChange={(e) => updateField("zipCode", e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className={labelClass}>Kraj *</label>
              <input
                type="text"
                className={inputClass}
                value={formData.country}
                onChange={(e) => updateField("country", e.target.value)}
                placeholder="np. Polska"
              />
            </div>
          </div>
        )}

        {/* Step 3: Employment */}
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label className={labelClass}>Zawod / status *</label>
              <select
                className={selectClass}
                value={formData.occupation}
                onChange={(e) => updateField("occupation", e.target.value)}
              >
                <option value="">Wybierz...</option>
                <option value="employed">Zatrudniony(a)</option>
                <option value="self-employed">Samozatrudniony(a)</option>
                <option value="student">Student(ka)</option>
                <option value="retired">Emeryt(ka)</option>
                <option value="unemployed">Bezrobotny(a)</option>
                <option value="other">Inny</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Nazwa pracodawcy / firmy</label>
              <input
                type="text"
                className={inputClass}
                value={formData.employerName}
                onChange={(e) => updateField("employerName", e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>Adres pracodawcy</label>
              <input
                type="text"
                className={inputClass}
                value={formData.employerAddress}
                onChange={(e) =>
                  updateField("employerAddress", e.target.value)
                }
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Telefon pracodawcy</label>
                <input
                  type="tel"
                  className={inputClass}
                  value={formData.employerPhone}
                  onChange={(e) =>
                    updateField("employerPhone", e.target.value)
                  }
                />
              </div>
              <div>
                <label className={labelClass}>Stanowisko</label>
                <input
                  type="text"
                  className={inputClass}
                  value={formData.jobTitle}
                  onChange={(e) => updateField("jobTitle", e.target.value)}
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Travel Info */}
        {step === 3 && (
          <div className="space-y-4">
            <h3 className="font-bold text-[#1a365d] text-sm border-b border-gray-200 pb-2">
              Osoba kontaktowa w USA
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>
                  Nazwa / nazwisko kontaktu w USA *
                </label>
                <input
                  type="text"
                  className={inputClass}
                  value={formData.usContactName}
                  onChange={(e) =>
                    updateField("usContactName", e.target.value)
                  }
                  placeholder="np. Hilton Hotel"
                />
              </div>
              <div>
                <label className={labelClass}>Telefon kontaktu w USA</label>
                <input
                  type="tel"
                  className={inputClass}
                  value={formData.usContactPhone}
                  onChange={(e) =>
                    updateField("usContactPhone", e.target.value)
                  }
                />
              </div>
            </div>
            <div>
              <label className={labelClass}>Adres kontaktu w USA *</label>
              <input
                type="text"
                className={inputClass}
                value={formData.usContactAddress}
                onChange={(e) =>
                  updateField("usContactAddress", e.target.value)
                }
              />
            </div>
            <div>
              <label className={labelClass}>
                Adres pobytu w USA (jesli inny) *
              </label>
              <input
                type="text"
                className={inputClass}
                value={formData.usStayAddress}
                onChange={(e) => updateField("usStayAddress", e.target.value)}
              />
            </div>

            <h3 className="font-bold text-[#1a365d] text-sm border-b border-gray-200 pb-2 pt-4">
              Kontakt alarmowy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>
                  Imie i nazwisko kontaktu alarmowego *
                </label>
                <input
                  type="text"
                  className={inputClass}
                  value={formData.emergencyName}
                  onChange={(e) =>
                    updateField("emergencyName", e.target.value)
                  }
                />
              </div>
              <div>
                <label className={labelClass}>Telefon kontaktu alarmowego *</label>
                <input
                  type="tel"
                  className={inputClass}
                  value={formData.emergencyPhone}
                  onChange={(e) =>
                    updateField("emergencyPhone", e.target.value)
                  }
                />
              </div>
            </div>

            <h3 className="font-bold text-[#1a365d] text-sm border-b border-gray-200 pb-2 pt-4">
              Informacje o locie
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Numer lotu</label>
                <input
                  type="text"
                  className={inputClass}
                  value={formData.flightNumber}
                  onChange={(e) =>
                    updateField("flightNumber", e.target.value)
                  }
                  placeholder="np. LO003"
                />
              </div>
              <div>
                <label className={labelClass}>Miasto przylotu w USA</label>
                <input
                  type="text"
                  className={inputClass}
                  value={formData.arrivalCity}
                  onChange={(e) => updateField("arrivalCity", e.target.value)}
                  placeholder="np. New York (JFK)"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 5: Eligibility */}
        {step === 4 && (
          <div className="space-y-6">
            <p className="text-sm text-gray-500 mb-4">
              Odpowiedz na ponizsze pytania. W wiekszosci przypadkow odpowiedz
              brzmi &quot;Nie&quot;. Odpowiadaj zgodnie z prawda.
            </p>
            {eligibilityQuestions.map((q, i) => {
              const field = `q${i + 1}` as keyof FormData;
              return (
                <div
                  key={i}
                  className="border-b border-gray-100 pb-4"
                >
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Q{i + 1}.</strong> {q}
                  </p>
                  <div className="flex space-x-4">
                    <label className="flex items-center space-x-2 text-sm">
                      <input
                        type="radio"
                        name={field}
                        value="tak"
                        checked={formData[field] === "tak"}
                        onChange={(e) => updateField(field, e.target.value)}
                        className="accent-[#1a365d]"
                      />
                      <span>Tak</span>
                    </label>
                    <label className="flex items-center space-x-2 text-sm">
                      <input
                        type="radio"
                        name={field}
                        value="nie"
                        checked={formData[field] === "nie"}
                        onChange={(e) => updateField(field, e.target.value)}
                        className="accent-[#1a365d]"
                      />
                      <span>Nie</span>
                    </label>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Step 6: Documents (UI only) */}
        {step === 5 && (
          <div className="space-y-6">
            <p className="text-sm text-gray-500 mb-4">
              Przeslij kopie dokumentow wymaganych do rozpatrzenia wniosku.
            </p>
            <div>
              <label className={labelClass}>
                Zdjecie strony paszportu ze zdjeciem *
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded p-6 text-center hover:border-[#1a365d] transition cursor-pointer">
                <p className="text-gray-400 text-sm">
                  Kliknij lub przeciagnij plik tutaj
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  JPG, PNG &mdash; maks. 5 MB
                </p>
              </div>
            </div>
            <div>
              <label className={labelClass}>Zdjecie twarzy *</label>
              <div className="border-2 border-dashed border-gray-300 rounded p-6 text-center hover:border-[#1a365d] transition cursor-pointer">
                <p className="text-gray-400 text-sm">
                  Kliknij lub przeciagnij plik tutaj
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  JPG, PNG &mdash; maks. 5 MB
                </p>
              </div>
            </div>
            <div className="bg-[#f8f9fa] border-l-4 border-[#1a365d] p-4 rounded-r text-sm">
              <strong>Wskazowka:</strong> Zdjecie paszportu powinno byc wyrazne
              i czytelne. Wszystkie dane musza byc widoczne.
            </div>
          </div>
        )}

        {/* Step 7: Confirmation */}
        {step === 6 && (
          <div className="space-y-6">
            <p className="text-sm text-gray-500 mb-4">
              Sprawdz wprowadzone dane przed wyslaniem wniosku.
            </p>

            <div className="space-y-4">
              <div className="border border-gray-200 rounded p-4">
                <h3 className="font-bold text-[#1a365d] text-sm mb-3">
                  Dane paszportowe
                </h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span className="text-gray-500">Numer paszportu:</span>
                  <span>{formData.passportNumber || "—"}</span>
                  <span className="text-gray-500">Nazwisko:</span>
                  <span>{formData.lastName || "—"}</span>
                  <span className="text-gray-500">Imie:</span>
                  <span>{formData.firstName || "—"}</span>
                  <span className="text-gray-500">Data urodzenia:</span>
                  <span>{formData.birthDate || "—"}</span>
                  <span className="text-gray-500">Obywatelstwo:</span>
                  <span>{formData.citizenship || "—"}</span>
                </div>
              </div>

              <div className="border border-gray-200 rounded p-4">
                <h3 className="font-bold text-[#1a365d] text-sm mb-3">
                  Dane kontaktowe
                </h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span className="text-gray-500">E-mail:</span>
                  <span>{formData.email || "—"}</span>
                  <span className="text-gray-500">Telefon:</span>
                  <span>{formData.phone || "—"}</span>
                  <span className="text-gray-500">Adres:</span>
                  <span>{formData.addressLine1 || "—"}</span>
                  <span className="text-gray-500">Miasto:</span>
                  <span>{formData.city || "—"}</span>
                </div>
              </div>

              <div className="border border-gray-200 rounded p-4">
                <h3 className="font-bold text-[#1a365d] text-sm mb-3">
                  Informacje o podrozy
                </h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span className="text-gray-500">Kontakt w USA:</span>
                  <span>{formData.usContactName || "—"}</span>
                  <span className="text-gray-500">Adres w USA:</span>
                  <span>{formData.usStayAddress || "—"}</span>
                  <span className="text-gray-500">Numer lotu:</span>
                  <span>{formData.flightNumber || "—"}</span>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 accent-[#1a365d]"
                />
                <span className="text-sm text-gray-600">
                  Potwierdzam, ze wszystkie podane informacje sa prawdziwe i
                  kompletne. Rozumiem, ze podanie falszywych informacji moze
                  skutkowac odmowa wjazdu do Stanow Zjednoczonych. Akceptuje{" "}
                  <Link
                    href="/site-info/agreement/"
                    className="text-[#1a365d] underline"
                  >
                    regulamin
                  </Link>{" "}
                  i{" "}
                  <Link
                    href="/site-info/privacy-policy/"
                    className="text-[#1a365d] underline"
                  >
                    polityke prywatnosci
                  </Link>
                  .
                </span>
              </label>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
          {step > 0 ? (
            <button
              onClick={prevStep}
              className="text-gray-600 hover:text-[#1a365d] font-medium text-sm transition"
            >
              &larr; Wstecz
            </button>
          ) : (
            <div />
          )}

          {step < stepTitles.length - 1 ? (
            <button
              onClick={nextStep}
              className="bg-[#1a365d] hover:bg-[#2a4a7f] text-white px-6 py-2.5 rounded font-bold text-sm transition"
            >
              Dalej &rarr;
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!agreed}
              className={`px-6 py-2.5 rounded font-bold text-sm transition ${
                agreed
                  ? "bg-[#c41e3a] hover:bg-[#a01830] text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Wyslij wniosek
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
