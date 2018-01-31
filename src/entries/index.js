import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Playlist from './playlist/components/playlist';
import data from './api.json';
//  console.log("hola mundo")
const app = document.getElementById('home-container')
//const holaMundo = <h1>Hola mundo!!</h1>
render( <Playlist data={data} />, app)
