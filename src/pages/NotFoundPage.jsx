import SiteLayout from "../components/SiteLayout";

function NotFoundPage() {
  return (
    <SiteLayout isInnerPage>
      <main className="galleryMessage">
        <a className="galleryTitle" href="#/" aria-label="Return to the home page">
          404
        </a>
        <span className="galleryDivider" aria-hidden="true" />
        <p>This page could not be found. Select 404 to return to the home page.</p>
      </main>
    </SiteLayout>
  );
}

export default NotFoundPage;
