import React from 'react'
import Nav_bar from '../Components/nav_bar'
import TabBar from '../Components/TabBar'
import MyProfile from '../Components/MyProfile'

export default function FordProfile() {
    return (
        <div>
            <Nav_bar name = "THE MOST LUCKY GROUP"
                      button1 = "Home"
                      button2 = ""
         />
            <TabBar listActive1 = "active"  listPath1= "/Ford-profile" 
                                            listPath2= "/Ford-profile/Week2"
                                            listPath3= "/Ford-profile/Week3"
                                            listPath4= "/Ford-profile/Week4"
                                            listPath5= "/Ford-profile/Week5"
                                            listPath6= "/Ford-profile/Week6"
            />
                <MyProfile  path ="./image/Ford/redpanda.jpg" width="500"
                            name ="ณรงค์ฤทธ์ ธรรมปาโล (ฟอร์ด)"
                            id = "6210402402"
                            highLight = "ไม่รู้มาก่อน แต่จุดอ่อนอยู่ที่หัวใจ"
                            />
        </div>
    )
}
