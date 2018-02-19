import React, { Component } from 'react';
import Sticky from 'react-stickynode';
import Modal from './modal'
export default class RubricSection extends Component {

  constructor() {
    super();
    this.state = {
    selectedOption: 'option'
    }
  }

  OnScoreChange(changeEvent){
    this.setState({
    selectedOption: changeEvent.target.value
  });
  }

    render() {
        return (
          <div className='rubric-container'>
            <table className="col-md-12 rubric">
            <tr>
            <td className='rubric-number'>1
            <input checked={this.state.selectedOption === 'option1'}
             onChange={this.OnScoreChange.bind(this)} className='radio-section-button' type="radio" value="option1"/>
            </td>
            <td className='rubric-number rubric-section'> 2
            <input checked={this.state.selectedOption === 'option2'}
             onChange={this.OnScoreChange.bind(this)} className='radio-section-button' type="radio" value="option2"/>

            </td>
            <td className='rubric-number rubric-section'>3
            <input checked={this.state.selectedOption === 'option3'}
             onChange={this.OnScoreChange.bind(this)} className='radio-section-button' type="radio" value="option3"/>

            </td>
            <td className='rubric-number rubric-section'>4
            <input checked={this.state.selectedOption === 'option4'}
             onChange={this.OnScoreChange.bind(this)} className='radio-section-button' type="radio" value="option4"/>
            </td>
            </tr>
            <tr>
            <td className='rubric-section'> {this.props.text}</td>
            <td className='rubric-section'> {this.props.text} </td>
            <td className='rubric-section'> {this.props.text}</td>
            <td className = 'rubric-section'>{this.props.text}</td>
            </tr>
            </table>
          </div>
        );
    }
}
