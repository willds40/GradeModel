import React, { Component } from 'react';
import Essay from "./essay";
import Rubric from './rubric';
import Comments from './comments';
import styled from 'styled-components';

export default class Homepage extends Component {
    render() {
        return (
          <HomepageWrapper>
              <Rubric />
              <Essay />
              <Comments />
          </HomepageWrapper>
        );
    }
}

const HomepageWrapper = styled.div`

`
