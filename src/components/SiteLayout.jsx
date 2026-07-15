import PillButton from "./PillButton";
import SocialIcons from "./SocialIcons";

function SiteLayout({ children, isInnerPage = false }) {
  return (
    <div className={`siteShell${isInnerPage ? " innerPage" : ""}`}>
      <header className="topNavigation" aria-label="Primary navigation">
        <PillButton ariaLabel="About">about</PillButton>
        <PillButton ariaLabel="Blog">blog</PillButton>
      </header>

      {children}

      <footer className="siteFooter">
        {isInnerPage ? (
          <a className="signature signatureLink" href="#/">
            I’m Sadman!
          </a>
        ) : (
          <p className="signature">I’m Sadman!</p>
        )}

        <div className="footerControls">
          <PillButton className="contactButton" ariaLabel="Contact">
            contact
          </PillButton>
          <SocialIcons />
        </div>
      </footer>
    </div>
  );
}

export default SiteLayout;
