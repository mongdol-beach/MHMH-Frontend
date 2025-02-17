interface CardBackgroundEffectProps {
  $color: {
    boldColor: string;
  };
}

const CardBackgroundEffect: React.FC<CardBackgroundEffectProps> = ({
  $color,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="288"
    height="394"
    viewBox="0 0 288 394"
    fill="none"
  >
    <path
      d="M47.2284 1C45.0193 1 43.2471 2.79653 43.053 4.99713C41.2161 25.821 25.1687 42.4103 4.99582 44.3631C2.79697 44.576 1.00022 46.3464 1.00022 48.5555L1 345.429C1 347.644 2.80009 349.438 5.01512 349.429L68.5 349.189C95.9306 349.189 106.809 366.019 107.906 388.998C108.012 391.204 109.791 393 112 393H240.772C242.981 393 244.753 391.203 244.947 389.003C246.784 368.179 262.832 351.59 283.004 349.637C285.203 349.424 287 347.654 287 345.444V48.5556C287 46.3464 285.203 44.576 283.004 44.3631C262.832 42.4103 246.784 25.821 244.947 4.99713C244.753 2.79653 242.981 1 240.772 1H47.2284Z"
      stroke={$color?.boldColor}
      strokeWidth="1.00876"
      strokeLinecap="round"
    />
  </svg>
);

export default CardBackgroundEffect;
