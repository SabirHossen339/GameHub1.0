import React, { Suspense, useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Categories from '../Components/Categories';
import { useLoaderData, useParams } from 'react-router';
import Footer from '../Components/Footer';
import GameCard from '../Components/GameCard';

const AllGames = () => {
    const { id } = useParams();
  const games = useLoaderData();

  const [filteredGames, setFilteredGames] = useState([]);

  useEffect(() => {
    if (!games) return;

    const categories = [
      { id: 0, category: "All Games" },
      { id: 1, category: "Battle Royale" },
      { id: 2, category: "Sandbox" },
      { id: 3, category: "Open World" },
      { id: 4, category: "Strategy" },
      { id: 5, category: "Party" },
      { id: 6, category: "Racing" },
      { id: 7, category: "Arcade" },
      { id: 8, category: "Puzzle" },
      { id: 9, category: "Action" },
      { id: 10, category: "Fighting" },
      { id: 11, category: "Sports" }
    ];

    const selectedCategory = categories.find(
      (cat) => cat.id === parseInt(id)
    );

    const result =
      parseInt(id) === 0
        ? games
        : games.filter(
            (game) => game.category === selectedCategory?.category
          );
    setFilteredGames(result);
  }, [games, id]);
    return (
        <div>
            <Navbar></Navbar>
            {/* Category buttons */}
            <div className="max-w-7xl px-10 mt-10 mx-auto mb-5 ">
                <div className="flex items-center justify-center gap-2">
                    <Suspense fallback={<span className="loading loading-spinner text-center text-info"></span>}>
                    <Categories></Categories>
                </Suspense>
                </div>
                {/* Games Section */}
                <div className="mt-5">
                    <h1 className="text-center text-2xl font-bold">Total <span className="text-blue-400">{filteredGames.length} Games</span> Found</h1>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-5">
{
    filteredGames.map((game)=> (<GameCard key={game.title} game={game}></GameCard>))
}
                </div>
            </div>
            <div className="bg-[#0b1120]">
                <Footer ></Footer>
            </div>
        </div>
    );
};

export default AllGames;