import React from 'react'
import {Link} from 'react-router-dom'
import "../../css/Components/nav_bar.css"

export default function nav_bar(props) {
   return (
      <div className = "nav-bar">
         <div className = "left-side">
            <div class="nav-link active-nav-link">
               <Link to = "/" ><a>{props.button1}</a></Link>
            </div>

            <div class="nav-link">
               <Link to = "/" ><a>{props.button2}</a></Link>
            </div>
         </div>

         <div class="right-side">
            <div class="name">
               <div>{props.name}</div>
            </div>
         </div>
      </div>
   )
}
