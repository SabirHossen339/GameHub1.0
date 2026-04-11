import React from 'react';
import { useNavigate } from 'react-router';



const PopularGames = ({games}) => {
    const navigate = useNavigate();

    const selectGames = Array.isArray(games) ? games : [];

    // top games
    const popularGames = [...selectGames]
    .sort((a,b)=> parseFloat(b.ratings) - parseFloat(a.ratings))
    .slice(0,6);
   
    return (
       <section className="max-w-7xl px-5 mt-10">
        {/* Title */}
<div>
    <h1 className="text-3xl lg:text-5xl md:text-5xl font-bold">Popular <span className="text-blue-400">Games</span></h1>
            <p className="text-xl mt-2 text-gray-300 font-semibold">Curated picks from the indie community</p>
</div>

{/* GridLayout and card */}
<div className="">
    
</div>

       </section>
        
    );
};

export default PopularGames;