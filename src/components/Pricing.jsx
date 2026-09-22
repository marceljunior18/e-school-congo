// Composant Pricing E-School (Section Tarifs en Francs CFA - FCFA)
window.Pricing = function Pricing() {
  const [isAnnual, setIsAnnual] = React.useState(true);

  const tiers = [
    {
      name: 'Formule Découverte',
      badge: 'Accès Immédiat',
      price: '0 FCFA',
      period: 'Gratuit à vie',
      subtitle: 'Idéal pour tester la méthode E-School et mesurer son potentiel.',
      features: [
        '50 exercices corrigés fondamentaux',
        '1 simulation de Bac / BEPC',
        'Accès au tableau de bord individuel',
        'Fiches de cours synthétiques',
        'Assistance par email'
      ],
      cta: 'Créer mon compte gratuit',
      popular: false,
      ctaStyle: 'bg-slate-100 text-slate-800 hover:bg-slate-200'
    },
    {
      name: 'Formule Pro Mensuelle',
      badge: 'Le Plus Populaire',
      price: isAnnual ? '10 000 FCFA' : '15 000 FCFA',
      period: isAnnual ? 'par mois (facturé annuellement)' : 'par mois sans engagement',
      subtitle: 'La formule complète recommandée par les professeurs pour réussir l\'examen.',
      features: [
        '+5 000 exercices & annales d\'examens',
        'Tuteur IA E-School illimité 24h/24',
        'Simulations hebdomadaires du Bac & BEPC',
        'Tableau de bord de performance complet',
        'Rapports d\'avancement pour les parents',
        'Accès prioritaire aux sessions de révision live'
      ],
      cta: 'Commencer l\'abonnement Pro',
      popular: true,
      ctaStyle: 'bg-gradient-to-r from-[#2F6FED] to-[#1E4FD1] text-white shadow-lg shadow-blue-500/25'
    },
    {
      name: 'Formule Annuelle Excellence',
      badge: 'Économie Maximale',
      price: '120 000 FCFA',
      period: 'par an (au lieu de 180 000 FCFA)',
      savings: 'Économisez 60 000 FCFA',
      subtitle: 'L\'accompagnement intégral jusqu\'au jour J avec mentorat dédié.',
      features: [
        'Tous les avantages de la formule Pro',
        'Économie immédiate de 60 000 FCFA',
        '2 bilans d\'orientation personnalisés',
        'Accès aux épreuves blanches régionales',
        'Éligibilité automatique aux Bourses d\'Excellence',
        'Ligne directe WhatsApp avec les tuteurs'
      ],
      cta: 'Choisir la Formule Excellence',
      popular: false,
      ctaStyle: 'bg-[#1A1D29] text-white hover:bg-slate-800 shadow-md'
    }
  ];

  return (
    <section id="pricing-section" className="py-20 bg-[#F7F8FA] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#2F6FED] border border-blue-100 mb-3">
            Tarifs Clairs & Transparents
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A1D29] tracking-tight mb-4">
            Investissez dans l'avenir académique de votre enfant
          </h2>
          <p className="text-base text-slate-500 max-w-xl mx-auto mb-8">
            Des tarifs justes, sans frais cachés, payables facilement par vos moyens de paiement mobiles locaux préférés.
          </p>

          {/* Toggle Facturation Mensuel / Annuel */}
          <div className="inline-flex items-center gap-3 p-1.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${!isAnnual
                  ? 'bg-[#2F6FED] text-white shadow-sm'
                  : 'text-slate-600 hover:text-[#1A1D29]'
                }`}
            >
              Facturation Mensuelle
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${isAnnual
                  ? 'bg-[#2F6FED] text-white shadow-sm'
                  : 'text-slate-600 hover:text-[#1A1D29]'
                }`}
            >
              Facturation Annuelle
              <span className="ml-1.5 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-[#E8F8EE] text-[#22C55E]">
                -33%
              </span>
            </button>
          </div>
        </div>

        {/* Grille des 3 formules */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-14">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${tier.popular
                  ? 'bg-white border-2 border-[#2F6FED] shadow-xl shadow-blue-500/10 lg:-translate-y-2'
                  : 'bg-white border border-slate-200/80 shadow-sm hover:shadow-md'
                }`}
            >
              {/* Badge Populaire */}
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#2F6FED] to-[#1E4FD1] text-white text-xs font-black uppercase tracking-wider shadow-sm">
                  ★ Choix N°1 des Familles
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-[#1A1D29]">{tier.name}</h3>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-lg ${tier.popular ? 'bg-blue-50 text-[#2F6FED]' : 'bg-slate-100 text-slate-600'
                    }`}>
                    {tier.badge}
                  </span>
                </div>

                <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                  {tier.subtitle}
                </p>

                {/* Affichage Prix en FCFA */}
                <div className="mb-6 pb-6 border-b border-slate-100">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-black text-[#1A1D29] tracking-tight">
                      {tier.price}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-slate-500 mt-1">
                    {tier.period}
                  </div>
                  {tier.savings && (
                    <div className="mt-2 inline-block px-2.5 py-0.5 rounded-md text-xs font-extrabold bg-[#E8F8EE] text-[#22C55E]">
                      {tier.savings}
                    </div>
                  )}
                </div>

                {/* Liste des fonctionnalités */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Inclus dans cette formule :
                  </div>
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <svg className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bouton CTA */}
              <div>
                <button className={`w-full py-3.5 px-6 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-200 btn-hover ${tier.ctaStyle}`}>
                  {tier.cta}
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Moyens de paiement mobile et sécurité */}
        <div className="rounded-2xl bg-white border border-slate-200/70 p-6 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2F6FED] flex items-center justify-center text-xl font-bold">
              🔒
            </div>
            <div>
              <div className="text-sm font-bold text-[#1A1D29]">
                Paiement 100% sécurisé par Mobile Money & Carte
              </div>
              <div className="text-xs text-slate-400">
                Activation immédiate de votre compte dès la confirmation du règlement.
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-bold text-slate-600">
            <span className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200/60">Wave</span>
            <span className="px-3 py-1.5 rounded-lg bg-orange-50 text-orange-600 border border-orange-200/60">Orange Money</span>
            <span className="px-3 py-1.5 rounded-lg bg-amber-50 text-amber-600 border border-amber-200/60">MTN MoMo</span>
            <span className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 border border-blue-200/60">Moov Money</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200/60">Visa / Mastercard</span>
          </div>
        </div>

      </div>
    </section>
  );
};
