import React from 'react'

const Display = props => {
    console.log(props)
        return(
        <div>
            <h1 data-testid="strike">Strikes: {props.strikes}</h1>
            <h1>Balls: {props.balls}</h1>
            <h1>Runs: {props.runs}</h1>
            <h1>Outs: {props.outs}</h1>
            <h1>Runners on Base: {props.runnersOnBase}</h1>
        </div>
        )
    
}

export default Display