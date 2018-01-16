import React, { Component } from 'react';

export default class Essay extends Component {
    render() {
        return (
            <div>
            <textarea className='col-md-8 essay'>
            Essay Text
            </textarea>
            </div>
        );
    }
}
