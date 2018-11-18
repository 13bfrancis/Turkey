import React, { Component } from 'react';
import Turkey from './Turkey';
import Head from './Head';
import Beak from './Beak';
import Eyes from './Eyes';
import Body from './Body';
import Neck from './Neck';

class App extends Component {
  render() {
    return (
      <>
        <Turkey>
          <Head>
            <Eyes />
            <Beak />
          </Head>
          <Neck />
          <Body />
        </Turkey>
      </>
    );
  }
}

export default App;
