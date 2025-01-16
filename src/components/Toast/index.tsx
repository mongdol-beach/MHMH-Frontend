import { Toaster } from "react-hot-toast";
import { CSSProperties } from "react";

const Toast = () => {
  const BasicToastStyles: CSSProperties = {
    width: "180px",
    padding: "8px 16px",
    height: "auto",
    borderRadius: "86px",
    fontFamily: "Pretendard",
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: "18.2px",
    letterSpacing: "-0.02em",
    textAlign: "center",
  };

  return (
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 1500,
        success: {
          icon: null,
          style: {
            ...BasicToastStyles,
            background: "#27272C",
            color: "#F7F9FE",
          },
        },
        error: {
          icon: null,
          style: {
            ...BasicToastStyles,
            background: "#FF0000",
            color: "#F7F9FE",
          },
        },
      }}
    />
  );
};

export default Toast;
