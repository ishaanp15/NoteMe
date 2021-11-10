import React from "react";
import Lottie from "react-lottie";

export default function LottieAnimation({ lotti, width, height,loop }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lotti,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions2 = {
    loop: false,
    autoplay: true,
    animationData: lotti,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  if(loop)
  return (
    <div>
      <Lottie options={defaultOptions} height={height} width={width} />
    </div>
  );

  return (
    <div>
      <Lottie options={defaultOptions2} height={height} width={width} />
    </div>
  );
};