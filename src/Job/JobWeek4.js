import React,{ useState } from 'react'
import Nav_bar from '../Components/nav_bar'
import TabBar from '../Components/TabBar'
import './jobCss/Week4.css'

export default function JobWeek4() {
    const [lists, setlist] = useState([])
    const [doneList, setDoneList] = useState([])
    const [newItem, setNewItem] = useState("")

    const addItem = (e) =>{
        e.preventDefault()
        const taskFormat = {
            id : Math.random()*10,
            task : e.target.myInput.value ,
            done : false
        }
        const tmpList = [ ... lists]
        tmpList.push(taskFormat)

        setlist(tmpList)
        setNewItem("")

        // console.log(lists);
        
    }

    const doneTask = (id) => {
        const tmpDonelist = [... doneList]
        for(var i = 0; i < lists.length ; i++){
            if(lists[i].id == id){
                lists[i].done = true;
                tmpDonelist.push(lists[i])
            }
        }
        // const tmpdoneList = lists.filter((item) => item.done == true)
        
        setDoneList(tmpDonelist)
        const tmpList = lists.filter((item) => item.id !== id)
        setlist(tmpList)
        // console.log(lists);
    }
    return (
        <div>
            <Nav_bar name = "THE MOST LUCKY GROUP"
                      button1 = "Home"
                      button2 = ""
            />
             <TabBar listActive4 = "active"  listPath1= "/Job-profile" 
                                            listPath2= "/Job-profile/Week2"
                                            listPath3= "/Job-profile/Week3"
                                            listPath4= "/Job-profile/Week4"
                                            listPath5= "/Job-profile/Week5"
                                            listPath6= "/Job-profile/Week6"
            />
            <div id = "myToDoList" className = "TODOheader">
                    <h2 style = {{color : "white"}}>To Do List</h2>
                    <form onSubmit= {addItem} style = {{color : "black"}}>
                        <input type = "text" name="myInput" placeholder="Task..."
                         value = {newItem} onChange = {(e) => setNewItem(e.target.value)} />

                        <button type = "submit" className= "addBtn">add</button>
                    </form>
            </div>
            <div className = "divContainer">
                <div className = "block1" style = {{backgroundColor :"#f2a365"}}>
                        <h3 >Todo Task</h3>
                </div>
                <div className = "block1" style = {{backgroundColor :"#ececec"}}>
                    <h3>Done Task</h3>
                </div>
            </div>
            <div className = "col-container">
                <div className = "col" style = {{border : "2px solid #f2a365"}}>
                    
                   {
                       lists.map((item) => {
                       return (
                       <li  key = {item.id}>
                           <strong>{item.task}</strong>
                           
                           <button className = "myButton" onClick={() => doneTask(item.id)}
                            
                           >Done</button>
                           
                           </li>
                             )
                       })
                   }
                   
                </div>
                <div className = "col"  style = {{border : "2px solid #ececec"}}>
                   
                        {
                            doneList.map((item) => {
                                return (
                                    <li key = {item.id}>
                                        <strong>{item.task}</strong>
                                        </li>
                                )
                            })
                        }
                    
                </div>
            </div>
            <div style = {{marginBottom :"10px"}}></div>

        </div>
    )
}
