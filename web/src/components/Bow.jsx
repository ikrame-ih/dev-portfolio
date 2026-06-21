export const Bow = ({
  size = 24,
  color = "#4A0E0E",
  strokeWidth = 1.25,
  className = "",
  style = {},
}) => (
  <svg
    className={className}
    style={style}
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M32 32 C 22 18, 8 18, 8 28 C 8 38, 22 40, 32 32 Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <path
      d="M32 32 C 42 18, 56 18, 56 28 C 56 38, 42 40, 32 32 Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <circle cx="32" cy="32" r="2.5" stroke={color} strokeWidth={strokeWidth} />
    <path
      d="M30 34 L 26 50"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <path
      d="M34 34 L 38 50"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </svg>
);

export default Bow;
