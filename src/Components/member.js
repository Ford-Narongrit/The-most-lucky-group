import React from 'react'
import {Link} from 'react-router-dom'
import "../css/member.css"

export default function member(props) {
   return (
      <Link to = {props.memberPath}>
      <div className = "member_item">
         <div className = "member_img-background" style = {{backgroundImage : "url("+props.memberimg+")"}}></div>

         <div className = "img_text">
            <div className = "name_logo">
               <img src= {props.memberNameimg}></img>
            </div>

            <div className = "ID">
               <h1>{props.memberID}</h1>
            </div>
         </div>
      </div>
      </Link>

      
   )
}
