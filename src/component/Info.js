/* eslint-disable jsx-a11y/alt-text */
import { React, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
const Info = () => {
  const param = useParams().id;
  const [movie, setMovie] = useState([])
  async function getMovie() {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${param}?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`)
    setMovie(res.data)
    console.log(res.data)
  }
  useEffect(()=>{
    getMovie()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div className='infoPage'>
      <div className='container'>
        <div className='about'>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} atl='test' height='100%' width='auto'/>
          <div className='info'>
            <p>اسم الفيلم: <span>{movie.title}</span></p>
            <p>تاريخ الاصدار: <span>{movie.release_date}</span></p>
            <p>عدد المقيمين: <span>{movie.vote_count}</span></p>
            <p>التقيم: <span>{movie.vote_average}</span></p>
          </div>
        </div>
        <div className='story'>
          <h2>القصة:</h2>
          <p>{movie.overview}</p>
        </div>
        <div className='control'>
          <Link to='/'>
            <button>العودة للرئيسية</button>
          </Link>
          <a href={movie.homepage}>
          <button>مشاهدة الفيلم</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Info
