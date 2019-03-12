import React from 'react'
import Display from './Display'

class Dashboard extends React.Component {
    constructor() {
        super()
        this.state = {
                balls: 0,
                strikes: 0,
                runnersOnBase: 0,
                runs: 0,
                outs: 0,
                // teams: {
                //     team1: {
                //         name: "Team A",
                //         runs: 0,
                //         batting: true,
                //     },
                //     team2: {
                //         name: "Team B",
                //         runs: 0,
                //         batting: true,
                //     }
                // }
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
                    balls: 0,
                    outs: this.state.outs < 2 ? this.state.outs+1 : 0,
                    runnersOnBase: this.state.outs < 2 ? this.state.runnersOnBase : this.state.runnersOnBase = 0
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
                    strikes: 0,
                    runnersOnBase: this.state.runnersOnBase === 3 ? 3 : this.state.runnersOnBase+1,
                    runs: this.state.runnersOnBase === 3 ? this.state.runs+1 : this.state.runs
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

    reset = () => {
        this.setState({
            strikes: 0,
            balls: 0,
            runnersOnBase: 0,
            runs: 0,
            outs: 0
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
                    <button onClick={this.reset}>Reset</button>
                </div>
                
                <Display strikes={this.state.strikes} balls={this.state.balls} runs={this.state.runs} outs={this.state.outs} runnersOnBase={this.state.runnersOnBase}/>
            </div>
        )
    }
}

export default Dashboard