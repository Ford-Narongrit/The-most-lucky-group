import React from 'react'
import Nav_bar from '../Components/nav_bar'
import TabBar from '../Components/TabBar'

export default function FordWeek4() {
    return (
        <div>
            <Nav_bar name = "THE MOST LUCKY GROUP"
                      button1 = "Home"
                      button2 = ""
         />
            <TabBar listActive4 = "active"  listPath1= "/Ford-profile" 
                                            listPath2= "/Ford-profile/Week2"
                                            listPath3= "/Ford-profile/Week3"
                                            listPath4= "/Ford-profile/Week4"
                                            listPath5= "/Ford-profile/Week5"
                                            listPath6= "/Ford-profile/Week6"
            />
            <div>
                startHere!!
                Week4
            </div>
        </div>
    )
}
