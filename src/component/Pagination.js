import React from 'react'

const Pagination = () => {
  return (
    <div className='pages'>
      <button>السابق</button>
      <button className='active'>1</button>
      <button>2</button>
      <button style={{cursor: 'initial'}}>...</button>
      <button>400</button>
      <button>401</button>
      <button>التالي</button>
    </div>
  )
}

export default Pagination
