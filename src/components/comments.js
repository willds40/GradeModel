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
      commentsToAdd: [],
      deletedComments:[],
      buttonDisabled:true,
      commentNumberToAdd:4 //Comments on Screen + 1
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

//need to refactor
  handleAddComment(commentNumberToAdd){
    console.log("here");
    var addedComments = this.state.commentsToAdd
    var deletedComments = this.state.deletedComments
    addedComments.push(commentNumberToAdd)
    var index = deletedComments.indexOf(index)
    deletedComments.splice(index,1)
    if(commentNumberToAdd < NUMBEROFCOMMENTSALLOWED){
      commentNumberToAdd = commentNumberToAdd + 1
    }
    this.setState({
      commentNumberToAdd:commentNumberToAdd,
      commentsToAdd : addedComments,
      deletedComments:deletedComments
    })

  }

  handleDeleteComment(commentNumberToAdd){
  var deletedComments = this.state.deletedComments
  deletedComments.push(commentNumberToAdd)

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
