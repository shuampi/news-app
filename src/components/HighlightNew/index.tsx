import style from "./index.module.css"

interface HighlightNewProps{
    header:string;
    description:string;
    image:string;
    content:string;
    url:string;
    handelShow:()=>void;
    handelTitle:(title:string)=>void;
    handelPicture:(picture:string)=>void;
    handelContent:(content:string)=>void;
    handelLink: (url:string) => void
}

const HighlightNew = ({header, description, image,content,url, handelLink,handelShow,handelTitle,handelPicture,handelContent}:HighlightNewProps) => {
 
  return (
    <div className={style.container} onClick={()=>{handelLink(url), handelTitle(header) ,handelShow(), handelPicture(image), handelContent(content)}}>
        <h1 className={style.header}>{header}</h1>
        <img className={style.image} src={image} alt='image of top new'/>
        <p>{description}</p>
    </div>
  )
}

export default HighlightNew