import SiteLayout from "../components/SiteLayout";

const projectHref = "#/project/plis";

function DesignerPage() {
  return (
    <SiteLayout isInnerPage className="designerPageShell">
      <main className="designerGallery" aria-label="Design portfolio projects">
        <article className="projectFeature">
          <a
            className="projectCoverLink"
            href={projectHref}
            aria-label="Open Planning Information System PLIS project"
          >
            <img
              className="projectCover"
              src="/assets/images/plis_cover.png"
              alt="Planning Information System PLIS interface shown across a desktop monitor and application screens"
            />
          </a>

          <div className="projectInformation">
            <a className="projectTitleLink" href={projectHref}>
              <h1>Planning Information System PLIS</h1>
            </a>
            <p>
              A digital planning platform that brings spatial information,
              development data, and project records together in one clear
              interface.
            </p>
            <a className="projectKnowMore" href={projectHref}>
              Know more <span aria-hidden="true">›</span>
            </a>
          </div>
        </article>
      </main>
    </SiteLayout>
  );
}

export default DesignerPage;
