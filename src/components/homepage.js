import React, { Component } from 'react';
import Essay from "./essay";
import Rubric from './rubric';
import Comments from './comments';
import Summary from './summary';

export default class Homepage extends Component {
    render() {
        return (
          <div>
              <Rubric />
              <Summary />
              <Essay />
              <Comments />
          </div>
        );
    }
}
