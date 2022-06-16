import style from "./index.module.css"
import Link from "next/link"

const Hamburguer = () => {
  return (
    <div>
<input type="checkbox" id={style.hamburgerInput} className={style.burgerShow} />
<label className={style.menu} htmlFor={style.hamburgerInput}>
  <nav className={style.sidebar}>
    <h3>Menu</h3>
    <ul>
      <li><Link href="/"><a>Home</a></Link></li>
      <li><Link href="/international"><a>International</a></Link></li>
      <li><Link href="/business"><a>Business</a></Link></li>
      <li><Link href="/technology"><a>Technology</a></Link></li>
      <li><Link href="/"><a>Science</a></Link></li>
      <li><Link href="/"><a>Entertainment</a></Link></li>
    </ul>
  </nav>
</label>
<div className={style.overlay}></div>
    </div>
  )
}

export default Hamburguer