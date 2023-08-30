import ArticleStep from "@/components/ArticleStep";
import ArticleTitle from "@/components/ArticleTitle";
import SideBar from "@/components/SideBar";
import React from "react";
import img1 from "../../../public/images/article-img/1.jpg";
import img2 from "../../../public/images/article-img/delete-incoming-req/2.jpg";
import img3 from "../../../public/images/article-img/delete-incoming-req/3.jpg";
import img4 from "../../../public/images/article-img/delete-incoming-req/4.jpg";
import img5 from "../../../public/images/article-img/delete-incoming-req/5.jpg";
import img6 from "../../../public/images/article-img/delete-incoming-req/6.jpg";
import img7 from "../../../public/images/article-img/delete-incoming-req/7.jpg";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";

const deleteincomingreq = () => {
  return (
    <div>
      <Head>
        <title>AutoFriends | DeleteIncomingRequest</title>
        <meta name="description" content="sample description" />
      </Head>
      <TransitionEffect />
      <SideBar />
      <ArticleTitle
        text={"Delete Incoming Request"}
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
            description='Choose the task labeled "Delete Incoming Request," and you will be directed to Facebook "Friend Requests" page. '
            src={img2}
            alt={"article img"}
          />
          <ArticleStep
            title="STEP 3"
            description="Enter the number of requests you want to delete"
            src={img3}
            alt={"article img"}
          />
          <ArticleStep
            title="STEP 4"
            description="After deleting a request, our extension enables you to set a delay before deleting the next one. You have the flexibility to choose the delay range, and each time, we'll apply a random delay within your selected range"
            src={img4}
            alt={"article img"}
          />
          <ArticleStep
            title="STEP 5"
            description="(optional) This option is valuable for implementing a group delay when deleting friend requests."
            src={img5}
            alt={"article img"}
          />
          <ArticleStep
            title="STEP 6"
            description="You are now set to start deleting incoming friend requests."
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

export default deleteincomingreq;
