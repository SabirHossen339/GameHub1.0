import React from 'react';
import PopularGames from '../Components/PopularGames';
import { useLoaderData } from 'react-router';

const Home = () => {
    const games = useLoaderData();
    console.log(games)
    return (
        <div>
            <PopularGames games={games}></PopularGames>
        </div>
    );
};

export default Home;