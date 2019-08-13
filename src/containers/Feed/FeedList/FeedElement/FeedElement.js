import React from 'react';
import './FeedElement.scss';

const FeedElement = (props) => {
    return (
    <div className="feedList__child">
        <h1 className="feedList_name">{props.hero}</h1>
        <h2 className="feedList__deaths">
            <strong>{props.deaths}</strong> deaths.
        </h2>
        <p className="feedList__kills">
            Also had {props.kills} kills.
        </p>
        <p className="feedList__net">
            Net Value: -<strong> {props.ratio} </strong>
        </p>
    </div>
    )
};

export default FeedElement;