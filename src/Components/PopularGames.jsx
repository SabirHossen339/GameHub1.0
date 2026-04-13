import React from 'react';
import { FaStar } from 'react-icons/fa';
import { IoGameController } from 'react-icons/io5';
import { useNavigate } from 'react-router';



const PopularGames = ({games}) => {
    const navigate = useNavigate();

    const selectGames = Array.isArray(games) ? games : [];

    // top games
    const popularGames = [...selectGames]
    .sort((a,b)=> parseFloat(b.ratings) - parseFloat(a.ratings))
    .slice(0,6);
   
    return (
       <section className="max-w-7xl px-10 mt-10 mx-auto mb-5">
        {/* Title */}
<div className="mb-10">
    <h1 className="text-3xl lg:text-5xl md:text-5xl font-bold">Popular <span className="text-blue-400">Games</span></h1>
            <p className="text-xl mt-2 text-gray-300 font-semibold">Curated picks from the indie community</p>
</div>

{/* GridLayout and card */}
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
{popularGames.map((game)=>(
    <div 
    key={game.id} 
    onClick={()=> navigate(`/game/${game.id}`)}
    className="group cursor-pointer rounded-2xl overflow-hidden bg-linear-to-b from-gray-900 to-gray-800 shadow-lg hover:shadow-blue-500/20 transition duration-300"
    >

{/* Image */}
<div className="relative overflow-hidden">
<img src={game.coverPhoto} 
alt={game.title} 
className="w-full h-80 object-cover group-hover:scale-110 transition duration-300 p-2 mt-2 rounded-2xl"
/>

{/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p className="text-white font-semibold text-xl flex items-center justify-center gap-2">
                  <span className="text-blue-400 text-2xl font-extrabold"><IoGameController /></span> View Details
                </p>
              </div>
</div>

{/* Content */}
<div className="p-5">
  <div className="flex items-center justify-between">
<p className="mt-2 text-sm text-gray-400 font-semibold">{game.category}</p>
<p className="mt-2 text-sm text-gray-400 font-semibold">{game.developer}</p>
  </div>
 
 <div className="flex items-center justify-between mt-4"> 
    <h1 className="text-xl lg:text-2xl md:text-2xl font-bold">{game.title}</h1>
    <p className="text-xl lg:text-2xl md:text-2xl text-blue-500 font-bold flex items-center gap-2">
        <span><FaStar /></span> {game.ratings}</p>
 </div>
 <p className="text-gray-400 mt-2">{game.description}</p>
</div>

    </div>
))}
</div>

       </section>
        
    );
};

export default PopularGames;