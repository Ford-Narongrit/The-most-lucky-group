import React, { Component } from 'react'
import Image from './Image'

export default class MyProfile extends Component {
    render() {
        return (
            <div>
                <div className="displayFlex" style={{marginTop: 40}}>
                    <div className="inner center " style={{flexGrow: 32}}>
                        <Image classImage = "circleImage" imagePath ={this.props.path} width = {this.props.width}/>  
                    </div>
                    <div class="inner center" style={{flexGrow: 3}}>
                        <p class = "colorfulltext">ชื่อ :</p>
                        <p class = "colorfulltext">ID :</p>
                        <p class = "colorfulltext">Programming :</p>
                        <p class = "colorfulltext">งานอดิเรก :</p>
                        <p class = "colorfulltext">แนวเกมที่เล่น :</p>
                        <p class = "colorfulltext">จุดเด่น :</p>
                        
                    </div>
                    <div class="inner left" style={{flexGrow: 20}}>
                        <p class = "colorfulltext">{this.props.name || "-"}</p>
                        <p class = "colorfulltext">{this.props.id || "-"}</p>
                        <p class = "colorfulltext">{this.props.Programming || "-"}</p>
                        <p class = "colorfulltext">{this.props.hobby || "-"}</p>
                        <p class = "colorfulltext">{this.props.games || "-"}</p>
                        <p class = "colorfulltext">{this.props.highLight || "-"}</p>
                    </div>
                </div>
            </div>
        )
    }
}
