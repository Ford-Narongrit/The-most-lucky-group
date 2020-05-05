import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div className="headContainer" style={{ backgroundImage: "url(/image/head.jpg)"}}>
                <Link to = "/" className="unLineLink"><a className="headerFont">{this.props.name}</a></Link>
                <a className="headerFont headerpush">{this.props.button1}</a>
                <a className = "headerFont dropdown">{this.props.button2}
                    <div className="dropdown-content">
                        <a href="#">อะ</a>
                        <a href="#">ไร</a>
                        <a href="#">ไม่</a>
                        <a href="#">รู้</a>
                    </div>
                </a>
            </div>
        )
    }
}
