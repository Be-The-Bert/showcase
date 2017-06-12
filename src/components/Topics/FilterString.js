import React, {Component} from 'react';

class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            unfilteredArray: ['sup', 'nerd', 'project', 'these', 'are', 'strings'],
            userInput: '',
            filteredArray: []
        }
    }
    change(val) {
        this.setState({
            userInput: val.toLowerCase()
        });
    }
    solve() {
        var {unfilteredArray, userInput, filteredArray} = this.state;
        for (let i = 0; i < unfilteredArray.length; i++) {
            unfilteredArray[i].includes(userInput) ? filteredArray.push(unfilteredArray[i]) : ''
        }
        this.setState({
            filteredArray: filteredArray
        });
    }
    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>Unfiltered: {JSON.stringify(this.state.unfilteredArray)}</span>
                <input type="text" className='inputLine' onChange={ (e) => this.change(e.target.value)}/>
                <button className='confirmationButton' onClick={ () => {this.solve()}}>Filter</button>
                <span className='resultsBox filterStringRB'>Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            
            </div>
        )
    }
}

export default FilterString;