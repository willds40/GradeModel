import React, { Component } from 'react';
import closeIcon from '../assets/icons/close-icon.png'

export default class CommentBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      count:0,
      inputValue:""};
  }


  handleTextChange(e){
    this.setState({
      count: this.state.count + 1,
      inputValue:e.target.value})
  }
  render() {
        return (
          <div className='input-comment-container'>
            {this.state.count < 1 ?
              <input value={this.props.text + this.state.inputValue} className="input-comment" onChange={this.handleTextChange.bind(this)} /> :
            <input value={ this.state.inputValue} className="input-comment" onChange={this.handleTextChange.bind(this)} />
            }
          </div>
        );
    }
}
