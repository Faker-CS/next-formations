import Home from "@/pages/Home";
import Formations from "@/pages/Formations";
import Entrepreneuriat from "@/pages/Entrepreneuriat";
import Apropos from "@/pages/Apropos";
import Methode from "@/pages/Methode";
import Rejoindre from "@/pages/Rejoindre";
import Enseigner from "@/pages/Enseigner";

export const routes = [
  {
    path: "/",
    component: Home,
    label: "Home",
  },
  {
    path: "/formations",
    component: Formations,
    label: "Formations",
  },
  {
    path: "/entrepreneuriat",
    component: Entrepreneuriat,
    label: "Entrepreneuriat",
  },
  {
    path: "/apropos",
    component: Apropos,
    label: "À propos",
  },
  {
    path: "/methode",
    component: Methode,
    label: "Méthode",
  },
  {
    path: "/rejoindre",
    component: Rejoindre,
    label: "Nous rejoindre",
  },
  {
    path: "/enseigner",
    component: Enseigner,
    label: "Enseigner chez nous",
  },
];