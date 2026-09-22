// Composant ProfileView - Paramètres du profil élève et préférences pédagogiques
window.ProfileView = function ProfileView({ user, onUpdateUser, onShowToast }) {
  const [profile, setProfile] = React.useState({
    name: user.name || 'Marcel Junior',
    email: user.email || 'marcel.junior@eschool.cg',
    phone: user.phone || '+242 06 912 34 56',
    school: user.school || 'Lycée Chaminade',
    city: user.city || 'Brazzaville 🇨🇬',
    grade: user.grade || 'Terminale C',
    whatsappReminders: true,
    weeklyReport: true
  });

  const [passwordData, setPasswordData] = React.useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [isSaving, setIsSaving] = React.useState(false);

  const handleProfileChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setIsSaving(true);

    setTimeout(() => {
      setIsSaving(false);
      if (onUpdateUser) {
        onUpdateUser(profile);
      }
      if (onShowToast) {
        onShowToast('Vos informations ont été mises à jour avec succès !', 'success');
      }
    }, 600);
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    if (!passwordData.newPassword) {
      if (onShowToast) onShowToast('Veuillez saisir un nouveau mot de passe.', 'error');
      return;
    }
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      if (onShowToast) onShowToast('Les nouveaux mots de passe ne correspondent pas.', 'error');
      return;
    }

    if (onShowToast) onShowToast('Votre mot de passe a été modifié avec succès !', 'success');
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
  };

  return (
    <div className="space-y-8 animate-fadeInUp max-w-4xl">
      
      {/* En-tête */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2F6FED] text-xs font-bold mb-2">
          <span>⚙️</span>
          <span>Compte & Préférences</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#1A1D29] tracking-tight">
          Paramètres du Profil Élève
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Personnalisez vos informations d'examen, vos coordonnées WhatsApp et vos préférences d'apprentissage.
        </p>
      </div>

      {/* Formulaire Informations Personnelles */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
        <h3 className="text-lg font-black text-[#1A1D29] mb-5 flex items-center gap-2">
          <span>👤</span>
          <span>Informations Scolaires & Personnelles</span>
        </h3>

        <form onSubmit={handleSaveProfile} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#1A1D29] mb-1.5 uppercase tracking-wider">
                Nom & Prénom
              </label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleProfileChange}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs sm:text-sm font-semibold text-[#1A1D29] focus:outline-none focus:border-[#2F6FED] focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1A1D29] mb-1.5 uppercase tracking-wider">
                Adresse Email
              </label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleProfileChange}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs sm:text-sm font-semibold text-[#1A1D29] focus:outline-none focus:border-[#2F6FED] focus:bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#1A1D29] mb-1.5 uppercase tracking-wider">
                Numéro WhatsApp (Pour alertes de devoirs)
              </label>
              <input
                type="tel"
                name="phone"
                value={profile.phone}
                onChange={handleProfileChange}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs sm:text-sm font-semibold text-[#1A1D29] focus:outline-none focus:border-[#2F6FED] focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1A1D29] mb-1.5 uppercase tracking-wider">
                Lycée / Établissement
              </label>
              <input
                type="text"
                name="school"
                value={profile.school}
                onChange={handleProfileChange}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs sm:text-sm font-semibold text-[#1A1D29] focus:outline-none focus:border-[#2F6FED] focus:bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#1A1D29] mb-1.5 uppercase tracking-wider">
                Classe / Série
              </label>
              <input
                type="text"
                name="grade"
                value={profile.grade}
                onChange={handleProfileChange}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs sm:text-sm font-semibold text-[#1A1D29] focus:outline-none focus:border-[#2F6FED] focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1A1D29] mb-1.5 uppercase tracking-wider">
                Ville
              </label>
              <input
                type="text"
                name="city"
                value={profile.city}
                onChange={handleProfileChange}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs sm:text-sm font-semibold text-[#1A1D29] focus:outline-none focus:border-[#2F6FED] focus:bg-white"
              />
            </div>
          </div>

          {/* Préférences notifications */}
          <div className="pt-2 border-t border-slate-100 space-y-2">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="whatsappReminders"
                checked={profile.whatsappReminders}
                onChange={handleProfileChange}
                className="w-4 h-4 rounded text-[#2F6FED] focus:ring-[#2F6FED]"
              />
              <span className="text-xs text-slate-600">Recevoir le résumé d'exercices quotidien par WhatsApp</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="weeklyReport"
                checked={profile.weeklyReport}
                onChange={handleProfileChange}
                className="w-4 h-4 rounded text-[#2F6FED] focus:ring-[#2F6FED]"
              />
              <span className="text-xs text-slate-600">Envoyer le bilan de progression hebdomadaire aux parents</span>
            </label>
          </div>

          <div className="pt-3">
            <button
              type="submit"
              disabled={isSaving}
              className="px-6 py-2.5 rounded-xl bg-[#2F6FED] text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-500/20 btn-hover cursor-pointer"
            >
              {isSaving ? 'Enregistrement...' : 'Enregistrer les modifications'}
            </button>
          </div>
        </form>
      </div>

      {/* Sécurité du Compte */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
        <h3 className="text-lg font-black text-[#1A1D29] mb-5 flex items-center gap-2">
          <span>🔒</span>
          <span>Sécurité & Mot de Passe</span>
        </h3>

        <form onSubmit={handleUpdatePassword} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#1A1D29] mb-1.5 uppercase tracking-wider">
                Mot de passe actuel
              </label>
              <input
                type="password"
                name="currentPassword"
                value={passwordData.currentPassword}
                onChange={handlePasswordChange}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs sm:text-sm font-semibold text-[#1A1D29] focus:outline-none focus:border-[#2F6FED] focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1A1D29] mb-1.5 uppercase tracking-wider">
                Nouveau mot de passe
              </label>
              <input
                type="password"
                name="newPassword"
                value={passwordData.newPassword}
                onChange={handlePasswordChange}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs sm:text-sm font-semibold text-[#1A1D29] focus:outline-none focus:border-[#2F6FED] focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1A1D29] mb-1.5 uppercase tracking-wider">
                Confirmer
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={passwordData.confirmPassword}
                onChange={handlePasswordChange}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs sm:text-sm font-semibold text-[#1A1D29] focus:outline-none focus:border-[#2F6FED] focus:bg-white"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-bold transition-colors cursor-pointer"
            >
              Mettre à jour le mot de passe
            </button>
          </div>
        </form>
      </div>

    </div>
  );
};
