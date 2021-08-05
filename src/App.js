import React from 'react';
import PersonForm from './components/PersonForm/PersonForm';
import PersonData from './components/Person/PersonData';

import './App.css';

function App() {
  return (
    <div className="App">
      <PersonForm />
      <PersonData />
    </div>
  );
}

export default App;
