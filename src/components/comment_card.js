import React, { Component } from 'react';
import CommentBox from './comment-box'

export default class CommentCard extends Component{
  constructor(){
    super()
  }

  render(){
     return (
        <div className= {`input-comment-container ${this.props.commentType}-section`}>
          <button  className="delete-comment-button"
          onClick= {this.props.handleDeleteComment}> Remove
          </button>
          <h4 className='comment-type'>{this.props.commentType}</h4>
          <CommentBox
          value={this.props.commentValue}
          />
        </div>
      );
  }
}
