import React, { useState } from "react";
import { addSmurf } from '../actions';
import { connect } from 'react-redux';
import './App.css';

const SmurfForm = ({ addSmurf }) => {

    const [smurf, setSmurf] = useState({ name: '', height: '', age: '', id: Date.now() });

    const submitSmurf = e => {
        e.preventDefault();
        addSmurf(smurf);
        setSmurf({ name: '', height: '', age: '', id: '' });
    };

    return (
        <div className='smurf-div'>
            <form className='smurf-form'>
                <input
                    className='smurf-field'
                    type='text'
                    name='name'
                    placeholder='Smurf name'
                    value={smurf.name}
                    onChange={({ target }) => setSmurf({ ...smurf, [target.name]: target.value })}
                />
                <input
                    className='smurf-field'
                    type='text'
                    name='age'
                    placeholder='Smurf age'
                    value={smurf.age}
                    onChange={({ target }) => setSmurf({ ...smurf, [target.name]: target.value })}
                />
                <input
                    className='smurf-field'
                    type='text'
                    name='height'
                    placeholder='Smurf height (cm)'
                    value={smurf.height}
                    onChange={({ target }) => setSmurf({ ...smurf, [target.name]: target.value })}
                />
                <button className='smurf-field' type='submit' onClick={submitSmurf}>Add Smurf</button>
            </form>
        </div>
    );
};

export default connect(
    null,
    { addSmurf }
)(SmurfForm);
