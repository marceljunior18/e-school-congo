// Navigation Latérale Dédiée de l'Espace Élève E-School (AppSidebar)
window.AppSidebar = function AppSidebar({
  activeTab,
  setActiveTab,
  user,
  onLogout,
  onViewLanding,
  isMobileOpen,
  setIsMobileOpen
}) {
  const menuItems = [
    {
      id: 'dashboard',
      label: 'Tableau de bord',
      desc: 'Vue d\'ensemble & métriques',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      )
    },
    {
      id: 'courses',
      label: 'Mes Cours & Séries',
      desc: 'Exercices & fiches de cours',
      badge: '12 fiches',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      id: 'exams',
      label: 'Simulations du Bac',
      desc: 'Épreuves officielles & corrigés',
      badge: 'Nouveau',
      badgeColor: 'bg-emerald-100 text-emerald-700',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 'subscription',
      label: 'Mon Abonnement Pro',
      desc: 'Factures & renouvellement FCFA',
      badge: 'Pro Actif',
      badgeColor: 'bg-blue-100 text-[#1E4FD1]',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      id: 'settings',
      label: 'Profil & Paramètres',
      desc: 'Série, lycée & mot de passe',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
    <>
      {/* Overlay mobile */}
      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-xs lg:hidden transition-opacity"
        ></div>
      )}

      {/* Barre latérale */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 bg-white border-r border-slate-200/80 flex flex-col justify-between transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isMobileOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
        }`}
      >
        <div>
          
          {/* Header de la Sidebar */}
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <div
              onClick={() => onViewLanding && onViewLanding()}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#2F6FED] to-[#1E4FD1] flex items-center justify-center shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform duration-200">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-black tracking-tight text-[#1A1D29]">E-School</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-blue-50 text-[#2F6FED] border border-blue-200/60">Pro</span>
                </div>
                <p className="text-[10px] font-semibold text-slate-400">Espace de Travail Élève</p>
              </div>
            </div>

            {/* Bouton fermer sur mobile */}
            <button
              onClick={() => setIsMobileOpen(false)}
              className="lg:hidden p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Carte Profil de l'Élève */}
          <div className="p-4 mx-3 my-3 bg-gradient-to-br from-slate-50 to-blue-50/40 rounded-2xl border border-slate-200/70">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={user.avatar || 'assets/images/marcel-junior.jpg'}
                  alt={user.name}
                  className="w-11 h-11 rounded-xl object-cover object-top ring-2 ring-[#2F6FED]/20"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#22C55E] border-2 border-white rounded-full"></span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-black text-[#1A1D29] truncate">{user.name}</div>
                <div className="text-[11px] font-semibold text-[#2F6FED] truncate">{user.grade}</div>
                <div className="text-[10px] text-slate-400 truncate">{user.school || 'Lycée Chaminade'} • {user.city}</div>
              </div>
            </div>

            <div className="mt-2.5 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[10px]">
              <span className="text-slate-500 font-medium">Abonnement :</span>
              <span className="font-bold text-[#1E4FD1] bg-blue-100/70 px-2 py-0.5 rounded-md">15 000 FCFA/m</span>
            </div>
          </div>

          {/* Liens de Navigation Principale */}
          <nav className="px-3 space-y-1">
            <div className="px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
              Espace de Travail
            </div>

            {menuItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#2F6FED] to-[#1E4FD1] text-white shadow-md shadow-blue-500/25'
                      : 'text-slate-600 hover:text-[#1A1D29] hover:bg-slate-100/80'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={isActive ? 'text-white' : 'text-slate-400'}>{item.icon}</span>
                    <div className="text-left">
                      <div>{item.label}</div>
                    </div>
                  </div>

                  {item.badge && (
                    <span
                      className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded-md ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : item.badgeColor || 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

        </div>

        {/* Pied de Sidebar */}
        <div className="p-3 border-t border-slate-100 space-y-2">
          
          {/* Raccourci vers la vitrine marketing */}
          <button
            onClick={() => onViewLanding && onViewLanding()}
            className="w-full flex items-center gap-2.5 px-3.5 py-2 text-xs font-semibold text-slate-500 hover:text-[#1A1D29] hover:bg-slate-50 rounded-xl transition-colors cursor-pointer"
          >
            <span>🌐</span>
            <span>Voir le site public</span>
          </button>

          {/* Bouton de Déconnexion */}
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-2.5 px-3.5 py-2 text-xs font-bold text-red-600 hover:bg-red-50 rounded-xl transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span>Se déconnecter</span>
          </button>

          {/* Copyright & Info */}
          <div className="text-center pt-1 text-[10px] text-slate-400">
            E-School v2.4 • Congo 🇨🇬
          </div>

        </div>

      </aside>
    </>
  );
};
