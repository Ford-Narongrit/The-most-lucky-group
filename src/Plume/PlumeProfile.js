import React from 'react'
import Nav_bar from '../Components/nav_bar'
import TabBar from '../Components/TabBar'
import MyProfile from '../Components/MyProfile'

export default function PlumeProfile() {
    return (
        <div>
            <Nav_bar name = "THE MOST LUCKY GROUP"
                      button1 = "Home"
                      button2 = ""
         />
            <TabBar listActive1 = "active" listPath1= "/Plume-profile"/>
            <MyProfile  path ="./image/Plume/plume_img.jpg" width="500"
                        name ="ณัฐเสฐ ธนบดี(ปลื้ม)"
                        id = "6210402411"
                        highLight = "นอน :P"
                        />
        </div>
    )
}
