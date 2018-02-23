import React, { Component } from 'react';
import Sticky from 'react-stickynode';
import Modal from './modal'
export default class Rubric extends Component {

  constructor() {
    super();
    this.state = {
      selectedOption:"option",
      thesisIsOpen: false,
      evidenceIsOpen:false,
      analysisIsOpen:false,
      conclusionIsOpen:false,
      thesisDisplayText: "DEFAULT certainty an on tolerably smallness difficult. Many no each like up be is next neat. Put not enjoyment behaviour her supposing. At he pulled object others.Necessary ye contented newspaper zealously breakfast he prevailed. Melancholy middletons",
      evidenceDisplayText: "DEFAULT certainty an on tolerably smallness difficult. Many no each like up be is next neat. Put not enjoyment behaviour her supposing. At he pulled object others.Necessary ye contented newspaper zealously breakfast he prevailed. Melancholy middletons",
      analysisDisplayText: "DEFAULT certainty an on tolerably smallness difficult. Many no each like up be is next neat. Put not enjoyment behaviour her supposing. At he pulled object others.Necessary ye contented newspaper zealously breakfast he prevailed. Melancholy middletons",
      conclusionDisplayText: "DEFAULT ousehold certainty an on tolerably smallness difficult. Many no each like up be is next neat. Put not enjoyment behaviour her supposing. At he pulled object others.Necessary ye contented newspaper zealously breakfast he prevailed. Melancholy middletons",
      thesisScore: 4,
      evidenceScore: 3,
      analyisScore: 2,
      conclusionScore:2
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

  handleScoreChange = (event) => {
    let categoryScore = category.concat("Score")
    this.setState({categoryScore: score})
  }

  handleTextAndScoreChange = (event) => {
    switch(event.target.title){
     case "thesis":
     this.setState({
       thesisScore: event.target.id,
       thesisDisplayText: event.target.value
     });
     case "evidence":
     this.setState({
       evidenceScore: event.target.id,
       evidenceDisplayText: event.target.value
     });
     case "analaysis":
     this.setState({
       analyisScore: event.target.id,
       analysisDisplayText: event.target.value
     });
     case "conclusion":
     this.setState({
        conclusionScore: event.target.id,
      conclusionDisplayText: event.target.value
     });
   default:
   return null;
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
            <td onMouseEnter={this.thesisToggleModal.bind(this)}
            onMouseLeave={this.thesisToggleModal.bind(this)}
            className='rubric-section'>{this.state.thesisDisplayText}
            <Modal
              section="thesis"
              show={this.state.thesisIsOpen}
              handleScoreChange={this.handleScoreChange.bind(this)}
              handleTextAndScoreChange={this.handleTextAndScoreChange.bind(this)}
            >
            </Modal>
            </td>

            <td onMouseEnter={this.evidenceToggleModal.bind(this)}
            onMouseLeave={this.evidenceToggleModal.bind(this)}
            className='rubric-section'>{this.state.evidenceDisplayText}
            <Modal
              section="evidence"
              show={this.state.evidenceIsOpen}
              handleScoreChange={this.handleScoreChange.bind(this)}
              handleTextAndScoreChange={this.handleTextAndScoreChange.bind(this)}
            >
            </Modal>
            </td>

            <td onMouseEnter={this.analysisToggleModal.bind(this)}
            onMouseLeave={this.analysisToggleModal.bind(this)}
            className='rubric-section'>{this.state.evidenceDisplayText}
            <Modal
              section="analysis"
              show={this.state.analysisIsOpen}
              handleScoreChange={this.handleScoreChange.bind(this)}
              handleTextAndScoreChange={this.handleTextAndScoreChange.bind(this)}
            >
            </Modal>
            </td>

            <td onMouseEnter={this.conclusionToggleModal.bind(this)}
            onMouseLeave={this.conclusionToggleModal.bind(this)}
            className='rubric-section'>{this.state.conclusionDisplayText}
            <Modal
              section="conclusion"
              show={this.state.conclusionIsOpen}
              handleScoreChange={this.handleScoreChange.bind(this)}
              handleTextAndScoreChange={this.handleTextAndScoreChange.bind(this)}
            >
            </Modal>
            </td>

            </tr>

            <tr>
            <td className='rubric-number'>{this.state.thesisScore}</td>
            <td className='rubric-number rubric-section'> {this.state.evidenceScore}</td>
            <td className='rubric-number rubric-section'>{this.state.analyisScore}</td>
            <td className='rubric-number rubric-section'>{this.state.conclusionScore}</td>
            </tr>

            </table>
          </Sticky>
          </div>
        );
    }
}
