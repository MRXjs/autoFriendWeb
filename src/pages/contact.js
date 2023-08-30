import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import whatsappIconWhite from "../../public/images/icons/whatsapp-white.png";
import mailIconWhite from "../../public/images/icons/mail-white.png";
import TransitionEffect from "@/components/TransitionEffect";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const contact = () => {
  const [formData, setFormData] = useState({});
  const [whileSending, setWhileSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    setWhileSending(true);

    const config = {
      Host: "",
      Username: "",
      Password: "",
      To: "",
      From: `${formData.email}`,
      Subject: `AutoFriend ${formData.name}`,
      Body: `${formData.message}`,
    };

    await toast.promise(window.Email.send(config), {
      pending: "Promise is pending",
      success: "Message was successfully👌",
      error: "Something wrong🤯",
    });
    setWhileSending(false);
  };

  return (
    <>
      <Head>
        <title>AutoFriends | Contact</title>
        <meta name="description" content="sample description" />
      </Head>
      <TransitionEffect />
      <main className="flex flex-col items-center justify-center w-full">
        <Layout className="grid w-full h-screen place-items-center bg-light ">
          <div className="flex flex-row bg-white rounded-md shadow-md">
            <div className="h-[350px] w-[350px] bg-dark p-8 md:hover:scale-y-110 rounded-md transition lg:hidden block  ">
              <div className="flex justify-between">
                <h2 className="text-xl text-white">Contact Information</h2>
              </div>
              <div className="flex flex-row mt-6 ">
                <div>
                  <Image
                    src={whatsappIconWhite}
                    alt="whatsapp icon"
                    className="w-8 h-8 mr-2"
                  />
                </div>
                <div>
                  <h2 className="text-xs text-slate-200 ">WhatsApp :</h2>
                  <p className="text-xs text-white">+94 767 329 082</p>
                </div>
              </div>

              <div className="flex flex-row mt-6 ">
                <div>
                  <Image
                    src={mailIconWhite}
                    alt="whatsapp icon"
                    className="w-8 h-8 mr-2"
                  />
                </div>
                <div>
                  <h2 className="text-xs text-slate-200 ">Email :</h2>
                  <p className="text-xs text-white">sample@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="h-[350px] w-[350px] px-6 py-8">
              <div className="flex justify-between">
                <h2 className="text-xl text-dark">Get In Touch</h2>
              </div>
              <form onSubmit={formSubmit}>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter Your Name"
                  className="w-full h-8 px-3 my-2 text-xs border rounded-md outline-none focus:shadow-sm"
                  onChange={handleChange}
                  value={formData.name}
                  disabled={whileSending}
                />
                <br />
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  required
                  placeholder="Enter Your Email"
                  className="w-full h-8 px-3 my-2 text-xs border rounded-md outline-none focus:shadow-sm"
                  disabled={whileSending}
                />
                <br />
                <textarea
                  name="message"
                  required
                  type="text"
                  placeholder="Enter Your Message"
                  className="w-full h-20 px-3 py-2 my-2 text-xs border rounded-md outline-none focus:shadow-sm resize:none"
                  onChange={handleChange}
                  value={formData.message}
                  disabled={whileSending}
                ></textarea>
                <br />
                <input
                  type="submit"
                  value="Send"
                  className="px-4 py-2 text-xs text-white border-2 border-transparent border-solid rounded-md cursor-pointer bg-dark hover:shadow-md hover:bg-light hover:text-dark hover:border-dark"
                  disabled={whileSending}
                />
              </form>
            </div>
          </div>
          <ToastContainer position="bottom-center" theme="dark" />
        </Layout>
      </main>
    </>
  );
};

export default contact;
