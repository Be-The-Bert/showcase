import React, {Component} from 'react';

class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
                employees: [
                    {
                    name: 'Jimmy Joe',
                    title: 'Hack0r',
                    age: 12,
                    },
                    {
                    name: 'Jeremy Schrader',
                    age: 24,
                    hairColor: 'brown'
                    },
                    {
                    name: 'Carly Armstrong',
                    title: 'CEO',
                    }
                ],
            userInput: '',
            filteredEmployees: []
        }
    }
    change(val) {
        this.setState({
            userInput: val
        });
    }
    solve() {
        var prop = this.state.userInput;
        var employees = this.state.employees;
        var filteredEmployees = [];
        for (let i = 0; i < employees.length; i++) {
            employees[i].hasOwnProperty(prop) ? filteredEmployees.push(employees[i]) : ''
        }
        this.setState({
            filteredEmployees: filteredEmployees
        })
    }
    render() {
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>Original: {JSON.stringify(this.state.employees)}</span>
                <input type="text" className='inputLine' onChange={ (e) => this.change(e.target.value)}/>
                <button className='confirmationButton' onClick={ () => {this.solve()}}>Filter</button>
                <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredEmployees)}</span>
                
            </div>
        )
    }
}

export default FilterObject;