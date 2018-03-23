import React, {Component} from 'react'
import {StyleRoot} from 'radium';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Questions extends Component {
  render() {
    const styles = {
      title: {
        color: 'black',
        paddingTop: '15%',
        textAlign: 'center',
        fontFamily: 'Anton, sans-serif'
      },
      answers: {
        color: 'black',
        textAlign: 'center',
        fontFamily: 'Anton, sans-serif'
      },
      body: {
        paddingTop: '20px',
        paddingBottom: '20px'
      }
    }

    return (
      <StyleRoot>
        <h1 style={styles.title}>Answers</h1>
        <p style={styles.body}>Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum
          dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit
          Lorem ipsum dolor sit
        </p>
        <ScrollAnimation animateIn="bounceInLeft">
          <h3 style={styles.answers}>
            Why X thing?</h3>
          <p style={styles.body}>Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum
            dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit
            Lorem ipsum dolor sit
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="bounceInRight">
          <h3 style={styles.answers}>
            Why Y thing?</h3>
          <p style={styles.body}>Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum
            dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit
            Lorem ipsum dolor sit
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="bounceInLeft">
          <h3 style={styles.answers}>
            Why Z thing?</h3>
          <p style={styles.body}>Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum
            dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit
            Lorem ipsum dolor sit
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="bounceInRight">
          <h3 style={styles.answers}>
            My question isnt here.</h3>
          <p style={styles.body}>Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum
            dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit
            Lorem ipsum dolor sit
          </p>
        </ScrollAnimation>
      </StyleRoot>
    )
  }
}
