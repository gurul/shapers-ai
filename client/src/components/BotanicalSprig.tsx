/** Layered vector foliage stays crisp at every breakpoint. */
export default function BotanicalSprig({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      className={`botanical-sprig ${className}`}
      viewBox="0 0 150 300"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <g className="sprig-stem">
        <path
          d="M69 300C71 237 64 194 83 129c9-32 13-66 8-104"
          stroke="#537454"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M78 241C33 239 10 205 11 171c44 2 72 32 67 70Z"
          fill="#759264"
        />
        <path d="M76 210c5-47 30-74 67-80-2 45-26 73-67 80Z" fill="#365e43" />
        <path
          d="M80 165C39 156 26 128 31 97c34 8 54 29 49 68Z"
          fill="#a8b788"
        />
        <path d="M91 125c7-40 23-57 51-62 1 34-17 59-51 62Z" fill="#739264" />
        <path d="M94 83C62 71 50 43 59 15c29 15 42 37 35 68Z" fill="#365e43" />
        <path d="M92 52c-4-25 10-42 28-50 9 24-2 44-28 50Z" fill="#a8b788" />
        <g
          stroke="#f0f1d7"
          strokeOpacity=".38"
          strokeWidth="1"
          strokeLinecap="round"
        >
          <path d="m77 239-48-48m49 17 49-60m-46 15-35-47m47 7 35-44m-34 2L67 34" />
        </g>
      </g>
    </svg>
  );
}
