import React from 'react';
import logo from './logo.svg';
import './App.css';
import RouteContainer from './container/RouteContainer'
import HTML5Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'



function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <RouteContainer/>
      </div>
    </DndProvider>
  );
}

/* Your Drag-and-Drop Application */


export default App;
