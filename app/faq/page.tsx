import Link from "next/link";

export const metadata = {
  title: "ESTAよくある質問（FAQ） - 申請から渡航までの疑問を解決 | ESTA Guide",
  description: "ESTA申請に関するよくある質問を網羅的に解説。申請方法、費用、有効期限、トラブル対処法など、あなたの疑問を解決します。",
  keywords: "ESTA FAQ, よくある質問, 疑問, トラブル, 拒否, 有効期限, ビザとの違い",
  openGraph: {
    title: "ESTAよくある質問（FAQ）",
    description: "25問以上のQ&Aで申請から渡航までの疑問を解決。基本情報、費用、トラブル対処法まで",
    type: "article",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "基本情報",
      questions: [
        {
          q: "ESTAとは何ですか？",
          a: "ESTA（Electronic System for Travel Authorization）は、米国への渡航を希望するビザ免除プログラム参加国の国民が、事前に取得する電子渡航認証です。2009年に導入され、90日以内の観光・ビジネス目的での訪問に必要です。"
        },
        {
          q: "日本国民はESTAが必要ですか？",
          a: "はい。日本はビザ免除プログラム参加国のため、90日以内の観光・ビジネス目的で米国を訪問する場合、ESTAが必要です。ただし、すでに有効な米国ビザを持っている場合はESTAは不要です。"
        },
        {
          q: "ESTAとビザの違いは何ですか？",
          a: "ESTAは短期滞在（90日以内）の観光・ビジネス目的で、オンラインで申請できる電子認証（$21）です。ビザは長期滞在や就労目的で、大使館での面接が必要（$185以上）で、承認まで数週間から数ヶ月かかります。"
        },
        {
          q: "ESTAの有効期限は？",
          a: "ESTAは発行後2年間、またはパスポートの有効期限までのいずれか早い日まで有効です。有効期間内であれば、何度でも米国に入国できます。"
        }
      ]
    },
    {
      category: "申請プロセス",
      questions: [
        {
          q: "申請にどれくらい時間がかかりますか？",
          a: "フォーム記入には約15-20分かかります。承認は通常数分で完了しますが、最長72時間かかる場合もあります。渡航予定日の少なくとも72時間前には申請することをおすすめします。"
        },
        {
          q: "申請は何日前にすべきですか？",
          a: "渡航予定日の少なくとも72時間前に申請してください。ただし、審査に時間がかかる可能性もあるため、1週間以上前の申請が理想的です。ESTAは2年間有効なので、渡航予定が決まったらすぐに申請しても問題ありません。"
        },
        {
          q: "パスポートを更新したらどうなりますか？",
          a: "パスポートを更新した場合、新しいパスポートでESTAを再申請する必要があります。ESTAはパスポート番号と紐付けられているため、パスポート番号が変わると以前のESTAは無効になります。"
        },
        {
          q: "グループで申請できますか？",
          a: "はい、公式サイトではグループ申請機能があり、一度に複数人の申請ができます。ただし、料金は1人ずつかかります（$21/人）。"
        }
      ]
    },
    {
      category: "費用と支払い",
      questions: [
        {
          q: "ESTAの費用はいくらですか？",
          a: "公式サイトでの申請費用は$21です。内訳は申請処理費$4と承認費$17です。代行サービスを利用する場合は$80-200程度かかります。"
        },
        {
          q: "支払い方法は？",
          a: "公式サイトでは、クレジットカード（Visa、Mastercard、American Express、Discover）またはPayPalが利用できます。デビットカードも対応しています。"
        },
        {
          q: "拒否された場合、返金されますか？",
          a: "公式サイトの場合、$4の処理費は返金されませんが、$17の承認費は承認された場合のみ請求されます。つまり、拒否された場合は$4のみの負担となります。代行サービスの返金ポリシーは業者によって異なります。"
        }
      ]
    },
    {
      category: "トラブルシューティング",
      questions: [
        {
          q: "申請が拒否されました。どうすれば？",
          a: "ESTAが拒否された場合、米国大使館でB-2観光ビザを申請する必要があります。ビザ申請には面接が必要で、費用は$185です。拒否理由は通知されないため、心当たりがある場合はそれを踏まえてビザ申請を行ってください。"
        },
        {
          q: "間違った情報を入力しました。訂正できますか？",
          a: "申請後の訂正はできません。ただし、メールアドレスや渡航情報など一部の項目は、承認後に「申請情報の更新」で変更できます。名前やパスポート番号など重要な情報を間違えた場合は、新規に申請し直す必要があります。"
        },
        {
          q: "承認が72時間以上かかっています。大丈夫？",
          a: "通常は72時間以内に結果が出ますが、それ以上かかる場合は、公式サイトで申請状況を確認してください。「審査中（Pending）」の場合は待つ必要があります。不安な場合は、米国税関・国境警備局（CBP）に問い合わせることもできます。"
        },
        {
          q: "ESTAが承認されましたが、印刷は必要ですか？",
          a: "印刷は必須ではありません。ESTAは電子的にパスポートと紐付けられているため、航空会社や入国審査官はシステムで確認できます。ただし、念のため承認番号を控えておくか、承認メールを保存しておくことをおすすめします。"
        }
      ]
    },
    {
      category: "渡航",
      questions: [
        {
          q: "ESTAで何日間滞在できますか？",
          a: "ESTAでは、1回の訪問で最大90日間滞在できます。ただし、180日間のうち合計90日以内という制限もあるため、頻繁に米国を訪問する場合は注意が必要です。"
        },
        {
          q: "ESTAで働けますか？",
          a: "いいえ、ESTAでは就労できません。米国で働く場合は、就労ビザ（H-1B、L-1など）が必要です。無給のボランティア活動やビジネスミーティングへの参加は可能ですが、報酬を伴う仕事は違法です。"
        },
        {
          q: "カナダやメキシコ経由でも必要ですか？",
          a: "はい、カナダやメキシコから陸路で米国に入国する場合でもESTAが必要です。ただし、カナダやメキシコへの訪問日数は90日間の滞在期間にカウントされます。"
        },
        {
          q: "ESTAがあれば必ず入国できますか？",
          a: "いいえ。ESTAは米国への渡航認証であり、入国を保証するものではありません。入国の可否は、米国到着時の入国審査官が最終的に判断します。適切な書類を持ち、質問に正直に答えることが重要です。"
        }
      ]
    },
    {
      category: "特別なケース",
      questions: [
        {
          q: "二重国籍者はどうすればいいですか？",
          a: "二重国籍者の場合、ビザ免除プログラム参加国のパスポートを使用してESTAを申請できます。ただし、特定の国（イラン、イラク、北朝鮮、スーダン、シリア、リビア、ソマリア、イエメン）の国籍も持っている場合、またはこれらの国を2011年以降訪問している場合は、ESTAの対象外となり、ビザ申請が必要です。"
        },
        {
          q: "子供も申請が必要ですか？",
          a: "はい、年齢に関係なく、乳幼児を含むすべての渡航者がESTAを申請する必要があります。親が代理で申請できますが、各自のパスポートとESTAが必要です。"
        },
        {
          q: "犯罪歴がある場合は？",
          a: "軽微な交通違反（スピード違反、駐車違反など）は通常問題ありません。しかし、逮捕歴や有罪判決がある場合、適格性質問で正直に回答する必要があります。場合によってはESTAが拒否され、ビザ申請が必要になることがあります。"
        }
      ]
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* ページヘッダー */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="font-montserrat font-bold text-4xl mb-4">
            よくある質問（FAQ）
          </h1>
          <p className="text-xl text-gray-600">
            ESTA申請に関する疑問を解決します
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {faqs.map((category, categoryIndex) => (
            <section key={categoryIndex} className="bg-white rounded-lg shadow-md p-8">
              <h2 className="font-bold text-2xl mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">
                {category.category}
              </h2>
              <div className="space-y-6">
                {category.questions.map((faq, faqIndex) => (
                  <div key={faqIndex} className="border-l-4 border-gray-200 pl-4 hover:border-blue-400 transition">
                    <h3 className="font-bold text-lg mb-2 text-gray-900">
                      Q: {faq.q}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      A: {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* さらに質問がある場合 */}
          <section className="bg-blue-50 border-2 border-blue-300 rounded-lg p-8">
            <div className="text-center">
              <div className="text-4xl mb-4">❓</div>
              <h2 className="font-bold text-2xl mb-4">
                質問が解決しませんでしたか？
              </h2>
              <p className="text-gray-700 mb-6">
                さらに詳しい情報については、以下のページをご確認ください
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <Link 
                  href="/application-guide"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
                >
                  申請手順ガイド
                </Link>
                <Link 
                  href="/cost-comparison"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition border-2 border-blue-600"
                >
                  費用比較
                </Link>
              </div>
              <div className="mt-6 pt-6 border-t border-blue-200">
                <p className="text-sm text-gray-600">
                  公式の問い合わせ先:<br />
                  <a 
                    href="https://esta.cbp.dhs.gov" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    米国公式ESTAサイト
                  </a>
                  {" "}または{" "}
                  <a 
                    href="https://jp.usembassy.gov/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    在日米国大使館
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* 重要な注意事項 */}
          <section className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 text-yellow-600 text-4xl">⚠️</div>
              <div>
                <h2 className="font-bold text-2xl text-yellow-900 mb-4">
                  重要な注意事項
                </h2>
                <ul className="space-y-2 text-gray-800">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>このページの情報は一般的なガイダンスです。個別の状況については、公式サイトまたは米国大使館にご確認ください。</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>ESTA申請時は正確な情報を提供してください。虚偽の申告は米国への入国禁止につながる可能性があります。</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>詐欺サイトにご注意ください。公式サイトは <strong>https://esta.cbp.dhs.gov</strong> のみです。</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
