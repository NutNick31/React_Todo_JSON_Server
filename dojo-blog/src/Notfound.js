import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div className='not-found'>
      <h2>Sorry</h2>
      <p>Page can't be found</p>
      <Link to='/' >Home</Link>
    </div>
  )
}

export default Notfound
