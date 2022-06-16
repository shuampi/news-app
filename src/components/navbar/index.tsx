import style from "./index.module.css";
import Link from "next/link";
import Image from "next/image";
import Hamburguer from "../hamburguer";

import { useState } from "react";

interface NavBarProps {
  handelSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
  search?: string;
}
const API_KEY = process.env.NEXT_PUBLIC_KEY;

const NavBar = ({ handelSearch, handleClick, search }: NavBarProps) => {
  const [showSearch, setShowSearch] = useState(false);


  return (
    <>
    <nav className={style.container}>
      <div className={style.top}>
        <h1 className={style.header}>Shuampi News</h1>
        <Image
        className={style.icon}
          src="/magnifier_icon.png"
          alt="search icon"
          width="40"
          height="40"
          onClick={() => {
            setShowSearch(!showSearch);
          }}
        />
      </div>
      <ul className={style.navList}>
        <li>
          <Link href="/">
            <a className={style.links}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/international">
            <a className={style.links}>International</a>
          </Link>
        </li>
        <li>
          <Link href="/business">
            <a className={style.links}>Business</a>
          </Link>
        </li>
        <li>
          <Link href="/technology">
            <a className={style.links}>Technology</a>
          </Link>
        </li>
        <li>
          <Link href="/science">
            <a className={style.links}>Science</a>
          </Link>
        </li>
        <li>
          <Link href="/entertainment">
            <a className={style.links}>Entertainment</a>
          </Link>
        </li>
      </ul>
      {showSearch && (
        <div className={style.search}>
          <input
            className={style.input}
            type="search"
            onChange={handelSearch}
            value={search}
            required
          />
          <Link href="/search">
            <button className={style.button} onClick={() => handleClick()}>
              Search
            </button>
          </Link>
          <div
            className={style.close}
            onClick={() => {
              setShowSearch(false);
            }}
          >
            X
          </div>
        </div>
      )}
    </nav>
    <Hamburguer/>
    </>
  );
};

export default NavBar;
