import React from 'react';
import Card from './Card';
import Pagination from './Pagination';
const Main = ({data}) => {
  return (
    <div className='main-cont'>
      <div className='container'>
        {data.length > 0
          ? (data.map((mov)=> <Card key={mov.id} info={[mov.id, mov.title, mov.poster_path, mov.release_date, mov.vote_count, mov.vote_average]}/>))
          : <h2>لا يوجد افلام لعرضها...</h2>}
      </div>
      <Pagination info={data}/>
    </div>
  )
}

export default Main
