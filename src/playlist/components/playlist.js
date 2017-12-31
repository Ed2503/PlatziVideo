import React, { Component } from 'react';
import Media from './media.js'
import './playlist.css'

function playlist(props) {
    return (
        <div className="Playlist">
            {
              props.playlist.map((items) => {
                return <Media {...items} key={items.id} />
              })
            }
        </div>
    )
  }

export default playlist
