import React, { Component } from 'react'
import Hero from '../components/Hero';
// import Navbar from '../components/Navbar';
import Template from '../components/Template';

export default class HomeScreen extends Component {
    render() {
        return (
            <Template>
                <Hero />
            </Template>
        )
    }
}
