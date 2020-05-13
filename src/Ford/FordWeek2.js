import React from 'react'
import Nav_bar from '../Components/nav_bar'
import TabBar from '../Components/TabBar'
import Image from '../Components/Image'

export default function FordWeek2() {
    return (
        <div>
            <Nav_bar name = "THE MOST LUCKY GROUP"
                      button1 = "Home"
                      button2 = ""
         />
            <TabBar listActive2 = "active"  listPath1= "/Ford-profile" 
                                            listPath2= "/Ford-profile/Week2"
                                            listPath3= "/Ford-profile/Week3"
                                            listPath4= "/Ford-profile/Week4"
                                            listPath5= "/Ford-profile/Week5"
                                            listPath6= "/Ford-profile/Week6"
            />
            <div>
                <div style={{marginLeft: "25%", marginRight: "25%", letterSpacing: 0.45, lineHeight: 1.5, fontSize:22}}>
                <h1 className="colorfulltext center" style={{color: "#000000", fontSize: 55}}>JavaScript</h1>
                    <div>
                        JavaScript เป็นภาษาประเภท Scripting language ซึ่งใช้ในการสร้างและพัฒนาเว็บไซต์ใช้ควบคู่กับ HTML,CSS
                        ถ้าให้เปรียบเทียบกับร่างกายมนุษย์ HTML คือ โครงสร้างร่างกาย, CSS คือ รูปร่างหน้าตา ส่วน JavaScript ก็คือสมองนั้นเอง 
                        งั้นเรามาเริ่มเรียนรู้พื้นฐาน JavaScript กัน
                    </div>

                    <h1 className="colorfulltext" style={{color: "#000000", fontSize: 40}}>การประกาศตัวแปร</h1>
                    <div>
                        JavaScript มีตัวแปรเป็นแบบ Dynamic typing (เหมือน python)
                    </div>
                    <Image  imagePath = "./image/Ford/week2-dataType.png" width = "600"/>
                    <div>
                        ชนิดของตัวแปร 
                        <ul>
                            <li>primitive Type
                                <ul>
                                    <li>null กับ undefined</li>
                                    <li>Number</li>
                                    <li>String</li>
                                    <li>Boolean</li>
                                </ul>
                            </li>
                            <li>Object</li>
                        </ul>
                        เพิ่มเติม null คือการกำหนดค่าให้ตัวแปรว่าเป็นค่า null แต่ undefined คือการยังไม่กำหนดค่า
                    </div>

                    <h1 className="colorfulltext" style={{color: "#000000", fontSize: 40}}>Object</h1>
                    <Image  imagePath = "./image/Ford/week2-Object (2).png" width = "400"/>
                    <div>
                        Object คือ ก้อนข้อมูลที่ประกอบไปด้วย
                        <ul>Property</ul>
                        <ul>Key</ul>
                        <ul>value</ul>
                        การเข้าถึงค่าใน Object โดยใช้ key
                    </div>
                    <Image  imagePath = "./image/Ford/week2-Object (1).png" width = "600"/>

                    <h1 className="colorfulltext" style={{color: "#000000", fontSize: 40}}>Array</h1>
                    <Image  imagePath = "./image/Ford/week2-array.png" width = "600"/>
                    <div>array เป็นตัวแปรประเภท Object แต่มีการเรียงกันเป็นลำดับ และสามารถเก็บค่าได้หลายประเภทรวมกัน</div>

                    <h1 className="colorfulltext" style={{color: "#000000", fontSize: 40}}>for-loop</h1>
                    <Image  imagePath = "./image/Ford/week2-for.png" width = "600"/>
                    <div>
                        <ul>for-in เหมาะสำหรับการนำไปวนด้วย Object เพราะจะเป็นการดึง ค่า key ออกมาทีละตัว</ul>
                        <ul>for-of เหมาะสำหรับการนำไปวนด้วย array เพราะข้อมูลมีลำดับ</ul>
                    </div>
                    <h1 className="colorfulltext" style={{color: "#000000", fontSize: 40}}>function</h1>
                    <Image  imagePath = "./image/Ford/week2-function.png" width = "600"/>
                    <li>
                        function คือ โปรแกรมย่อยที่อยู่ในโปรแกรมหลัก ทำหน้าที่คำนวณค่าแล้วส่งค่าคืนให้โปรแกรมหลัก
                    </li>
                    <li>
                        arrow function คือ วิธีการเขียน function อีกหนึ่งรูปแบบที่ทำให้เราอ่านแล้วทำความเข้าใจง่าย(ถ้าเข้าใจ) และยังมีข้อดีตรงที่ ไม่ต้องกำหนดชื่อ function ก็ได้แต่ต้องมีตัวแปรมารับ หรือส่งค่าไปเป็น callback
                        ไม่สามารถประกาศลอย ๆ ได้
                    </li>
                    <li>
                        rest operator คือ การใส่ ... ไว้ข้างหน้าตัวแปรจะทำให้ตัวแปรนั้นกลายเป็น rest parameter ซึ่งทำให้ตัวแปรนั้นมีคุณสมบัติคล้าย array โดยในตัวอย่างนั้นเป็นการรับค่ามาหลายตัวแล้ววน loop รวมค่าโดยใช้ for-of
                        แล้วคืนค่าผลรวมทั้งหมดที่รับเข้ามา
                    </li>
  
                    <h1 className="colorfulltext" style={{color: "#000000", fontSize: 40}}>template string</h1>
                    <Image  imagePath = "./image/Ford/wee2-TemplateString.png" width = "600"/>
                    <div>คือการนำค่าตัวแปรไปแทนที่ ดังรูป</div>
                    
                    <h1 className="colorfulltext" style={{color: "#000000", fontSize: 40}}>Array Destructuring VS Object Destructuring</h1>
                    <div style={{display:"flex"}}>
                        <div style={{padding: 10}}>
                            <Image  imagePath = "./image/Ford/week2-arrayDes.png" width = "600"/>
                        </div>
                        <div style={{padding: 10}}>
                            <Image  imagePath = "./image/Ford/week2-objectDes.png" width = "600"/>
                        </div>
                    </div>

                    <h1 className="colorfulltext" style={{color: "#000000", fontSize: 40}}>Synchronous VS Asynchronous</h1>
                    <li>Synchronous คือ การดำเนินการรันชุดคำสั่ง และจะไม่รันคำสั่งถัดไปถ้ายังรันชุดคำสั่งปัจจุบันไม่เสร็จ</li>
                    <li>Asynchronous คือ การดำเนินการรันชุดคำสั่ง และจะรันคำสั่งถัดไปทันทีโดยไม่จำเป็นต้องรอชุดคำสั่งก่อนหน้าทำงานเสร็จ</li>
                    <h4 className="colorfulltext" style={{color: "#000000", fontSize: 26}}>แผนภาพการทำงานแบบ Asynchronous</h4>
                    <img src="https://s3-ap-southeast-1.amazonaws.com/babelcoder/articles/images/asynchronous-javascript-and-event-loop/event-loop.gif" alt="Event Loop"></img>
                <div style={{marginBottom: 80}}></div>
                </div>
            </div>
        </div>
    )
}
