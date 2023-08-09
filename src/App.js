import {React, useState, useEffect} from 'react';
import Header from './component/Header';
import Main from './component/Main';
import Info from './component/Info';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

function App() {
  const [movies, setMovies] = useState([])
  async function getAllMovies() {
    const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=1')
    setMovies(res.data.results);
  }
  async function getSearch(word) {
    if(word !== ''){
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar`)
    setMovies(res.data.results);
    } else {
      getAllMovies()
    }
  }

  useEffect(() => {
    getAllMovies()
  },[])
  return (
    <div>
      <BrowserRouter>
        <Header search={getSearch}/>
        <Routes>
          <Route path='/' element={<Main data={movies}/>}/>
          <Route path='/movie/:id' element={<Info/>}/>
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
