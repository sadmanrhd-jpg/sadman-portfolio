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
    return <GalleryPlaceholder title="designer" />;
  }

  if (route === "/photographer") {
    return <GalleryPlaceholder title="photographer" />;
  }

  if (route === "/about") {
    return <GalleryPlaceholder title="Who am I?" />;
  }

  if (route === "/blog") {
    return <GalleryPlaceholder title="blog" />;
  }

  return <NotFoundPage />;
}

export default App;
