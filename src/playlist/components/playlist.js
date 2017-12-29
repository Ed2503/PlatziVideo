import React, { Component } from 'react';
import Media from './media.js'
import './playlist.css';

class Playlist extends Component {
  render() {
    const playlist = this.props.data.categories[0].playlist
    const playlist1 = this.props.data.categories[1].playlist
    const playlist2 = this.props.data.categories[2].playlist
    console.log(playlist);
    return (
      <div id="playlist">
        <div className="playlist">
          {
            playlist.map((items) => {
              return <Media {...items} key={items.id} />
            })
          }
        </div>
        <div className="playlist">
          {
            playlist1.map((items) => {
              return <Media {...items} key={items.id} />
            })
          }
        </div>
        <div className="playlist">
          {
            playlist2.map((items) => {
              return <Media {...items} key={items.id} />
            })
          }
        </div>
      </div>
    )
  }
}

export default Playlist
