import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AnimatedTextContainer } from "./styled";

interface AnimatedTextProps {
  children: React.ReactNode;
  // 애니메이션 트리거 값 (예: 클릭한 옵션 여부)
  isTriggerAnimation: boolean;
}

function AnimatedText({ children, isTriggerAnimation }: AnimatedTextProps) {
  // isTriggerAnimation가 변경될 때마다 animationKey를 갱신하여 기존 요소가 exit되고 새 요소가 mount됩니다.
  const [animationKey, setAnimationKey] = useState<number>(0);

  useEffect(() => {
    if (isTriggerAnimation) {
      setAnimationKey((prev) => prev + 1);
    }
  }, [isTriggerAnimation]);

  return (
    <AnimatedTextContainer>
      <AnimatePresence initial={false}>
        {/* absolute를 사용해서 덜컹거리는 이슈 해결 */}
        <motion.span
          key={animationKey}
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          // 새 요소는 아래쪽에서 시작
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          exit={{
            opacity: 0,
            y: -20,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
        >
          {children}
        </motion.span>
      </AnimatePresence>
    </AnimatedTextContainer>
  );
}

export default AnimatedText;
