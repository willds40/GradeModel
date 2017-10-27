import React, { Component } from 'react';
import {Link} from  'react-router-dom'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <h1 data-test-id={'title'}>Essay</h1>
            <textarea data-test-id={'essayText'}rows="20" cols="100">
            </textarea>
                <div>
                    <Link to='/summary'>Submit</Link>
                </div>
            </div>
        );
    }
}
