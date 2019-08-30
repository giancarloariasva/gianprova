import React from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import FirstPage from '../pages/FirstPage/FirstPage'
import SecondPage from '../pages/SecondPage/SecondPage'

function SlideOne() {
  return (
    <div className="App slide one">
      
        soy el slide uno de giancarlo arias
      <button>Aqui</button>
    <Link to="/FirstPage">donde estas???</Link>
    <Link to="/SecondPage">Aqui estoy yo</Link>
    <Switch>
        <Route exact path='/FirstPage' component={FirstPage} />
        <Route exact path='/SecondPage' component={SecondPage} />
        
    </Switch>
      
    </div>
    
    
  )
}

export default SlideOne