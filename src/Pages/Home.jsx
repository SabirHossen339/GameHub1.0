import React, { Suspense } from 'react';
import PopularGames from '../Components/PopularGames';
import { useLoaderData } from 'react-router';
import Newsletter from '../Components/Newsletter';

const Home = () => {
    const games = useLoaderData();
    return (
        <div>
            <Suspense fallback={<span className="loading loading-spinner text-info"></span>}>
            <PopularGames games={games}></PopularGames>
            </Suspense>
            <div>
                <Newsletter></Newsletter>
            </div>
        </div>
    );
};

export default Home;