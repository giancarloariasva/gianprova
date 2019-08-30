import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Ctesta from '../pages/Ctesta/Ctesta'
import CTestB from '../pages/CTestB/CTestB'
import BKermit from '../pages/BKermit'
import './SlideB.css'

function SlideB() {
  return (
    <div className="slide B container">
      <div className="A-row">
        <h1 className="item-A1">
          soy el item A1
          </h1>
        <h1 className="item-A2">
          soy el item A2
          </h1>
        <h1 className="item-A3">
          soy el item A3
          </h1>
        <Link to="/Ctesta">
        <button>Aqui click test a</button>
        </Link>
        <Link to="/CTestB">
          <button>Aqui click test B</button>
        </Link>
        <Link to="/BKermit">
        <button>Aqui trabajando como un muñeco jaja</button>
        </Link>
      </div>
      <div className="page">
        <Switch>
          <Route exact path='/Ctesta' component={Ctesta} />
          <Route exact path='/CTestB' component={CTestB} />
          <Route exact path='/BKermit' component={BKermit} />
        </Switch>
      </div>
      <div className="D-row">
        <h1 className="D1">soy un D1</h1>
        <h1 className="D2">soy un D2</h1>
        <h1 className="D3">soy un D3</h1>
      </div>
    </div>

  )
}

export default SlideB