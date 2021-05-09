import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import styled from 'styled-components';
import NikeCard from './components/nikeCard/NikeCard'

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
      <NikeCard/>
    </Container>
  )
}

export default App;
