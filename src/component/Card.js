import React from 'react';
import { Link } from 'react-router-dom';
const Card = ({info}) => {
  let [id, title, poster_path, release_date, vote_count, vote_average] = info;
  return (
    <Link to={'/movie/' + id}>
      <div className='card'>
        <img src= {`https://image.tmdb.org/t/p/w500${poster_path}`} alt='film img' width='100%' height='100%'/>
        <div className='info'>
          <p>اسم الفيلم: {title}</p>
          <p>تاريخ الاصدار: {release_date}</p>
          <p>عدد المقيمين: {vote_count}</p>
          <p>التقيم: {vote_average}</p>
        </div>
      </div>
    </Link>
  )
}

export default Card
