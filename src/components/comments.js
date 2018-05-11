import React, { Component } from 'react';
import CommentBox from './comment-box'
import plusIcon from '../assets/icons/plus-icon.png'
import CommentCard from './comment_card'
const NUMBEROFCOMMENTSALLOWED = 6
let commentTypleCollection = ["Thesis", "Thesis", "Argument"]

export default class Comments extends Component {
  constructor() {
    super();
    this.state = {
      comments:[1,2,3], //numbers are the key->new better way
      commentsToAdd: [],
      buttonDisabled:true,
      commentNumberToAdd:4 //The next  comment we are going to add
    }
    this.handleDeleteComment = this.handleDeleteComment.bind(this)
  }

  handleNewCommentSelection(e){
    if (e.target.value === ""){
      this.setState({
        buttonDisabled:true
      })
    }
    else{
      this.addToCommenetTypeCollection(this.state.commentNumberToAdd,e.target.value)
      this.setState({
        buttonDisabled:false
      })
    }
  }

  addToCommenetTypeCollection(commentNumberToAdd,commentType){
    commentTypleCollection[commentNumberToAdd] = commentType
  }

  handleAddComment(commentNumberToAdd){
    var comments = [...this.state.comments]
    comments.push(commentNumberToAdd)
    if(commentNumberToAdd < NUMBEROFCOMMENTSALLOWED){
      commentNumberToAdd = commentNumberToAdd + 1
    }
    this.setState({
      commentNumberToAdd:commentNumberToAdd,
      comments : comments,
    })
  }

  handleDeleteComment(commentNumber){
    let comments = [...this.state.comments]
    let index = commentNumber -1
    comments.splice(index, 1);
    this.setState({
      comments:comments,
     });
  }

  render() {
    return (
      <div className='comments col-md-3'>
        {this.state.comments.includes(1) ?
        <CommentCard
           handleDeleteComment={this.handleDeleteComment.bind(this,1)}
           commentType={"Thesis"}
           commentValue={"Great imagary"}
        />
        :null
      }

      {this.state.comments.includes(2) ?
        <CommentCard
           handleDeleteComment={this.handleDeleteComment.bind(this,2)}
           commentType={"Thesis"}
           commentValue={"Perfect"}
        />
        : null
      }

      {this.state.comments.includes(3) ?
        <CommentCard
           handleDeleteComment={this.handleDeleteComment.bind(this,3)}
           commentType={"Argument"}
           commentValue={"Does this go with the rest of the essay?"}
        />
        : null
      }

      {this.state.comments.includes(4) ?
        <CommentCard
          commentType={commentTypleCollection[4]}
          handleDeleteComment={this.handleDeleteComment.bind(this,4)}
          commentValue={""}
        /> : null
      }

      {this.state.comments.includes(5) ?
        <CommentCard
          commentType={commentTypleCollection[5]}
          handleDeleteComment={this.handleDeleteComment.bind(this,5)}
          commentValue={""}
        /> : null
      }
      {this.state.comments.includes(6) ?
        <CommentCard
          commentType={commentTypleCollection[6]}
          handleDeleteComment={this.handleDeleteComment.bind(this,6)}
          commentValue={""}
        /> : null
      }
      <span className='add-comment col-md-6'>
        <button
        disabled={this.state.buttonDisabled}
        onClick={this.handleAddComment.bind(this, this.state.commentNumberToAdd)} className='add-comment-button'>Add Comment
        </button>
      </span>
      <select className='select-comment-type' ref='item'
        onMouseLeave={this.handleNewCommentSelection.bind(this)}>
        <option value=""> Select A Comment To Add </option>
        <option value="Thesis"> Thesis Comment </option>
        <option value="Argument"> Argument Comment </option>
      </select>
    </div>
    );
  }
}
