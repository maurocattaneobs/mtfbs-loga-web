module.exports = [
  {
    id: 1,
    title: "Per i candidati",
    menuList: [
      { name: "Sfoglia lavori", route: "/job-list-v11" },
      { name: "Sfoglia le categorie", route: "/job-list-v3" },
      {
        name: "Dashboard del candidato",
        route: "/candidates-dashboard/dashboard",
      },
      { name: "Avvisi di lavoro", route: "/candidates-dashboard/job-alerts" },
      {
        name: "I miei segnalibri",
        route: "/candidates-dashboard/short-listed-jobs",
      },
    ],
  },
  {
    id: 2,
    title: "Per i datori di lavoro",
    menuList: [
      {
        name: "Sfoglia i candidati",
        route: "/candidates-list-v1",
      },
      {
        name: "Dashboard del datore di lavoro",
        route: "/employers-dashboard/dashboard",
      },
      { name: "Aggiungi lavoro", route: "/employers-dashboard/post-jobs" },
      { name: "Pacchetti di lavoro", route: "/employers-dashboard/packages" },
    ],
  },
  {
    id: 3,
    title: "Chi siamo",
    menuList: [
      { name: "Chi siamo", route: "/about" },
      { name: "Fatturazione", route: "/invoice" },
      { name: "Condizioni", route: "/terms" },
      { name: "Blog", route: "/blog-list-v1" },
      { name: "Contatti", route: "/contact" },
    ],
  },
  {
    id: 4,
    title: "Risorse utili",
    menuList: [
      { name: "Mappa del sito", route: "/" },
      { name: "Termini di utilizzo", route: "/terms" },
      { name: "Privacy", route: "/" },
      { name: "Securezza", route: "/" },
      { name: "Accessibilità", route: "/" },
    ],
  },
];
