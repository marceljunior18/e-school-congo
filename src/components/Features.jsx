// Composant Features E-School (Section "Pourquoi Choisir E-School")
window.Features = function Features() {
  const features = [
    {
      icon: '🧠',
      tag: 'Tutorat IA',
      tagBg: 'bg-blue-50 text-[#2F6FED]',
      title: 'Correction Intelligente Étape par Étape',
      description: 'Notre assistant IA analyse vos réponses, décortique les démarches de calcul et vous explique précisément la règle mathématique ou scientifique à appliquer.'
    },
    {
      icon: '🎯',
      tag: 'Examens Officiels',
      tagBg: 'bg-[#E8F8EE] text-[#22C55E]',
      title: 'Simulations Réelles du Bac & BEPC',
      description: 'Accédez à plus de 10 ans d\'annales officielles corrigées selon le barème des examinateurs nationaux (Côte d\'Ivoire, Sénégal, Cameroun, Gabon).'
    },
    {
      icon: '📱',
      tag: 'Suivi Parental',
      tagBg: 'bg-[#FEF6E7] text-[#F5A623]',
      title: 'Espace Parents & Alertes WhatsApp',
      description: 'Les parents reçoivent chaque semaine un bilan clair des heures de révision, des progrès et des matières nécessitant un accompagnement renforcé.'
    },
    {
      icon: '⚡',
      tag: 'Mode Léger',
      tagBg: 'bg-indigo-50 text-indigo-600',
      title: 'Optimisé pour Faible Connexion',
      description: 'Consommation data ultra-réduite et fiches mémos téléchargeables pour continuer à réviser même sans connexion internet active.'
    },
    {
      icon: '🏆',
      tag: 'Excellence',
      tagBg: 'bg-amber-50 text-amber-600',
      title: 'Bourses d\'Excellence Trimestrielles',
      description: 'Les meilleurs élèves de chaque promotion sur le classement E-School reçoivent des primes d\'études allant jusqu\'à 100 000 FCFA.'
    },
    {
      icon: '👨‍🏫',
      tag: 'Corps Enseignant',
      tagBg: 'bg-emerald-50 text-emerald-600',
      title: 'Validé par des Professeurs Certifiés',
      description: 'Tous nos cours, exercices et synthèses sont rédigés et revus par des professeurs agrégés et inspecteurs pédagogiques régionaux.'
    }
  ];

  return (
    <section id="features-section" className="py-20 bg-white border-y border-slate-100 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#2F6FED] border border-blue-100 mb-3">
            Fonctionnalités Clés
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A1D29] tracking-tight mb-4">
            Tout ce dont un élève a besoin pour viser la <span className="bg-gradient-to-r from-[#2F6FED] to-[#1E4FD1] bg-clip-text text-transparent">Mention Très Bien</span>
          </h2>
          <p className="text-base text-slate-500 max-w-2xl mx-auto">
            Une méthode pédagogique éprouvée alliant rigueur académique africaine, technologie d'apprentissage et accompagnement sur-mesure.
          </p>
        </div>

        {/* Grille des 6 fonctionnalités */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feat, index) => (
            <div
              key={index}
              className="p-7 rounded-2xl bg-[#F7F8FA] border border-slate-200/60 hover:border-blue-200 hover:bg-white shadow-xs card-hover flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-200">
                    {feat.icon}
                  </div>
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${feat.tagBg}`}>
                    {feat.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#1A1D29] mb-2 group-hover:text-[#2F6FED] transition-colors">
                  {feat.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-normal">
                  {feat.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-200/50 flex items-center text-xs font-bold text-[#2F6FED] group-hover:translate-x-1 transition-transform">
                <span>En savoir plus</span>
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
