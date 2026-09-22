// Composant StatCards E-School
window.StatCards = function StatCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-7">
      
      {/* 1. CARTE HERO GRADIENT (Inspirée directement de Cognify) */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#2F6FED] via-[#255ED4] to-[#1E4FD1] text-white p-6 shadow-md shadow-blue-500/20 card-hover flex flex-col justify-between min-h-[190px]">
        {/* Cercles et vagues abstraites décoratives */}
        <div className="absolute -right-8 -bottom-10 w-44 h-44 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
        <div className="absolute right-4 top-4 w-28 h-28 rounded-full border border-white/15 pointer-events-none"></div>
        <div className="absolute -right-4 top-10 w-20 h-20 rounded-full border border-white/10 pointer-events-none"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-blue-100 uppercase tracking-wider">
              Moyenne des 5 derniers examens
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-white/20 backdrop-blur-sm text-white border border-white/20">
              Top 5%
            </span>
          </div>
          <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-1">
            86.5<span className="text-2xl sm:text-3xl font-bold text-blue-200">%</span>
          </div>
          <p className="text-xs text-blue-100 mt-1">
            +3.2% par rapport au trimestre précédent
          </p>
        </div>

        {/* Bouton CTA d'entraînement */}
        <div className="relative z-10 pt-4">
          <button
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs sm:text-sm font-bold transition-all duration-200 border border-white/25 shadow-sm btn-hover group"
          >
            <span>S'entraîner maintenant</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* 2. CARTE PERFORMANCE SCIENTIFIQUE & LOGIQUE */}
      <div className="rounded-2xl bg-white p-6 border border-slate-100 shadow-sm shadow-slate-200/50 card-hover flex flex-col justify-between min-h-[190px]">
        <div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Performance Globale
            </span>
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#2F6FED] flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
          <div className="text-3xl sm:text-4xl font-extrabold text-[#1A1D29] tracking-tight mt-2">
            78<span className="text-xl font-bold text-slate-400">%</span>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-100">
          <div className="flex items-center gap-1.5 text-xs text-slate-600">
            <span className="w-2 h-2 rounded-full bg-[#2F6FED]"></span>
            <span>Point à renforcer :</span>
            <span className="font-semibold text-[#1A1D29]">Algèbre & Fonctions</span>
          </div>
          <div className="mt-1 flex items-center gap-2">
            <span className="inline-flex items-center text-[11px] font-semibold text-[#22C55E]">
              ↑ +4.8%
            </span>
            <span className="text-[11px] text-slate-400">cette semaine</span>
          </div>
        </div>
      </div>

      {/* 3. CARTE MODULES TERMINÉS (VERT SUCCÈS) */}
      <div className="rounded-2xl bg-white p-6 border border-slate-100 shadow-sm shadow-slate-200/50 card-hover flex flex-col justify-between min-h-[190px]">
        <div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Modules Validés
            </span>
            <div className="w-9 h-9 rounded-xl bg-[#E8F8EE] text-[#22C55E] flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <div className="text-3xl sm:text-4xl font-extrabold text-[#1A1D29] tracking-tight mt-2">
            18
          </div>
        </div>

        <div className="pt-3 border-t border-slate-100">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-slate-500">Progression globale</span>
            <span className="font-bold text-[#22C55E]">75% (18/24)</span>
          </div>
          {/* Petite barre de progression verte */}
          <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
            <div className="h-full rounded-full bg-[#22C55E] w-3/4 transition-all duration-500"></div>
          </div>
          <p className="text-[11px] text-slate-400 mt-2">Certifications obtenues avec mention</p>
        </div>
      </div>

      {/* 4. CARTE MODULES EN COURS (ORANGE ACCENT) */}
      <div className="rounded-2xl bg-white p-6 border border-slate-100 shadow-sm shadow-slate-200/50 card-hover flex flex-col justify-between min-h-[190px]">
        <div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              En Cours d'Étude
            </span>
            <div className="w-9 h-9 rounded-xl bg-[#FEF6E7] text-[#F5A623] flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="9" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
              </svg>
            </div>
          </div>
          <div className="text-3xl sm:text-4xl font-extrabold text-[#1A1D29] tracking-tight mt-2">
            04
          </div>
        </div>

        <div className="pt-3 border-t border-slate-100">
          <div className="flex items-center gap-1.5 text-xs text-slate-600">
            <span className="w-2 h-2 rounded-full bg-[#F5A623] animate-pulse"></span>
            <span>Prochaine séance :</span>
            <span className="font-semibold text-[#1A1D29]">Physique Ondes</span>
          </div>
          <div className="mt-1 flex items-center justify-between">
            <span className="text-[11px] text-slate-400">Échéance : Demain à 14h</span>
            <span className="text-[11px] font-bold text-[#F5A623]">2 devoirs</span>
          </div>
        </div>
      </div>

    </div>
  );
};
