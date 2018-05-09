import React, { Component } from 'react';
import CommentBox from './comment-box'
import plusIcon from '../assets/icons/plus-icon.png'
import CommentCard from './comment_card'
const NUMBEROFCOMMENTSALLOWED = 6
let commentTypleCollection = ["Thesis", "Thesis", "Argument"]
let commentNumber = null;

//think more about the nubmers 

export default class Comments extends Component {
  constructor() {
    super();
    this.state = {
      commentNumber: 4,
      commentsToAdd: [],
      deletedComments:[],
      buttonDisabled:true
    }
    this.handleDeleteComment = this.handleDeleteComment.bind(this)
  }

//need to refactor
  handleNewCommentSelection(e){
    if (e.target.value === ""){
      this.setState({
        buttonDisabled:true
      })
    }
      else{
        console.log("HERE");
      let commentType = (e.target.value)
      commentTypleCollection[this.state.commentNumber] = e.target.value
      this.setState({
        buttonDisabled:false
      })
    }
  }

//need to refactor
  handleAddComment(commentNumber){
    var addedComments = this.state.commentsToAdd
    var deletedComments = this.state.deletedComments
    addedComments.push(commentNumber)
    var index = deletedComments.indexOf(index)
    deletedComments.splice(index,1)
    if(this.state.commentNumber < NUMBEROFCOMMENTSALLOWED){
      this.state.commentNumber = this.state.commentNumber + 1
    }
    this.setState({
      commentNumber: this.state.commentNumber,
      commentsToAdd : addedComments,
      deletedComments:deletedComments
    })
  }

  handleDeleteComment(commentNumber){
  var deletedComments = this.state.deletedComments
  deletedComments.push(commentNumber)

  this.setState({
    deletedComments : deletedComments,
   });
  }

  render() {
    return (
      <div className='comments col-md-3'>
        {this.state.deletedComments.includes(1) ? null
        :
        <CommentCard
         handleDeleteComment={this.handleDeleteComment.bind(this,1)}
         commentType={"Thesis"}
         commentValue={"Great imagary"}
        />
      }

      {this.state.deletedComments.includes(2) ? null
        :
        <CommentCard
         handleDeleteComment={this.handleDeleteComment.bind(this,2)}
         commentType={"Thesis"}
         commentValue={"Perfect"}
        />
      }

      {this.state.deletedComments.includes(3) ? null
        :
        <CommentCard
         handleDeleteComment={this.handleDeleteComment.bind(this,3)}
         commentType={"Argument"}
         commentValue={"Does this go with the rest of the essay?"}
        />
      }

      {!this.state.deletedComments.includes(4)  && this.state.commentsToAdd.includes(4) ?
        <CommentCard
        commentType={commentTypleCollection[4]}
        handleDeleteComment={this.handleDeleteComment.bind(this,4)}
        commentValue={""}
        /> : null
      }

      {!this.state.deletedComments.includes(5)  && this.state.commentsToAdd.includes(5) ?
        <CommentCard
        commentType={commentTypleCollection[5]}
        handleDeleteComment={this.handleDeleteComment.bind(this,5)}
        commentValue={""}
        /> : null
      }

      {!this.state.deletedComments.includes(6)  && this.state.commentsToAdd.includes(6) ?
        <CommentCard
        commentType={commentTypleCollection[6]}
        handleDeleteComment={this.handleDeleteComment.bind(this,6)}
        commentValue={""}
        /> : null
      }

      <select className='select-comment-type' ref='item'
      onMouseLeave={this.handleNewCommentSelection.bind(this)}>
      <option value=""> Select A Comment To Add </option>
      <option value="Thesis"> Thesis Comment </option>
      <option value="Argument"> Argument Comment </option>
      </select>
      <span className='add-comment col-md-6'>
        <button
        disabled={this.state.buttonDisabled}
         onClick={this.handleAddComment.bind(this, this.state.commentNumber)} className='add-comment-button'>Add Comment
         </button>
      </span>
    </div>
    );
  }
}
