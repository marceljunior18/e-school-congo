// Composant Footer E-School (Pied de Page & CTA Final)
window.Footer = function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1D29] text-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BANNIÈRE CTA FINALE AVANT FOOTER */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#2F6FED] via-[#255ED4] to-[#1E4FD1] p-8 sm:p-12 mb-16 shadow-2xl shadow-blue-500/20 text-center">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 text-white backdrop-blur-sm mb-4">
              Rejoignez plus de 25 000 élèves
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4">
              Prêt à décrocher votre examen avec Mention ?
            </h3>
            <p className="text-sm sm:text-base text-blue-100 mb-8 font-normal">
              Créez votre compte en 2 minutes et commencez vos premières simulations d'exercices gratuitement.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-white text-[#1A1D29] font-black text-sm sm:text-base hover:bg-blue-50 shadow-lg btn-hover">
                Commencer gratuitement (0 FCFA)
              </button>
              <button
                onClick={scrollToTop}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm sm:text-base border border-white/20 backdrop-blur-sm btn-hover"
              >
                Retour en haut ↑
              </button>
            </div>
          </div>
          
          {/* Éléments abstraits décoratifs */}
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -left-10 -top-10 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        </div>

        {/* GRILLE DU FOOTER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800 text-xs sm:text-sm">
          
          {/* Colonne 1 : Marque & Mission */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4 cursor-pointer" onClick={scrollToTop}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2F6FED] to-[#1E4FD1] flex items-center justify-center shadow-md">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <span className="text-xl font-black tracking-tight text-white">E-School</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm mb-6">
              E-School est la plateforme technologique d'excellence éducative conçue pour démocratiser l'accès aux meilleurs outils d'apprentissage en Afrique francophone.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-pulse"></span>
              <span>Plateforme active • Serveurs en ligne (99.9%)</span>
            </div>
          </div>

          {/* Colonne 2 : Plateforme */}
          <div>
            <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-4">
              Plateforme
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#dashboard-section" className="hover:text-white transition-colors">Tableau de bord</a></li>
              <li><a href="#features-section" className="hover:text-white transition-colors">Exercices Corrigés</a></li>
              <li><a href="#features-section" className="hover:text-white transition-colors">Simulations du Bac</a></li>
              <li><a href="#dashboard-section" className="hover:text-white transition-colors">Assistant Pédagogique IA</a></li>
              <li><a href="#features-section" className="hover:text-white transition-colors">Espace Parents</a></li>
            </ul>
          </div>

          {/* Colonne 3 : Programmes & Matières */}
          <div>
            <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-4">
              Matières Clés
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><span className="hover:text-white transition-colors cursor-pointer">Mathématiques (C, D, S)</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Physique & Chimie</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Sciences de la Vie (SVT)</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Informatique & Algorithmique</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Français & Philosophie</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Anglais & LV1</span></li>
            </ul>
          </div>

          {/* Colonne 4 : Tarifs & Légal */}
          <div>
            <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-4">
              Informations
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#pricing-section" className="hover:text-white transition-colors">Tarifs en FCFA</a></li>
              <li><a href="#testimonials-section" className="hover:text-white transition-colors">Témoignages Bacheliers</a></li>
              <li><a href="#faq-section" className="hover:text-white transition-colors">FAQ & Assistance</a></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Bourses d'Excellence</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Politique de Confidentialité</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Conditions Générales</span></li>
            </ul>
          </div>

        </div>

        {/* BAS DU FOOTER (COPYRIGHT & MENTIONS) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 E-School Technologies Africa. Tous droits réservés.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Abidjan</span>
            <span>•</span>
            <span>Dakar</span>
            <span>•</span>
            <span>Douala</span>
            <span>•</span>
            <span>Libreville</span>
            <span>•</span>
            <span>Lomé</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
