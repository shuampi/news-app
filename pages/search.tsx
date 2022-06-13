import { Key } from "react";
import { useState } from "react";
import SecondaryNew from "../src/components/SecondaryNew";
import Modal from "../src/components/modal";
import Footer from "../src/components/footer"
import Navbar from "../src/components/navbar"
import style from "../styles/search.module.css"

interface SearchProps {
  newsFound: any;
  handelSearch: (e:React.ChangeEvent<HTMLInputElement>) => void,
  handleClick:()=> void,
}

const Search = ({ newsFound, handleClick,handelSearch }: SearchProps) => {
  
  console.log("newsFound :>> ", newsFound);
 
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [picture, setPicture] = useState("");
  const [link, setLink] = useState("");

  const handelShow = () => setShow(true);
  const handelTitle = (title: string) => setTitle(title);
  const handelContent = (content: string) => setContent(content);
  const handelPicture = (picture: string) => setPicture(picture);
  const handelLink = (url: string) => setLink(url);

  if (newsFound.length === 0) {
    return <p>Nothing found</p>;
  } else if (newsFound.totalArticles === 0) {
    return <p>NO RESULTS, PLEASE TRY SEARCHING FOR SOMETHING ELSE.</p>;
  }

  return (
    <div>
     
      <Navbar handleClick={handleClick} handelSearch={handelSearch}/>
      <h1> SEARCH RESULTS</h1>
      <div >
        {newsFound.articles === undefined && (
          <p>NO RESULTS, PLEASE TRY SEARCHING FOR SOMETHING ELSE.</p>
        )}
      </div>
      <div className={style.container}>
        {newsFound.articles !== undefined &&
          newsFound.articles.map(
            (article: {
              publishedAt: Key | null | undefined;
              title: string;
              description: string;
              image: string;
              content: string;
              url: string;
            }) => (
              <SecondaryNew
                key={newsFound.articles.indexOf(article)}
                header={article.title}
                description={article.description}
                image={article.image}
                handelShow={handelShow}
                handelTitle={handelTitle}
                content={article.content}
                handelLink={handelLink}
                handelPicture={handelPicture}
                handelContent={handelContent}
                url={article.url}
              />
            )
          )}
      </div>
      <Modal
        show={show}
        onClose={() => {
          setShow(false);
          setContent("");
          setTitle("");
          setPicture("");
          setLink("");
        }}
        title={title}
        content={content}
        picture={picture}
        link={link}
      />
      <Footer/>
    </div>
  );
};

export default Search;
