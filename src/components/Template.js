import React, { Component } from 'react'
import Navbar from './Navbar'

export default class Template extends Component {
    render() {
        return (
            <div style={{height:'100%',display:'flex',flexDirection:'column'}}>
               <Navbar/> 
               {this.props.children}
            </div>
        )
    }
}
