// to share states between pages you need to set the hook and the state in


import '../styles/globals.css'

import type { AppProps } from 'next/app'
import {useState} from "react"

const API_KEY= process.env.NEXT_PUBLIC_KEY_ONE

function MyApp({ Component, pageProps }: AppProps) {
  const [newsFound, setNewsFound] = useState([])
  const [search, setSearch] = useState("")

  const handelSearch = (e:React.ChangeEvent<HTMLInputElement>) =>  setSearch(e.target.value)
  const handleClick = () =>{  
    
    fetchData(search)}

  const fetchData = async(search:string) =>{
    try{const inputSearch = await fetch(`https://gnews.io/api/v4/search?q=${search}&lang=en&token=${API_KEY}`)
    const Data = await inputSearch.json();
    setNewsFound(Data)
    console.log('Data', Data)}catch(error){
      
    }
  
  }

  return <Component {...pageProps} 
  handelSearch={handelSearch}
  handleClick={handleClick}
  search={search}
  newsFound={newsFound}
  />
}

export default MyApp
