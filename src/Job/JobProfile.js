import React from 'react'
import Nav_bar from '../Components/nav_bar'
import TabBar from '../Components/TabBar'
import MyProfile from '../Components/MyProfile'

export default function JobProfile() {
    return (
        <div>
            <Nav_bar name = "THE MOST LUCKY GROUP"
                      button1 = "Home"
                      button2 = ""
         />
            <TabBar listActive1 = "active" listPath1= "/Job-profile"
                                            listPath2= "/Job-profile/Week2"
                                            listPath3= "/Job-profile/Week3"
                                            listPath4= "/Job-profile/Week4"
                                            />
            <MyProfile  path ="./image/Job/bear.png" width="500"
                        name ="ชยางกูร ฤทธิเดช(จ๊อบ)"
                        id = "6210402381"
                        highLight = "คิ้ว"
                        />
        </div>
    )
}
