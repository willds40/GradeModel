import React, { Component } from 'react';
import styles from './style/style.css'


export default class Rubric extends Component {
    render() {
        return (
            <row>
                <h1 data-test-id={'title'}>Rubric</h1>
            <textarea data-test-id={'essayText'}rows="10" cols="100">
            </textarea>
            </row>
        );
    }
}
