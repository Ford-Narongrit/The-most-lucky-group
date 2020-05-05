import React, { Component } from 'react'

export default class Image extends Component {
    render() {
        return (
            <div>
                <img   className={this.props.classImage} src={this.props.imagePath} alt="Groupimage" 
                        width={ this.props.width || 200 }
                />
            </div>
        )
    }
}
