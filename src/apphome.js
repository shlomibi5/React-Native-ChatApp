import React from 'react';

import Home from './components/home';
import Chat from './components/chat'

import { Router, Scene } from 'react-native-router-flux';


class Apphome extends React.Component {
  render() {
    return (
      <Router>
       <Scene key='root'>
        <Scene key='home' component={Home} title='צ׳אט של אהוד ושלומי'/>
        <Scene key='chat' component={Chat} title='אתה פעיל בצ׳אט'/>
       </Scene>
      </Router>
    );
  }
}

export default Apphome;
