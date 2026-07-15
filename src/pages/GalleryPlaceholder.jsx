import SiteLayout from "../components/SiteLayout";

function GalleryPlaceholder({ title }) {
  return (
    <SiteLayout isInnerPage>
      <main className="galleryMessage">
        <a className="galleryTitle" href="#/" aria-label="Return to the home page">
          {title}
        </a>
        <span className="galleryDivider" aria-hidden="true" />
        <p>Building this page gracefully. Please come back after a few days</p>
      </main>
    </SiteLayout>
  );
}

export default GalleryPlaceholder;
