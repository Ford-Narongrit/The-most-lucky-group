import React from 'react'
import Header from './Components/Header'
import Image from './Components/Image'
import Slogan from './Components/Slogan'
import MemberProfile from './Components/MemberProfile'

export default function homePage() {
    return (
        <div >
            <div style={{ backgroundImage: "url(/image/head.jpg)"}}>
                <Header name = "กลุ่มที่โชคดีที่สุดในโลก"
                        button1 = "menu"
                        button2 = "เพิ่มเติม"       
                />
                <div className="head-headerFont" >
                    <h1 style={{fontSize:75, textAlign: "center"}}>กลุ่มที่โชคดีที่สุดในโลก</h1>
                </div>
            </div>
            <div style={{ marginTop: 50, textAlign: "center"}}>
                <Image  imagePath = "/image/test.png" width = "600"/>
            </div>
            <Slogan />
            <div className="displayFlex ">
                <MemberProfile className="inner" name="Ford" id="6210402402" memberPath="/Ford-profile" memberImage="/image/redpanda.jpg"/>
                <MemberProfile className="inner" name="Job" id="6210402381" memberPath="/Job-profile" memberImage="/image/bear.png"/>
                <MemberProfile className="inner" name="Plume" id="6210402411" memberPath="/Plume-profile" memberImage="/image/plume_img.jpg"/>
            </div>
            <div style={{marginBottom: 40}}></div>
        </div >
    )
}
