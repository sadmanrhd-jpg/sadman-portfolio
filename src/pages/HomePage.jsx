import SiteLayout from "../components/SiteLayout";

function HomePage() {
  return (
    <SiteLayout>
      <main className="hero" aria-label="Portfolio categories">
        <a className="heroLink" href="#/designer">
          designer
        </a>
        <span className="heroDivider" aria-hidden="true" />
        <a className="heroLink" href="#/photographer">
          photographer
        </a>
      </main>
    </SiteLayout>
  );
}

export default HomePage;
