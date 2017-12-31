import React, { Components } from 'react';
import Playlist from '../../playlist/components/playlist'

function Category(props) {
  return(
    <div>
      <p>{props.description}</p>
      <h1>{props.title}</h1>
      <Playlist playlist={props.playlist} />
    </div>
  )
}

export default Category
