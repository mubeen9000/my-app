import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Jab bhi pathname (route) change ho, page top pe scroll ho
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
