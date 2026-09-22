// Composant AppDashboard - Espace de Travail Complet de l'Élève avec Sidebar Dédiée (SaaS E-School)
window.AppDashboard = function AppDashboard({
  user,
  onLogout,
  onViewLanding,
  onUpdateUser,
  onShowToast
}) {
  const [activeSidebarTab, setActiveSidebarTab] = React.useState('dashboard');
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-[#F7F8FA] text-[#1A1D29] font-sans antialiased selection:bg-blue-100 selection:text-[#2F6FED]">
      
      {/* 1. Barre Latérale Dédiée (AppSidebar) */}
      <AppSidebar
        activeTab={activeSidebarTab}
        setActiveTab={setActiveSidebarTab}
        user={user}
        onLogout={onLogout}
        onViewLanding={onViewLanding}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      {/* 2. Zone Principale Décalée par la Sidebar */}
      <div className="lg:pl-72 flex flex-col min-h-screen">
        
        {/* Barre Supérieure Applicative */}
        <AppTopBar
          user={user}
          onOpenMobileMenu={() => setIsMobileOpen(true)}
          onSelectTab={setActiveSidebarTab}
          onLogout={onLogout}
        />

        {/* Corps de Page selon l'onglet actif */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          
          {/* ONGLET 1 : TABLEAU DE BORD PRINCIPAL (VUE 360°) */}
          {activeSidebarTab === 'dashboard' && (
            <div className="space-y-7 animate-fadeInUp">
              
              {/* Bannière de Bienvenue Personnalisée */}
              <div className="rounded-3xl bg-gradient-to-r from-white via-blue-50/40 to-indigo-50/40 border border-slate-200/80 p-6 sm:p-7 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-5 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F8EE] text-[#22C55E] text-xs font-bold mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse"></span>
                    <span>Session d'étude active</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-black text-[#1A1D29] tracking-tight">
                    Bonjour {user.name} 👋
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl leading-relaxed">
                    Vous êtes en <strong>{user.grade}</strong> ({user.school || 'Lycée Chaminade'}, {user.city}). Votre régularité de travail est excellente : continuez ainsi pour viser la mention Très Bien au Bac !
                  </p>
                </div>

                <div className="relative z-10 flex items-center gap-3 self-stretch md:self-auto justify-between md:justify-end">
                  <div className="bg-white p-3 rounded-2xl border border-slate-200/80 text-center shadow-xs">
                    <div className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400">Série en cours</div>
                    <div className="text-lg font-black text-[#2F6FED]">🔥 14 jours</div>
                  </div>

                  <button
                    onClick={() => setActiveSidebarTab('exams')}
                    className="px-5 py-3 rounded-2xl bg-gradient-to-r from-[#2F6FED] to-[#1E4FD1] text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-500/20 btn-hover cursor-pointer whitespace-nowrap"
                  >
                    Simuler un Bac Blanc →
                  </button>
                </div>
              </div>

              {/* Header Métriques */}
              <DashboardHeader />

              {/* Cartes de Statistiques */}
              <StatCards />

              {/* Graphiques Intermédiaires (SubjectChart + QuestionDonut) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-8">
                  <SubjectChart />
                </div>
                <div className="lg:col-span-4">
                  <QuestionDonut />
                </div>
              </div>

              {/* Examens Récents & Meilleurs Élèves */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-8">
                  <RecentExamsTable />
                </div>
                <div className="lg:col-span-4">
                  <TopPerformers />
                </div>
              </div>

              {/* Bandeau d'Accès Éducatif Pro avec redirection directe vers abonnement */}
              <div className="rounded-3xl bg-gradient-to-r from-blue-50 via-white to-indigo-50 border border-blue-100/90 p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-[#2F6FED] text-white flex items-center justify-center font-bold text-lg shadow-sm shadow-blue-500/30 shrink-0">
                    ⚡
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#1A1D29]">
                      Abonnement Actif : Accès Scolaire Illimité E-School Pro
                    </div>
                    <div className="text-xs text-slate-500">
                      Formule à 15 000 FCFA/mois • Prochaine échéance le {user.expiresAt || '17 Octobre 2026'}.
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 self-stretch sm:self-auto justify-between sm:justify-end">
                  <button
                    onClick={() => setActiveSidebarTab('subscription')}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#2F6FED] to-[#1E4FD1] text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-500/20 btn-hover cursor-pointer"
                  >
                    Gérer mon abonnement FCFA
                  </button>
                </div>
              </div>

            </div>
          )}

          {/* ONGLET 2 : COURS & FICHES DE RÉVISION */}
          {activeSidebarTab === 'courses' && (
            <CoursesView onShowToast={onShowToast} />
          )}

          {/* ONGLET 3 : SIMULATIONS DU BAC */}
          {activeSidebarTab === 'exams' && (
            <ExamsView onShowToast={onShowToast} />
          )}

          {/* ONGLET 4 : GESTION DE L'ABONNEMENT FCFA */}
          {activeSidebarTab === 'subscription' && (
            <SubscriptionView user={user} onShowToast={onShowToast} />
          )}

          {/* ONGLET 5 : PROFIL & PARAMÈTRES */}
          {activeSidebarTab === 'settings' && (
            <ProfileView
              user={user}
              onUpdateUser={onUpdateUser}
              onShowToast={onShowToast}
            />
          )}

        </main>

        {/* Pied de Page Minimaliste Espace Élève */}
        <footer className="py-5 px-6 border-t border-slate-200/60 text-center text-xs text-slate-400">
          E-School Technologies Africa • Espace d'Excellence Éducative • République du Congo 🇨🇬
        </footer>

      </div>

    </div>
  );
};
