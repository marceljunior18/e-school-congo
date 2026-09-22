// Composant SubscriptionView - Gestion de l'abonnement scolaire en Francs CFA (FCFA)
window.SubscriptionView = function SubscriptionView({ user, onShowToast }) {
  const [selectedPlan, setSelectedPlan] = React.useState('monthly');
  const [paymentMethod, setPaymentMethod] = React.useState('airtel');
  const [phoneNumber, setPhoneNumber] = React.useState('06 912 34 56');
  const [isProcessing, setIsProcessing] = React.useState(false);

  const plans = [
    {
      id: 'monthly',
      name: 'Pass Mensuel Pro',
      price: '15 000 FCFA',
      period: '/mois',
      popular: true,
      desc: 'Idéal pour s\'entraîner mois par mois sans engagement.',
      features: [
        'Accès illimité aux 5 000 exercices corrigés',
        'Simulations du Bac avec corrigés officiels',
        'Assistant IA pédagogique 24h/24',
        'Tableau de bord de suivi des progrès',
        'Assistance WhatsApp avec les tuteurs'
      ]
    },
    {
      id: 'quarterly',
      name: 'Pass Trimestriel',
      price: '39 000 FCFA',
      period: '/trimestre',
      saving: 'Économie de 13%',
      desc: 'Recommandé pour un trimestre scolaire complet.',
      features: [
        'Tous les avantages de la formule Mensuelle',
        '2 sessions de Bac Blanc intensives en direct',
        'Fiches de synthèse imprimables en PDF',
        'Correction prioritaire des devoirs écrits',
        'Rapports hebdomadaires pour les parents'
      ]
    },
    {
      id: 'annual',
      name: 'Pass Annuel Excellence',
      price: '120 000 FCFA',
      period: '/année scolaire',
      saving: '33% d\'économie (4 mois offerts)',
      desc: 'La préparation complète de la rentrée jusqu\'au jour du Bac.',
      features: [
        'Tous les avantages des formules précédentes',
        'Accompagnement personnalisé jusqu\'au Bac',
        'Masterclass vidéo avec les majors de promo',
        'Garantie mention ou remboursé sous conditions',
        'Accès anticipé aux annales inédites 2026'
      ]
    }
  ];

  const paymentProviders = [
    {
      id: 'airtel',
      name: 'Airtel Money Congo',
      code: '*128#',
      badge: 'Instantané',
      color: 'border-red-500 bg-red-50/30 text-red-600',
      icon: '🔴'
    },
    {
      id: 'mtn',
      name: 'MTN Mobile Money Congo',
      code: '*105#',
      badge: 'Instantané',
      color: 'border-amber-500 bg-amber-50/30 text-amber-600',
      icon: '🟡'
    },
    {
      id: 'card',
      name: 'Carte Bancaire (Visa / Mastercard)',
      code: 'Sécurisé 3D Secure',
      badge: 'International',
      color: 'border-blue-500 bg-blue-50/30 text-[#2F6FED]',
      icon: '💳'
    }
  ];

  const invoices = [
    {
      id: 'FAC-2026-0917',
      date: '17 Septembre 2026',
      amount: '15 000 FCFA',
      status: 'Payée',
      method: 'Airtel Money (Ref: AM-9941)',
      period: '17 Sep 2026 - 17 Oct 2026'
    },
    {
      id: 'FAC-2026-0817',
      date: '17 Août 2026',
      amount: '15 000 FCFA',
      status: 'Payée',
      method: 'MTN MoMo (Ref: MM-8120)',
      period: '17 Aoû 2026 - 17 Sep 2026'
    },
    {
      id: 'FAC-2026-0717',
      date: '17 Juillet 2026',
      amount: '15 000 FCFA',
      status: 'Payée',
      method: 'Airtel Money (Ref: AM-7231)',
      period: '17 Jui 2026 - 17 Aoû 2026'
    }
  ];

  const handleRenew = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      if (onShowToast) {
        onShowToast('Paiement simulé avec succès ! Votre abonnement est renouvelé.', 'success');
      }
    }, 1000);
  };

  const handleDownloadInvoice = (invoiceId) => {
    if (onShowToast) {
      onShowToast(`Téléchargement de la quittance officielle ${invoiceId} en cours...`, 'info');
    }
  };

  return (
    <div className="space-y-8 animate-fadeInUp">
      
      {/* En-tête de section */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2F6FED] text-xs font-bold mb-2">
          <span>💳</span>
          <span>Facturation & Abonnements</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#1A1D29] tracking-tight">
          Mon Abonnement E-School Pro
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Gérez votre formule d'études, vos modes de paiement Mobile Money et consultez vos quittances officielles en FCFA.
        </p>
      </div>

      {/* Carte d'Abonnement Actuel */}
      <div className="bg-gradient-to-br from-[#1A1D29] via-[#212638] to-[#1E4FD1] rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Abonnement Actif
              </span>
              <span className="text-xs text-slate-300 font-medium">Renouvellement automatique</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              Formule E-School Pro — Lycée & Bac
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Titulaire : <strong>{user.name}</strong> • {user.grade} • Valable jusqu'au <span className="text-emerald-400 font-bold">{user.expiresAt || '17 Octobre 2026'}</span>.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 text-right self-stretch md:self-auto flex md:flex-col justify-between items-end">
            <div>
              <div className="text-[11px] text-slate-300 font-medium">Tarif Mensuel</div>
              <div className="text-2xl font-black text-white">15 000 FCFA</div>
            </div>
            <div className="text-[11px] text-emerald-300 font-bold mt-1">Sans engagement</div>
          </div>
        </div>
      </div>

      {/* Grille des Formules Disponibles */}
      <div>
        <h3 className="text-lg font-black text-[#1A1D29] mb-4">
          Choisir ou Renouveler une Formule
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => {
            const isSelected = selectedPlan === plan.id;
            return (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`rounded-3xl p-6 transition-all duration-200 cursor-pointer relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-2 border-[#2F6FED] shadow-xl shadow-blue-500/10'
                    : 'bg-white border border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-gradient-to-r from-[#2F6FED] to-[#1E4FD1] text-white text-[10px] font-extrabold uppercase tracking-wider shadow-md shadow-blue-500/30">
                    Formule Actuelle
                  </span>
                )}

                {plan.saving && (
                  <span className="absolute -top-3 right-6 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200 text-[10px] font-extrabold">
                    {plan.saving}
                  </span>
                )}

                <div>
                  <h4 className="text-lg font-extrabold text-[#1A1D29] mt-2 mb-1">{plan.name}</h4>
                  <p className="text-xs text-slate-500 mb-4">{plan.desc}</p>

                  <div className="flex items-baseline gap-1 mb-6 pb-4 border-b border-slate-100">
                    <span className="text-2xl font-black text-[#1A1D29]">{plan.price}</span>
                    <span className="text-xs text-slate-400 font-medium">{plan.period}</span>
                  </div>

                  <ul className="space-y-2.5 mb-6">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                        <span className="text-[#22C55E] font-bold text-sm shrink-0">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all ${
                    isSelected
                      ? 'bg-[#2F6FED] text-white shadow-md shadow-blue-500/20'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {isSelected ? 'Sélectionné' : 'Choisir ce Pass'}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Module de Paiement Mobile Money Congo */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-2xl bg-amber-50 text-[#F5A623] flex items-center justify-center text-lg font-bold">
            📱
          </div>
          <div>
            <h3 className="text-lg font-black text-[#1A1D29]">Moyens de Paiement Locaux Sécurisés</h3>
            <p className="text-xs text-slate-500">Validation instantanée par USSD sans frais additionnels.</p>
          </div>
        </div>

        <form onSubmit={handleRenew} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {paymentProviders.map((prov) => {
              const isChosen = paymentMethod === prov.id;
              return (
                <div
                  key={prov.id}
                  onClick={() => setPaymentMethod(prov.id)}
                  className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center gap-3 ${
                    isChosen
                      ? 'border-[#2F6FED] bg-blue-50/50 shadow-xs'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <span className="text-2xl">{prov.icon}</span>
                  <div>
                    <div className="text-xs font-bold text-[#1A1D29]">{prov.name}</div>
                    <div className="text-[10px] text-slate-400">{prov.code}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#1A1D29] mb-1.5 uppercase tracking-wider">
                Numéro Mobile Money Débiteur
              </label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Ex: 06 912 34 56"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs sm:text-sm font-semibold text-[#1A1D29] focus:outline-none focus:border-[#2F6FED] focus:bg-white focus:ring-4 focus:ring-blue-500/10"
              />
              <p className="text-[10px] text-slate-400 mt-1">Un prompt USSD de confirmation sera envoyé sur votre téléphone.</p>
            </div>

            <div className="flex flex-col justify-end">
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#2F6FED] to-[#1E4FD1] text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-500/25 btn-hover flex items-center justify-center gap-2 cursor-pointer"
              >
                {isProcessing ? (
                  <span>Validation du paiement en cours...</span>
                ) : (
                  <>
                    <span>Confirmer le renouvellement ({selectedPlan === 'monthly' ? '15 000 FCFA' : selectedPlan === 'quarterly' ? '39 000 FCFA' : '120 000 FCFA'})</span>
                    <span>→</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Historique des Factures et Quittances */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
        <h3 className="text-lg font-black text-[#1A1D29] mb-4">
          Historique des Paiements & Quittances Scolaires
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-100 text-slate-400 font-bold uppercase tracking-wider">
                <th className="pb-3">Référence Facture</th>
                <th className="pb-3">Période Couverte</th>
                <th className="pb-3">Montant Payé</th>
                <th className="pb-3">Moyen Utilisé</th>
                <th className="pb-3">Statut</th>
                <th className="pb-3 text-right">Reçu PDF</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {invoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 font-bold text-[#1A1D29]">{inv.id}</td>
                  <td className="py-3.5 text-slate-600">{inv.period}</td>
                  <td className="py-3.5 font-extrabold text-[#1E4FD1]">{inv.amount}</td>
                  <td className="py-3.5 text-slate-500">{inv.method}</td>
                  <td className="py-3.5">
                    <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-700 font-bold text-[10px]">
                      {inv.status}
                    </span>
                  </td>
                  <td className="py-3.5 text-right">
                    <button
                      onClick={() => handleDownloadInvoice(inv.id)}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-[11px] transition-colors cursor-pointer"
                    >
                      Télécharger
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
