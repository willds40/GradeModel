import React, { Component } from 'react';
import CommentBox from './comment-box'
import plusIcon from '../assets/icons/plus-icon.png'
export default class Comments extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  handleAddComment(event){
    this.setState({count: this.state.count + 1})
  }
  displayCommentBox(count){
    if (count > 0){
      console.log(this.state.count);
      return <CommentBox />
    }
  }

    render() {
        return (
            <div className='comments col-md-4'>
              <button className="delete-comment-button">x</button>
              <CommentBox />
              <button className="delete-comment-button">x</button>
              <CommentBox />
              <button className="delete-comment-button">x</button>
              <CommentBox />
              <button className="delete-comment-button">x</button>
              <CommentBox />
              <button className="delete-comment-button">x</button>
              <CommentBox />
              <button className="delete-comment-button">x</button>
              <CommentBox />
              <button className="delete-comment-button">x</button>
              <CommentBox />
              {this.state.count > 0 ? <button className="delete-comment-button">x</button>
              : null }
              {this.state.count > 0 ? <CommentBox />
              : null }
              {this.state.count > 1 ? <button className="delete-comment-button">x</button>
              : null }
              {this.state.count > 1 ? <CommentBox  /> : null }
              {this.state.count > 2 ? <button className="delete-comment-button">x</button>
              : null }
              {this.state.count > 2 ? <CommentBox  /> : null }
              {this.state.count > 3 ? <button className="delete-comment-button">x</button>
              : null }
              {this.state.count > 3 ? <CommentBox  /> : null }
              {this.state.count > 4 ? <button className="delete-comment-button">x</button>
              : null }
              {this.state.count > 4 ? <CommentBox  /> : null }
              {this.state.count > 5 ? <button className="delete-comment-button">x</button>
              : null }
              {this.state.count > 5 ? <CommentBox  /> : null }

              <span className='add-comment col-md-8 '>
                <button onClick={this.handleAddComment.bind(this)} className='add-comment-button'>Add comment</button>
              </span>
            </div>
        );
    }
}
