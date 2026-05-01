import React, { Suspense } from 'react';
import Navbar from '../Components/Navbar';
import Categories from '../Components/Categories';
import { useParams } from 'react-router';
import Footer from '../Components/Footer';

const AllGames = () => {
    const {id}= useParams();
    console.log(id);
    return (
        <div>
            <Navbar></Navbar>
            {/* Category buttons */}
            <div className="mt-5 px-10 ">
                <div className="flex items-center justify-center gap-2">
                    <Suspense fallback={<span className="loading loading-spinner text-center text-info"></span>}>
                    <Categories></Categories>
                </Suspense>
                </div>
                {/* Games Section */}
                <div className="mt-5">
                    <h1 className="text-center text-2xl font-bold">Games Category -{id}</h1>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllGames;