function GalleryPlaceholder() {
  return (
    <main
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#ffffff",
        color: "#242424",
        padding: "2rem",
        textAlign: "center",
        fontFamily: '"Poppins Local", Arial, sans-serif',
      }}
    >
      <a
        href="#/"
        aria-label="Back to home"
        style={{
          position: "absolute",
          top: "2rem",
          left: "2rem",
          width: 0,
          height: 0,
          borderTop: "12px solid transparent",
          borderBottom: "12px solid transparent",
          borderRight: "18px solid #7F7F7F",
          transition: "border-color 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderRightColor = "#242424";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderRightColor = "#7F7F7F";
        }}
      />
      <p
        style={{
          margin: 0,
          maxWidth: "650px",
          fontSize: "clamp(1.2rem, 2vw, 1.8rem)",
          lineHeight: 1.6,
          fontWeight: 500,
        }}
      >
        Building this page gracefully. Please come back after a few days
      </p>
    </main>
  );
}

export default GalleryPlaceholder;
