// import logo from './logo.svg';
import { useCallback, useEffect, useState } from 'react';
import './App.css';

function App() {
  const [meme, setMemes]=useState()
  const fetchMemes= useCallback(async()=>{
    const data=await fetch("https://api.imgflip.com/get_memes")
    const data1=await data.json()
    console.log(data1)
    setMemes(data1.data.memes)
  },[])
  useEffect(()=>{
    fetchMemes()
    return 
  },[fetchMemes])

  function ListMemeImage(listMeme){
    return (
    <div> 
      {
        listMeme.memes.map((item)=>{
          return (
          <div key={item.url}>
            <img src={`${item.url}?w=256&h=256&fit=crop&auto=format`}
              scrSet={`${item.url}?w=256&h=256&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"></img>
          </div>)})
      }
    </div>
     
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={fetchMemes}>
          Load memes
        </button>
        {meme&ListMemeImage(meme.data)}
      </header>
      <body>
      
      </body>
    </div>
  );
}

export default App;
