import React, { Component } from 'react';

import './AddPerson.css';

class AddPerson extends Component {
    state = {
        name: '',
        age: '',
        designation: ''
    }

    nameChangedHandler = (event) => {
        this.setState({ name: event.target.value });
    }

    ageChangedHandler = (event) => {
        this.setState({ age: event.target.value });
    }
    designationChangedHandler = (event) => {
        this.setState({ designation: event.target.value });
    }

    render() {
        return (
            <div className="AddPerson col-md-4">
                <div className="form-group">
                    <label >Name</label>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Name"
                        onChange={this.nameChangedHandler}
                        value={this.state.name} />
                </div>
                <div className="form-group">
                    <label >Age</label>
                    <input
                        className="form-control"
                        type="number"
                        placeholder="Age"
                        onChange={this.ageChangedHandler}
                        value={this.state.age} />
                </div>
                <div className="form-group">
                    <label >Designation</label>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Designation"
                        onChange={this.designationChangedHandler}
                        value={this.state.designation} />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" onClick={() => this.props.personAdded(this.state.name, this.state.age, this.state.designation)}>Add Employee</button>
                </div>
            </div>
        );
    }
}

export default AddPerson;