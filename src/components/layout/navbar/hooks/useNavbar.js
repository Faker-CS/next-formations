import { useEffect, useState } from "react";

function useMediaQuery(query) {
  const getMatches = () => {
    if (typeof window === "undefined" || typeof window.matchMedia === "undefined") {
      return false;
    }
    return window.matchMedia(query).matches;
  };

  const [matches, setMatches] = useState(getMatches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = (event) => setMatches(event.matches);

    listener(mediaQueryList); // initialize in case component mounted after change
    mediaQueryList.addEventListener("change", listener);
    return () => mediaQueryList.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

export default function useNavbar() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [open, setOpen] = useState(false);
  const [activeSubDrawer, setActiveSubDrawer] = useState(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!isMobile && open) {
      setOpen(false);
      setActiveSubDrawer(null);
    }
  }, [isMobile, open]);

  const toggleDrawer = () => {
    setOpen((prev) => {
      const next = !prev;
      if (!next) {
        setActiveSubDrawer(null);
      }
      return next;
    });
  };

  const closeDrawer = () => {
    setActiveSubDrawer(null);
    setOpen(false);
  };

  const openSubDrawer = (id) => setActiveSubDrawer(id);
  const closeSubDrawer = () => setActiveSubDrawer(null);

  return {
    isMobile,
    open,
    activeSubDrawer,
    toggleDrawer,
    closeDrawer,
    openSubDrawer,
    closeSubDrawer,
    setActiveSubDrawer,
  };
}

