import React, { Component } from 'react';
import styled from 'styled-components';
import styles from './style/style.css'


export default class Rubric extends Component {
    render() {
        return (
            <div>
                <h1 data-test-id={'title'}>Rubric</h1>
            <textarea data-test-id={'essayText'}rows="20" cols="100">
            </textarea>
            </div>
        );
    }
}