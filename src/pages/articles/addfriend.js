import ArticleStep from "@/components/ArticleStep";
import SideBar from "@/components/SideBar";
import React from "react";
import ArticleTitle from "@/components/ArticleTitle";
import img1 from "../../../public/images/article-img/1.jpg";
import img2 from "../../../public/images/article-img/add-friend/2.jpg";
import img3 from "../../../public/images/article-img/add-friend/3.jpg";
import img4 from "../../../public/images/article-img/add-friend/4.jpg";
import img5 from "../../../public/images/article-img/add-friend/5.jpg";
import img6 from "../../../public/images/article-img/add-friend/6.jpg";
import img7 from "../../../public/images/article-img/add-friend/7.jpg";
import img8 from "../../../public/images/article-img/add-friend/8.jpg";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";

const addfriend = () => {
  return (
    <div>
      <Head>
        <title>AutoFriends | AddFriend</title>
        <meta name="description" content="sample description" />
      </Head>
      <TransitionEffect />
      <SideBar />
      <ArticleTitle
        text={"Add Friend"}
        className="mt-32 text-6xl font-bold text-center uppercase font-mont"
      />
      <article className="w-[75%] mx-auto relative sm:w-full ">
        <ul>
          <ArticleStep
            title="STEP 1"
            description="Launch the extension. It will simultaneously open our webpage in a new tab. Remember to have the webpage open in your browser when using the function."
            src={img1}
            alt={"article img"}
          />
          <ArticleStep
            title="STEP 2"
            description='Select the "Add Friends" task and you will be taken to the "Suggested Friends" page on Facebook '
            src={img2}
            alt={"article img"}
          />
          <ArticleStep
            title="STEP 3"
            description="Input the number of friends you wish to add."
            src={img3}
            alt={"article img"}
          />
          <ArticleStep
            title="STEP 4"
            description="After adding a friend, our extension lets you set a delay before adding the next one. You decide the delay range, and we'll randomly apply it each time."
            src={img4}
            alt={"article img"}
          />
          <ArticleStep
            title="STEP 5"
            description="(optional) This option is useful for applying a collective delay when adding friends."
            src={img5}
            alt={"article img"}
          />
          <ArticleStep
            title="STEP 6"
            description="You are now ready to begin adding friends."
            src={img6}
            alt={"article img"}
          />
          <ArticleStep
            title="STEP 7"
            description="You can halt the process using the 'stop' button."
            src={img7}
            alt={"article img"}
          />
          <ArticleStep
            title="Additional details"
            description="If you close the tab where our webpage is open during the process, you can see this alert.  If you select 'Yes, continue,' our webpage will reopen, and the process will restart. Choosing 'No, cancel' will halt the process."
            src={img8}
            alt={"article img"}
          />
        </ul>
      </article>
    </div>
  );
};

export default addfriend;
