// Composant DashboardHeader E-School
window.DashboardHeader = function DashboardHeader() {
  const [selectedPeriod, setSelectedPeriod] = React.useState('trimestre1');

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 pt-2">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1A1D29] tracking-tight">
            Aperçu du Tableau de bord
          </h1>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-[#2F6FED] border border-blue-100">
            Session Active
          </span>
        </div>
        <p className="text-sm text-slate-500 max-w-2xl">
          Visualisez rapidement vos progrès, vos points d'excellence et les axes d'amélioration prioritaires.
        </p>
      </div>

      {/* Actions à droite */}
      <div className="flex items-center gap-3 self-start md:self-auto">
        {/* Sélecteur de période */}
        <div className="relative">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="appearance-none bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm font-semibold rounded-xl pl-3.5 pr-8 py-2.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2F6FED] cursor-pointer hover:border-slate-300 transition-colors"
          >
            <option value="trimestre1">Trimestre 1 (En cours)</option>
            <option value="trimestre2">Trimestre 2</option>
            <option value="annuel">Bilan Annuel 2026</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Bouton Assistant IA style Cognify */}
        <button
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 text-[#2F6FED] text-xs sm:text-sm font-bold shadow-sm hover:shadow-md hover:border-blue-300 btn-hover group"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2F6FED] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2F6FED]"></span>
          </span>
          <svg className="w-4 h-4 text-[#2F6FED] group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span>Assistant IA E-School</span>
        </button>
      </div>
    </div>
  );
};
