import React, { Component } from 'react';
import Sticky from 'react-stickynode';
import Modal from './modal'
export default class RubricSection extends Component {

  constructor() {
    super();
  }

    render() {
        return (
          <div className='rubric-container'>
            <table className="col-md-12 rubric">
            <tr>
            <td className='rubric-number'>1
            <input className='radio-section-button' type="radio" value="option1" checked={false} />
            </td>
            <td className='rubric-number rubric-section'> 2
            <input className='radio-section-button' type="radio" value="option1" checked={false} />

            </td>
            <td className='rubric-number rubric-section'>3
            <input className='radio-section-button' type="radio" value="option1" checked={false} />

            </td>
            <td className='rubric-number rubric-section'>4
            <input className='radio-section-button' type="radio" value="option1" checked={false} />
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
