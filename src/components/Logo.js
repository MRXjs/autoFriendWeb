import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../../public/images/Logo/auto-friend.png";
// import { CircularText } from "./Icons";

const MotionLink = motion(Link);

const Logo = ({ href }) => {
  return (
    <div>
      <div className="flex items-center justify-center mt-2">
        <MotionLink
          href={href}
          className="flex items-center justify-center w-16 h-16 rounded-full bg-dark text-light text-"
          whileHover={{
            scale: 1.2,
            transition: { duration: 1, repeat: Infinity },
          }}
        >
          <Image src={logo} alt="logo" width={"50"} height={"50"} />
        </MotionLink>
      </div>
    </div>
  );
};

export default Logo;
