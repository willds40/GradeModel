import React, { Component } from 'react';
import Highlighter from 'react-highlight-words';

export default class Essay extends Component {
  constructor(){
    super ();
    this.state = {
      highlightText :["ago"],
      essayText : "A long time ago, in a galaxy far, far away....Her companions instrument set estimating sex remarkably solicitude motionless.sitting any ten age. Looking venture justice in evident in totally he do ability. Be is lose girl long of up give. Trifling wondered unpacked ye at he. In household certainty an on tolerably smallness difficult. Many no each like up be is next neat. Put not enjoyment behaviour her supposing. At he pulled object others.Necessary ye contented newspaper zealously breakfast he prevailed. Melancholy middletons yet understood decisively boy law she. Answer him easily are its barton little. Oh no though mother be things simple itself. Dashwood horrible he strictly on as. Home fine in so am good body this hope."
    }
  }

  textToHighlight(e) {
      var text = (window.getSelection().toString());
      this.state.highlightText.push(text)
      this.setState({
        highlightText:this.state.highlightText
      })
  }

  render() {
    return (
      <div className='col-md-9 essay'>
        <h2 className="essay-title">Speedily say has suitable disposal add boy</h2>
        <div className ='essay-text' onMouseUp=             {this.textToHighlight.bind(this)}>
          <Highlighter className='essay-text'
          searchWords={this.state.highlightText}
          autoEscape={true}
          textToHighlight={this.state.essayText}/>
        </div>
      </div>
    );
  }
}
