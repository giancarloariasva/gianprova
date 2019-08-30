import  React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import Ctesta from '../pages/Ctesta/Ctesta'
import CTestB from '../pages/CTestB/CTestB'


function SlideC() {
  return (
      <div className="App slide C">
        <h1>
          soy el slide C
        </h1>
        <Link to="/Ctesta">
          <button>Aqui click test a</button>
        </Link>
        <Link to="/CTestB">
          <button>Aqui click test b</button>
        </Link>
        <Switch>
          <Route exact path='/CTestB' component={CTestB}/>
          <Route exact path='/Ctesta' component={Ctesta}/>
        </Switch>
      </div>
    
  )
}

export default SlideC