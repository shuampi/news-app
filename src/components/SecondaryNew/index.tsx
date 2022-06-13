import { url } from "inspector";
import { Dispatch, SetStateAction } from "react";
import style from "./index.module.css";

interface SecondaryNewProps {
  header: string;
  description: string;
  image: string;
  content: string;
  url: string;
  handelShow: () => void;
  handelTitle: (title: string) => void;
  handelPicture: (picture: string) => void;
  handelContent: (content: string) => void;
  handelLink: (url: string) => void;
}

export const SecondaryNew = ({
  header,
  description,
  image,
  content,
  url,
  handelLink,
  handelShow,
  handelTitle,
  handelPicture,
  handelContent,
}: SecondaryNewProps) => {
  return (
    <div
      className={style.container}
      onClick={() => {
        handelLink(url),
          handelTitle(header),
          handelShow(),
          handelPicture(image),
          handelContent(content);
      }}
    >
     
        <img
          className={style.image}
          src={image}
          alt="picture of secondary new"
        />
      
      <h3>{header}</h3>
      <p className={style.description}>{description}</p>
    </div>
  );
};
export default SecondaryNew;
