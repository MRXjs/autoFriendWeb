import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Category = ({ title, description }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-20 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="text-2xl font-bold capitalize sm:text-xl xs:text-lg">
          {title}
        </h3>
        <p className="w-full font-medium md:text-sm ">{description}</p>
      </motion.div>
    </li>
  );
};

const Tos = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="mt-20 mb-64">
      <h2 className="w-full mb-32 font-bold text-center text-8xl md:text-6xl xs:text-4xl md:mb-16">
        Terms of service
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute top-0 left-9 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="flex flex-col items-start justify-between w-full ml-4 xs:ml-2">
          <Category
            title={"User Conduct"}
            description={
              "When you use the extension, our web page must be open in your browser."
            }
          />

          <Category
            title={"Privacy Policy"}
            description={
              "This extension has no connection to the Facebook company. / We never collect your data. / We are not liable for any harm to your Facebook account."
            }
          />

          <Category
            title={"Intellectual Property"}
            description={" This program was developed by Rivonit Technology."}
          />
        </ul>
      </div>
    </div>
  );
};

export default Tos;
