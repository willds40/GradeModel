import React, { Component } from 'react';
import Essay from "./essay";
import Rubric from './rubric';
import Comments from './comments';

export default class Homepage extends Component {
    render() {
        return (
          <div>
              <Rubric />
              <Essay />
              <Comments />
          </div>
        );
    }
}
