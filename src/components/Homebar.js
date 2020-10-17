import React from 'react';
import {Link} from 'react-router-dom'
import $ from 'jquery';

import style from '../css/homebar.css';
import { Feedback, Visibility } from '@material-ui/icons';






class Homebar extends React.Component {
  state ={
    opacity: 1,
    scrollTop: 0
    
  };

   onScroll=()=>{
    this.setState({scrollTop:  $(window).scrollTop()})
    this.setState({opacity: 1- this.state.scrollTop / 550})
    
  }

  
componentDidMount=()=>{


  window.addEventListener('scroll', this.onScroll)
  }

  
 render(){
    return (
        <div  className="bar-container">
                                                                {/* fade1 */}
          <div  className="top-center text-center" style={{opacity: this.state.opacity}}>
              <div className="mx-auto play"><img src={require('../images/play.png')}/></div>
              <div className="content-bar">
              <p>For anyone who still has a dream, </p> <span>Start Here.</span>
              </div>
              <button type="button" className="center-btn btn btn-light">
                <Link   to="/#projects">Take the Tour</Link>
              </button>
              
            

            </div> 
              <img className="feedback" src={require("../images/feedback.png")} />

            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path className="svgpath" fill="#E95062" fill-opacity="1" d="M0,224L60,240C120,256,240,288,360,277.3C480,267,600,213,720,208C840,203,960,245,1080,229.3C1200,213,1320,139,1380,101.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
  
         
       </div>
    )
    }
}

export default Homebar;
