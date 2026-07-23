import SiteLayout from "../components/SiteLayout";

function GalleryPlaceholder({ children }) {
  return (
    <SiteLayout isInnerPage>
      <main className="galleryMessage">
        <p>
          {children ||
            "Building this page gracefully. Please come back after a few days"}
        </p>
      </main>
    </SiteLayout>
  );
}

export default GalleryPlaceholder;
