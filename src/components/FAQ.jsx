// Composant FAQ E-School (Foire Aux Questions Interactive)
window.FAQ = function FAQ() {
  const [openIndex, setOpenIndex] = React.useState(0);

  const faqs = [
    {
      q: 'Quels sont les moyens de paiement acceptés pour régler en FCFA ?',
      a: 'Vous pouvez régler votre abonnement en toute sécurité par Wave, Orange Money, MTN Mobile Money, Moov Money ainsi que par carte bancaire (Visa et Mastercard). La validation est instantanée et votre accès complet est débloqué dans la minute.'
    },
    {
      q: 'Le contenu est-il conforme au programme officiel de mon pays ?',
      a: 'Oui, nos contenus sont rigoureusement alignés sur les programmes officiels des Ministères de l\'Éducation Nationale de Côte d\'Ivoire, du Sénégal, du Cameroun, du Gabon, du Togo, du Bénin et du Burkina Faso, pour les séries Scientifiques (C, D, S), Littéraires (A, L) et le premier cycle (BEPC/BFEM).'
    },
    {
      q: 'E-School fonctionne-t-il sur un simple smartphone avec peu de connexion ?',
      a: 'Parfaitement. La plateforme a été développée selon des standards stricts de légèreté. Les pages chargent en moins d\'une seconde, la consommation de data est minimale et les fiches résumées peuvent être téléchargées pour une révision hors-ligne.'
    },
    {
      q: 'Comment fonctionne l\'essai gratuit à 0 FCFA ?',
      a: 'L\'inscription à la Formule Découverte est 100% gratuite et sans aucun moyen de paiement requis. Vous avez immédiatement accès à 50 exercices corrigés, à une simulation complète d\'examen et à votre tableau de bord de performance.'
    },
    {
      q: 'Comment les parents peuvent-ils suivre la progression de leur enfant ?',
      a: 'Un espace parent dédié permet de lier votre numéro WhatsApp. Vous recevez chaque fin de semaine un récapitulatif clair : heures de révision effectuées, taux de réussite par matière et recommandations pour les examens à venir.'
    }
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="py-20 bg-[#F7F8FA] scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="text-center mb-14">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#2F6FED] border border-blue-100 mb-3">
            Questions Fréquentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A1D29] tracking-tight mb-4">
            Tout ce que vous devez savoir sur E-School
          </h2>
          <p className="text-sm sm:text-base text-slate-500">
            Une question supplémentaire ? Notre équipe pédagogique vous répond 7j/7 via WhatsApp.
          </p>
        </div>

        {/* Accordéon FAQ */}
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'bg-white border-[#2F6FED]/40 shadow-sm'
                    : 'bg-white/80 border-slate-200/70 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-[#1A1D29]">
                    {item.q}
                  </span>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-blue-50 text-[#2F6FED] rotate-180' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-600 leading-relaxed animate-fadeInUp">
                    <div className="pt-2 border-t border-slate-100">
                      {item.a}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
