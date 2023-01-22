import React from "react";

export interface ImgProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

const Img = ({src, alt, className, style} : ImgProps) => {
  return <img style={style} className={className} src={src} alt={alt} />;
};

export default Img;