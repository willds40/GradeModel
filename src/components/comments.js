import React, { Component } from 'react';
import CommentBox from './comment-box'
import CommentDropDown from './comment-dropdown'
import plusIcon from '../assets/icons/plus-icon.png'
export default class Comments extends Component {
  constructor() {
    super();
    this.state = {
      uniqueKey: 4,
      boxes: [],
      doNotDisplayBox:[]
    }
  }

  handleAddComment(index){
    console.log(index);
    var deletedComments = this.state.doNotDisplayBox
    deletedComments.push(index)
    this.setState({
      uniqueKey: this.state.uniqueKey + 1,
      doNotDisplayBox : deletedComments
    })
  }

  handleDelete(index) {
    this.handleDeleteCommment(index)
  }

  handleDeleteCommment(index){
  var deletedComments = this.state.doNotDisplayBox
  deletedComments.push(index)
  console.log(deletedComments);
  this.setState({
    doNotDisplayBox:deletedComments
   });
  }

    render() {
        return (
            <div className='comments col-md-4'>
            {this.state.doNotDisplayBox.includes(1) ? null :
            <div>
            <button  className="delete-comment-button" onClick=
            {this.handleDelete.bind(this , 1)}
            >x</button>
            <CommentBox value={1}/>
            <CommentDropDown />
            </div>
          }

          {this.state.doNotDisplayBox.includes(2) ? null :
            <div>
            <button  className="delete-comment-button" onClick=
            {this.handleDelete.bind(this , 2)}
            >x</button>
            <CommentBox value={2}/>
            <CommentDropDown />
            </div>
          }

          {this.state.doNotDisplayBox.includes(3) ? null :
            <div>
            <button  className="delete-comment-button" onClick=
            {this.handleDelete.bind(this, 3)}
            >x</button>
            <CommentBox value={3}/>
            <CommentDropDown />
            </div>
          }

          {this.state.doNotDisplayBox.includes(4) ?
            <div>
            <button  className="delete-comment-button" onClick=
            {this.handleDelete.bind(this, 3)}
            >x</button>
            <CommentBox value={3}/>
            <CommentDropDown />
            </div> : null
          }

              <span className='add-comment col-md-8 '>
                <button onClick={this.handleAddComment.bind(this,this.state.uniqueKey)} className='add-comment-button'>Add comment</button>
              </span>
            </div>
        );
    }
}
