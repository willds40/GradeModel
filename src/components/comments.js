import React, { Component } from 'react';
import styled from 'styled-components';

export default class Comments extends Component {
    render() {
        return (
            <div>
                <h1 data-test-id={'title'}>Comments</h1>
            <textarea data-test-id={'essayText'}rows="20" cols="100">
            </textarea>
            </div>
        );
    }
}
