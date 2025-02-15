interface CardDotEffectProps {
  $color: {
    mainCardColor: string;
  };
}

const CardDotEffect: React.FC<CardDotEffectProps> = ({ $color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="318"
    height="426"
    viewBox="0 0 318 426"
    fill="none"
  >
    <g filter="url(#filter0_d_1198_5110)">
      <path
        d="M230 19H159H29C22.3726 19 17 24.3726 17 31V399C17 405.627 22.3726 411 29 411H289C295.627 411 301 405.627 301 399V215V89.56"
        stroke={$color?.mainCardColor}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="3 10"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_1198_5110"
        x="0.5"
        y="0.5"
        width="317"
        height="425"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="-2" />
        <feGaussianBlur stdDeviation="8" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1198_5110"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1198_5110"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default CardDotEffect;
