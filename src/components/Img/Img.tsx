import React, { useState } from "react";
import { motion } from "framer-motion";

export interface ImgProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  reff?: React.RefObject<HTMLImageElement>;
}

const Img = ({src, alt, className, style, reff} : ImgProps) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <motion.img
      ref={reff}
      style={style}
      initial={{ opacity: 0 }}
      animate={{ opacity: loaded ? 1 : 0 }}
      exit={{ opacity: 0 }}
      onLoad={() => setLoaded(true)}
      className={className}
      src={src}
      alt={alt}
    />
  );
};

export default Img;