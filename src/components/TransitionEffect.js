import React from "react";
import { motion } from "framer-motion";
import logo from "../../public/images/Logo/auto-friend1000px.png";
import Image from "next/image";

const TransitionEffect = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 z-30 w-screen h-screen right-full bg-primary"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      <motion.div
        className="fixed top-0 bottom-0 z-20 flex items-center justify-center w-screen h-screen right-full bg-light"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
      >
        <Image src={logo} alt="logo" className="w-full" />
      </motion.div>

      <motion.div
        className="fixed top-0 bottom-0 z-10 w-screen h-screen right-full bg-dark"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
      />
    </>
  );
};

export default TransitionEffect;
