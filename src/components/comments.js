import React, { Component } from 'react';
import CommentBox from './comment-box'
import plusIcon from '../assets/icons/plus-icon.png'
export default class Comments extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      boxToDelete: 0
    };
  }

  handleAddComment(event){
    this.setState({count: this.state.count + 1})
  }

  handleDeleteCommment(){

    this.setState({
      boxToDelete: this.state.boxToDelete + 1
    })
  }

    render() {
        return (
            <div className='comments col-md-4'>

              {this.state.boxToDelete < 1  ? <button className="delete-comment-button" onClick={this.handleDeleteCommment.bind(this)}>x</button> : null}
              {this.state.boxToDelete < 1  ?  <CommentBox /> : null }

              {this.state.boxToDelete < 2  ? <button className="delete-comment-button"  onClick={this.handleDeleteCommment.bind(this)}>x</button> : null}
              {this.state.boxToDelete < 2 ?  <CommentBox /> : null }

              {this.state.boxToDelete < 3  ? <button className="delete-comment-button"  onClick={this.handleDeleteCommment.bind(this)}>x</button> : null}
              {this.state.boxToDelete < 3 ?  <CommentBox /> : null }

              {this.state.boxToDelete < 4  ? <button className="delete-comment-button"  onClick={this.handleDeleteCommment.bind(this)}>x</button> : null}
              {this.state.boxToDelete < 4 ?  <CommentBox /> : null }

              {this.state.boxToDelete < 5  ? <button className="delete-comment-button"  onClick={this.handleDeleteCommment.bind(this)}>x</button> : null}
              {this.state.boxToDelete < 5 ?  <CommentBox /> : null }

              {this.state.boxToDelete < 6  ? <button className="delete-comment-button"  onClick={this.handleDeleteCommment.bind(this)}>x</button> : null}
              {this.state.boxToDelete < 6 ?  <CommentBox /> : null }

              {this.state.boxToDelete < 7  ? <button className="delete-comment-button"  onClick={this.handleDeleteCommment.bind(this)}>x</button> : null}
              {this.state.boxToDelete < 7 ?  <CommentBox /> : null }









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
