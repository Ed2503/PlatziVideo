import React, { Component } from 'react';
import Media from './media.js'
import './playlist.css';
import Play from '../../icons/components/play'
import Volume from '../../icons/components/volume'
import Pause from '../../icons/components/pause'
import Full from '../../icons/components/full-screen'


function playlist(props) {
    const playlist = props.data.categories[0].playlist
    const playlist1 = props.data.categories[1].playlist
    const playlist2 = props.data.categories[2].playlist
    console.log(playlist);
    return (
      <div id="playlist">
        <div id="icon">
          <Play color="red" size={50}/>
          <Volume color="green" size={50} />
          <Pause color="blue" size={50} />
          <Full color="peru" size={50} />
        </div>
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


export default playlist
