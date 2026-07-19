function PillButton({ children, className = "", ariaLabel, href }) {
  const classes = `pillButton ${className}`.trim();

  if (href) {
    return (
      <a className={classes} href={href} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type="button" aria-label={ariaLabel}>
      {children}
    </button>
  );
}

export default PillButton;
