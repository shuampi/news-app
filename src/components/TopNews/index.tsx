import style from "./index.module.css";
import { Dispatch, SetStateAction } from "react";
import HighlightNew from "../HighlightNew";
import SecondaryNew from "../SecondaryNew";
interface TopNewsProps {
  breakingNews: any;
  handelShow: () => void;
  handelTitle: (title: string) => void;
  handelPicture: (picture: string) => void;
  handelContent: (content: string) => void;
  handelLink: (url:string) => void
}

const TopNews = ({
  breakingNews,
  handelShow,
  handelContent,
  handelPicture,
  handelTitle,
  handelLink
}: TopNewsProps) => {
  if (!breakingNews) {
    return <p>Loading...</p>;
  }

  return (
    <div className={style.container}>
      <HighlightNew
        header={breakingNews.articles[0].title}
        description={breakingNews.articles[0].description}
        image={breakingNews.articles[0].image}
        content={breakingNews.articles[0].content}
        url={breakingNews.articles[0].url}
        handelShow={handelShow}
        handelTitle={handelTitle}
        handelPicture={handelPicture}
        handelContent={handelContent}
        handelLink={handelLink}
      />
      <div className={style.secondaryNews}>
        <div className={style.firstLine}>
          <SecondaryNew
            header={breakingNews.articles[1].title}
            description={breakingNews.articles[1].description}
            image={breakingNews.articles[1].image}
            content={breakingNews.articles[1].content}
            url={breakingNews.articles[1].url}
            handelShow={handelShow}
            handelTitle={handelTitle}
            handelPicture={handelPicture}
             handelContent={handelContent}
             handelLink={handelLink}
          />
          <SecondaryNew
            header={breakingNews.articles[2].title}
            description={breakingNews.articles[2].description}
            image={breakingNews.articles[2].image}
            content={breakingNews.articles[2].content}
            url={breakingNews.articles[2].url}
            handelShow={handelShow}
            handelTitle={handelTitle}
           handelPicture={handelPicture}
           handelContent={handelContent}
           handelLink={handelLink}
          />
        </div>
        <div className={style.secondLine}>
          <SecondaryNew
            header={breakingNews.articles[3].title}
            description={breakingNews.articles[3].description}
            image={breakingNews.articles[3].image}
            content={breakingNews.articles[3].content}
            url={breakingNews.articles[3].url}
            handelShow={handelShow}
            handelTitle={handelTitle}
            handelPicture={handelPicture}
             handelContent={handelContent}
             handelLink={handelLink}
          />
          <SecondaryNew
            header={breakingNews.articles[4].title}
            description={breakingNews.articles[4].description}
            image={breakingNews.articles[4].image}
            content={breakingNews.articles[4].content}
            url={breakingNews.articles[4].url}
            handelShow={handelShow}
            handelTitle={handelTitle}
            handelPicture={handelPicture}
            handelContent={handelContent}
            handelLink={handelLink}
          />
        </div>
      </div>
    </div>
  );
};

export default TopNews;
