import React, { Component } from 'react';
import CommentBox from './comment-box'
import plusIcon from '../assets/icons/plus-icon.png'

const NUMBEROFCOMMENTSALLOWED = 6
export default class Comments extends Component {
  constructor() {
    super();
    this.state = {
      commentNumber: 4,
      commentsToAdd: [],
      deletedComments:[],
      commentTypeSelection :[]
    }
  }

  handleCommentTypeSelection(e){
    this.state.commentTypeSelection.push(e.target.value)
    this.setState({
      commentTypeSelection:this.state.commentTypeSelection
    })
  }

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
            {this.state.deletedComments.includes(1) ? null :
            <div className='input-comment-container Thesis-section'>
            <button  className="delete-comment-button" onClick=
            {this.handleDeleteComment.bind(this , 1)}
            >Remove</button>
            <h4 className='comment-type'>Thesis</h4>
            <CommentBox value={"Great imagary"} />
            </div>
          }

          {this.state.deletedComments.includes(2) ? null :
            <div className='input-comment-container Thesis-section'>
            <button  className="delete-comment-button" onClick=
            {this.handleDeleteComment.bind(this , 2)}
            >Remove</button>
            <h4 className='comment-type'>Thesis</h4>
            <CommentBox value={"Perfect. 7/7"}/>
            </div>
          }

          {this.state.deletedComments.includes(3) ? null :
            <div className='input-comment-container Thesis-section'>
            <button  className="delete-comment-button" onClick=
            {this.handleDeleteComment.bind(this, 3)}
            >Remove</button>
            <h4 className='comment-type'>Thesis</h4>
            <CommentBox value={"Does this go with the rest of the essay?"}/>
            </div>
          }

          {!this.state.deletedComments.includes(4)  && this.state.commentsToAdd.includes(4) ?
            <div className={'input-comment-container' + " " +  this.state.commentTypeSelection[0] + "-"  + "section"}>
            <button  className="delete-comment-button" onClick=
            {this.handleDeleteComment.bind(this, 4)}
            >Remove</button>
            <h4 className='comment-type'>{this.state.commentTypeSelection[0]}</h4>
            <CommentBox value={""}/>
            </div> : null
          }

          { !this.state.deletedComments.includes(5) && this.state.commentsToAdd.includes(5) ? <div className={'input-comment-container' + " " +  this.state.commentTypeSelection[1] + "-"  + "section"}>
            <button  className="delete-comment-button" onClick=
            {this.handleDeleteComment.bind(this, 5)}
            >Remove</button>
            <h4 className='comment-type'>{ this.state.commentTypeSelection[1]}</h4>
            <CommentBox value={""}/>
            </div> : null
          }

          {!this.state.deletedComments.includes(6) && this.state.commentsToAdd.includes(6) ?
            <div className={'input-comment-container' + " " +  this.state.commentTypeSelection[2] + "-"  + "section"}>
            <button  className="delete-comment-button" onClick=
            {this.handleDeleteComment.bind(this, 6)}
            >Remove</button>
            <h4 className='comment-type'>{this.state.commentTypeSelection[2]}</h4>
            <CommentBox value={""}/>
            </div> : null
          }

          <span className='add-comment col-md-4 '>
          {this.state.unique == 6 ?<button onClick={this.handleAddComment.bind(this)} className='add-comment-button'>Add Comment</button>
          :
            <button onClick={this.handleAddComment.bind(this, this.state.commentNumber)} className='add-comment-button'>Add Comment</button>
          }
          </span>
          <select
          onChange={this.handleCommentTypeSelection.bind(this)}>
          <option> Select A Type of Comment </option>
          <option value="Thesis"> Thesis Comment </option>
          <option value="Argument"> Argument Comment </option>
          </select>
        </div>
        );
    }
}
