import React, { Component } from 'react';
import Ball from './Ball';
import './Lottery.css';

class Lottery extends Component{
    static defaultProps = {
        title: 'Lottery',
        numBall: 6,
        maxNum: 40,
        powerNum: 0
    }
    constructor(props){
        super(props);
        this.state = {
            nums: Array.from({length: this.props.numBall}),
            power: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    generateNums = ()=>{
        this.setState(currState => ({
            nums: currState.nums.map(n => Math.floor(Math.random() * this.props.maxNum + 1))
        }))
        if(this.props.powerNum !== 0){
            this.setState({
                power: this.powerNumGen()
            });
        }

    }
    handleClick = ()=>{
        this.generateNums();
        
    }
    powerNumGen = ()=> {
        return Math.floor(Math.random() * this.props.powerNum)
    }
    render(){
        return(
            <div className='app-lottery'>
                <h1>{this.props.title}</h1>
                <div>
                    {this.state.nums.map(n => <Ball num={n}/>)}
                    {this.props.powerNum !== 0 && <Ball num={this.state.power} status={true}/>}
                </div>
                <button onClick={this.handleClick} className="lot-button">Generate Numbers</button>
            </div>
        )
    }
}

export default Lottery;