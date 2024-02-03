import React from 'react';

const WelcomeMessage = ({ username }) => {
    return (
        <div>
            <h2>{`Welcome, ${username}!`}</h2>
            <p>Explore exclusive discounts and benefits at our hotel. Make the most of your stay in our Standard , Queen and Premium rooms.</p>
        </div>
    );
};

export default WelcomeMessage;