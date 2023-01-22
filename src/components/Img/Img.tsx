import React from "react";

export interface ImgProps {
  src: string;
  alt: string;
  className?: string;
}

const Img = ({src, alt, className} : ImgProps) => {
  return <img className={className} src={src} alt={alt} />;
};

export default Img;