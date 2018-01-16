import React, { Component } from 'react';
export default class Rubric extends Component {
    render() {
        return (
          <table className="col-md-12 rubric">
          <tr>
          <td className='rubric-title'>THESIS</td>
          <td className='rubric-title rubric-section'>EVIDENCE</td>
          <td className='rubric-title rubric-section'>ANALYSIS</td>
          <td className='rubric-title rubric-section'>CONCLUSION</td>
          </tr>
          <tr>
          <td> Rubric information</td>
          <td className='rubric-section'> Rubric  on information</td>
          <td className='rubric-section'> Rubric information</td>
          <td className = 'rubric-section'> Rubric information </td>
          </tr>
          <tr>
          <td className='rubric-number '> 4</td>
          <td className='rubric-number rubric-section'> 3</td>
          <td className='rubric-number rubric-section'>4</td>
          <td className='rubric-number rubric-section'>3</td>
          </tr>
          </table>
        );
    }
}
