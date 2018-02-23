import React, { Component } from 'react';

export default class CommentDropDown extends Component {

  constructor(props){
    super(props);
    this.state = {
      value:""
    }
  }


  render() {
        return (
          <select onChange={this.props.handleSelectionChange}
          className=" selectpicker select-comment">
           <option>Select</option>
           <option>er companions instrument set estimating sex remarkably solicitude motionless. Property men the why smallest graceful day insisted required. Inquiry justice country old placing sitting any ten age.</option>
           <option>Item 3</option>
          </select>
        );
    }
  }
