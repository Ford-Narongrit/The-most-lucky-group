import React from 'react'
import Nav_bar from '../Components/nav_bar'
import TabBar from '../Components/TabBar'
import TodoList from './fordTool/TodolistFord'

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
                <div style={{marginLeft: "25%", marginRight: "25%", letterSpacing: 0.45, lineHeight: 1.5, fontSize:22}}>
                    <h1 className="colorfulltext center" style={{color: "#000000", fontSize: 55}}>React (part 2)</h1>
                    <h1 className="colorfulltext" style={{color: "#000000", fontSize: 40}}>Todo-List</h1>
                    <TodoList/>
                </div>
            </div>
        </div>
    )
}
