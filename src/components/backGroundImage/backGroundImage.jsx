import React from "react";
import { image1 } from "../../assets/images";

const BackGroundImage = () => {
  return (
    <div
      style={{
        backgroundImage: `url${image1}`,
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    ></div>
  );
};

export default BackGroundImage;
