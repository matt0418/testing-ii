import React from 'react'
import Display from './Display'

class Dashboard extends React.Component {
    constructor() {
        super()
        this.state = {
            balls: 0,
            strikes: 0,
        }
    }

    strike = () => {
        if (this.state.strikes < 2) {
            this.setState({strikes: this.state.strikes + 1})
        } else {
            this.setState({strikes: 0})
        }
    }

    ball = () => {
        if (this.state.balls < 3) {
            this.setState({balls: this.state.balls +1})
        } else {
            this.setState({balls: 0})
        }
    }

    foul = () => {
        if (this.state.strikes < 2) {
            this.setState({strikes: this.state.strikes +1})
        }
    }

    hit = () => {
        this.setState({
            strikes: 0,
            balls: 0
        })
    }


    render() {
        return(
            <div>
                <div>
                    <button onClick={this.strike}>Strike</button>
                    <button onClick={this.ball}>Ball</button>
                    <button onClick={this.foul}>Foul</button>
                    <button onClick={this.hit}>Hit</button>
                </div>
                
                <Display balls={this.state.balls} strikes={this.state.strikes}/>
            </div>
        )
    }
}

export default Dashboard