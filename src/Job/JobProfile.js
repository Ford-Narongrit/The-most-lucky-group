import React from 'react'
import Header from '../Components/Header'
import Breadcrumb from '../Components/Breadcrumb'
import TabBar from '../Components/TabBar'
import MyProfile from '../Components/MyProfile'

export default function JobProfile() {
    return (
        <div>
            <div style={{ backgroundImage: "url(./image/head.jpg)"}}>
                <Header name = "กลุ่มที่โชคดีที่สุดในโลก"
                        button1 = "menu"
                        button2 = "เพิ่มเติม"       
                />
                <Breadcrumb homePath = "/" home="Home" toWherePath = "/Job-profile" where = "Job-profile"/>
            </div>
            <TabBar listActive1 = "active" listPath1= "/Job-profile"/>
            <MyProfile  path ="./image/bear.png" width="500"
                        name ="ชยางกูร ฤทธิเดช(จ๊อบ)"
                        id = "6210402381"
                        highLight = "คิ้ว"
                        />
        </div>
    )
}
