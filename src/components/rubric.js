import React, { Component } from 'react';
import Sticky from 'react-stickynode';
import Modal from './modal'
export default class Rubric extends Component {

  constructor() {
    super();
    this.state = {
      thesisIsOpen: false,
      evidenceIsOpen:false,
      analysisIsOpen:false,
      conclusionIsOpen:false
     };
  }

  thesisToggleModal = () => {
    this.setState({
      thesisIsOpen: !this.state.thesisIsOpen
    });
  }

  evidenceToggleModal = () => {
    this.setState({
      evidenceIsOpen: !this.state.evidenceIsOpen
    });
  }

  analysisToggleModal = () => {
    this.setState({
      analysisIsOpen: !this.state.analysisIsOpen
    });
  }

  conclusionToggleModal = () => {
    this.setState({
      conclusionIsOpen: !this.state.conclusionIsOpen
    });
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


            <td onMouseEnter={this.thesisToggleModal.bind(this)}
            onMouseLeave={this.thesisToggleModal.bind(this)}
            className='rubric-section'> 'Thesis Rubric information'
            <Modal section="Thesis"show={this.state.thesisIsOpen}
            >Here is some content for the modal
            </Modal>
            </td>

            <td onMouseEnter={this.evidenceToggleModal.bind(this)}
            onMouseLeave={this.evidenceToggleModal.bind(this)}
            className='rubric-section'> 'Evidence Rubric information'
            <Modal section="Evidence"show={this.state.evidenceIsOpen}
            >Here is some content for the modal
            </Modal>
            </td>

            <td onMouseEnter={this.analysisToggleModal.bind(this)}
            onMouseLeave={this.analysisToggleModal.bind(this)}
            className='rubric-section'> 'Analysis Rubric information'
            <Modal section="Analysis"show={this.state.analysisIsOpen}
            >Here is some content for the modal
            </Modal>
            </td>

            <td onMouseEnter={this.conclusionToggleModal.bind(this)}
            onMouseLeave={this.conclusionToggleModal.bind(this)}
            className='rubric-section'> 'Conclusion Rubric information'
            <Modal section="Evidence"show={this.state.conclusionIsOpen}
            >Here is some content for the modal
            </Modal>
            </td>

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
