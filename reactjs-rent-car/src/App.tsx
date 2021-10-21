import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import './App.css';
import { HomePage } from './app/containers/Homepage';


const AppContainer = styled.div`
  ${tw`
  w-full
  h-full
  flex
  flex-col
  `
  }
`;

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
