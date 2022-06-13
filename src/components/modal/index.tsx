import { title } from "process";
import style from "./modal.module.css"
interface ModalProps{
    show:boolean,
    onClose:()=> void,
    title:string,
    content:string
    picture:string,
    link:string
}

const Modal = ({show, onClose, title,content, picture,link}:ModalProps) => {

if(!show){
    return null
}

    return (
          <div className={style.modal} onClick={onClose}>
            <div className={style.modalContent} onClick={e => e.stopPropagation()} >
              <div className={style.modalHeader}>
                <h1 className={style.modalTitle}>{title}</h1>
              </div>
              <img className={style.image} src={picture} alt="modal picture"/>
              <div className={style.modalBody}>
                <p>{content}</p>
               <a href={link} className={style.link}  target="_blank" rel="noopener noreferrer"> SOURCE OF INFORMATION</a> 
              </div>
              <div className={style.modalFooter}>
                <button onClick={onClose}  className={style.button}>
                  Close
                </button>
              </div>
            </div>
          </div>
        
      );
    };

export default Modal