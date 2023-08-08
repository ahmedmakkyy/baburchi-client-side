import React from 'react';
import {
  Document,
  Font,
  Page,
  Text,
  Image,
  StyleSheet,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Oswald',
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: 'Oswald',
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman',
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  }
});

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
});

const Subtitle = ({ children, ...props }) => (
  <Text style={styles.subtitle} {...props}>
    {children}
  </Text>
);


// Create Document Component
const MyDocument = () => (
    <Document>
    <Page style={styles.body} wrap>
      
      <Subtitle>
      Question 1 : What is the differences between uncontrolled and controlled components ?
      </Subtitle>
      <Text style={styles.text}>
      Answer : Uncontrolled components are variables that are not purposely manipulated or controlled during an experiment and controlled components are variables that are purposely manipulated or controlled in order to observe their effect on the dependent variable.
      </Text>
      <Subtitle>
      Question 2 : How to validate React props using PropTypes?
      </Subtitle>
      <Text style={styles.text}>
      Answer : At first we have to import PropTypes from the 'prop-types' package. Then we should define component and its props and add the propTypes property to component. PropTypes can validate different types of props such as string, number, boolean, array, object, function, etc.
      </Text>
      <Subtitle>
      Question 3 : What difference between nodejs and express js?
      </Subtitle>
      <Text style={styles.text}>
      Answer : Express is a node. js web application framework which provides numbers of features for building web applications. And Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications.
      </Text>
      <Subtitle>
      Question 4 : What is a custom hook, and what is the use of custom hook?
      </Subtitle>
      <Text style={styles.text}>
      Answer : Custom hooks are reusable functions that allows a developer to add special and unique functionality to the React applications. The main reason to write a custom hook is for code reusability.
      </Text>
     
    </Page>
  </Document>
);

export default MyDocument;