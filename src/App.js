import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import styled from 'styled-components';
import Card from './components/nikeCard/Card'

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return( 
    <Container>
      <Card/>
    </Container>
  )
}

export default App;
