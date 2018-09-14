import React, { Component } from 'react';

class Spinner extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ marginTop: '2em', width: "75% "}}></div>
            </div>
        );
    }
}

export default Spinner;
