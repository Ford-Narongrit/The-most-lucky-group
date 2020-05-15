import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class TabBar extends Component {
    render() {
        return (
            <div className="stickyToTop" style={{backgroundColor:"#28292C" ,}}>
                <ul class="nav nav-tabs"> 
                    <li class={this.props.listActive1}><Link to ={this.props.listPath1}>DevCamp_1</Link></li>
                    <li class={this.props.listActive2}><Link to ={this.props.listPath2}>DevCamp_2</Link></li>
                    <li class={this.props.listActive3}><Link to ={this.props.listPath3}>DevCamp_3</Link></li>
                    <li class={this.props.listActive4}><Link to ={this.props.listPath4}>DevCamp_4</Link></li>
                    <li class={this.props.listActive5}><Link to ={this.props.listPath5}>DevCamp_5</Link></li>
                    <li class={this.props.listActive6}><Link to ={this.props.listPath6}>DevCamp_6</Link></li>
                </ul>
            </div>
        )
    }
}
