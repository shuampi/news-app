import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import CollectionNews from "../src/components/collectionnews";
import Footer from "../src/components/footer";
import Modal from "../src/components/modal";
import NavBar from "../src/components/navbar/index";
import TopNews from "../src/components/TopNews/index";
import { link } from "fs";

interface HomeProps {
  handelSearch: (e:React.ChangeEvent<HTMLInputElement>) => void,
  handleClick:()=> void,
  search:string
  breakingNews:any,
  sportsNews:any,
  nationNews:any,
  businessNews:any
}

const API_KEY = process.env.NEXT_PUBLIC_KEY

const Business = ({handelSearch, handleClick,search, breakingNews,sportsNews}:HomeProps) => {

const [show, setShow] = useState(false)
const [title, setTitle] = useState("")
const [content, setContent] = useState("")
const [picture, setPicture] = useState("")
const [link, setLink] = useState("")


const handelShow = () => setShow(true)
const handelTitle = (title:string)=> setTitle(title)
const handelContent = (content:string) => setContent(content)
const handelPicture = (picture:string) => setPicture(picture)
const handelLink = (url:string) => setLink(url)


  return (
    <div >
      <Head>
        <title>Shuampi News</title>
        <meta name="description" content="Generated by create next app" />
        
      </Head>
      
      <main >
      <NavBar 
        handelSearch={handelSearch}
        handleClick={handleClick}
        search={search}
        />
        <Modal 
        title={title}
        picture={picture}
        content={content}
        show={show} 
        link={link}
        onClose={()=>{setShow(false); setContent(""); setTitle("");setPicture("")}}
        />
        <TopNews breakingNews={breakingNews}
         handelShow={handelShow}
         handelTitle={handelTitle}
         handelPicture={handelPicture}
         handelContent={handelContent}
         handelLink={handelLink}
         />
      
             <hr/>
      </main>
    <Footer/>  
    </div>
  );
};
export async function getStaticProps() {
  try{const breakingResponse = await fetch(`https://gnews.io/api/v4/top-headlines?token=${API_KEY}&lang=en&topic=business`);
  const breakingNews= await breakingResponse.json();
  
  
  return {
    props: {breakingNews}, // will be passed to the page component as props
  }}catch(error){
    
  }
}

export default Business;