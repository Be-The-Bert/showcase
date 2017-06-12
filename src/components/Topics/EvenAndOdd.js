import React, {Component} from 'react';

class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }
    change(val) {
        this.setState({
            userInput: val
        });
    }
    solve() {
        var arr = this.state.userInput.split(',');
        var evens = [];
        var odds = [];
        for (let i = 0; i < arr.length; i++) {
            (arr[i] % 2 === 0) ? evens.push(arr[i]) : odds.push(arr[i])
        }
        this.setState({
            evenArray: evens,
            oddArray: odds
        })
    }
    render() {
        return (
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input type="text" className='inputLine' onChange={ (e) => this.change(e.target.value)}/>
                <button className='confirmationButton' onClick={ () => {this.solve()}}>Split</button>
                <span className='resultsBox'>Evens: {this.state.evenArray}</span>
                <span className='resultsBox'>Odds: {this.state.oddArray}</span>
            </div>
        )
    }
}

export default EvenAndOdd;