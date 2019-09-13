import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Card } from 'semantic-ui-react';

const SmurfCard = (props => {
    return (
        <div>
            <Card>
                <Card.Description></Card.Description>
            </Card>
        </div>
    );
});

export default SmurfCard;