import React, { Suspense } from 'react';
import Navbar from '../Components/Navbar';
import Categories from '../Components/Categories';

const AllGames = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-5 px-10">
                <div className="">
                    <Suspense fallback={<span className="loading loading-spinner text-center text-info"></span>}>
                    <Categories></Categories>
                </Suspense>
                </div>
            </div>
        </div>
    );
};

export default AllGames;