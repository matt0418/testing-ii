import React from 'react'
import Dashboard from './Dashboard'
import Display from './Display'
import { render, fireEvent, waitForElement } from 'react-testing-library'
import { StateMock } from 'react-mock'
import 'jest-dom/extend-expect'

describe('<Dashboard />', () => {
    it('should be renderednwith current state', () => {
        render(<Dashboard />)
    })
    it ('renders strikes', () => {
        const { getByText } = render(<Dashboard />)
        const strikes = getByText(/strikes/i)
        expect(strikes).toBeInTheDocument()
    })
    it('renders balls', () => {
        const { getByText } = render(<Dashboard />)
        const balls = getByText(/balls/i)
        expect(balls).toBeInTheDocument()
    })
    it('calls strike on click', async () => {
       const { getByText } = render(<Dashboard />)
       const strikeButton = getByText('Strike')
        fireEvent.click(strikeButton)
        const strikeCount = render(<Display />).getByText('Strikes: 1')
        expect(strikeCount).toBeInTheDocument()
    })
    it('calls ball on click', () => {
        const { getByText } = render(<Dashboard />)
        const ballButton = getByText('Ball')
         fireEvent.click(ballButton)
         const ballCount = render(<Display />).getByText('Balls: 1')
         expect(ballCount).toBeInTheDocument()
     })
     it('calls foul and adds a strike on click', () => {
        const { getByText } = render(<Dashboard />)
        const foulButton = getByText('Foul')
         fireEvent.click(foulButton)
         const strikeCount = render(<Display />).getByText('Strikes: 2')
         expect(strikeCount).toBeInTheDocument()
     })
     it('calls foul and doesn\'t add a strike on click', () => {
        const { getByText } = render(<Dashboard />)
        const foulButton = getByText('Foul')
         fireEvent.click(foulButton)
         const strikeCount = render(<Display />).getByText('Strikes: 2')
         expect(strikeCount).toBeInTheDocument()
     })
     it('calls strike on click, resetting strike count', () => {
        const { getByText } = render(<Dashboard />)
        const strikeButton = getByText('Strike')
         fireEvent.click(strikeButton)
         const strikeCount = render(<Display />).getByText('Strikes: 0')
         expect(strikeCount).toBeInTheDocument()
     })
     it('calls ball on click increasing count to 1', () => {
        const { getByText } = render(<Dashboard />)
        const ballButton = getByText('Ball')
         fireEvent.click(ballButton)
         const ballCount = render(<Display />).getByText('Balls: 1')
         expect(ballCount).toBeInTheDocument()
     })
     it('calls ball on click increasing count to 2', () => {
        const { getByText } = render(<Dashboard />)
        const ballButton = getByText('Ball')
         fireEvent.click(ballButton)
         const ballCount = render(<Display />).getByText('Balls: 2')
         expect(ballCount).toBeInTheDocument()
     })
     it('calls ball on click resetting count to 0', () => {
        const { getByText } = render(<Dashboard />)
        const ballButton = getByText('Ball')
         fireEvent.click(ballButton)
         const ballCount = render(<Display />).getByText('Balls: 0')
         expect(ballCount).toBeInTheDocument()
     })
     it('calls strike on click', () => {
        const { getByText } = render(<Dashboard />)
        const strikeButton = getByText('Strike')
         fireEvent.click(strikeButton)
         const strikeCount = render(<Display />).getByText('Strikes: 1')
         expect(strikeCount).toBeInTheDocument()
     })
     it('hit, resets counter', () => {
        const { getByText } = render(<Dashboard />)
        const hitButton = getByText('Hit')
         fireEvent.click(hitButton)
         const ballCount = render(<Display />).getByText('Balls: 0')
         const strikeCount = render(<Display />).getByText('Strikes: 0')
         expect(ballCount && strikeCount).toBeInTheDocument()
     })
     it('calls strike on click', () => {
        const { getByText } = render(<Dashboard />)
        const strikeButton = getByText('Strike')
         fireEvent.click(strikeButton)
         const strikeCount = render(<Display />).getByText('Strikes: 1')
         expect(strikeCount).toBeInTheDocument()
     })
     it('calls ball on click increasing count to 1', () => {
        const { getByText } = render(<Dashboard />)
        const ballButton = getByText('Ball')
         fireEvent.click(ballButton)
         const ballCount = render(<Display />).getByText('Balls: 1')
         expect(ballCount).toBeInTheDocument()
     })
     it('reset count and score', () => {
         const { getByText } = render(<Dashboard />)
         const resetButton = getByText('Reset')
         fireEvent.click(resetButton)
         const ballCount = render(<Display />).getByText('Balls: 0')
         const strikeCount = render(<Display />).getByText('Strikes: 0')
         const runs = render(<Display />).getByText('Runs: 0')
         expect(ballCount && strikeCount && runs).toBeInTheDocument()

     })
    
})