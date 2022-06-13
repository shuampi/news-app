import SecondaryNew from "../SecondaryNew"
import style from "./index.module.css"
interface CollectionNewsProps{
  topic:string;
  news:any;
  handelShow: () => void;
  handelTitle: (title: string) => void;
  handelPicture:(picture:string)=>void;
    handelContent:(content:string)=>void;
    handelLink: (url:string) => void
}

const CollectionNews = ({topic, news, handelShow, handelTitle, handelContent,handelLink,handelPicture}:CollectionNewsProps) => {
  return (
    <div>
        <hr/>
        <h2 className={style.topic}>{topic}</h2>
        <div className={style.news}>
        <SecondaryNew
        header={news.articles[0].title}
        description={news.articles[0].description}
        image={news.articles[0].image}
        content={news.articles[0].content}
        url={news.articles[0].url}
         handelShow={handelShow}
         handelTitle={handelTitle}
         handelPicture={handelPicture}
         handelContent={handelContent}
         handelLink={handelLink}
         />
         <SecondaryNew
        header={news.articles[1].title}
        description={news.articles[1].description}
        image={news.articles[1].image}
        content={news.articles[1].content}
        url={news.articles[1].url}
         handelShow={handelShow}
         handelTitle={handelTitle}
         handelPicture={handelPicture}
         handelContent={handelContent}
         handelLink={handelLink}
         />
         <SecondaryNew
        header={news.articles[2].title}
        description={news.articles[2].description}
        image={news.articles[2].image}
        content={news.articles[2].content}
        url={news.articles[2].url}
         handelShow={handelShow}
         handelTitle={handelTitle}
         handelPicture={handelPicture}
         handelContent={handelContent}
         handelLink={handelLink}
         />
         <SecondaryNew
        header={news.articles[3].title}
        description={news.articles[3].description}
        image={news.articles[3].image}
        content={news.articles[3].content}
        url={news.articles[3].url}
         handelShow={handelShow}
         handelTitle={handelTitle}
         handelPicture={handelPicture}
         handelContent={handelContent}
         handelLink={handelLink}
         />
        </div>
    </div>
  )
}

export default CollectionNews