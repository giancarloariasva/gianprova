import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import FirstPage from '../pages/FirstPage/FirstPage'
import SecondPage from '../pages/SecondPage/SecondPage'

function SlideA() {
  return (
    <div className="slide one">
      <h2>
        soy el slide A alfa de giancarlo arias
      </h2>
      
      <Link to="/FirstPage">
        <button>go to First Page</button></Link>
      <Link to="/SecondPage"><button>go to Second Page</button></Link>
      <Switch>
        <Route exact path='/FirstPage' component={FirstPage} />
        <Route exact path='/SecondPage' component={SecondPage} />
      </Switch>
    </div>
  )
}

export default SlideA