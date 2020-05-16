import React, {useState} from 'react'
import '../fordTool/Todo.css'

export default function Todolist() {
    const [newOrder, setNewOrder] = useState("")
    const [price, setPrice] = useState("")
    const [list, setlist] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const addNewOrder = (e) => {
        e.preventDefault()

        const formdata = {
            id :  10 * Math.random(),
            name : newOrder,
            value : price
        }
        setTotalPrice(Number(totalPrice) + Number(formdata.value))
        const tmpList = [...list]
        tmpList.push(formdata)

        setlist(tmpList)
        setNewOrder("")
        setPrice("")
    }

    const removeOrder = (Order) => {
        const tmpList = list.filter((item) => item.id !== Order.id)
        setlist(tmpList)
        setTotalPrice(Number(totalPrice)-Number(Order.value))
    }

    const clearList = () =>{
        setlist([])
        setTotalPrice(0)
    }
    

    return (
        <div className="todofont">
            <h2>My order</h2>
            <form onSubmit={addNewOrder} style={{display:"flex"}}>
                    <input
                        className = "yourOrder"
                        value={newOrder}
                        type="text"
                        placeholder="Your Order"
                        name="listOrder"
                        onChange={(e) => setNewOrder(e.target.value)}
                        >   
                    </input>
                <input
                    className = "yourOrder"
                    value={price}
                    type="number"
                    placeholder="price"
                    name="listOrderPrice"
                    onChange={(e) => setPrice(e.target.value)}
                    >   
                </input>
                <button type="submit">add Order</button>
            </form>

            {
                list.map(item =>{
                    return(
                        <div key={item.id} className="listPrint">
                            <div>
                                {item.name}
                            </div>
                            <div>
                                {item.value}
                            </div>
                            <button onClick={ ()=> removeOrder(item)}>X</button>
                        </div>
                    )
                })
            } 

            <div style={{display:"flex",justifyContent: "space-between"}}>
                <div>{list.length} Order</div>
            <div>Total : {totalPrice}</div>
            </div>
            <button onClick={() => clearList()}>Clear AllOrder</button>
        </div>
    )
}
