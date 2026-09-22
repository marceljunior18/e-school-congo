// Composant QuestionDonut E-School (Inspiré du bloc "Question Summary" de Cognify)
window.QuestionDonut = function QuestionDonut() {
  const [tab, setTab] = React.useState('overall'); // 'overall' ou 'recent'

  // Données selon l'onglet
  const data = tab === 'overall' ? {
    total: 840,
    correct: { count: 680, percent: 81, color: '#2F6FED', label: 'Correctes' },
    wrong: { count: 100, percent: 12, color: '#F5A623', label: 'À réviser' },
    skipped: { count: 60, percent: 7, color: '#CBD5E1', label: 'Non traitées' }
  } : {
    total: 150,
    correct: { count: 130, percent: 87, color: '#2F6FED', label: 'Correctes' },
    wrong: { count: 14, percent: 9, color: '#F5A623', label: 'À réviser' },
    skipped: { count: 6, percent: 4, color: '#CBD5E1', label: 'Non traitées' }
  };

  // Calculs SVG Donut (Rayon = 62, Circonférence = 2 * PI * 62 ≈ 389.56)
  const radius = 62;
  const circ = 2 * Math.PI * radius;
  
  const correctStroke = (data.correct.percent / 100) * circ;
  const wrongStroke = (data.wrong.percent / 100) * circ;
  const skippedStroke = (data.skipped.percent / 100) * circ;

  const correctOffset = 0;
  const wrongOffset = -correctStroke;
  const skippedOffset = -(correctStroke + wrongStroke);

  return (
    <div className="rounded-2xl bg-white p-6 border border-slate-100 shadow-sm shadow-slate-200/50 flex flex-col justify-between h-full">
      
      {/* En-tête & Onglets de filtrage style Cognify */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-[#1A1D29]">
            Synthèse des questions
          </h2>
        </div>

        {/* Pilules sélectrices (Overall / Last 5 Tests) */}
        <div className="flex p-1 bg-slate-100/80 rounded-xl mb-6">
          <button
            onClick={() => setTab('overall')}
            className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all duration-200 ${
              tab === 'overall'
                ? 'bg-white text-[#1A1D29] shadow-sm'
                : 'text-slate-500 hover:text-[#1A1D29]'
            }`}
          >
            Global
          </button>
          <button
            onClick={() => setTab('recent')}
            className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all duration-200 ${
              tab === 'recent'
                ? 'bg-white text-[#1A1D29] shadow-sm'
                : 'text-slate-500 hover:text-[#1A1D29]'
            }`}
          >
            5 Derniers Tests
          </button>
        </div>
      </div>

      {/* Graphique en anneau (Donut) */}
      <div className="flex items-center justify-center my-3 relative">
        <div className="relative w-44 h-44 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
            {/* Fond anneau */}
            <circle
              cx="80"
              cy="80"
              r={radius}
              fill="transparent"
              stroke="#F1F5F9"
              strokeWidth="20"
            />
            
            {/* Segment Correct (Bleu) */}
            <circle
              cx="80"
              cy="80"
              r={radius}
              fill="transparent"
              stroke="#2F6FED"
              strokeWidth="20"
              strokeDasharray={`${correctStroke} ${circ}`}
              strokeDashoffset={correctOffset}
              strokeLinecap="round"
              className="transition-all duration-700 ease-out"
            />

            {/* Segment Wrong (Orange Accent) */}
            <circle
              cx="80"
              cy="80"
              r={radius}
              fill="transparent"
              stroke="#F5A623"
              strokeWidth="20"
              strokeDasharray={`${wrongStroke} ${circ}`}
              strokeDashoffset={wrongOffset}
              strokeLinecap="round"
              className="transition-all duration-700 ease-out"
            />

            {/* Segment Skipped (Gris clair) */}
            <circle
              cx="80"
              cy="80"
              r={radius}
              fill="transparent"
              stroke="#CBD5E1"
              strokeWidth="20"
              strokeDasharray={`${skippedStroke} ${circ}`}
              strokeDashoffset={skippedOffset}
              strokeLinecap="round"
              className="transition-all duration-700 ease-out"
            />
          </svg>

          {/* Chiffre central */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-3xl font-extrabold text-[#1A1D29] tracking-tight">
              {data.total}
            </span>
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              Total Questions
            </span>
          </div>
        </div>
      </div>

      {/* Légende détaillée */}
      <div className="space-y-2.5 pt-4 border-t border-slate-100">
        
        {/* Correctes */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#2F6FED]"></span>
            <span className="font-medium text-slate-600">Réponses correctes</span>
          </div>
          <div className="flex items-center gap-1.5 font-bold text-[#1A1D29]">
            <span>{data.correct.count}</span>
            <span className="text-slate-400 text-[11px] font-semibold">({data.correct.percent}%)</span>
          </div>
        </div>

        {/* À réviser */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#F5A623]"></span>
            <span className="font-medium text-slate-600">Points à réviser</span>
          </div>
          <div className="flex items-center gap-1.5 font-bold text-[#1A1D29]">
            <span>{data.wrong.count}</span>
            <span className="text-slate-400 text-[11px] font-semibold">({data.wrong.percent}%)</span>
          </div>
        </div>

        {/* Non traitées */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#CBD5E1]"></span>
            <span className="font-medium text-slate-600">Questions ignorées</span>
          </div>
          <div className="flex items-center gap-1.5 font-bold text-[#1A1D29]">
            <span>{data.skipped.count}</span>
            <span className="text-slate-400 text-[11px] font-semibold">({data.skipped.percent}%)</span>
          </div>
        </div>

      </div>

    </div>
  );
};
