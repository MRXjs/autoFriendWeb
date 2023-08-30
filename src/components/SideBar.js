import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { RiUserFollowFill, RiUserUnfollowFill } from "react-icons/ri";
import { ImBin2 } from "react-icons/im";
import Link from "next/link";

const SideBarIcon = ({ icon, text, href }) => {
  return (
    <Link href={href} className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </Link>
  );
};

const SideBar = () => {
  return (
    <div className="fixed left-0 flex flex-col justify-center w-16 m-0 text-light">
      <SideBarIcon
        text="Add Friend"
        icon={<RiUserFollowFill size={"28"} />}
        href="/articles/addfriend"
      />
      <SideBarIcon
        text="Confirm Request"
        icon={<BsFillBookmarkPlusFill size={"28"} />}
        href="/articles/confirmreq"
      />
      <SideBarIcon
        text="Delete Incoming Request"
        icon={<ImBin2 size={"28"} />}
        href="/articles/deleteincomingreq"
      />
      <SideBarIcon
        text="Cancel Sent Request"
        icon={<AiFillCloseCircle size={"28"} />}
        href="/articles/cancelsentrequest"
      />
      <SideBarIcon
        text="Unfriend"
        icon={<RiUserUnfollowFill size={"28"} />}
        href="/articles/unfriend"
      />
    </div>
  );
};

export default SideBar;
