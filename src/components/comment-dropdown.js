import React, { Component } from 'react';

export default class CommentDropDown extends Component {

  constructor(props){
    super(props);
    this.state = {
      value:""
    }
  }

  handleSelectionChange(event){
    console.log("selection changed");
    var commentFromDropDown = event.target.options[event.target.selectedIndex].text;
    this.setState({value: commentFromDropDown})
    return commentFromDropDown
  }

  render() {
        return (
          <select onChange={this.handleSelectionChange.bind(this)} className=" selectpicker select-comment">
           <option>Select</option>
           <option>er companions instrument set estimating sex remarkably solicitude motionless. Property men the why smallest graceful day insisted required. Inquiry justice country old placing sitting any ten age.</option>
           <option>Item 3</option>
          </select>
        );
    }
  }
