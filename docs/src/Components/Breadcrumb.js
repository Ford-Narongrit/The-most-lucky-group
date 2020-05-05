import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Breadcrumb extends Component {
    render() {
        return (
            <div>
                <ul class="breadcrumb">
                    <li>
                        <Link to ={this.props.homePath}>{this.props.home}</Link>
                    </li>
                    <li>
                        <Link to ={this.props.toWherePath}>{this.props.where}</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
