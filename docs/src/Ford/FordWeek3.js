import React from 'react'
import Header from '../Components/Header'
import Breadcrumb from '../Components/Breadcrumb'
import TabBar from '../Components/TabBar'
import Image from '../Components/Image'

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
                <div style={{marginLeft: "25%", marginRight: "25%", letterSpacing: 0.45, lineHeight: 1.5, fontSize:22}}>
                    <h1 className="colorfulltext center" style={{color: "#000000", fontSize: 55}}>React (part 1)</h1>
                    <div>
                        react คือ Javascript Library ใช้สำหรับสร้างหน้าเว็บของเราให้มี action ต่างๆที่ทำให้เว็บเราดูน่าสนใจ
                    </div>
                    <h1 className="colorfulltext" style={{color: "#000000", fontSize: 40}}>การสร้าง และ เริ่มใช้ React</h1>
                    <div>การสร้าง project</div>
                    <Image  imagePath = "/image/Ford/createReact.png" width = "400"/>
                    <div>การเริ่ม project</div>
                    <Image  imagePath = "/image/Ford/startReact.png" width = "400"/>
                    <div>หลังจากสร้าง project ของเราได้แล้วจะได้ไฟล์มาตามรูป</div>
                    <Image  imagePath = "/image/Ford/reactStructure.png" width = "400"/>
                    <div>ใน src/App.js คือสิ่งที่เราจะต้องไปแก้ไขเพื่อทำให้เป็นหน้าเว็บของเรา</div>

                    
                    <h1 className="colorfulltext" style={{color: "#000000", fontSize: 40}}>React component</h1>
                    <div>Component คือ block ส่วนย่อยของเว็บเราที่สร้างออกมา หรือง่าย ๆ คือการมองเว็บออกเป็นส่วน ๆ ดังรูป</div>
                    <div className="center">
                        <Image  imagePath = "/image/Ford/component.jpg" width = "400"/>
                    </div>
                    <div>นอกจากนี้มันยังมีข้อดีตรงที่เราจะได้ไม่ต้องเขียน code ที่เหมือนกันซ้ำๆ เราแค่เขียน component อันเดียวแล้วไปเรียนใช้ในหลาย ๆ ที่ได้</div>
                    <div>Component แบ่งออกเป็น 2 แบบคือ function component กับ class component</div>


                    <h1 className="colorfulltext" style={{color: "#000000", fontSize: 40}}>function component</h1>
                    <Image  imagePath = "/image/Ford/functionComponent.png" width = "400"/>
                    <h1 className="colorfulltext" style={{color: "#000000", fontSize: 40}}>class component</h1>
                    <Image  imagePath = "/image/Ford/classComponent.png" width = "400"/>
                    <h1 className="colorfulltext" style={{color: "#000000", fontSize: 40}}>Call component</h1>
                    <Image  imagePath = "/image/Ford/callComponent.png" width = "400"/>
                    <div>การเรียกใช้ก็แค่ เราทำการ import แล้วตั้งชื่อให้มันจากนั้น ก็เรียกใช้ชื่อนั้นแบบเป็น tag ดังรูป</div>
                    <div>แต่ถ้าดราทำการเรียนใช้แต่ไม่มีอะไรแตกต่างหรือ เรากำหนดค่าอะไรใหม่ไม่ได้เลยมันก็แปลก ดังนั้นมันจึงมีสิ่งที่เรียกว่า props กับ state เข้ามาช่วย</div>
                    <h1 className="colorfulltext" style={{color: "#000000", fontSize: 40}}>Props & state</h1>
                        <span className="colorfulltext" style={{color: "#000000", fontSize: 30}}>Props</span>
                        <span> คือการส่งข้อมูลข้าม component</span>
                        <div style={{display:"flex"}}>
                            <div style={{padding: 10}}>Function Component<Image  imagePath = "/image/Ford/propsFunc.png" width = "400"/></div>
                            <div style={{padding: 10}}>Class Component<Image  imagePath = "/image/Ford/propsClass.png" width = "400"/></div>
                        </div>
                        <div>ตัวอย่างการส่งค่า</div>
                        <Image  imagePath = "/image/Ford/Callprops.png" width = "400"/>


                        <span className="colorfulltext" style={{color: "#000000", fontSize: 30}}>state</span>
                        <span> คือการส่งข้อมูลภายใน component</span>
                        <div style={{display:"flex"}}>
                            <div style={{padding: 10}}>Function Component<Image  imagePath = "/image/Ford/funcState.png" width = "400"/></div>
                            <div style={{padding: 10}}>Class Component<Image  imagePath = "/image/Ford/classState.png" width = "400"/></div>
                        </div>

                    <h1 className="colorfulltext" style={{color: "#000000", fontSize: 40}}>React router</h1>
                    <div>เป็นตัว Library เสริมของ react เพื่อช่วยให้เราเปลี่ยนหน้าได้</div>
                    <div>การ set Router เราจะไป set ใน src/App.js</div>
                    <Image  imagePath = "/image/Ford/reactRouter.png" width = "400"/>
                    <div>keyword 'exact path' คือ การกำหนดว่าหน้าเว็บนี้จะโดนทับเมื่อมีการเข้า path ถัดไป</div>
                    <div>ถ้าหากไม่ได้ใส่ไว้จะมาทับกันในหน้าเดียวกัน ดังรูป</div>
                    <div className="center">
                        <Image  imagePath = "/image/Ford/exact.jpg" width = "600"/>
                    </div>
                    <div>การ link ไปหน้าต่าง ๆ นอกจากจะต้อง set Router ใน App.js แล้วเราจะต้องไป เรียกในหน้าต้องการไปหน้าด้วย</div>
                    <Image  imagePath = "/image/Ford/Link.png" width = "600"/>
                    <div>โดย import tag Linkมาใช้ แล้วเรียนใช้พร้อมใส่ path ที่ต้องการจะไป ตามที่ได้ตั้งชื่อไว้ใน App.js</div>
                    <div style={{marginBottom: 80}}></div>
                </div>
            </div>
        </div>
    )
}

