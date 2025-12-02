export const NAVBAR_LINKS = [
  { href: "/formations", label: "Formations", subDrawerId: "formations", variant: "highlight" },
  { href: "/entrepreneuriat", label: "Entreprenariat", variant: "highlight" },
  { href: "/apropos", label: "À propos", variant: "highlight" },
  { href: "/methode", label: "Méthode", variant: "highlight" },
  { href: "/rejoindre", label: "Nous rejoindre", variant: "highlight" },
  { href: "/enseigner", label: "Enseigner chez nous", variant: "secondary" },
  // { href: "/contact", label: "Nous contacter", variant: "highlight" },
];

export const NAVBAR_ACTIONS = [
  { key: "account", label: "Accès à votre Compte", variant: "account" },
  { key: "bookmarks", label: "Mes Bookmarks (0)", variant: "bookmark" },
];

export const SUB_DRAWERS = {
  formations: {
    id: "formations",
    title: "Formations",
    items: [
      {
        label: "Marketing et Digital",
        href: "#formations-marketing",
        subItems: [
          { label: "Marketing Digital", href: "#marketing-digital" },
          { label: "Copywriting", href: "#copywriting" },
          { label: "WordPress", href: "#wordpress" },
          { label: "E-commerce", href: "#ecommerce" },
          { label: "SEO", href: "#seo" },
          { label: "Google Ads", href: "#google-ads" },
          { label: "Social Ads", href: "#social-ads" },
        ],
      },
      {
        label: "Développement Commercial et Entrepreneuriat",
        href: "#formations-business",
        subItems: [],
      },
      {
        label: "Réseaux Sociaux et Contenus",
        href: "#formations-social",
        subItems: [],
      },
      {
        label: "Outils et Productivité",
        href: "#formations-outils",
        subItems: [],
      },
      {
        label: "Développement Personnel et Leadership",
        href: "#formations-leadership",
        subItems: [],
      },
      {
        label: "Accessibles aux personnes en situation d'handicap",
        href: "#formations-accessibles",
        subItems: [],
      },
    ],
    ctas: [
      {
        id: "all-trainings",
        label: "Découvrir toutes nos formations",
        href: "#formations",
        className: "hero__btn-primary",
      },
      {
        id: "financement",
        label: "Être accompagné dans mon financement",
        href: "#financement",
        className: "btn--ghost",
      },
    ],
  },
};

