import Image from "next/image";
import React from "react";

const ArticleStep = ({ title, description, src, alt }) => {
  return (
    <li className="my-20 first:mt-20 last:mb-36 w-[60%] mx-auto flex flex-col items=center justify-between">
      <div>
        <h3 className="text-2xl font-bold capitalize ">{title}</h3>
        <p className="w-full font-medium">{description}</p>
        <Image src={src} alt={alt} />
      </div>
    </li>
  );
};

export default ArticleStep;
