// Composant LoginPage E-School - Interface SaaS d'authentification élève
window.LoginPage = function LoginPage({ onNavigate, onLoginSuccess, initialEmail = '' }) {
  const [email, setEmail] = React.useState(initialEmail || 'marcel.junior@eschool.cg');
  const [password, setPassword] = React.useState('eschool2026');
  const [showPassword, setShowPassword] = React.useState(false);
  const [rememberMe, setRememberMe] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [showForgotModal, setShowForgotModal] = React.useState(false);

  // Soumission du formulaire
  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    setErrorMessage('');

    if (!email.trim()) {
      setErrorMessage('Veuillez saisir votre adresse email.');
      return;
    }
    if (!password.trim()) {
      setErrorMessage('Veuillez saisir votre mot de passe.');
      return;
    }

    setIsLoading(true);

    // Simulation de validation réseau
    setTimeout(() => {
      setIsLoading(false);
      if (onLoginSuccess) {
        onLoginSuccess({
          email,
          name: email.toLowerCase().includes('marcel') ? 'Marcel Junior' : 'Élève E-School',
          grade: 'Terminale C',
          city: 'Brazzaville 🇨🇬',
          school: 'Lycée Chaminade',
          avatar: 'assets/images/marcel-junior.jpg'
        });
      }
    }, 600);
  };

  // Connexion Démo Instantanée (1-Clic)
  const handleDemoFill = () => {
    setEmail('marcel.junior@eschool.cg');
    setPassword('eschool2026');
    setErrorMessage('');
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA] text-[#1A1D29] flex flex-col justify-between relative overflow-hidden font-sans selection:bg-blue-100 selection:text-[#2F6FED]">
      
      {/* Fond en filigrane subtil avec texture Congo satin */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10 mix-blend-multiply bg-cover bg-center"
        style={{ backgroundImage: "url('assets/images/congo-bg.jpg')" }}
      ></div>

      {/* Cercles diffus d'ambiance */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl"></div>
        <div className="absolute top-10 right-1/4 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl"></div>
      </div>

      {/* Barre supérieure épurée */}
      <header className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        
        {/* Logo E-School */}
        <div
          onClick={() => onNavigate('landing')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#2F6FED] to-[#1E4FD1] flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform duration-200">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-xl font-black tracking-tight text-[#1A1D29]">E-School</span>
            <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-[#E8F8EE] text-[#22C55E]">SaaS</span>
          </div>
        </div>

        {/* Bouton retour accueil */}
        <button
          onClick={() => onNavigate('landing')}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#1A1D29] hover:bg-slate-200/50 transition-colors btn-hover"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Retour à l'accueil</span>
        </button>
      </header>

      {/* Contenu Principal : Carte de Connexion */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-8 sm:py-12">
        <div className="max-w-md w-full mx-auto">
          
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/70 border border-slate-100 p-6 sm:p-9 relative overflow-hidden animate-fadeInUp">
            
            {/* Liseré supérieur en dégradé brand */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2F6FED] via-[#1E4FD1] to-[#22C55E]"></div>

            {/* En-tête de la carte */}
            <div className="text-center mb-6 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#2F6FED] text-xs font-bold mb-3">
                <span>🔐</span>
                <span>Espace Membre Élève</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-[#1A1D29] tracking-tight mb-2">
                Bon retour parmi nous
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto">
                Connectez-vous pour retrouver vos cours, séries d'exercices et simulations du Bac.
              </p>
            </div>

            {/* Encadré d'Accès Démo 1-Clic */}
            <div className="mb-6 bg-gradient-to-r from-blue-50/90 via-indigo-50/70 to-blue-50/90 border border-blue-200/80 rounded-2xl p-3.5">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#2F6FED] to-[#1E4FD1] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                    ⚡
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#1A1D29]">Compte Démo Pré-configuré</div>
                    <div className="text-[11px] text-slate-600">Marcel Junior • Terminale C (Brazzaville)</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleDemoFill}
                  className="px-2.5 py-1.5 rounded-lg bg-white border border-blue-200 text-[#2F6FED] text-[11px] font-bold shadow-2xs hover:bg-blue-50 transition-all cursor-pointer whitespace-nowrap btn-hover"
                >
                  Remplir
                </button>
              </div>
            </div>

            {/* Message d'erreur éventuel */}
            {errorMessage && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-semibold flex items-center gap-2 animate-fadeInUp">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Formulaire de Connexion */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Champ Email */}
              <div>
                <label className="block text-xs font-bold text-[#1A1D29] mb-1.5 uppercase tracking-wider">
                  Adresse Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="exemple@eschool.cg"
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-[#1A1D29] placeholder-slate-400 focus:bg-white focus:border-[#2F6FED] focus:ring-2 focus:ring-blue-100 transition-all outline-none"
                  />
                </div>
              </div>

              {/* Champ Mot de Passe */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-bold text-[#1A1D29] uppercase tracking-wider">
                    Mot de passe
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowForgotModal(true)}
                    className="text-xs font-semibold text-[#2F6FED] hover:text-[#1E4FD1] hover:underline cursor-pointer"
                  >
                    Mot de passe oublié ?
                  </button>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-11 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-[#1A1D29] placeholder-slate-400 focus:bg-white focus:border-[#2F6FED] focus:ring-2 focus:ring-blue-100 transition-all outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Se souvenir de moi */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded text-[#2F6FED] border-slate-300 focus:ring-[#2F6FED] cursor-pointer"
                  />
                  <span className="text-xs font-medium text-slate-600">Se souvenir de moi</span>
                </label>
                <span className="text-[11px] text-slate-400 font-medium">Session sécurisée</span>
              </div>

              {/* Bouton de Soumission */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-3 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#2F6FED] to-[#1E4FD1] text-white text-sm font-bold shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 btn-hover cursor-pointer transition-all disabled:opacity-75"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Connexion en cours...</span>
                  </>
                ) : (
                  <>
                    <span>Se connecter à mon espace</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>

            </form>

            {/* Séparateur */}
            <div className="relative my-6 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-100"></div>
              </div>
              <span className="relative px-3 bg-white text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Nouveau sur E-School ?
              </span>
            </div>

            {/* Lien Inscription */}
            <div className="text-center">
              <button
                type="button"
                onClick={() => onNavigate('signup')}
                className="w-full py-3 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 text-xs sm:text-sm font-bold text-[#1A1D29] hover:text-[#2F6FED] transition-all flex items-center justify-center gap-2 card-hover"
              >
                <span>Créer un compte élève gratuit</span>
                <span className="text-[#22C55E]">✨</span>
              </button>
            </div>

          </div>

          {/* Badges de confiance sous la carte */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <span>🔒</span> Chiffrement SSL 256-bit
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <span>🇨🇬</span> Programmes Officiels Congo & CEMAC
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <span>⚡</span> Support 7j/7
            </span>
          </div>

        </div>
      </main>

      {/* Pied de page discret */}
      <footer className="relative z-10 py-4 text-center text-xs text-slate-400">
        © 2026 E-School Technologies Africa. Tous droits réservés.
      </footer>

      {/* Modale Mot de passe oublié */}
      {showForgotModal && (
        <ForgotPasswordModal
          emailDefault={email}
          onClose={() => setShowForgotModal(false)}
        />
      )}

    </div>
  );
};

// Modale de Réinitialisation du Mot de Passe
function ForgotPasswordModal({ emailDefault, onClose }) {
  const [resetEmail, setResetEmail] = React.useState(emailDefault || '');
  const [isSent, setIsSent] = React.useState(false);
  const [isSending, setIsSending] = React.useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    if (!resetEmail.trim()) return;

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeInUp">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
        
        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center transition-colors cursor-pointer"
        >
          ✕
        </button>

        {!isSent ? (
          <div>
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2F6FED] flex items-center justify-center text-2xl mb-4">
              🔑
            </div>
            <h3 className="text-xl font-extrabold text-[#1A1D29] tracking-tight mb-2">
              Mot de passe oublié ?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">
              Saisissez l'adresse email associée à votre compte élève. Nous vous enverrons immédiatement un lien pour réinitialiser votre accès.
            </p>

            <form onSubmit={handleSend} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#1A1D29] mb-1.5 uppercase tracking-wider">
                  Votre Adresse Email
                </label>
                <input
                  type="email"
                  required
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  placeholder="marcel.junior@eschool.cg"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-[#1A1D29] focus:bg-white focus:border-[#2F6FED] focus:ring-2 focus:ring-blue-100 transition-all outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#2F6FED] to-[#1E4FD1] text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-500/20 btn-hover cursor-pointer transition-all disabled:opacity-75"
              >
                {isSending ? 'Envoi en cours...' : 'Envoyer le lien de réinitialisation'}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-2 animate-fadeInUp">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#22C55E] flex items-center justify-center text-3xl mx-auto mb-4">
              ✓
            </div>
            <h3 className="text-xl font-extrabold text-[#1A1D29] tracking-tight mb-2">
              Lien de réinitialisation envoyé !
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
              Un email contenant les instructions vient d'être expédié à l'adresse <strong className="text-[#1A1D29]">{resetEmail}</strong>. Veuillez vérifier votre boîte de réception et vos courriers indésirables.
            </p>
            <button
              onClick={onClose}
              className="w-full py-3 px-6 rounded-xl bg-[#2F6FED] text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-500/20 btn-hover cursor-pointer"
            >
              Retour à la page de connexion
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
