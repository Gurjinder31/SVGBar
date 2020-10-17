import React from 'react'

import Style from '../css/section.css'

const Section = () => {
    return (
        <div className="section-container ">
         <div class="container my-container">

                
                <div className="first">
                 <img src={require("../images/chess.png")} />
                 <h1>Discover the WFG Difference</h1>
                 <p>Learn about our vision, mission and history, and find out how our leadership 
                     and business model serve entrepreneurs.</p>
                </div>
               
                <div>
                <img className="peopleimg" src={require("../images/people.png")} />
                <h1>Take a Tour of Our Business Platform</h1>
                <p>Get a quick overview of the many advantages to building your business on a 
                    platform designed for growth.</p>
                </div>
                
                <div>
                <img src={require("../images/search.png")} />
                <h1>Browse Our Products and Providers</h1>
                <p>WFG financial professionals are trusted by the industry's best companies to present their products and 
                    ervices to families and businesses.</p>
                
                </div>
        
          </div>   
        </div>
    )
}

export default Section
