import React, { Component } from 'react'
import './../../style/login.css'

export default class login extends Component {
    render() {
        return (
            <div class="blurred-box">

        <div className="user-login-box">
            <span className="user-icon"></span>
            <div className="user-name">kittipong</div>
            <input type="text" className="user-username" placeholder="Username"/>
            <input type="text" className="user-password" placeholder="Password"/>
            
            <button type="button" className="btn btn-primary">Primary</button>
        </div>
    </div>
        )
    }
}
