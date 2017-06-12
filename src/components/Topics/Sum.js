import React, {Component} from 'react';

class Sum extends Component {
    constructor() {
        super();
        this.state = {
            num1: 0,
            num2: 0,
            sum: null
        }
    }
    change1(val) {
        this.setState({
            num1: Number(val)
        });
    }
    change2(val) {
        this.setState({
            num2: Number(val)
        });
    }
    solve() {
        var {num1, num2} = this.state;
        var answer = num1 + num2;
        this.setState({
            sum: answer
        })
    }
    render() {
        return (
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input type="text" className='inputLine' onChange={ (e) => this.change1(e.target.value)}/>
                <input type="text" className='inputLine' onChange={ (e) => this.change2(e.target.value)}/>
                <button className='confirmationButton' onClick={ () => {this.solve()}}>Check</button>
                <span className='resultsBox'>Answer: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum;