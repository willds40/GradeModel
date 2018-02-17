import React, { Component } from 'react';
import Essay from "./essay";
import Rubric from './rubric';
import Comments from './comments';
import Summary from './summary';
import Modal from './modal'


export default class Homepage extends Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };


    render() {
        return (
          <div>
          <Modal />
              <Rubric />
              {this.state.open ===  false ?
                <span className='add-comment col-md-7 '>
                  <button onClick={this.onOpenModal.bind(this)} className='summary-button'>View Summary</button>
                </span> : <span className='add-comment col-md-7 '>
                  <button onClick={this.onCloseModal.bind(this)} className='summary-button'>Close Summary</button>
                </span>
                }
                {this.state.open ===  false ? null :
              <Summary />
              }
              <Essay />
              <Comments />
          </div>
        );
    }
}
