import React, { Component } from 'react';
import CommentBox from './comment-box'
import plusIcon from '../assets/icons/plus-icon.png'
export default class Comments extends Component {
    render() {
        return (
            <div className='comments col-md-4'>
              <CommentBox />
              <CommentBox />
              <CommentBox />
              <CommentBox />
              <CommentBox />
              <CommentBox />
              <img src={plusIcon} />
            </div>
        );
    }
}
