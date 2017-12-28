import React, { Component } from 'react';
import './media.css'
class Media extends Component {
  render() {
    return (
      <div className="Media">
        <div id="childMedia">
          <img src={this.props.image} alt="" id="img-com-1" />
          <h3 className="text-comp">{this.props.title}</h3>
          <p className="text-comp">{this.props.autor}</p>
        </div>
      </div>
    )
  }
}

export default Media;
