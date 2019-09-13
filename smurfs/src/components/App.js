import React from 'react';
import './App.css';

import SmurfCard from './SmurfCard';
import SmurfForm from './SmurfForm';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
const App = () => {
    return (
      <div className="App">
        <SmurfForm/>
        <SmurfCard/>
      </div>
    );
}

export default App;
