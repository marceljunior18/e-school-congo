// Composant AppTopBar - Barre supérieure de l'espace de travail élève
window.AppTopBar = function AppTopBar({
  user,
  onOpenMobileMenu,
  onSelectTab,
  onLogout
}) {
  const [showNotifications, setShowNotifications] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  const mockNotifications = [
    {
      id: 1,
      title: 'Correction de Devoir disponible',
      time: 'Il y a 10 min',
      desc: 'Votre simulation de Mathématiques (Session 2024) a été corrigée : 17.5/20 !',
      unread: true,
      icon: '📝'
    },
    {
      id: 2,
      title: 'Nouveau sujet du Bac Congo en ligne',
      time: 'Il y a 2h',
      desc: 'Épreuve de Physique-Chimie Série C avec corrigé détaillé étape par étape.',
      unread: true,
      icon: '⚡'
    },
    {
      id: 3,
      title: 'Rappel Abonnement Pro',
      time: 'Hier',
      desc: 'Votre formule 15 000 FCFA/mois est active jusqu\'au 17 Octobre 2026.',
      unread: false,
      icon: '💳'
    }
  ];

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
      
      {/* Gauche : Bouton menu burger mobile + Barre de recherche */}
      <div className="flex items-center gap-3 flex-1 max-w-xl">
        <button
          onClick={onOpenMobileMenu}
          className="lg:hidden p-2 rounded-xl text-slate-500 hover:text-[#1A1D29] hover:bg-slate-100 cursor-pointer"
          title="Ouvrir le menu"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Barre de recherche */}
        <div className="relative w-full max-w-md">
          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher une épreuve, un cours, un corrigé..."
            className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50/70 text-[#1A1D29] placeholder-slate-400 focus:outline-none focus:border-[#2F6FED] focus:bg-white focus:ring-3 focus:ring-blue-500/10 transition-all"
          />
        </div>
      </div>

      {/* Droite : Badge Pro + Assistant IA + Notifications + Profil */}
      <div className="flex items-center gap-2 sm:gap-3">
        
        {/* Badge Pro FCFA cliquable vers subscription */}
        <button
          onClick={() => onSelectTab('subscription')}
          className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/80 text-xs font-bold text-[#1E4FD1] hover:shadow-xs transition-all cursor-pointer"
          title="Gérer mon abonnement"
        >
          <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse"></span>
          <span>15 000 FCFA</span>
          <span className="text-[10px] font-normal text-slate-500">/mois</span>
        </button>

        {/* Cloche de notifications */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 rounded-xl text-slate-500 hover:text-[#1A1D29] hover:bg-slate-100 transition-colors relative cursor-pointer"
            title="Notifications"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 ring-2 ring-white"></span>
          </button>

          {/* Menu déroulant notifications */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 z-50 animate-fadeInUp">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="text-xs font-extrabold text-[#1A1D29] uppercase tracking-wider">
                  Notifications Éducatives
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#2F6FED]">
                  2 non lues
                </span>
              </div>

              <div className="divide-y divide-slate-100 max-h-72 overflow-y-auto">
                {mockNotifications.map((notif) => (
                  <div key={notif.id} className={`py-3 px-1 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer ${notif.unread ? 'bg-blue-50/30' : ''}`}>
                    <div className="flex items-start gap-2.5">
                      <span className="text-base">{notif.icon}</span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-bold text-[#1A1D29]">{notif.title}</h4>
                          <span className="text-[10px] text-slate-400">{notif.time}</span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">{notif.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-center border-t border-slate-100">
                <button
                  onClick={() => setShowNotifications(false)}
                  className="text-xs font-bold text-[#2F6FED] hover:underline cursor-pointer"
                >
                  Fermer
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Profil cliquable */}
        <div
          onClick={() => onSelectTab('settings')}
          className="flex items-center gap-2 pl-2 sm:pl-3 sm:border-l sm:border-slate-200/80 cursor-pointer group"
          title="Mon profil"
        >
          <img
            src={user.avatar || 'assets/images/marcel-junior.jpg'}
            alt={user.name}
            className="w-8 h-8 rounded-xl object-cover object-top ring-1 ring-slate-200 group-hover:ring-[#2F6FED] transition-all"
          />
          <div className="hidden md:block text-left">
            <div className="text-xs font-bold text-[#1A1D29] group-hover:text-[#2F6FED] transition-colors">{user.name}</div>
            <div className="text-[10px] text-slate-400">{user.grade}</div>
          </div>
        </div>

      </div>

    </header>
  );
};
