export default function Icon({ id, w, h, color, className }) {
  return (
    <svg
      className={className}
      width={w}
      height={h}
      fill={color}
      aria-hidden="true"
      focusable="false"
    >
      <use xlinkHref={`/Sprite.svg#${id}`} />
    </svg>
  );
}
