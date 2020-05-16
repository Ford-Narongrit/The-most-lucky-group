import React, { Component } from 'react'
import Image from './Image'
import '../css/myprofile.css'

export default class MyProfile extends Component {
    render() {
        return (
            <div>
                <div className="displayFlex" style={{marginTop: 40}}>
                    <div className="inner center " style={{flexGrow: 32}}>
                        <Image classImage = "circleImage" imagePath ={this.props.path} width = {this.props.width}/>  
                    </div>
                    <div class="inner left" style={{flexGrow: 3}} class = "colorfulltext">
                        <pf>ชื่อ :</pf>
                        <pf>ID :</pf>
                        <pf>programming :</pf>
                        <pf>งานอดิเรก :</pf>
                        <pf>แนวเกมที่เล่น :</pf>
                        <pf>จุดเด่น :</pf>
                        
                    </div>
                    <div class="inner left" style={{flexGrow: 20}} class = "colorfulltext">
                        <pfr>{this.props.name || "-"}</pfr>
                        <pfr>{this.props.id || "-"}</pfr>
                        <pfr>{this.props.Programming || "-"}</pfr>
                        <pfr>{this.props.hobby || "-"}</pfr>
                        <pfr>{this.props.games || "-"}</pfr>
                        <pfr>{this.props.highLight || "-"}</pfr>
                    </div>
                </div>
            </div>
        )
    }
}
