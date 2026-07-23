import PillButton from "./PillButton";
import SocialIcons from "./SocialIcons";

function SiteLayout({ children, isInnerPage = false, className = "" }) {
  const shellClasses = [
    "siteShell",
    isInnerPage ? "innerPage" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={shellClasses}>
      <header className="topNavigation" aria-label="Primary navigation">
        {isInnerPage && (
          <a
            className="backButton"
            href="#/"
            aria-label="Go back"
          >
            <svg viewBox="0 0 42 42" aria-hidden="true">
              <path d="M31 5 8 21l23 16V5Z" />
            </svg>
          </a>
        )}

        <a className="textNavigationLink" href="#/about">
          Who am I?
        </a>
        <PillButton href="#/blog" ariaLabel="Blog">
          blog
        </PillButton>
      </header>

      {children}

      <footer className="siteFooter">
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
