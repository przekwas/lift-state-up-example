import React from 'react';

const InputTester = (props) => {
    return (
        <input placeholder="Enter sum sheet" onChange={(e) => props.handleParentChange(e.target.value)} />
    );
};

export default InputTester;