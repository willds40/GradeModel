import React, { Component } from 'react';
import closeIcon from '../assets/icons/close-icon.png'

export default class CommentBox extends Component {
  constructor(props){
    super(props);
    this.state = { value:""};
  }
  handleChange(event){
    this.setState({value:event.target.options[event.target.selectedIndex].text})
  }
    render() {
        return (
          <div className='input-comment-container'>
          <textarea value={this.state.value} className="input-comment"/>
            <select onChange={this.handleChange.bind(this)} className=" selectpicker select-comment">
             <option>Select</option>
             <option>er companions instrument set estimating sex remarkably solicitude motionless. Property men the why smallest graceful day insisted required. Inquiry justice country old placing sitting any ten age.</option>
            <option>Item 3</option>
            </select>

          </div>
        );
    }
}
