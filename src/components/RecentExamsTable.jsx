// Composant RecentExamsTable E-School (Inspiré du tableau "Recent Exams Result" de Cognify)
window.RecentExamsTable = function RecentExamsTable() {
  const exams = [
    {
      title: 'Bac Blanc — Épreuve de Mathématiques',
      type: 'Épreuve Nationale Type C',
      questions: 100,
      date: '16/09/2026',
      previous: '84%',
      duration: '2h 15',
      score: 92,
      color: '#22C55E'
    },
    {
      title: 'Physique & Chimie — Ondes & Électromagnétisme',
      type: 'Évaluation Trimestrielle',
      questions: 80,
      date: '12/09/2026',
      previous: '71%',
      duration: '1h 45',
      score: 84,
      color: '#22C55E'
    },
    {
      title: 'SVT — Génétique & Régulation Immunitaire',
      type: 'Devoir Surveillé N°2',
      questions: 60,
      date: '08/09/2026',
      previous: '65%',
      duration: '1h 30',
      score: 76,
      color: '#2F6FED'
    },
    {
      title: 'Informatique & Algorithmique — Récursivité',
      type: 'TP Noté sur Plateforme',
      questions: 40,
      date: '04/09/2026',
      previous: '50%',
      duration: '0h 50',
      score: 68,
      color: '#F5A623'
    }
  ];

  return (
    <div className="rounded-2xl bg-white p-6 border border-slate-100 shadow-sm shadow-slate-200/50 flex flex-col justify-between h-full">
      
      {/* En-tête */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-lg font-bold text-[#1A1D29]">
            Résultats récents aux examens
          </h2>
          <p className="text-xs text-slate-400">
            Historique détaillé des dernières épreuves passées
          </p>
        </div>
        <button className="px-3.5 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:text-[#2F6FED] hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-200 btn-hover">
          Voir plus
        </button>
      </div>

      {/* Tableau responsive */}
      <div className="overflow-x-auto -mx-6 px-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              <th className="pb-3 pr-4 font-semibold">Examen / Module</th>
              <th className="pb-3 px-3 font-semibold text-center">Questions</th>
              <th className="pb-3 px-3 font-semibold">Date</th>
              <th className="pb-3 px-3 font-semibold text-center">Précédent</th>
              <th className="pb-3 px-3 font-semibold text-center">Durée</th>
              <th className="pb-3 pl-3 font-semibold min-w-[130px]">Score</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100/70 text-xs">
            {exams.map((item, index) => (
              <tr key={index} className="hover:bg-slate-50/80 transition-colors group">
                
                {/* Titre & Description */}
                <td className="py-3.5 pr-4">
                  <div className="font-bold text-[#1A1D29] group-hover:text-[#2F6FED] transition-colors line-clamp-1">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium">
                    {item.type}
                  </div>
                </td>

                {/* Questions */}
                <td className="py-3.5 px-3 text-center font-medium text-slate-600">
                  {item.questions}
                </td>

                {/* Date */}
                <td className="py-3.5 px-3 text-slate-500 whitespace-nowrap font-medium">
                  {item.date}
                </td>

                {/* Score Précédent avec pill */}
                <td className="py-3.5 px-3 text-center">
                  <span className="inline-block px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-bold">
                    {item.previous}
                  </span>
                </td>

                {/* Durée */}
                <td className="py-3.5 px-3 text-center text-slate-500 font-medium">
                  {item.duration}
                </td>

                {/* Score avec Barre de progression */}
                <td className="py-3.5 pl-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-20 bg-slate-100 h-2 rounded-full overflow-hidden flex-1">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${item.score}%`,
                          backgroundColor: item.color
                        }}
                      ></div>
                    </div>
                    <span className="font-extrabold text-[#1A1D29] text-xs w-8 text-right">
                      {item.score}%
                    </span>
                  </div>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pied de tableau avec indicateur FCFA de récompense ou mention */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span className="text-[11px] text-slate-400">Affichage de 4 sur 28 épreuves</span>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-medium text-slate-500">Bourse d'Excellence active :</span>
          <span className="text-[11px] font-bold text-[#22C55E] bg-[#E8F8EE] px-2 py-0.5 rounded-md">
            +50 000 FCFA débloqués
          </span>
        </div>
      </div>

    </div>
  );
};
