import React from 'react'
import Header from '../Components/Header'
import Breadcrumb from '../Components/Breadcrumb'
import TabBar from '../Components/TabBar'
import MyProfile from '../Components/MyProfile'

export default function PlumeProfile() {
    return (
        <div>
            <div style={{ backgroundImage: "url(./image/head.jpg)"}}>
                <Header name = "กลุ่มที่โชคดีที่สุดในโลก"
                        button1 = "menu"
                        button2 = "เพิ่มเติม"       
                />
                <Breadcrumb homePath = "/" home="Home" toWherePath = "/Plume-profile" where = "Plume-profile"/>
            </div>
            <TabBar listActive1 = "active" listPath1= "/Plume-profile"/>
            <MyProfile  path ="./image/plume_img.jpg" width="500"
                        name ="ณัฐเสฐ ธนบดี(ปลื้ม)"
                        id = "6210402411"
                        highLight = "นอน :P"
                        />
        </div>
    )
}
