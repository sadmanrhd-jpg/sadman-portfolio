const icons = [
  { name: "Instagram", file: "instagram" },
  { name: "LinkedIn", file: "linkedin" },
  { name: "Facebook", file: "facebook" },
  { name: "Email", file: "email" },
];

function SocialIcons() {
  return (
    <div className="socialList" aria-label="Social links">
      {icons.map((icon) => (
        <button
          className="socialButton"
          type="button"
          aria-label={icon.name}
          key={icon.name}
        >
          <img
            className="socialNormal"
            src={`assets/icons/${icon.file}_normal.png`}
            alt=""
          />
          <img
            className="socialHover"
            src={`assets/icons/${icon.file}_hover.png`}
            alt=""
          />
        </button>
      ))}
    </div>
  );
}

export default SocialIcons;
