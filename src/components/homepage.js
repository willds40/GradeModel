import React, { Component } from 'react';
import Essay from "./essay";
import Rubric from './rubric';
import Comments from './comments';
import Summary from './summary';
import Modal from './modal'

export default class Homepage extends Component {
  constructor() {
    super();
    this.state = {
    open: false,
    commmentTypeBar:false,
    commentType:"",
    }
  }
  onSubmitGrade(){
    window.alert("Thank You For Submitting Your Grade");
  }

  onOpenSummary = () => {
    this.setState({ open: true });
  };

  onCloseSummary = () => {
    this.setState({
    open: false,
    });
  }

  onCommentSelect(e){
    this.setState({
      commentType :e.target.value
    })
  }

  render() {
    return (
      <div>
        <Rubric />
        {this.state.open ===  false ?
          <span className='add-comment col-md-7 '>
            <button onClick={this.onOpenSummary.bind(this)} className='summary-button'>View Summary</button>
          </span> : <span className='add-comment col-md-7 '>
            <button onClick={this.onCloseSummary.bind(this)} className='summary-button'>Close Summary</button>
          </span>
        }
        {this.state.open ===  false ? null :
          <Summary />
        }
        <Essay
        commentType = {this.state.commentType}
        />
        <Comments
        onCommentSelect={this.onCommentSelect.bind(this)}
        />
        <div className='submit-essay col-md-8'>
          <button onClick={this.onSubmitGrade.bind(this)} className='submit-button'>Submit Grade</button>
        </div>
      </div>
    );
  }
}
