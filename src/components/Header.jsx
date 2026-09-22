// Composant Header E-School avec navigation responsive et profil auto-layout Marcel Junior
window.Header = function Header({ activeTab, setActiveTab, onNavigate, auth }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { id: 'hero', label: 'Accueil', target: null },
    { id: 'dashboard', label: 'Tableau de bord', target: 'dashboard-section' },
    { id: 'features', label: 'Fonctionnalités', target: 'features-section' },
    { id: 'pricing', label: 'Tarifs (FCFA)', target: 'pricing-section' },
    { id: 'testimonials', label: 'Réussites', target: 'testimonials-section' },
    { id: 'faq', label: 'FAQ', target: 'faq-section' }
  ];

  const handleNavClick = (item) => {
    setActiveTab(item.id);
    setMobileMenuOpen(false);
    if (item.target) {
      const el = document.getElementById(item.target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo E-School */}
          <div
            onClick={() => handleNavClick(navLinks[0])}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#2F6FED] to-[#1E4FD1] flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform duration-200">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black tracking-tight text-[#1A1D29]">E-School</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-[#E8F8EE] text-[#22C55E]">SaaS</span>
              </div>
              <p className="text-[11px] font-medium text-slate-400 hidden sm:block">Plateforme d'Excellence Éducative</p>
            </div>
          </div>

          {/* Navigation Principale (Pill Tabs) */}
          <nav className="hidden lg:flex items-center bg-slate-50/90 p-1.5 rounded-2xl border border-slate-200/60 shadow-inner">
            {navLinks.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`relative px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-[#2F6FED] shadow-sm shadow-slate-200/80 font-bold'
                      : 'text-slate-500 hover:text-[#1A1D29] hover:bg-slate-100/60'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#2F6FED]"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Profil & Actions Droite (Auto-Layout Moderne) */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Badge Abonnement en FCFA */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse"></span>
              <span className="text-xs font-semibold text-slate-600">Formule Pro :</span>
              <span className="text-xs font-bold text-[#1E4FD1]">15 000 FCFA<span className="font-normal text-slate-500">/mois</span></span>
            </div>

            {/* Bouton Notifications */}
            <button
              title="Notifications"
              className="relative p-2.5 rounded-xl text-slate-500 hover:text-[#1A1D29] hover:bg-slate-100 transition-all duration-200 btn-hover hidden sm:block"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-[#F5A623] border-2 border-white rounded-full"></span>
            </button>

            {/* Profil Utilisateur AUTO-LAYOUT avec Marcel Junior (Image 2) */}
            <div
              onClick={() => onNavigate && onNavigate(auth && auth.isAuthenticated ? 'app-dashboard' : 'login')}
              title={auth && auth.isAuthenticated ? "Accéder au tableau de bord" : "Se connecter"}
              className="flex items-center gap-3 pl-2 sm:pl-3 sm:border-l sm:border-slate-200 py-1 pr-1.5 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer group"
            >
              <div className="relative w-10 h-10 rounded-2xl overflow-hidden ring-2 ring-blue-100 shadow-sm shrink-0">
                <img
                  src="assets/images/marcel-junior.jpg"
                  alt="Marcel Junior"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-200"
                />
                <span className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 ${auth && auth.isAuthenticated ? 'bg-[#22C55E]' : 'bg-slate-300'} border-2 border-white rounded-full`}></span>
              </div>
              <div className="hidden sm:flex flex-col text-left justify-center">
                <div className="text-sm font-bold text-[#1A1D29] group-hover:text-[#2F6FED] transition-colors leading-tight">
                  {auth && auth.user ? auth.user.name : 'Marcel Junior'}
                </div>
                <div className="text-[11px] font-semibold text-slate-400 mt-0.5">
                  {auth && auth.isAuthenticated ? 'Élève Connecté • Espace Pro' : 'Terminale C • Brazzaville 🇨🇬'}
                </div>
              </div>
            </div>

            {/* Bouton Connexion */}
            <button
              onClick={() => onNavigate && onNavigate('login')}
              className="hidden sm:inline-flex items-center px-3.5 py-2 rounded-xl text-slate-700 hover:text-[#2F6FED] hover:bg-slate-100/70 text-xs font-bold transition-all cursor-pointer btn-hover"
            >
              Connexion
            </button>

            {/* Bouton CTA Essai Gratuit */}
            <button
              onClick={() => {
                if (onNavigate) {
                  onNavigate('signup');
                } else {
                  const el = document.getElementById('pricing-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r from-[#2F6FED] to-[#1E4FD1] text-white text-xs font-bold shadow-sm shadow-blue-500/20 btn-hover"
            >
              Essai Gratuit
            </button>

            {/* Bouton Menu Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

          </div>
        </div>

        {/* Menu Déroulant Mobile */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-3 border-t border-slate-100 animate-fadeInUp">
            <div className="flex flex-col gap-1">
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`px-4 py-2.5 rounded-xl text-left text-sm font-semibold transition-colors ${
                    activeTab === item.id
                      ? 'bg-blue-50 text-[#2F6FED] font-bold'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Carte Profil Mobile Auto-Layout */}
              <div
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate && onNavigate(auth && auth.isAuthenticated ? 'app-dashboard' : 'login');
                }}
                className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between px-3 py-2 bg-slate-50 rounded-xl cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <img
                    src="assets/images/marcel-junior.jpg"
                    alt="Marcel Junior"
                    className="w-9 h-9 rounded-xl object-cover object-top ring-1 ring-blue-200"
                  />
                  <div>
                    <div className="text-xs font-bold text-[#1A1D29]">
                      {auth && auth.user ? auth.user.name : 'Marcel Junior'}
                    </div>
                    <div className="text-[10px] text-slate-500">
                      {auth && auth.isAuthenticated ? 'Élève Connecté' : 'Terminale C • Brazzaville 🇨🇬'}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#1E4FD1]">15 000 FCFA/mois</span>
              </div>

              {/* Actions Connexion / Inscription Mobile */}
              <div className="mt-2 pt-2 border-t border-slate-100 flex flex-col gap-2">
                <button
                  onClick={() => { setMobileMenuOpen(false); onNavigate && onNavigate('login'); }}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-[#2F6FED] bg-blue-50 hover:bg-blue-100 transition-colors flex items-center justify-between"
                >
                  <span>Se connecter à mon compte élève</span>
                  <span>→</span>
                </button>
                <button
                  onClick={() => { setMobileMenuOpen(false); onNavigate && onNavigate('signup'); }}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#2F6FED] to-[#1E4FD1] shadow-sm flex items-center justify-center gap-1.5"
                >
                  <span>Créer un compte élève</span>
                  <span>✨</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
