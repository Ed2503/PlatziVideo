import React, { Component } from 'react';
import './media.css'
import propTypes from 'prop-types'
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
Media.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio']),
}

export default Media;
