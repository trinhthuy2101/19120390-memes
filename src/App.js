// import logo from './logo.svg';
import { useCallback, useEffect, useState } from 'react';
import './App.css';

function App() {
  const [memes, setMemes]=useState([]);

  const fetchMemes= useCallback(async()=>{
    console.log("Do it again!")
    const data=await fetch("https://api.imgflip.com/get_memes")
    const data1=await data.json()

    setMemes(data1.data.memes)
  },[])

  useEffect(()=>{
    fetchMemes()
  },[])

  const ListMemeImage = (listMeme) => {
    return (
    <div className='ImageList row'> 
      {
        listMeme.map((item)=>{
          return (
          <div key={item.url} className="col-lg-4 col-md-6 col-sm-12 bg-yellow">
            <img src={`${item.url}?w=164&h=164&fit=crop&auto=format`} 
              alt={item.title}
              loading="lazy"></img>
          </div>)})
      }
    </div>
    )
  }

  return (
    <div className="App">
        <button className='btn btn-success m-2' onClick={fetchMemes}>
          Load memes
        </button>
        {memes && ListMemeImage(memes)}
    </div>
  );
}

export default App;
