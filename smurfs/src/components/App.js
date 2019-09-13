import React from 'react';
import './App.css';

import SmurfCard from './SmurfCard';
import SmurfForm from './SmurfForm';

const App = () => {
    return (
      <div className="App">
        <SmurfForm/>
        <SmurfCard/>
      </div>
    );
}

export default App;
