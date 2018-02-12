import React, { Component } from 'react';
import CommentBox from './comment-box'
import plusIcon from '../assets/icons/plus-icon.png'
export default class Comments extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      boxes: ["box1", "box2", "box3", "box4", "box5", "box6"]
    }
  }

  handleAddComment(e){
    var newId = this.state.count.toString()
    this.setState({
      boxes: [...this.state.boxes, ...newId],
      count: this.state.count + 1
    })
  }

  handleDeleteCommment(e){
  var array = this.state.boxes;
  var index = array.indexOf(e.target.value)
  array.splice(index, 1);
  console.log(this.state.boxes);
  this.setState({boxes: array });
  }

    render() {
        return (
            <div className='comments col-md-4'>
              {this.state.boxes.map(function(item, index){
                return <div>
                <button value={item} className="delete-comment-button" onClick={this.handleDeleteCommment.bind(this)}>x</button>
                <CommentBox value={item} text={"comment text"}  />
                </div>
              }, this)
              }
              <span className='add-comment col-md-8 '>
                <button onClick={this.handleAddComment.bind(this)} className='add-comment-button'>Add comment</button>
              </span>
            </div>
        );
    }
}
