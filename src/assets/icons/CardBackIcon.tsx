interface CardBackIconProps {
  $color: {
    mainCardColor: string;
  };
}

const CardBackIcon: React.FC<CardBackIconProps> = ({ $color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="41"
    height="42"
    viewBox="0 0 41 42"
    fill="none"
  >
    <g filter="url(#filter0_d_211_1479)">
      <path
        d="M5.64838 27.7052C5.05347 24.26 5.54621 20.6857 7.04435 17.579C8.54249 14.4722 10.9555 12.0208 13.8805 10.6338C16.8056 9.24693 20.0659 9.00834 23.1173 9.95794C26.1687 10.9075 28.8267 12.9879 30.6477 15.8518M30.6477 15.8518L22.4926 16.2681M30.6477 15.8518L30.484 7.11235"
        stroke={$color.mainCardColor}
        strokeWidth="2.50909"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="27.5005" cy="28.5" r="4.5" fill={$color.mainCardColor} />
    </g>
    <defs>
      <filter
        id="filter0_d_211_1479"
        x="-2.99951"
        y="-3"
        width="51.9995"
        height="52"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="2" dy="3" />
        <feGaussianBlur stdDeviation="3" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_211_1479"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_211_1479"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default CardBackIcon;
