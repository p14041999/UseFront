import React, { Component } from 'react'
import { Redirect } from 'react-router'
// import Template from '../components/Template'

export default class NotFound extends Component {
    render() {
        return <Redirect to="/"/>
    }
}
