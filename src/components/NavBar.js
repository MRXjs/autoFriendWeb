import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import { BiSolidPhoneCall, BiToggleLeft } from "react-icons/Bi";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`absolute left-0 inline-block  h-[1px] bg-dark -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`absolute left-0 inline-block  h-[1px] bg-dark -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative z-10 flex items-center justify-between w-full px-32 py-8 font-medium lg:px-16 md:px-12 sm:px-8">
      <button
        className="flex-col items-center justify-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <div className="flex items-center justify-between w-full lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/contact" title="Contact Us" className="mr-4" />
          <CustomLink href="/about" title={"About Us"} className="mr-4" />
        </nav>
        <nav className="flex flex-wrap justify-center item-center">
          <motion.a
            href="https://wa.me/94767329082"
            target="_blank"
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <IoLogoWhatsapp size={"30"} />
          </motion.a>
          <motion.a
            href="https://facebook.com"
            target="_blank"
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <BsFacebook size={30} />
          </motion.a>
          <motion.a
            href="tel:+94-767-329-082"
            target="_blank"
            className="w-6 ml-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <BiSolidPhoneCall size={30} />
          </motion.a>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex items-center justify-between min-w-[70vw] flex flex-col fixed top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 rounded-lg backdrop:blur-md py-32"
        >
          <nav className="flex flex-col items-center justify-center ">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/contact"
              title="Contact Us"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title={"About Us"}
              className=""
              toggle={handleClick}
            />
          </nav>
          <nav className="flex flex-wrap justify-center mt-2 item-center ">
            <motion.a
              href="https://wa.me/94767329082"
              target="_blank"
              className="w-6 mx-3 sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <IoLogoWhatsapp size={"30"} color="white" />
            </motion.a>
            <motion.a
              href="https://facebook.com"
              target="_blank"
              className="w-6 mx-3 sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <BsFacebook size={30} color="white" />
            </motion.a>
            <motion.a
              href="tel:+94-767-329-082"
              target="_blank"
              className="w-6 ml-3 sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <BiSolidPhoneCall size={30} color="white" />
            </motion.a>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo href="/" />
      </div>
    </header>
  );
};

export default NavBar;
