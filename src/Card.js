/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

const Card = (props) => {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='profile-picture' src='https://robohash.org/test?200x200'/>
      <div>
        <h2>Jane Doe</h2>
        <p>jane.doe@gmail.com</p>
      </div>
    </div>
  )
}

export default Card
