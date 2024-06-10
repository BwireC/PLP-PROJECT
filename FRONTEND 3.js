import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to Caissa's Palace</h1>
            <p>Chess is, above all, a fight.</p>
            <p>At Caissa's Palace, we aim to promote chess for children and young adults through training, lessons, videos, tutorials, and tournaments. Join our informal chess club for fun, learning, and competition!</p>
            <img src="https://th.bing.com/th/id/OIP.UWRVBU5szXRHaDe5xLWPjwHaE8?rs=1&pid=ImgDetMain" alt="Chess" className="home-image" />
        </div>
    );
};

export default Home;
