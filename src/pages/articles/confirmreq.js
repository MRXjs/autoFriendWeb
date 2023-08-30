import ArticleStep from "@/components/ArticleStep";
import SideBar from "@/components/SideBar";
import React from "react";
import img1 from "../../../public/images/article-img/1.jpg";
import img2 from "../../../public/images/article-img/confirm-req/2.jpg";
import img3 from "../../../public/images/article-img/confirm-req/3.jpg";
import img4 from "../../../public/images/article-img/confirm-req/4.jpg";
import img5 from "../../../public/images/article-img/confirm-req/5.jpg";
import img6 from "../../../public/images/article-img/confirm-req/6.jpg";
import img7 from "../../../public/images/article-img/confirm-req/7.jpg";
import ArticleTitle from "@/components/ArticleTitle";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";

const confirmreq = () => {
  return (
    <div className="w-full">
      <Head>
        <title>AutoFriends | ConfirmRequest</title>
        <meta name="description" content="sample description" />
      </Head>
      <TransitionEffect />
      <SideBar />
      <ArticleTitle
        text={"Confirm Request"}
        className="mt-32 text-6xl font-bold text-center uppercase font-mont"
      />
      <article className="w-[75%] mx-auto relative  ">
        <ul>
          <ArticleStep
            title="STEP 1"
            description="Launch the extension. It will simultaneously open our webpage in a new tab. Remember to have the webpage open in your browser when using the function."
            src={img1}
            alt={"article img"}
          />
          <ArticleStep
            title="STEP 2"
            description='Select the "Confirm Request" task and you will be taken to the "Friend requests" page on Facebook'
            src={img2}
            alt={"article img"}
          />
          <ArticleStep
            title="STEP 3"
            description="The number of friend requests you wish to confirm."
            src={img3}
            alt={"article img"}
          />
          <ArticleStep
            title="STEP 4"
            description="Once confirm a friend request, our extension allows you to introduce a delay before confirming the next one. You have control over the delay range, and each time, we'll apply a random delay within your chosen range."
            src={img4}
            alt={"article img"}
          />
          <ArticleStep
            title="STEP 5"
            description="(optional) This option is beneficial for implementing a group delay when confirming friend requests."
            src={img5}
            alt={"article img"}
          />
          <ArticleStep
            title="STEP 6"
            description="You are now prepared to start confirming friend requests."
            src={img6}
            alt={"article img"}
          />
          <ArticleStep
            title="STEP 7"
            description="You can halt the process using the 'stop' button."
            src={img7}
            alt={"article img"}
          />
        </ul>
      </article>
    </div>
  );
};

export default confirmreq;
