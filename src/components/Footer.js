import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full text-lg font-medium border-t-2 border-solid border-dark sm:text-base">
      <Layout className="flex items-center justify-between py-8 lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()}&copy; All Rights Reserved</span>
        <div className="flex items-center lg:py-2">
          Powered <span className="px-1 text-2xl text-primary ">&#9825;</span>
          by&nbsp;
          <Link href="/about" className="underline underline-offset-2">
            Rivonit
          </Link>
        </div>
        <Link
          href="https://wa.me/94767329082"
          target="_blank"
          className="underline underline-offset-2"
        >
          Say hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
