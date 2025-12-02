// Mock data structure that mimics backend API response
// This can be easily replaced with actual API calls later

export const mockFormations = {
  "mieux-notees": [
    {
      id: 1,
      rank: 1,
      rating: 5.0,
      category: "Marketing et Digital",
      title: "Ventes",
      location: "Paris - 6 jours",
      description: "Techniques de prospection, négociation et fidélisation client.",
      price: "1500€ TTC",
      financing: "Financement OPCO",
    },
    {
      id: 2,
      rank: 2,
      rating: 4.9,
      category: "Développement Personnel",
      title: "Leadership",
      location: "Lyon - 5 jours",
      description: "Développez vos compétences en leadership et management d'équipe.",
      price: "1800€ TTC",
      financing: "Financement CPF",
    },
    {
      id: 3,
      rank: 3,
      rating: 4.8,
      category: "Gestion et Finance",
      title: "Comptabilité",
      location: "Marseille - 7 jours",
      description: "Maîtrisez les fondamentaux de la comptabilité d'entreprise.",
      price: "2000€ TTC",
      financing: "Financement OPCO",
    },
    {
      id: 4,
      rank: 4,
      rating: 4.8,
      category: "Informatique et Tech",
      title: "Data Analysis",
      location: "Paris - 10 jours",
      description: "Analyse de données avec Python, SQL et outils de visualisation.",
      price: "2500€ TTC",
      financing: "Financement CPF",
    },
    {
      id: 5,
      rank: 5,
      rating: 4.7,
      category: "Marketing et Digital",
      title: "SEO Avancé",
      location: "Bordeaux - 4 jours",
      description: "Optimisation avancée pour les moteurs de recherche.",
      price: "1200€ TTC",
      financing: "Financement OPCO",
    },
    {
      id: 6,
      rank: 6,
      rating: 4.7,
      category: "Communication",
      title: "Prise de Parole",
      location: "Nice - 3 jours",
      description: "Techniques de communication orale et présentation en public.",
      price: "900€ TTC",
      financing: "Financement Région",
    },
  ],
  "plus-demandees": [
    {
      id: 7,
      rank: 1,
      rating: 4.6,
      category: "Informatique et Tech",
      title: "Développement Web",
      location: "Paris - 15 jours",
      description: "HTML, CSS, JavaScript et frameworks modernes.",
      price: "3000€ TTC",
      financing: "Financement CPF",
    },
    {
      id: 8,
      rank: 2,
      rating: 4.5,
      category: "Marketing et Digital",
      title: "Social Media",
      location: "Lyon - 5 jours",
      description: "Stratégie et gestion des réseaux sociaux professionnels.",
      price: "1400€ TTC",
      financing: "Financement OPCO",
    },
    {
      id: 9,
      rank: 3,
      rating: 4.5,
      category: "Gestion et Finance",
      title: "Gestion de Projet",
      location: "Paris - 8 jours",
      description: "Méthodologies agiles et outils de gestion de projet.",
      price: "2200€ TTC",
      financing: "Financement CPF",
    },
    {
      id: 10,
      rank: 4,
      rating: 4.4,
      category: "Développement Personnel",
      title: "Gestion du Temps",
      location: "Toulouse - 2 jours",
      description: "Optimisez votre productivité et gérez vos priorités.",
      price: "800€ TTC",
      financing: "Financement OPCO",
    },
  ],
  financements: [
    {
      id: 11,
      rank: 1,
      rating: 4.9,
      category: "Informatique et Tech",
      title: "Cybersécurité",
      location: "Paris - 12 jours",
      description: "Sécurité des systèmes d'information et protection des données.",
      price: "2800€ TTC",
      financing: "100% CPF",
    },
    {
      id: 12,
      rank: 2,
      rating: 4.8,
      category: "Marketing et Digital",
      title: "E-commerce",
      location: "Lyon - 6 jours",
      description: "Créez et gérez votre boutique en ligne avec succès.",
      price: "1600€ TTC",
      financing: "100% OPCO",
    },
    {
      id: 13,
      rank: 3,
      rating: 4.7,
      category: "Communication",
      title: "Rédaction Web",
      location: "Nantes - 5 jours",
      description: "Techniques de rédaction pour le web et SEO copywriting.",
      price: "1300€ TTC",
      financing: "100% CPF",
    },
    {
      id: 14,
      rank: 4,
      rating: 4.6,
      category: "Gestion et Finance",
      title: "Contrôle de Gestion",
      location: "Paris - 9 jours",
      description: "Pilotage financier et tableaux de bord stratégiques.",
      price: "2400€ TTC",
      financing: "100% OPCO",
    },
  ],
};

// Function to simulate API call - can be replaced with actual fetch later
export const fetchFormationsByCategory = async (category) => {
  // Simulate network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockFormations[category] || []);
    }, 300);
  });
};

// Function to get all formations
export const fetchAllFormations = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockFormations);
    }, 300);
  });
};
