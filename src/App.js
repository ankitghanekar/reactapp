import React from 'react';
import Sidebar from './components/Sidebar/Sidebar'
import MainContent from './components/MainContent/MainContent'

import Header from './components/Header'
import './App.css';
import {Container, Col, Row} from 'react-bootstrap'
// import AddTodo from '../containers/AddTodo'
function App(props) {
  console.log(props)
  return (
    <div className="App">
<Header />

      <Sidebar />
    { /* */}
      <div>

        <Row>
          <Col xl={8}>1 of 3</Col>
          <Col xl={4}> <MainContent /></Col>
        </Row>
      </div>


    </div>
  );
}

export default App;
