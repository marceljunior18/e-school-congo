// Composant CoursesView - Catalogue des cours et fiches de révision de l'élève
window.CoursesView = function CoursesView({ onShowToast }) {
  const [selectedSubject, setSelectedSubject] = React.useState('all');

  const courses = [
    {
      id: 1,
      subject: 'Mathématiques',
      icon: '📐',
      title: 'Analyse : Fonctions Logarithmes & Exponentielles',
      level: 'Terminale C & D',
      progress: 85,
      chapters: 6,
      exercises: 42,
      tag: 'Prioritaire Bac'
    },
    {
      id: 2,
      subject: 'Physique-Chimie',
      icon: '⚡',
      title: 'Mécanique Newtonienne & Mouvement des Satellites',
      level: 'Terminale C & D',
      progress: 60,
      chapters: 5,
      exercises: 34,
      tag: 'Grand Classique'
    },
    {
      id: 3,
      subject: 'SVT',
      icon: '🧬',
      title: 'Génétique Moléculaire, Brassages & Hérédité',
      level: 'Terminale D',
      progress: 40,
      chapters: 4,
      exercises: 28,
      tag: 'Indispensable'
    },
    {
      id: 4,
      subject: 'Mathématiques',
      icon: '📐',
      title: 'Nombres Complexes & Géométrie dans le Plan',
      level: 'Terminale C',
      progress: 95,
      chapters: 7,
      exercises: 50,
      tag: 'Maîtrisé'
    },
    {
      id: 5,
      subject: 'Physique-Chimie',
      icon: '⚡',
      title: 'Chimie Organique : Estérification & Cinétique',
      level: 'Terminale C & D',
      progress: 50,
      chapters: 4,
      exercises: 25,
      tag: 'En cours'
    },
    {
      id: 6,
      subject: 'Philosophie',
      icon: '📖',
      title: 'La Conscience, l\'Inconscient et le Devoir Moral',
      level: 'Toutes Séries',
      progress: 30,
      chapters: 3,
      exercises: 15,
      tag: 'Méthodologie'
    }
  ];

  const filteredCourses = selectedSubject === 'all'
    ? courses
    : courses.filter(c => c.subject.toLowerCase() === selectedSubject.toLowerCase());

  return (
    <div className="space-y-6 animate-fadeInUp">
      
      {/* En-tête */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2F6FED] text-xs font-bold mb-2">
            <span>📚</span>
            <span>Programme Officiel du Baccalauréat</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1A1D29] tracking-tight">
            Mes Cours & Fiches de Révision
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Chaque fiche comprend les rappels de cours, les pièges à éviter et 10 exercices corrigés progressifs.
          </p>
        </div>

        {/* Filtres par matière */}
        <div className="flex items-center gap-1.5 p-1 bg-white rounded-2xl border border-slate-200 shadow-xs overflow-x-auto">
          {['all', 'Mathématiques', 'Physique-Chimie', 'SVT'].map((sub) => (
            <button
              key={sub}
              onClick={() => setSelectedSubject(sub)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedSubject === sub
                  ? 'bg-[#2F6FED] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#1A1D29]'
              }`}
            >
              {sub === 'all' ? 'Toutes les matières' : sub}
            </button>
          ))}
        </div>
      </div>

      {/* Grille des Cours */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs hover:border-blue-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-xl">
                  {course.icon}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-extrabold">
                  {course.tag}
                </span>
              </div>

              <div className="text-[11px] font-bold text-[#2F6FED] uppercase tracking-wider mb-1">
                {course.subject} • {course.level}
              </div>
              <h3 className="text-sm sm:text-base font-extrabold text-[#1A1D29] mb-3 leading-snug">
                {course.title}
              </h3>

              <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                <span>{course.chapters} chapitres</span>
                <span>•</span>
                <span>{course.exercises} exercices</span>
              </div>
            </div>

            <div>
              {/* Barre de progression */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-[11px] font-bold mb-1">
                  <span className="text-slate-500">Progression</span>
                  <span className="text-[#2F6FED]">{course.progress}%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#2F6FED] to-[#22C55E] rounded-full transition-all duration-500"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>

              <button
                onClick={() => onShowToast && onShowToast(`Ouverture du module : ${course.title}`, 'info')}
                className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 text-[#2F6FED] hover:text-[#1E4FD1] text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Accéder au cours</span>
                <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
