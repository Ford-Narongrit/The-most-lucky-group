import React, { Component } from 'react'
import Image from './Image'
import { Link } from 'react-router-dom'

export default class MemberProfile extends Component {
    render() {
        return (
            <div className = "inner holderGray">
                <Link to = {this.props.memberPath} className="unLineLink">
                        <div class="colorfulltext">
                            <Image imagePath = {this.props.memberImage} width = "300" classImage="circleImage"/>
                            <p  style={{fontSize:26, padding: 1}}>{this.props.name}</p>
                            <p  style={{fontSize:26, padding: 1}}>{this.props.id}</p>
                         </div>
                </Link>
            </div>
        )
    }
}
