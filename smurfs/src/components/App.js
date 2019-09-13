import React, { useEffect } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {getSmurfs, addSmurf} from '../actions';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
const App = ({getSmurfs, addSmurf, smurfs}) => {

  useEffect(() => {
    console.log(smurfs)
    getSmurfs();
  }, [getSmurfs])
  
    return (
      <div className="App">
      
      </div>
    );
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(
  mapStateToProps,
  {getSmurfs, addSmurf}
)(App);
