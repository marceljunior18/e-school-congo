// Composant Hero E-School avec fond satin texturé (Image 3) et intégration de Marcel Junior
window.Hero = function Hero() {
  const scrollToDashboard = () => {
    const el = document.getElementById('dashboard-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPricing = () => {
    const el = document.getElementById('pricing-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 bg-[#F7F8FA]">
      
      {/* FOND SUBTIL AVEC L'IMAGE 3 (Drapé Satin Congo) en filigrane doux et élégant */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15 mix-blend-multiply bg-cover bg-center transition-opacity duration-700"
        style={{ backgroundImage: "url('assets/images/congo-bg.jpg')" }}
      ></div>

      {/* Dégradé doux de superposition pour une lisibilité texte parfaite */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-[#F7F8FA] pointer-events-none"></div>

      {/* Cercles diffus d'ambiance */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl"></div>
        <div className="absolute top-10 right-1/4 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          
          {/* Badge Annonce avec drapeau */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-blue-200/80 shadow-xs mb-6 backdrop-blur-md animate-fadeInUp">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]"></span>
            </span>
            <span className="text-xs font-bold text-[#1E4FD1]">
              🇨🇬 E-School 2.0 • Conforme aux programmes officiels & Baccalauréat
            </span>
          </div>

          {/* Titre Principal H1 */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1A1D29] tracking-tight leading-[1.15] sm:leading-[1.12] mb-6">
            L'Excellence Scolaire & la{' '}
            <span className="bg-gradient-to-r from-[#2F6FED] via-[#255ED4] to-[#1E4FD1] bg-clip-text text-transparent">
              Réussite aux Examens
            </span>{' '}
            à Portée de Main
          </h1>

          {/* Sous-titre */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
            La plateforme SaaS éducative tout-en-un pour lycéens, collégiens et parents au Congo et en Afrique Centrale. Révisez avec plus de <strong className="text-[#1A1D29]">5 000 exercices corrigés</strong>, des simulations réelles du Bac et un suivi personnalisé en temps réel.
          </p>

          {/* Boutons d'Action (Dual CTA) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <button
              onClick={scrollToPricing}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#2F6FED] to-[#1E4FD1] text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-500/25 btn-hover group"
            >
              <span>Commencer l'essai gratuit (0 FCFA)</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            <button
              onClick={scrollToDashboard}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-slate-700 font-bold text-sm sm:text-base border border-slate-200 shadow-sm hover:border-blue-200 hover:bg-slate-50/80 btn-hover group"
            >
              <svg className="w-5 h-5 text-[#2F6FED] group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <span>Explorer le Dashboard interactif</span>
            </button>
          </div>

          {/* Réassurance sous boutons */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-500 mb-12">
            <div className="flex items-center gap-1.5">
              <span className="text-[#22C55E] font-bold">✓</span>
              <span>Sans carte bancaire requise</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#22C55E] font-bold">✓</span>
              <span>Conforme aux programmes nationaux</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#22C55E] font-bold">✓</span>
              <span>Formule dès <strong className="text-[#1A1D29]">15 000 FCFA/mois</strong></span>
            </div>
          </div>

          {/* Preuves Sociales */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-3xl mx-auto">
            <div className="p-5 rounded-2xl bg-white/95 border border-slate-100 shadow-sm shadow-slate-200/50 card-hover flex items-center gap-4 backdrop-blur-xs">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2F6FED] flex items-center justify-center font-black text-xl shrink-0">
                🎓
              </div>
              <div>
                <div className="text-2xl font-extrabold text-[#1A1D29] tracking-tight">+25 000</div>
                <div className="text-xs text-slate-500 font-medium">Élèves actifs accompagnés</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/95 border border-slate-100 shadow-sm shadow-slate-200/50 card-hover flex items-center gap-4 backdrop-blur-xs">
              <div className="w-12 h-12 rounded-xl bg-[#E8F8EE] text-[#22C55E] flex items-center justify-center font-black text-xl shrink-0">
                📈
              </div>
              <div>
                <div className="text-2xl font-extrabold text-[#1A1D29] tracking-tight">94.8%</div>
                <div className="text-xs text-slate-500 font-medium">Taux de réussite au Bac</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/95 border border-slate-100 shadow-sm shadow-slate-200/50 card-hover flex items-center gap-4 backdrop-blur-xs">
              <div className="w-12 h-12 rounded-xl bg-[#FEF6E7] text-[#F5A623] flex items-center justify-center font-black text-xl shrink-0">
                ⭐
              </div>
              <div>
                <div className="text-2xl font-extrabold text-[#1A1D29] tracking-tight">4.9 / 5</div>
                <div className="text-xs text-slate-500 font-medium">1 450+ avis certifiés</div>
              </div>
            </div>
          </div>

        </div>

        {/* Transition vers le Dashboard */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/90 border border-slate-200/70 text-slate-600 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse"></span>
            Démonstration Produit en Direct
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-[#1A1D29] tracking-tight">
            Découvrez votre Espace de Travail E-School
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto mt-1">
            Chaque élève dispose d'un tableau de bord sur-mesure pour mesurer son avancement et combler ses lacunes.
          </p>
        </div>

      </div>
    </section>
  );
};
