import React from 'react';
import Sidebar from './components/Sidebar/Sidebar'
import MainContent from './components/MainContent/MainContent'
import './App.css';
// import AddTodo from '../containers/AddTodo'
function App(props) {
  console.log(props)
  return (
    <div className="App">
      <header className="App-header">

      <Sidebar />
      <MainContent />


      </header>
    </div>
  );
}

export default App;
