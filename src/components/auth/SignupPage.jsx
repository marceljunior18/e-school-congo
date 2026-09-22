// Composant SignupPage E-School - Inscription des élèves avec identité visuelle SaaS E-School
window.SignupPage = function SignupPage({ onNavigate, onSignupSuccess }) {
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    phone: '',
    city: 'Brazzaville 🇨🇬',
    school: '',
    grade: 'Terminale C',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  const gradesList = [
    'Terminale C (Scientifique)',
    'Terminale D (Sciences Naturelles)',
    'Terminale A (Littéraire)',
    'Première C',
    'Première D',
    'Première A',
    'Seconde Scientifique',
    'Troisième (Prépa BEPC)'
  ];

  const citiesList = [
    'Brazzaville 🇨🇬',
    'Pointe-Noire 🇨🇬',
    'Dolisie 🇨🇬',
    'Nkayi 🇨🇬',
    'Ouesso 🇨🇬',
    'Oyo 🇨🇬',
    'Libreville 🇬🇦',
    'Douala / Yaoundé 🇨🇲',
    'Autre ville'
  ];

  // Remplissage Démo 1-Clic pour tester facilement
  const handleDemoFill = () => {
    setFormData({
      fullName: 'Grâce Ngoma',
      email: 'grace.ngoma@eschool.cg',
      phone: '+242 06 912 34 56',
      city: 'Pointe-Noire 🇨🇬',
      school: 'Lycée Victor Augagneur',
      grade: 'Terminale D (Sciences Naturelles)',
      password: 'graceSaaS2026!',
      confirmPassword: 'graceSaaS2026!',
      agreeTerms: true
    });
    setErrorMessage('');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Calcul visuel de la force du mot de passe
  const getPasswordStrength = () => {
    const pwd = formData.password;
    if (!pwd) return { level: 0, text: '', color: 'bg-slate-200' };
    if (pwd.length < 6) return { level: 1, text: 'Trop court', color: 'bg-red-400' };
    if (pwd.length < 9) return { level: 2, text: 'Moyen', color: 'bg-amber-400' };
    return { level: 3, text: 'Sécurisé', color: 'bg-emerald-500' };
  };

  const strength = getPasswordStrength();

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim()) {
      setErrorMessage('Veuillez saisir votre nom complet.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Veuillez saisir une adresse email valide.');
      return;
    }
    if (!formData.password) {
      setErrorMessage('Veuillez définir un mot de passe.');
      return;
    }
    if (formData.password.length < 6) {
      setErrorMessage('Le mot de passe doit contenir au moins 6 caractères.');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Les deux mots de passe ne correspondent pas.');
      return;
    }
    if (!formData.agreeTerms) {
      setErrorMessage('Veuillez accepter les conditions générales pour poursuivre.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      if (onSignupSuccess) {
        onSignupSuccess({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          city: formData.city,
          school: formData.school || 'Lycée d\'Excellence',
          grade: formData.grade.split(' ')[0] + ' ' + (formData.grade.split(' ')[1] || ''),
          avatar: 'assets/images/marcel-junior.jpg',
          plan: 'Pro (15 000 FCFA/mois)',
          expiresAt: '17 Octobre 2026'
        });
      }
    }, 700);
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA] text-[#1A1D29] flex flex-col justify-between relative overflow-hidden font-sans selection:bg-blue-100 selection:text-[#2F6FED]">
      
      {/* Fond filigrane & halos lumineux */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10 mix-blend-multiply bg-cover bg-center"
        style={{ backgroundImage: "url('assets/images/congo-bg.jpg')" }}
      ></div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl"></div>
        <div className="absolute top-10 right-1/4 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl"></div>
      </div>

      {/* Barre supérieure épurée */}
      <header className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
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

      {/* Contenu Principal */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-8 sm:py-10">
        <div className="max-w-xl w-full mx-auto">
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/70 border border-slate-100 p-6 sm:p-9 relative overflow-hidden animate-fadeInUp">
            
            {/* Liseré supérieur en dégradé brand */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2F6FED] via-[#1E4FD1] to-[#22C55E]"></div>

            {/* En-tête */}
            <div className="text-center mb-6 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#2F6FED] text-xs font-bold mb-3">
                <span>🚀</span>
                <span>Création de Compte Élève</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-[#1A1D29] tracking-tight mb-2">
                Rejoignez E-School
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
                Accédez à plus de 5 000 exercices interactifs, simulations du Bac et fiches de synthèse pour réussir avec mention.
              </p>
            </div>

            {/* Remplissage Démo 1-Clic */}
            <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-blue-50/80 to-indigo-50/80 border border-blue-100/90 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#2F6FED] text-white flex items-center justify-center text-sm font-bold shrink-0">
                  ⚡
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1A1D29]">Profil Démo Pré-rempli</div>
                  <div className="text-[11px] text-slate-500">Grâce Ngoma • Terminale D • Pointe-Noire</div>
                </div>
              </div>
              <button
                type="button"
                onClick={handleDemoFill}
                className="px-3.5 py-1.5 bg-white hover:bg-blue-50 text-[#2F6FED] border border-blue-200 rounded-xl text-xs font-bold shadow-xs transition-all cursor-pointer btn-hover shrink-0"
              >
                Remplir en 1 clic
              </button>
            </div>

            {/* Message d'erreur */}
            {errorMessage && (
              <div className="mb-5 p-3.5 rounded-2xl bg-red-50 border border-red-200/80 text-red-600 text-xs font-medium flex items-center gap-2.5 animate-fadeInUp">
                <span className="text-base">⚠️</span>
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Formulaire */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Ligne 1 : Nom complet */}
              <div>
                <label className="block text-xs font-bold text-[#1A1D29] mb-1.5 uppercase tracking-wider">
                  Nom & Prénom de l'Élève <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    👤
                  </span>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Ex: Grâce Ngoma"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm font-medium text-[#1A1D29] placeholder-slate-400 focus:outline-none focus:border-[#2F6FED] focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
                  />
                </div>
              </div>

              {/* Ligne 2 : Email & Téléphone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1A1D29] mb-1.5 uppercase tracking-wider">
                    Adresse Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      ✉️
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="eleve@eschool.cg"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm font-medium text-[#1A1D29] placeholder-slate-400 focus:outline-none focus:border-[#2F6FED] focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1A1D29] mb-1.5 uppercase tracking-wider">
                    Numéro WhatsApp / Téléphone
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      📱
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+242 06 000 00 00"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm font-medium text-[#1A1D29] placeholder-slate-400 focus:outline-none focus:border-[#2F6FED] focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Ligne 3 : Classe & Ville */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1A1D29] mb-1.5 uppercase tracking-wider">
                    Classe / Série du Bac <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      🎓
                    </span>
                    <select
                      name="grade"
                      value={formData.grade}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm font-semibold text-[#1A1D29] focus:outline-none focus:border-[#2F6FED] focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all cursor-pointer"
                    >
                      {gradesList.map((g) => (
                        <option key={g} value={g}>{g}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1A1D29] mb-1.5 uppercase tracking-wider">
                    Ville de Résidence <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      📍
                    </span>
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm font-semibold text-[#1A1D29] focus:outline-none focus:border-[#2F6FED] focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all cursor-pointer"
                    >
                      {citiesList.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Ligne 4 : Établissement Scolaire */}
              <div>
                <label className="block text-xs font-bold text-[#1A1D29] mb-1.5 uppercase tracking-wider">
                  Lycée / Établissement d'Origine
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    🏛️
                  </span>
                  <input
                    type="text"
                    name="school"
                    value={formData.school}
                    onChange={handleChange}
                    placeholder="Ex: Lycée Chaminade, Lycée Victor Augagneur..."
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm font-medium text-[#1A1D29] placeholder-slate-400 focus:outline-none focus:border-[#2F6FED] focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
                  />
                </div>
              </div>

              {/* Ligne 5 : Mot de passe & Confirmation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1A1D29] mb-1.5 uppercase tracking-wider">
                    Mot de passe <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      🔒
                    </span>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-10 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm font-medium text-[#1A1D29] placeholder-slate-400 focus:outline-none focus:border-[#2F6FED] focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                    >
                      {showPassword ? '🙈' : '👁️'}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1A1D29] mb-1.5 uppercase tracking-wider">
                    Confirmer le mot de passe <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      🔒
                    </span>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm font-medium text-[#1A1D29] placeholder-slate-400 focus:outline-none focus:border-[#2F6FED] focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Jauge de sécurité */}
              {formData.password && (
                <div className="flex items-center gap-2 pt-1 animate-fadeInUp">
                  <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden flex gap-1">
                    <div className={`h-full flex-1 rounded-full ${strength.level >= 1 ? strength.color : 'bg-transparent'}`}></div>
                    <div className={`h-full flex-1 rounded-full ${strength.level >= 2 ? strength.color : 'bg-transparent'}`}></div>
                    <div className={`h-full flex-1 rounded-full ${strength.level >= 3 ? strength.color : 'bg-transparent'}`}></div>
                  </div>
                  <span className="text-[11px] font-bold text-slate-500">{strength.text}</span>
                </div>
              )}

              {/* Checkbox CGU */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    className="w-4 h-4 mt-0.5 rounded border-slate-300 text-[#2F6FED] focus:ring-[#2F6FED] cursor-pointer"
                  />
                  <span className="text-xs text-slate-600 leading-relaxed">
                    J'accepte les <a href="#cgu" onClick={(e) => e.preventDefault()} className="text-[#2F6FED] font-semibold hover:underline">Conditions Générales d'Utilisation</a> et la charte de confidentialité d'E-School.
                  </span>
                </label>
              </div>

              {/* Bouton de soumission */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#2F6FED] to-[#1E4FD1] text-white text-sm font-bold shadow-lg shadow-blue-500/25 btn-hover flex items-center justify-center gap-2.5 cursor-pointer ${
                    isLoading ? 'opacity-85 cursor-not-allowed' : ''
                  }`}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Création de votre compte en cours...</span>
                    </>
                  ) : (
                    <>
                      <span>Créer mon compte E-School</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </div>

            </form>

            {/* Séparateur */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-100"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-3 bg-white text-slate-400 font-medium">Déjà inscrit ?</span>
              </div>
            </div>

            {/* Lien vers connexion */}
            <div className="text-center">
              <p className="text-xs sm:text-sm text-slate-600">
                Vous avez déjà un compte actif ?{' '}
                <button
                  type="button"
                  onClick={() => onNavigate('login')}
                  className="font-bold text-[#2F6FED] hover:text-[#1E4FD1] underline underline-offset-2 transition-colors cursor-pointer"
                >
                  Se connecter à mon espace
                </button>
              </p>
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 max-w-7xl w-full mx-auto px-4 py-6 text-center text-xs text-slate-400">
        <p>© 2026 E-School Technologies Africa. Tous droits réservés.</p>
      </footer>

    </div>
  );
};
