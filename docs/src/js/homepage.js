import React from 'react'
import '../css/homepage.css'

import Nav_bar from './Components/nav_bar.js'
import CNCX from './Components/cncx.js'
import Slogan from './Components/slogan.js'
import Member_content from './Components/member.js'

export default function homepage() {
   return (
      <div className = "container">
         <Nav_bar name = "THE MOST LUCKY GROUP"
                      button1 = "Home"
                      button2 = ""
         />

         <CNCX/>
         <Slogan/>

         <div className = "pic" >
            <img className = 'F_for_respect' src = "/image/F.png"/>
         </div>

         <div class="member">
            <h3>MEMBER</h3>
         </div>
         
         <div className ="member_items">
            <Member_content memberID = "6210402402" memberimg = "/image/FORD_img.jpg" 
                           memberPath="/Ford-profile" memberNameimg = "/image/FORD_NAME.png"/>
            <Member_content memberID = "6210402381" memberimg = "/image/JOB_img.jpg" 
                           memberPath="/JOB-profile" memberNameimg = "/image/JOB_NAME.png"/>
            <Member_content memberID = "6210402411" memberimg = "/image/PLUME_img.jpg" 
                           memberPath="/Plume-Profile" memberNameimg = "/image/PLUEM_NAME.png"/>
         </div>

         <div class="bottom-bar">
            <p>@2019, All Right Reserved CNCX PreDevCamp#8</p>
         </div>
         

      </div>
   )
}
