import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import DesignerPage from "./pages/DesignerPage";
import GalleryPlaceholder from "./pages/GalleryPlaceholder";
import NotFoundPage from "./pages/NotFoundPage";

const normalizeRoute = () => {
  const hash = window.location.hash.replace(/^#/, "");
  return hash || "/";
};

function App() {
  const [route, setRoute] = useState(normalizeRoute);

  useEffect(() => {
    const handleRouteChange = () => setRoute(normalizeRoute());
    window.addEventListener("hashchange", handleRouteChange);
    return () => window.removeEventListener("hashchange", handleRouteChange);
  }, []);

  if (route === "/" || route === "") {
    return <HomePage />;
  }

  if (route === "/designer") {
    return <DesignerPage />;
  }

  if (route === "/photographer") {
    return <GalleryPlaceholder />;
  }

  if (route === "/project/plis") {
    return <GalleryPlaceholder />;
  }

  if (route === "/about") {
    return (
      <GalleryPlaceholder>
        Stay tuned to know more about my work, the philosophy behind them, and everything
        else.
      </GalleryPlaceholder>
    );
  }

  if (route === "/blog") {
    return <GalleryPlaceholder />;
  }

  return <NotFoundPage />;
}

export default App;
