import React from 'react';
import PopularGames from '../Components/PopularGames';
import { useLoaderData } from 'react-router';
import Newsletter from '../Components/Newsletter';

const Home = () => {
    const games = useLoaderData();
    console.log(games)
    return (
        <div>
            <PopularGames games={games}></PopularGames>
            <div>
                <Newsletter></Newsletter>
            </div>
        </div>
    );
};

export default Home;