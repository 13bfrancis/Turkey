import React, { Component } from 'react';
import Turkey from './Turkey';
import Head from './Head';
import Beak from './Beak';
import Eyes from './Eyes';
import Body from './Body';
import Neck from './Neck';
import Beard from './Beard';
import Legs from './Legs';

class App extends Component {
  render() {
    return (
      <div
        style={{
          width: 'calc(100%-5px)',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          padding: '5px'
        }}
      >
        <Turkey>
          <Head>
            <Eyes />
            <Beak />
          </Head>
          <Neck>
            <Beard />
          </Neck>
          <Body>
            <Legs left="100" delay="1" />
            <Legs left="200" delay="0" />
          </Body>
        </Turkey>
      </div>
    );
  }
}

export default App;
