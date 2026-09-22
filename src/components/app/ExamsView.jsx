// Composant ExamsView - Centre de simulations et épreuves d'annales du Baccalauréat
window.ExamsView = function ExamsView({ onShowToast }) {
  const exams = [
    {
      id: 1,
      title: 'Baccalauréat Général Blanc — Session 2025',
      subject: 'Mathématiques',
      serie: 'Série C',
      duration: '4 Heures',
      coefficient: 'Coeff 6',
      questionsCount: '3 Problèmes + 2 Exercices',
      status: 'Terminé',
      score: '17.5 / 20',
      badgeColor: 'bg-emerald-100 text-emerald-700'
    },
    {
      id: 2,
      title: 'Épreuve Nationale Officielle Bac Congo 2024',
      subject: 'Physique-Chimie',
      serie: 'Séries C & D',
      duration: '3h30',
      coefficient: 'Coeff 5',
      questionsCount: 'Optique, Mécanique, Électrolyse',
      status: 'À faire',
      score: 'Non noté',
      badgeColor: 'bg-amber-100 text-amber-700'
    },
    {
      id: 3,
      title: 'Baccalauréat Blanc Inter-Lycées Brazzaville 2024',
      subject: 'SVT (Sciences de la Vie et de la Terre)',
      serie: 'Série D',
      duration: '3 Heures',
      coefficient: 'Coeff 5',
      questionsCount: 'Restitution + Exploitation de docs',
      status: 'À faire',
      score: 'Non noté',
      badgeColor: 'bg-amber-100 text-amber-700'
    },
    {
      id: 4,
      title: 'Épreuve Officielle Bac Congo 2023',
      subject: 'Mathématiques',
      serie: 'Série C & D',
      duration: '4 Heures',
      coefficient: 'Coeff 6',
      questionsCount: 'Arithmétique & Intégrales',
      status: 'Terminé',
      score: '16.0 / 20',
      badgeColor: 'bg-emerald-100 text-emerald-700'
    }
  ];

  return (
    <div className="space-y-6 animate-fadeInUp">
      
      {/* En-tête */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2F6FED] text-xs font-bold mb-2">
          <span>✍️</span>
          <span>Annales & Épreuves d'Excellence</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#1A1D29] tracking-tight">
          Simulations du Baccalauréat
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Entraînez-vous dans les conditions réelles d'examen avec chronomètre et barème officiel de correction.
        </p>
      </div>

      {/* Bannière Simulation Flash */}
      <div className="bg-gradient-to-r from-[#2F6FED] to-[#1E4FD1] rounded-3xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg shadow-blue-500/20">
        <div>
          <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-extrabold uppercase tracking-wider mb-2 inline-block">
            Prochain Bac Blanc National
          </span>
          <h3 className="text-xl font-black">Simulation Mathématiques Série C & D</h3>
          <p className="text-xs text-blue-100 mt-1">
            Samedi à 08h00 • Épreuve minutée de 4 heures avec classement national en direct.
          </p>
        </div>
        <button
          onClick={() => onShowToast && onShowToast('Inscription à la simulation du Bac Blanc confirmée !', 'success')}
          className="px-5 py-3 rounded-xl bg-white text-[#1E4FD1] text-xs font-bold shadow-md hover:bg-blue-50 transition-colors shrink-0 cursor-pointer"
        >
          S'inscrire à l'épreuve (Gratuit pour les Pros)
        </button>
      </div>

      {/* Liste des Sujets Disponibles */}
      <div className="space-y-4">
        {exams.map((exam) => (
          <div
            key={exam.id}
            className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs hover:border-slate-300 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2F6FED] flex items-center justify-center text-xl font-bold shrink-0">
                📝
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-[#2F6FED]">{exam.subject}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-xs font-semibold text-slate-500">{exam.serie}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-xs text-slate-400">{exam.duration}</span>
                </div>
                <h4 className="text-sm sm:text-base font-extrabold text-[#1A1D29] mb-1">{exam.title}</h4>
                <div className="text-xs text-slate-400">{exam.questionsCount} ({exam.coefficient})</div>
              </div>
            </div>

            <div className="flex items-center gap-3 self-stretch sm:self-auto justify-between sm:justify-end border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100">
              <div className="text-right">
                <div className={`text-xs font-extrabold px-2.5 py-0.5 rounded-full inline-block ${exam.badgeColor}`}>
                  {exam.status} : {exam.score}
                </div>
              </div>

              <button
                onClick={() => onShowToast && onShowToast(`Ouverture de l'épreuve : ${exam.title}`, 'info')}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#2F6FED] to-[#1E4FD1] text-white text-xs font-bold shadow-xs hover:shadow-md transition-all cursor-pointer"
              >
                {exam.status === 'Terminé' ? 'Revoir la copie corrigée' : 'Lancer l\'épreuve'}
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
