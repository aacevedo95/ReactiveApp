import React, { Component } from 'react'
import {StyleRoot} from 'radium';

export default class Break extends Component {
  render() {
    const styles = {      
      title: {
        color: 'black',
        paddingTop: '15%',
        textAlign: 'center',
        fontFamily: 'Anton, sans-serif'
      },
      body: {
        paddingTop: '20px',
        paddingBottom: '20px',
      }
    }

    return (
      <StyleRoot>
        <h1 style={styles.title}>Why'd break up?</h1>
          <p style={styles.body}>Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem
            ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor
            sit Lorem ipsum dolor sit
          </p>
      </StyleRoot>
    )
  }
}
