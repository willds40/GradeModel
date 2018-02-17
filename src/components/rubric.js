import React, { Component } from 'react';
import Sticky from 'react-stickynode';
export default class Rubric extends Component {

  constructor() {
    super();
    this.state = {
      thesisIsHovering: false
    }
  }

  onHover(rubricSection){
    if(rubricSection === "Thesis"){
      this.setState({
        thesisIsHovering:true
      })
    }
  }

  onLeave(rubricSection){
    if(rubricSection === "Thesis"){
      this.setState({
        thesisIsHovering:false
      })
    }
  }

    render() {
        return (
          <div className='rubric-container'>
          <Sticky enabled={true} top={0}>
            <table className="col-md-12 rubric">

            <tr>
            <td className='rubric-title'>THESIS</td>
            <td className='rubric-title rubric-section'>EVIDENCE</td>
            <td className='rubric-title rubric-section'>ANALYSIS</td>
            <td className='rubric-title rubric-section'>CONCLUSION</td>
            </tr>




            <tr>
            <td onMouseEnter={this.onHover.bind(this ,"Thesis")}
            onMouseLeave={this.onLeave.bind(this ,"Thesis")}
            className='rubric-section'> Thesis Rubric information
            {this.state.thesisIsHovering === true ? <div>Hello</div> : null}
            </td>



            <td className='rubric-section'> Rubric information</td>



            <td className='rubric-section'> Rubric information</td>
            <td className = 'rubric-section'>Rubric information</td>

            </tr>





            <tr>
            <td className='rubric-number'>4</td>


            <td className='rubric-number rubric-section'> 3</td>
            <td className='rubric-number rubric-section'>4</td>
            <td className='rubric-number rubric-section'>3</td>
            </tr>
            </table>
          </Sticky>
          </div>
        );
    }
}
