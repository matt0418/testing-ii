import React from 'react'
import Display from './Display'

class Dashboard extends React.Component {
    constructor() {
        super()
        this.state = {
                balls: 0,
                strikes: 0,
                runnersOnBase: 0,
                runs: 0
        
        }
    }

    strike = () => {
        // if (this.state.strikes < 2) {
        //     this.setState({strikes: this.state.strikes + 1})
        if (this.state.strikes < 2) {
            this.setState({
                    ...this.state,
                    strikes: this.state.strikes + 1
            })
        } else {
            this.setState({
                    ...this.state,
                    strikes: 0,
                    balls: 0
            })
        }
    }

    ball = () => {
        if (this.state.balls < 3) {
            this.setState({
                    ...this.state,
                    balls: this.state.balls +1
            })
        } else {
            this.setState({
                    ...this.state,
                    balls: 0,
                    strikes: 0
            })
        }
    }

    foul = () => {
        if (this.state.strikes < 2) {
            this.setState({
                    ...this.state,
                    strikes: this.state.strikes + 1
            })
        }
    }

    hit = () => {
        this.setState({
                ...this.state,
                strikes: 0,
                balls: 0,
                runnersOnBase: this.state.runnersOnBase === 3 ? 3 : this.state.runnersOnBase + 1,
                runs: this.state.runnersOnBase === 3 ? this.state.runs+1 : this.state.runs
            
        })
    }

    hitByPitch = () => {
        this.setState({
                ...this.state,
                strikes: 0,
                balls: 0,
                runnersOnBase: this.state.runnersOnBase === 3 ? 3 : this.state.runnersOnBase + 1,
                runs: this.state.runnersOnBase === 3 ? this.state.runs+1 : this.state.runs
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
                    <button onClick={this.hitByPitch}>HBP</button>
                </div>
                
                <Display strikes={this.state.strikes} balls={this.state.balls} runs={this.state.runs}/>
            </div>
        )
    }
}

export default Dashboard