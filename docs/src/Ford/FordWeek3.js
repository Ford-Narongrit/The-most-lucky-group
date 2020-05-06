import React from 'react'
import Header from '../Components/Header'
import Breadcrumb from '../Components/Breadcrumb'
import TabBar from '../Components/TabBar'

export default function FordWeek3() {
    return (
        <div>
            <div style={{ backgroundImage: "url(/image/head.jpg)"}} className="topnav">
                <Header name = "กลุ่มที่โชคดีที่สุดในโลก"
                        button1 = "menu"
                        button2 = "เพิ่มเติม"       
                />
                <Breadcrumb homePath = "/" home="Home" toWherePath = "/Ford-profile" where = "Ford-profile"/>
            </div>
            <TabBar listActive3 = "active"  listPath1= "/Ford-profile" 
                                            listPath2= "/Ford-profile/Week2"
                                            listPath3= "/Ford-profile/Week3"
                                            listPath4= "/Ford-profile/Week4"
                                            listPath5= "/Ford-profile/Week5"
                                            listPath6= "/Ford-profile/Week6"
            />
            <div>
                startHere!!
                Week3
            </div>
        </div>
    )
}