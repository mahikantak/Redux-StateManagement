import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions';

class Persons extends Component {
    
    render () {
        return (
            <div className="row appContainer">
                <AddPerson personAdded={this.props.onAddedPerson} />
                <div className="col-md-6 col-md-offset-1 row personWrapper">
                {this.props.prs.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        designation={person.designation} 
                        clicked={() => this.props.onRemovedPerson(person.id)}/>
                ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        prs: state.persons
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddedPerson: (name, age, designation) => dispatch({type: actionTypes.ADD_PERSON, personData: {name: name, age: age, designation: designation}}),
        onRemovedPerson: (id) => dispatch({type: actionTypes.REMOVE_PERSON, personId: id})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);