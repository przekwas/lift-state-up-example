import React, { Component, Fragment } from 'react';
import InputTester from './InputTester';

class InputDisplayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parentState: ''
        };
        this.handleParentChange = this.handleParentChange.bind(this);
    }

    handleParentChange(value) {
        this.setState({
            parentState: value
        });
    }

    render() {
        return (
            <Fragment>
                <InputTester handleParentChange={this.handleParentChange} />
                <h1>{this.state.parentState}</h1>
            </Fragment>
        );
    }
};

export default InputDisplayer;