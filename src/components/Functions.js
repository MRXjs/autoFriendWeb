import React from "react";
import Logo from "./Logo";
import { motion } from "framer-motion";
import Link from "next/link";

const Function = ({ name, href, x, y }) => {
  return (
    <Link
      href={href}
      className="absolute flex items-center justify-center font-semibold cursor-pointer"
    >
      <motion.div
        className="px-6 py-3 font-semibold rounded-full bg-dark text-light shadow-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent "
        whileHover={{ scale: 1.1 }}
        initial={{ x: 0, y: 0 }}
        whileInView={{ x: x, y: y }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        {name}
      </motion.div>
    </Link>
  );
};

const Functions = () => {
  return (
    <>
      <h2 className="w-full mt-10 font-bold text-center text-8xl md:text-6xl md:mt-32">
        Functions
      </h2>
      <div
        className="relative flex items-center justify-center w-full h-screen rounded-full bg-circularLight lg:p-6 md:p-4 xs:text-xs xs:p-2 lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg
      md:bg-circularLightMd
      sm:bg-circularLightSm
      "
      >
        <div className="z-10 flex items-center justify-center">
          <Logo href="/" />
        </div>
        <Function
          name="Add Friend"
          href="/articles/addfriend"
          x="0vw"
          y="-10vw"
        />
        <Function
          name="Confirm Request"
          href="/articles/confirmreq"
          x="15vw"
          y="-5vw"
        />
        <Function
          name="Delete Incoming Request"
          href="/articles/deleteincomingreq"
          x="15vw"
          y="5vw"
        />
        <Function
          name="Cancel Sent Request"
          href="/articles/cancelsentrequest"
          x="-15vw"
          y="5vw"
        />
        <Function
          name="Unfriend"
          x="-15vw"
          href="/articles/unfriend"
          y="-5vw"
        />
      </div>
    </>
  );
};

export default Functions;
