import React from "react";
import { FaStar } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { useNavigate } from "react-router";

const GameCard = ({ game }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/game/${game.categoryId}`)}
      className="group cursor-pointer rounded-2xl overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 shadow-lg hover:shadow-blue-500/20 transition duration-300 flex flex-col h-full"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={game.coverPhoto}
          alt={game.title}
          className="w-full h-80 object-cover group-hover:scale-110 transition duration-300 p-2 mt-2 rounded-2xl"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
          <p className="text-white font-semibold text-xl flex items-center gap-2">
            <span className="text-blue-400 text-2xl">
              <IoGameController />
            </span>
            View Details
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col grow">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-400 font-semibold">{game.category}</p>
          <p className="text-sm text-gray-400 font-semibold">{game.developer}</p>
        </div>

        <h1 className="text-xl font-bold mt-3 line-clamp-1">
          {game.title}
        </h1>

        <div className="flex items-center justify-between mt-2">
          <p className="text-blue-500 font-bold flex items-center gap-2">
            <FaStar /> {game.ratings}
          </p>
        </div>

        <p className="text-gray-400 mt-2 text-sm line-clamp-2">
          {game.description}
        </p>

        {/* Push button to bottom */}
        <div className="mt-auto pt-4 flex justify-center">
          <button className="btn bg-blue-400 text-black px-6 py-2 rounded-md font-semibold hover:bg-blue-300 transition border-0 w-full">
            Download Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;