import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Summary from './summary'
import RubricSection from  './rubric-section'

class Modal extends Component {
  render() {
    if(!this.props.show) {
      return null;
    }
  if(this.props.section == "thesis")
    return (
      <RubricSection score1="ONE ong of up give. Trifling wondered unpacked ye at he. In household certainty an on tolerably smallness difficult. Many no each like up be is next neat. Put not enjoyment behaviour her supposing. At he pulled object others.Necessary ye contented newspaper zealously breakfast he prevailed. Melancholy middletons" score2=" TWO ong of up give. Trifling wondered unpacked ye at he. In household certainty an on tolerably smallness difficult. Many no each like up be is next neat. Put not enjoyment behaviour her supposing. At he pulled object others.Necessary ye contented newspaper zealously breakfast he prevailed. Melancholy middletons" score3="THREE ong of up give. Trifling wondered unpacked ye at he. In household certainty an on tolerably smallness difficult. Many no each like up be is next neat. Put not enjoyment behaviour her supposing. At he pulled object others.Necessary ye contented newspaper zealously breakfast he prevailed. Melancholy middletons" score4="FOUR ong of up give. Trifling wondered unpacked ye at he. In household certainty an on tolerably smallness difficult. Many no each like up be is next neat. Put not enjoyment behaviour her supposing. At he pulled object others.Necessary ye contented newspaper zealously breakfast he prevailed. Melancholy middletons"
      handleRubricTextChange={this.props.handleRubricTextChange}
      handleScoreChange={this.props.handleScoreChange}
      section={this.props.section}
      handleTextAndScoreChange={this.props.handleTextAndScoreChange}
      />
    )
    if (this.props.section =="evidence"){
      return (
      <RubricSection score1="ONE ong of up give. Trifling wondered unpacked ye at he. In household certainty an on tolerably smallness difficult. Many no each like up be is next neat. Put not enjoyment behaviour her supposing. At he pulled object others.Necessary ye contented newspaper zealously breakfast he prevailed. Melancholy middletons" score2=" TWO ong of up give. Trifling wondered unpacked ye at he. In household certainty an on tolerably smallness difficult. Many no each like up be is next neat. Put not enjoyment behaviour her supposing. At he pulled object others.Necessary ye contented newspaper zealously breakfast he prevailed. Melancholy middletons" score3="THREE ong of up give. Trifling wondered unpacked ye at he. In household certainty an on tolerably smallness difficult. Many no each like up be is next neat. Put not enjoyment behaviour her supposing. At he pulled object others.Necessary ye contented newspaper zealously breakfast he prevailed. Melancholy middletons" score4="FOUR ong of up give. Trifling wondered unpacked ye at he. In household certainty an on tolerably smallness difficult. Many no each like up be is next neat. Put not enjoyment behaviour her supposing. At he pulled object others.Necessary ye contented newspaper zealously breakfast he prevailed. Melancholy middletons"
      handleRubricTextChange={this.props.handleRubricTextChange}
      handleScoreChange={this.props.handleScoreChange}
      section={this.props.section}
      handleTextAndScoreChange={this.props.handleTextAndScoreChange}
       />
      )
    }
    if (this.props.section =="analysis"){
      return(
      <RubricSection score1="ONE ong of up give. Trifling wondered unpacked ye at he. In household certainty an on tolerably smallness difficult. Many no each like up be is next neat. Put not enjoyment behaviour her supposing. At he pulled object others.Necessary ye contented newspaper zealously breakfast he prevailed. Melancholy middletons" score2=" TWO ong of up give. Trifling wondered unpacked ye at he. In household certainty an on tolerably smallness difficult. Many no each like up be is next neat. Put not enjoyment behaviour her supposing. At he pulled object others.Necessary ye contented newspaper zealously breakfast he prevailed. Melancholy middletons" score3="THREE ong of up give. Trifling wondered unpacked ye at he. In household certainty an on tolerably smallness difficult. Many no each like up be is next neat. Put not enjoyment behaviour her supposing. At he pulled object others.Necessary ye contented newspaper zealously breakfast he prevailed. Melancholy middletons" score4="FOUR ong of up give. Trifling wondered unpacked ye at he. In household certainty an on tolerably smallness difficult. Many no each like up be is next neat. Put not enjoyment behaviour her supposing. At he pulled object others.Necessary ye contented newspaper zealously breakfast he prevailed. Melancholy middletons"
      handleRubricTextChange={this.props.handleRubricTextChange}
      handleScoreChange={this.props.handleScoreChange}
      section={this.props.section}
      handleTextAndScoreChange={this.props.handleTextAndScoreChange}
      />
      )
    }
    if (this.props.section =="conclusion"){
      return(
      <RubricSection score1="ONE ong of up give. Trifling wondered unpacked ye at he. In household certainty an on tolerably smallness difficult. Many no each like up be is next neat. Put not enjoyment behaviour her supposing. At he pulled object others.Necessary ye contented newspaper zealously breakfast he prevailed. Melancholy middletons" score2=" TWO ong of up give. Trifling wondered unpacked ye at he. In household certainty an on tolerably smallness difficult. Many no each like up be is next neat. Put not enjoyment behaviour her supposing. At he pulled object others.Necessary ye contented newspaper zealously breakfast he prevailed. Melancholy middletons" score3="THREE ong of up give. Trifling wondered unpacked ye at he. In household certainty an on tolerably smallness difficult. Many no each like up be is next neat. Put not enjoyment behaviour her supposing. At he pulled object others.Necessary ye contented newspaper zealously breakfast he prevailed. Melancholy middletons" score4="FOUR ong of up give. Trifling wondered unpacked ye at he. In household certainty an on tolerably smallness difficult. Many no each like up be is next neat. Put not enjoyment behaviour her supposing. At he pulled object others.Necessary ye contented newspaper zealously breakfast he prevailed. Melancholy middletons"
      handleRubricTextChange={this.props.handleRubricTextChange}
      handleScoreChange={this.props.handleScoreChange}
      section={this.props.section}
      handleTextAndScoreChange={this.props.handleTextAndScoreChange}
      />
      )
    }
  }
}

Modal.propTypes = {
  onMouseLeave: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;
