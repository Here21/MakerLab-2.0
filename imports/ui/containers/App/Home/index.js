import React, { Component } from 'react'
import { SectionsContainer, Section } from 'react-fullpage'
import './style.css';

export default class Home extends Component {
  render() {
    const options = {
      sectionClassName: 'section',
      anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
      sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE'],
      scrollBar: false,
      navigation: true,
      verticalAlign: false,
      sectionPaddingTop: '0',
      sectionPaddingBottom: '0',
      arrowNavigation: true,
      controlArrows: true,
      verticalCentered: true,
      paddingTop: '3em',
      paddingBottom: '10px',
      fixedElements: '#header, .footer',
      responsiveWidth: 0,
      responsiveHeight: 0,
      responsiveSlides: false,
      parallax: false,
      parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

    }

    return (
      <SectionsContainer {...options}>
        <Section className="Test">Page 1</Section>
        <Section>Page 2</Section>
        <Section>Page 3</Section>
      </SectionsContainer>
    )
  }
}
