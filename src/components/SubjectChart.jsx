// Composant SubjectChart E-School (Inspiré du bloc "Subject Performance Overview" de Cognify)
window.SubjectChart = function SubjectChart() {
  const [hoveredSubject, setHoveredSubject] = React.useState(null);

  const subjects = [
    { name: 'Mathématiques', short: 'Maths', attempts: 180, correct: 154, rate: '85%' },
    { name: 'Physique-Chimie', short: 'Physique', attempts: 140, correct: 112, rate: '80%' },
    { name: 'Sciences de la Vie', short: 'SVT', attempts: 160, correct: 138, rate: '86%' },
    { name: 'Français & Lettres', short: 'Français', attempts: 210, correct: 172, rate: '82%' },
    { name: 'Anglais LV1', short: 'Anglais', attempts: 230, correct: 202, rate: '88%' },
    { name: 'Informatique & Algorithmique', short: 'Informatique', attempts: 170, correct: 145, rate: '85%' },
    { name: 'Philosophie', short: 'Philo', attempts: 120, correct: 92, rate: '76%' },
    { name: 'Histoire-Géographie', short: 'Histoire-Géo', attempts: 190, correct: 165, rate: '87%' },
  ];

  const maxVal = 250; // échelle max

  return (
    <div className="rounded-2xl bg-white p-6 border border-slate-100 shadow-sm shadow-slate-200/50 flex flex-col justify-between h-full">
      
      {/* En-tête du graphique */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <div>
          <h2 className="text-lg font-bold text-[#1A1D29]">
            Aperçu des performances par matière
          </h2>
          <p className="text-xs text-slate-400">
            Comparatif des exercices réalisés et du taux de précision
          </p>
        </div>

        {/* Légende interactive */}
        <div className="flex items-center gap-4 text-xs font-semibold">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#2F6FED]"></span>
            <span className="text-slate-600">Tentatives totales</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#22C55E]"></span>
            <span className="text-slate-600">Réponses correctes</span>
          </div>
        </div>
      </div>

      {/* Zone du graphique à barres empilées */}
      <div className="relative pt-6 pb-2">
        
        {/* Lignes d'échelle horizontales d'arrière-plan */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-40">
          <div className="border-b border-dashed border-slate-200 w-full"></div>
          <div className="border-b border-dashed border-slate-200 w-full"></div>
          <div className="border-b border-dashed border-slate-200 w-full"></div>
          <div className="border-b border-slate-200 w-full"></div>
        </div>

        {/* Colonnes de barres */}
        <div className="relative z-10 grid grid-cols-4 sm:grid-cols-8 gap-2 sm:gap-4 h-64 items-end px-2">
          {subjects.map((sub, idx) => {
            const totalHeight = (sub.attempts / maxVal) * 100;
            const correctHeight = (sub.correct / sub.attempts) * 100; // proportion dans la barre
            const isHovered = hoveredSubject === idx;

            return (
              <div
                key={sub.name}
                className="flex flex-col items-center h-full justify-end group cursor-pointer"
                onMouseEnter={() => setHoveredSubject(idx)}
                onMouseLeave={() => setHoveredSubject(null)}
              >
                {/* Tooltip flottant au survol */}
                {isHovered && (
                  <div className="absolute -top-6 bg-[#1A1D29] text-white text-[11px] py-1.5 px-3 rounded-xl shadow-xl z-20 animate-fadeIn pointer-events-none whitespace-nowrap">
                    <div className="font-bold">{sub.name}</div>
                    <div className="text-blue-300">Total : {sub.attempts} questions</div>
                    <div className="text-green-300">Réussite : {sub.correct} ({sub.rate})</div>
                  </div>
                )}

                {/* Barre empilée avec fond d'ombre douce */}
                <div
                  className={`w-8 sm:w-11 rounded-2xl p-1 bg-slate-100/70 flex flex-col justify-end transition-all duration-300 ${
                    isHovered ? 'ring-2 ring-[#2F6FED] scale-105' : ''
                  }`}
                  style={{ height: `${totalHeight}%` }}
                >
                  {/* Partie Bleue : Tentatives Totales restantes */}
                  <div className="w-full rounded-t-xl bg-[#2F6FED] flex-1 transition-all duration-300"></div>

                  {/* Partie Verte : Réponses correctes (bas) */}
                  <div
                    className="w-full rounded-b-xl rounded-t-lg bg-[#22C55E] transition-all duration-300"
                    style={{ height: `${correctHeight}%` }}
                  ></div>
                </div>

                {/* Nom de la matière en bas */}
                <span className={`text-[11px] sm:text-xs font-semibold mt-3 text-center transition-colors line-clamp-1 ${
                  isHovered ? 'text-[#2F6FED] font-bold' : 'text-slate-500'
                }`}>
                  {sub.short}
                </span>

                {/* Taux de réussite */}
                <span className="text-[10px] text-slate-400 font-medium">
                  {sub.rate}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Note de synthèse sous le graphique */}
      <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
          <span>Précision moyenne globale : <strong className="text-[#1A1D29]">84.6%</strong> de bonnes réponses</span>
        </div>
        <span className="text-[11px] text-slate-400 mt-1 sm:mt-0">Basé sur 1 400 questions traitées</span>
      </div>

    </div>
  );
};
