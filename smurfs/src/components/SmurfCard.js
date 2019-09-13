import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import "semantic-ui-css/semantic.min.css";
import { Card } from 'semantic-ui-react';
import './SmurfCard.css';

const SmurfCard = (({ getSmurfs, smurfs }) => {

    useEffect(() => {
        getSmurfs();
    }, [getSmurfs])


    return (
        <div className='smurf-list'>
            {smurfs.map(smurf => {
                return (
                <Card key={smurf.id} className='smurf-card'>
                    <Card.Description>{smurf.name}</Card.Description>
                    <Card.Description>{smurf.age} years</Card.Description>
                    <Card.Description>{smurf.height}cm</Card.Description>
                </Card>
                )
            })}
        </div>
    );
});


const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(
    mapStateToProps,
    { getSmurfs }
)(SmurfCard);
