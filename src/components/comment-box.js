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
    console.log("handle delete comment textd");
    this.setState({
      count:0,
      inputValue:""
    })
  }

  handleTextChange(e){
    console.log("hello");
    this.setState({
      count: this.state.count + 1,
      inputValue:e.target.value})
  }

  handleSelectionChange(event){
    console.log("selection changed");
    var commentFromDropDown = event.target.options[event.target.selectedIndex].text;
    this.setState({inputValue: commentFromDropDown})
  }

  render() {
        return (
          <div>
          <div className="individual comment">
            {this.state.count < 1 ?
              <input value={this.state.inputValue} className="input-comment" onChange={this.handleTextChange.bind(this)} /> :
              <input value={ this.state.inputValue} className="input-comment" onChange={this.handleTextChange.bind(this)} />
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
