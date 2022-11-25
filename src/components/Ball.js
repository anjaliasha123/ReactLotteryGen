import React, { Component } from 'react';
import './Ball.css';

class Ball extends Component{

    render(){
        return (
            <div className='app-ball' data-status={this.props.status}>
                {this.props.num}
            </div>
        )
    }

}

export default Ball;