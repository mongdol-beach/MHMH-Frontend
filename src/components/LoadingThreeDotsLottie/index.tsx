import Lottie from "react-lottie";
import LoadingThreeDots from "../../assets/lottie/loading-three-dots.json";

interface LoadingThreeDotsLottieProps {
  height?: number;
  width?: number;
}

const LoadingThreeDotsLottie = ({
  height = 26,
  width = 32,
}: LoadingThreeDotsLottieProps) => {
  return (
    <Lottie
      options={{
        loop: true,
        autoplay: true,
        animationData: LoadingThreeDots,
      }}
      height={height}
      width={width}
    />
  );
};

export default LoadingThreeDotsLottie;
