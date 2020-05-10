import React, { Component } from 'react'
import "../../css/Components/slogan.css"


export default class slogan extends Component {
    render() {
        return (
            <div className ="colorfulltext slogan">
                <h4 class="wordCarousel" >    
                    <span >ไม่ </span>  
                    <div> 
                        <ul class="flip4"> 
                            <li style={{color:"rgb(214, 118, 27)"}}>เลือกจน</li>
                            <li style={{color:"#CC0066"}}>เลือกเรา</li>
                            <li style={{color:"rgb(250, 0, 0)"}}>กินเผ็ด</li> 
                            <li style={{color:"seagreen"}}>หลับไม่นอน</li>  
                        </ul>
                    </div>  
                </h4>
                <h4 class="wordCarousel">    
                    <span>ไม่</span>  
                    <div> 
                        <ul class="flip4">
                            <li style={{color:"rgb(214, 118, 27)"}}>ยากงาน</li>
                            <li style={{color:"#CC0066"}}>ได้แล้ว</li>
                            <li style={{color:"rgb(250, 0, 0)"}}>กินผัก</li> 
                            <li style={{color:"seagreen"}}>A ได้ไง</li>  
                        </ul>
                    </div>  
                </h4>
            </div>
        )
    }
}
