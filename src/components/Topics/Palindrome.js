import React, {Component} from 'react';

class Palindrome extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }
    change(val) {
        this.setState({
            userInput: val.toLowerCase()
        });
    }
    solve() {
        var forwards = this.state.userInput;
        var backwards = forwards.split('').reverse().join('');
        forwards === backwards ? this.setState({
            palindrome: 'Yes'
        }) : this.setState({
            palindrome: 'No'
        })
    }
    render() {
        return (
            <div className='puzzleBox palindromePB'>
                <h4>Palindrome</h4>
                <input type="text" className='inputLine' onChange={ (e) => this.change(e.target.value)}/>
                <button className='confirmationButton' onClick={ () => {this.solve()}}>Check</button>
                <span className='resultsBox'>Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome;