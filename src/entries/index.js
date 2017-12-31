import React from 'react';
import ReactDOM, { render } from 'react-dom';
//import Playlist from '../playlist/components/playlist';
import Home from '../pages/containers/home'
import data from '../api.json';
//  console.log("hola mundo")
//const app = document.getElementById('app')
//const holaMundo = <h1>Hola mundo!!</h1>
render( <Home data={data}/>, app)
