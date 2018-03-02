import React, { Component } from 'react';
import CommentDropDown from './comment-dropdown'
import closeIcon from '../assets/icons/close-icon.png'

export default class CommentBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      count:0,
      inputValue:""};
  }

  handleDeleteCommmentText(){
    this.setState({
      count:0,
      inputValue:""
    })
  }

  handleTextChange(e){
    this.setState({
      count: this.state.count + 1,
      inputValue:e.target.value})
  }

  handleSelectionChange(event){
    this.setState({
        inputValue: event.target.value,
        count: this.state.count + 1
    })
  }

  render() {
        return (
          <div>
          <div className="individual comment">
            {this.state.count < 1 ?
              <textarea value={this.props.value} className="input-comment" onChange={this.handleTextChange.bind(this)} /> :
              <textarea value={ this.state.inputValue} className="input-comment" onChange={this.handleTextChange.bind(this)} />
            }
          </div>
          <div>
          <CommentDropDown
            text={""}
            handleSelectionChange={this.handleSelectionChange.bind(this)}
            />
          </div>
          </div>
        );
    }
}
