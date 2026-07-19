import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
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
    return <GalleryPlaceholder />;
  }

  if (route === "/photographer") {
    return <GalleryPlaceholder />;
  }

  if (route === "/about") {
    return (
      <GalleryPlaceholder>
        Stay tuned to know more about my work, the philosophy behind the, and everything
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
