// Composant Testimonials E-School (Section Avis & Réussites)
window.Testimonials = function Testimonials() {
  const reviews = [
    {
      name: 'Koffi Yao',
      role: 'Bachelier Scientifique 2025 • Abidjan',
      badge: 'Mention Très Bien (17.4/20)',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
      comment: 'Les simulations chronométrées avec le barème exact du Bac m\'ont permis de gérer mon stress. Le classement entre élèves m\'a motivé chaque semaine. Aujourd\'hui j\'ai intégré l\'INP-HB grâce à mes notes en Mathématiques et Physique.',
      school: 'Actuellement en Classe Préparatoire'
    },
    {
      name: 'Fatoumata Bamba',
      role: 'Bachelière Série D • Dakar',
      badge: 'Mention Bien (15.8/20)',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
      comment: 'L\'assistant IA E-School m\'a littéralement sauvée en Sciences de la Vie et en Chimie organique. Dès que j\'avais un blocage à 22h, j\'obtenais une explication détaillée sans devoir attendre le cours du lendemain.',
      school: 'Étudiante en Médecine'
    },
    {
      name: 'Dr. Jean-Marc Kouadio',
      role: 'Parent d\'élève en Terminale • Yaoundé',
      badge: 'Parent d\'Élève Vérifié',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
      comment: 'Pour 15 000 FCFA par mois, le service est sans commune mesure avec les répétiteurs traditionnels. Les rapports hebdomadaires par message m\'ont permis de suivre sérieusement l\'effort de mon fils chaque semaine.',
      school: 'Père de 2 lycéens'
    }
  ];

  return (
    <section id="testimonials-section" className="py-20 bg-white border-b border-slate-100 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E8F8EE] text-[#22C55E] border border-green-100 mb-3">
            Témoignages & Réussites
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A1D29] tracking-tight mb-4">
            Ils ont décroché leur examen avec les félicitations du jury
          </h2>
          <p className="text-base text-slate-500 max-w-xl mx-auto">
            Découvrez comment E-School transforme les notes de milliers d'élèves à travers l'Afrique francophone.
          </p>
        </div>

        {/* Grille des 3 avis */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="rounded-3xl p-7 bg-[#F7F8FA] border border-slate-200/60 flex flex-col justify-between card-hover"
            >
              <div>
                {/* 5 étoiles dorées */}
                <div className="flex items-center gap-1 text-amber-400 text-sm mb-4">
                  {'★★★★★'}
                </div>

                <p className="text-sm text-slate-600 leading-relaxed italic mb-6">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-5 border-t border-slate-200/60 flex items-center gap-3.5">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-12 h-12 rounded-2xl object-cover ring-2 ring-white shadow-xs"
                />
                <div>
                  <div className="text-sm font-bold text-[#1A1D29] leading-tight">
                    {rev.name}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {rev.role}
                  </div>
                  <span className="inline-block mt-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-blue-50 text-[#2F6FED]">
                    {rev.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bandeau chiffré */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 to-[#1A1D29] text-white p-8 shadow-lg flex flex-col sm:flex-row items-center justify-around gap-6 text-center sm:text-left">
          <div>
            <div className="text-3xl sm:text-4xl font-black text-white">94.8%</div>
            <div className="text-xs text-slate-300 mt-1">Taux de réussite officiel au Bac 2025</div>
          </div>
          <div className="w-px h-10 bg-slate-700 hidden sm:block"></div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-[#22C55E]">86%</div>
            <div className="text-xs text-slate-300 mt-1">Élèves ayant obtenu une Mention</div>
          </div>
          <div className="w-px h-10 bg-slate-700 hidden sm:block"></div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-[#F5A623]">+3.8 pts</div>
            <div className="text-xs text-slate-300 mt-1">Gain moyen sur la moyenne trimestrielle</div>
          </div>
        </div>

      </div>
    </section>
  );
};
