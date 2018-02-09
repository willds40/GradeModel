import React, { Component } from 'react';
import CommentBox from './comment-box'
import plusIcon from '../assets/icons/plus-icon.png'
export default class Comments extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    };
  }
  handleAddComment(event){
    this.setState({
      clicked: true
    });
  }
    render() {
        return (
            <div className='comments col-md-4'>
              <CommentBox />
              <CommentBox />
              <CommentBox />
              <CommentBox />
              <CommentBox />
              <CommentBox />
              <div>{this.state.clicked ? <CommentBox /> : null}</div>
              <span className='add-comment col-md-8 '>
                <button onClick={this.handleAddComment.bind(this)} className='add-comment-button'>Add comment</button>
              </span>
            </div>
        );
    }
}
