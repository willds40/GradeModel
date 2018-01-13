import React, { Component } from 'react';
export default class Essay extends Component {
    render() {
        return (
            <div>
                <h1 data-test-id={'title'}>Essay</h1>
            <textarea data-test-id={'essayText'}rows="20" cols="100">
            </textarea>
            </div>
        );
    }
}
