// Composant TopPerformers E-School avec Marcel Junior en tête du classement
window.TopPerformers = function TopPerformers() {
  const students = [
    {
      rank: 1,
      name: 'Marcel Junior',
      class: 'Terminale C • Brazzaville 🇨🇬',
      score: '96.5%',
      trend: '+4',
      avatar: 'assets/images/marcel-junior.jpg',
      medal: '🥇',
      medalBg: 'bg-amber-50 text-amber-600 border-amber-200'
    },
    {
      rank: 2,
      name: 'Kouassi Yao',
      class: 'Terminale D • Collège Moderne',
      score: '94.2%',
      trend: '+3',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
      medal: '🥈',
      medalBg: 'bg-slate-100 text-slate-600 border-slate-200'
    },
    {
      rank: 3,
      name: 'Fatou Traoré',
      class: 'Première C • Lycée d\'Excellence',
      score: '91.8%',
      trend: '+5',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
      medal: '🥉',
      medalBg: 'bg-orange-50 text-orange-600 border-orange-200'
    },
    {
      rank: 4,
      name: 'Moussa Koné',
      class: 'Terminale C • Établissement Saint-Jean',
      score: '89.0%',
      trend: '+2',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
      medal: '4',
      medalBg: 'bg-slate-50 text-slate-500 border-slate-200'
    },
    {
      rank: 5,
      name: 'Grace Mensah',
      class: 'Terminale A1 • Institut Blaise Pascal',
      score: '88.4%',
      trend: '-1',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
      medal: '5',
      medalBg: 'bg-slate-50 text-slate-500 border-slate-200'
    }
  ];

  return (
    <div className="rounded-2xl bg-white p-6 border border-slate-100 shadow-sm shadow-slate-200/50 flex flex-col justify-between h-full">
      
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-lg font-bold text-[#1A1D29]">
            Meilleurs élèves
          </h2>
          <p className="text-xs text-slate-400">
            Top 5 de la promotion inter-établissements
          </p>
        </div>
        <button className="px-3.5 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:text-[#2F6FED] hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-200 btn-hover">
          Classement
        </button>
      </div>

      <div className="space-y-3.5">
        {students.map((st) => (
          <div
            key={st.rank}
            className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50/80 transition-all duration-200 group"
          >
            <div className="flex items-center gap-3">
              <div className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold border ${st.medalBg}`}>
                {st.medal}
              </div>

              <div className="relative w-10 h-10 rounded-xl overflow-hidden ring-1 ring-slate-200 shadow-xs shrink-0">
                <img
                  src={st.avatar}
                  alt={st.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div>
                <div className="text-xs sm:text-sm font-bold text-[#1A1D29] group-hover:text-[#2F6FED] transition-colors leading-tight">
                  {st.name}
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  {st.class}
                </div>
              </div>
            </div>

            <div className="text-right flex items-center gap-3">
              <div>
                <div className="text-xs sm:text-sm font-extrabold text-[#1A1D29]">
                  {st.score}
                </div>
                <div className="text-[10px] text-slate-400">Score global</div>
              </div>

              <span className={`inline-flex items-center gap-0.5 px-2 py-0.5 rounded-lg text-[11px] font-bold ${
                st.trend.startsWith('+')
                  ? 'bg-[#E8F8EE] text-[#22C55E]'
                  : 'bg-slate-100 text-slate-500'
              }`}>
                {st.trend.startsWith('+') ? '↑' : '↓'} {st.trend.replace('+', '').replace('-', '')}
              </span>
            </div>

          </div>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
        <span className="text-slate-400">Prix d'Excellence Semestriel</span>
        <span className="font-bold text-[#1E4FD1]">Prix : 100 000 FCFA</span>
      </div>

    </div>
  );
};
