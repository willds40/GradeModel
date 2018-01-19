import React, { Component } from 'react';
import CommentBox from './comment-box'
export default class Comments extends Component {
    render() {
        return (
            <div className='comments col-md-4'>
              <CommentBox />
            </div>
        );
    }
}
