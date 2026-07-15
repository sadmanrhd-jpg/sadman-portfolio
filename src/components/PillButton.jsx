function PillButton({ children, className = "", ariaLabel }) {
  return (
    <button
      className={`pillButton ${className}`.trim()}
      type="button"
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export default PillButton;
