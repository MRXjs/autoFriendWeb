import React from "react";
import ArticleTitle from "@/components/ArticleTitle";
import ArticleStep from "@/components/ArticleStep";
import SideBar from "@/components/SideBar";
import img1 from "../../../public/images/article-img/1.jpg";
import img2 from "../../../public/images/article-img/cancel-sent-request/2.jpg";
import img3 from "../../../public/images/article-img/cancel-sent-request/3.jpg";
import img4 from "../../../public/images/article-img/cancel-sent-request/4.jpg";
import img5 from "../../../public/images/article-img/cancel-sent-request/5.jpg";
import img6 from "../../../public/images/article-img/cancel-sent-request/6.jpg";
import img7 from "../../../public/images/article-img/cancel-sent-request/7.jpg";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";

const cancelsentrequest = () => {
  return (
    <div>
      <Head>
        <title>AutoFriends | CancelSentRequest</title>
        <meta name="description" content="sample description" />
      </Head>
      <TransitionEffect />
      <SideBar />
      <ArticleTitle
        text={"Cancel Sent Request"}
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
            description="Choose the 'Cancel Sent Request' task, and you'll be directed to Facebook's 'Friend Request' page."
            src={img2}
            alt={"article img"}
          />
          <ArticleStep
            title="STEP 3"
            description="Input the number of request you wish to cancel."
            src={img3}
            alt={"article img"}
          />
          <ArticleStep
            title="STEP 4"
            description="After canceling a request, our extension allows you to set a delay before canceling the next one. You have the freedom to select the delay range, and each time, we'll apply a random delay within your chosen range."
            src={img4}
            alt={"article img"}
          />
          <ArticleStep
            title="STEP 5"
            description="(optional) This option is beneficial for implementing a group delay when canceling requests."
            src={img5}
            alt={"article img"}
          />
          <ArticleStep
            title="STEP 6"
            description="You are now prepared to start canceling the requests"
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

export default cancelsentrequest;
