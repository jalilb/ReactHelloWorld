import React, { Component } from 'react';
import './HomePage.css';
import Login from '../LogIn/LogIn';

class HomePage extends Component {
    render() {
        return(
            <div className="HomePage">
                <Login/>
            </div>
        );
    }
}

export default HomePage;