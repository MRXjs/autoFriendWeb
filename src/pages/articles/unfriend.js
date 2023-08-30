import React from "react";
import ArticleTitle from "@/components/ArticleTitle";
import SideBar from "@/components/SideBar";
import ArticleStep from "@/components/ArticleStep";
import img1 from "../../../public/images/article-img/1.jpg";
import img2 from "../../../public/images/article-img/unfriend/2.jpg";
import img3 from "../../../public/images/article-img/unfriend/3.jpg";
import img4 from "../../../public/images/article-img/unfriend/4.jpg";
import img5 from "../../../public/images/article-img/unfriend/5.jpg";
import img6 from "../../../public/images/article-img/unfriend/6.jpg";
import img7 from "../../../public/images/article-img/unfriend/7.jpg";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";

const unfriend = () => {
  return (
    <div>
      <Head>
        <title>AutoFriends | Unfriend</title>
        <meta name="description" content="sample description" />
      </Head>
      <TransitionEffect />
      <SideBar />
      <ArticleTitle
        text={"Unfriend"}
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
            description='Select the "Unfriend" task and you will be taken to the "All Friends" page on Facebook.'
            src={img2}
            alt={"article img"}
          />
          <ArticleStep
            title="STEP 3"
            description="Enter the number of friends you want to unfriend."
            src={img3}
            alt={"article img"}
          />
          <ArticleStep
            title="STEP 4"
            description="After unfriending a friend, our extension lets you set a delay before unfriending the next one. You decide the delay range, and we'll randomly apply it each time."
            src={img4}
            alt={"article img"}
          />
          <ArticleStep
            title="STEP 5"
            description="(optional) This option is valuable for implementing a group delay when unfriending friends."
            src={img5}
            alt={"article img"}
          />
          <ArticleStep
            title="STEP 6"
            description="You are now ready to begin unfriending friends."
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

export default unfriend;
