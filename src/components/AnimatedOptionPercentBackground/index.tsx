import { AnimatePresence } from "framer-motion";
import * as S from "./styled";

interface AnimatedOptionPercentBackgroundProps {
  percent: number | undefined;
  $isClicked: boolean;
}

const AnimatedOptionPercentBackground = ({
  percent,
  $isClicked,
}: AnimatedOptionPercentBackgroundProps) => {
  return (
    <AnimatePresence>
      {percent && (
        <S.OptionPercentBackground
          $percent={percent}
          $isClicked={$isClicked}
          variants={{
            initial: {
              opacity: 0,
              height: 0,
            },
            animate: {
              opacity: 1,
              height: `${percent}%`,
            },
            exit: {
              opacity: 0,
              transition: {
                opacity: { duration: 0.5, ease: "easeInOut" },
              },
            },
          }}
          initial="initial"
          animate="animate"
          exit="exit"
        />
      )}
    </AnimatePresence>
  );
};

export default AnimatedOptionPercentBackground;
