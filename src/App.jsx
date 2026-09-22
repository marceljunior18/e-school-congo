// Assemblage Complet du SaaS E-School avec Routage d'État Frontend (Landing, Connexion, Inscription, Dashboard Dédié)
window.App = function App() {
  const [activeTab, setActiveTab] = React.useState('dashboard');
  const [currentView, setCurrentView] = React.useState('landing'); // 'landing' | 'login' | 'signup' | 'app-dashboard'
  const [auth, setAuth] = React.useState({
    isAuthenticated: false,
    user: {
      name: 'Marcel Junior',
      email: 'marcel.junior@eschool.cg',
      phone: '+242 06 912 34 56',
      grade: 'Terminale C',
      city: 'Brazzaville 🇨🇬',
      school: 'Lycée Chaminade',
      avatar: 'assets/images/marcel-junior.jpg',
      plan: 'Pro (15 000 FCFA/mois)',
      expiresAt: '17 Octobre 2026'
    }
  });
  const [toast, setToast] = React.useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  // Connexion Réussie
  const handleLoginSuccess = (userData) => {
    setAuth(prev => ({
      isAuthenticated: true,
      user: { ...prev.user, ...userData }
    }));
    showToast(`Connexion réussie ! Bienvenue dans votre espace, ${userData.name || 'Marcel'}.`, 'success');
    setCurrentView('app-dashboard');
  };

  // Inscription Réussie
  const handleSignupSuccess = (userData) => {
    setAuth({
      isAuthenticated: true,
      user: {
        ...auth.user,
        ...userData
      }
    });
    showToast(`Compte créé avec succès ! Bienvenue sur E-School, ${userData.name}.`, 'success');
    setCurrentView('app-dashboard');
  };

  // Mise à jour du profil élève
  const handleUpdateUser = (updatedData) => {
    setAuth(prev => ({
      ...prev,
      user: {
        ...prev.user,
        ...updatedData
      }
    }));
  };

  // Déconnexion
  const handleLogout = () => {
    setAuth(prev => ({
      ...prev,
      isAuthenticated: false
    }));
    showToast('Vous avez été déconnecté avec succès.', 'info');
    setCurrentView('landing');
  };

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  return (
    <div className="min-h-screen bg-[#F7F8FA] text-[#1A1D29] font-sans antialiased flex flex-col selection:bg-blue-100 selection:text-[#2F6FED]">
      
      {/* Toast Notification Flottant */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 animate-fadeInUp">
          <div className="flex items-center gap-3 px-4 py-3 bg-white border border-slate-200/90 rounded-2xl shadow-xl shadow-slate-300/40 text-xs sm:text-sm font-bold text-[#1A1D29]">
            <span className={`w-2.5 h-2.5 rounded-full ${toast.type === 'error' ? 'bg-red-500' : toast.type === 'info' ? 'bg-blue-500' : 'bg-[#22C55E]'} animate-pulse`}></span>
            <span>{toast.message}</span>
            <button
              onClick={() => setToast(null)}
              className="ml-2 text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* VUE 1 : PAGE DE CONNEXION */}
      {currentView === 'login' && (
        <LoginPage
          onNavigate={(view) => setCurrentView(view)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}

      {/* VUE 2 : PAGE D'INSCRIPTION ÉLÈVE */}
      {currentView === 'signup' && (
        <SignupPage
          onNavigate={(view) => setCurrentView(view)}
          onSignupSuccess={handleSignupSuccess}
        />
      )}

      {/* VUE 3 : ESPACE DE TRAVAIL CONNECTÉ DÉDIÉ (DASHBOARD SAAS AVEC SIDEBAR) */}
      {currentView === 'app-dashboard' && (
        <AppDashboard
          user={auth.user}
          onLogout={handleLogout}
          onViewLanding={() => setCurrentView('landing')}
          onUpdateUser={handleUpdateUser}
          onShowToast={showToast}
        />
      )}

      {/* VUE 4 : LANDING PAGE PUBLIQUE MARKETING */}
      {currentView === 'landing' && (
        <>
          {/* Header */}
          <Header
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onNavigate={(view) => setCurrentView(view)}
            auth={auth}
            onLogout={handleLogout}
          />

          {/* Bandeau de session active si l'élève est connecté */}
          {auth.isAuthenticated && (
            <div className="bg-gradient-to-r from-[#2F6FED] to-[#1E4FD1] text-white py-2.5 px-4 shadow-sm animate-fadeInUp">
              <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-pulse"></span>
                  <span>
                    Session active : <strong className="font-bold">{auth.user.name}</strong> ({auth.user.grade} • {auth.user.city})
                  </span>
                  <span className="hidden md:inline text-blue-100">• Formule Pro active (15 000 FCFA/mois)</span>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setCurrentView('app-dashboard')}
                    className="underline hover:text-blue-100 font-extrabold cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Accéder à mon Espace de Travail</span>
                    <span>→</span>
                  </button>
                  <span>•</span>
                  <button
                    onClick={handleLogout}
                    className="hover:text-red-200 font-semibold cursor-pointer underline"
                  >
                    Se déconnecter
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 1. Hero Section */}
          <Hero />

          {/* 2. Vitrine Tableau de Bord (Dashboard Interactif Cognify) */}
          <section id="dashboard-section" className="relative scroll-mt-24 pb-16">
            <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
              <DashboardHeader />
              <StatCards />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-7">
                <div className="lg:col-span-8">
                  <SubjectChart />
                </div>
                <div className="lg:col-span-4">
                  <QuestionDonut />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
                <div className="lg:col-span-8">
                  <RecentExamsTable />
                </div>
                <div className="lg:col-span-4">
                  <TopPerformers />
                </div>
              </div>

              {/* Bandeau d'Accès Éducatif Pro */}
              <div className="rounded-2xl bg-gradient-to-r from-blue-50 via-white to-indigo-50 border border-blue-100/80 p-5 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#2F6FED] text-white flex items-center justify-center font-bold text-base shadow-sm shadow-blue-500/30">
                    ⚡
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#1A1D29]">
                      Accès Scolaire Illimité E-School Pro
                    </div>
                    <div className="text-xs text-slate-500">
                      Accédez à plus de 5 000 exercices corrigés, simulations du Bac et fiches de synthèse.
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 self-stretch sm:self-auto justify-between sm:justify-end">
                  <div className="text-right">
                    <div className="text-xs text-slate-400 font-medium">Tarif Étudiant</div>
                    <div className="text-base font-extrabold text-[#1E4FD1]">
                      15 000 FCFA <span className="text-xs font-normal text-slate-500">/mois</span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      if (auth.isAuthenticated) {
                        setCurrentView('app-dashboard');
                      } else {
                        const el = document.getElementById('pricing-section');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#2F6FED] to-[#1E4FD1] text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-500/20 btn-hover cursor-pointer"
                  >
                    {auth.isAuthenticated ? 'Mon Espace Pro' : 'Gérer mon abonnement'}
                  </button>
                </div>
              </div>
            </main>
          </section>

          {/* 3. Section Fonctionnalités Clés */}
          <Features />

          {/* 4. Section Tarifs en FCFA */}
          <Pricing />

          {/* 5. Section Témoignages & Bacheliers */}
          <Testimonials />

          {/* 6. Section FAQ Interactive */}
          <FAQ />

          {/* 7. Footer Complet & CTA de Clôture */}
          <Footer />
        </>
      )}

    </div>
  );
};
