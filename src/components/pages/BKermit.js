import React from 'react'
import './BKermit.css'

const BKermit = () => {
  return (
    <div className="BKermit-wrapper">
      <h1>
        Kermit
      </h1>
      <img src={process.env.PUBLIC_URL + '/images/keyboardKermit.gif'} />
      <h2>
        haciendo un
      </h2>
       <h1>
         git push
       </h1>
    </div>
  )
}

export default BKermit