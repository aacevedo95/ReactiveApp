import React, {Component} from 'react'
import {bounce, bounceInLeft, zoomIn} from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import {emojify} from 'react-emojione';

export default class Home extends Component {
  render() {
    const styles = {
      title: {
        color: 'black',
        paddingTop: '15%',
        textAlign: 'center',
        fontFamily: 'Anton, sans-serif',
        animation: 'x 1s',
        animationName: Radium.keyframes(bounce, 'bounce')
      },
      body: {
        paddingTop: '20px',
        paddingBottom: '20px',
        animation: 'x 1s',
        animationName: Radium.keyframes(bounceInLeft, 'bounceInLeft')
      },
      zoomIn: {
        textAlign: 'center',
        animation: 'x 1s',
        animationName: Radium.keyframes(zoomIn, 'zoomIn')
      }
    }

    return (
      <StyleRoot>
          <h1 style={styles.title}>Why a site?</h1>
          <p style={styles.body}>Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem
            ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor
            sit Lorem ipsum dolor sit
          </p>
          <p style={styles.zoomIn}>{emojify(':shrug: :shrug: :shrug: :shrug: :shrug:')}</p>
      </StyleRoot>

    )
  }
}
