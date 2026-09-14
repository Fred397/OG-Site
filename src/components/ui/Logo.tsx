import React from "react";
import logoImage from "../../assets/logo.png";

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = "", size = 36 }) => {
  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src={logoImage}
        alt="Opus Geeks"
        style={{ height: size, width: "auto" }}
        className="h-auto w-auto shrink-0 object-contain drop-shadow-[0_0_12px_rgba(0,158,225,0.45)]"
      ></img>
    </div>
  );
};
