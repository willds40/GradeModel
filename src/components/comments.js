import React, { Component } from 'react';
import CommentBox from './comment-box'
import plusIcon from '../assets/icons/plus-icon.png'
export default class Comments extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      boxes: [{"box" : "box0", "box1" : "box1"}]
    }
  }

  handleAddComment(e){
    var array = this.state.boxes;
    var index = array.indexOf(e.target.value)
    this.setState({boxes: this.state.boxes.concat(array)})
  }

  handleDeleteCommment(e){
  console.log(e.target.value);
  var array = this.state.boxes;
  var index = array.indexOf(e.target.value)
  array.splice(index, 1);
  this.setState({boxes: array });
  }

    render() {
        return (
            <div className='comments col-md-4'>
            {this.state.boxes.map(function(item){
              return <button value={item.id} key={item.id} className="delete-comment-button" onClick={this.handleDeleteCommment.bind(this)}>x</button>
            }, this)
            }
            {this.state.boxes.map(function(item){
              return <CommentBox value={item.id} />
            }, this)
            }
              <span className='add-comment col-md-8 '>
                <button onClick={this.handleAddComment.bind(this)} className='add-comment-button'>Add comment</button>
              </span>
            </div>
        );
    }
}
