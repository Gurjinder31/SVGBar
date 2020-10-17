import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import style from '../css/style.css'
import Header from './Header';
import Homebar from './Homebar';
import Section from './Section'
import Login from './Login';


function App() {
  return (

      <div>
            <Router>
                
                  <Switch>
                
                  <Route exact path="/" >
                  <div className="nav-homebar">

                  <Header />
                  <Homebar />
                  </div>
                  <Section />
                  </Route>
                  </Switch>
            </Router>
         </div>         
 
        

  );
}

export default App;
