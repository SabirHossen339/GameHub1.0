import React from 'react';
import Navbar from '../Components/Navbar';
import { GiBulletBill, GiDiceTarget, GiGamepad } from 'react-icons/gi';
import { IoRocketSharp } from 'react-icons/io5';
import { MdDeveloperMode } from 'react-icons/md';
import Footer from '../Components/Footer';

const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-[#0b1120] text-white min-h-screen px-6 py-16">

      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          About Game<span className="text-blue-400">Hub</span>
        </h1>

        {/* Intro */}
        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">
          GameHub is your ultimate destination for discovering the best games across all genres.
          From action-packed shooters to relaxing puzzle games, we bring everything together in one place.
        </p>

        {/* Sections */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Mission */}
          <div className="bg-linear-to-b from-gray-900 to-gray-800 p-6 rounded-2xl shadow-lg">
            <h2 className="flex items-center gap-2 text-2xl font-bold mb-4 text-blue-400">
              <span className='text-4xl text-blue-400'><GiDiceTarget /></span> Our Mission
            </h2>
            <p className="text-gray-400">
              Our mission is to help gamers explore, discover, and enjoy top-rated games effortlessly.
              We aim to build a platform that feels like a modern gaming hub similar to Steam or Epic Games.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-linear-to-b from-gray-900 to-gray-800 p-6 rounded-2xl shadow-lg">
            <h2 className="flex items-center gap-2 text-2xl font-bold mb-4 text-blue-400">
              <span className='text-4xl text-blue-400'><IoRocketSharp /></span> Our Vision
            </h2>
            <p className="text-gray-400">
              We envision GameHub as a global platform where gamers can find trending games,
              explore categories, and connect with the gaming community.
            </p>
          </div>

          {/* Features */}
          <div className="bg-linear-to-b from-gray-900 to-gray-800 p-6 rounded-2xl shadow-lg">
            <h2 className="flex items-center gap-2 text-2xl font-bold mb-4 text-blue-400">
              <span className='text-4xl text-blue-400'><GiGamepad /></span> Features
            </h2>
            <ul className="text-gray-400 space-y-2 ">
              <li className="flex items-center gap-2"> <GiBulletBill /> Discover popular and trending games</li>
              <li className="flex items-center gap-2"><GiBulletBill /> Explore different categories</li>
              <li className="flex items-center gap-2"><GiBulletBill /> View detailed game information</li>
              <li className="flex items-center gap-2"><GiBulletBill /> Smooth and modern UI experience</li>
            </ul>
          </div>

          {/* Developer */}
          <div className="bg-linear-to-b from-gray-900 to-gray-800 p-6 rounded-2xl shadow-lg">
            <h2 className="flex items-center gap-2 text-2xl font-bold mb-4 text-blue-400">
              <span className='text-4xl text-blue-400'><MdDeveloperMode /></span> Developer
            </h2>
            <p className="text-gray-400">
              This project is built using React, React Router, Firebase, and Tailwind CSS.
              Designed with a focus on modern UI and gaming aesthetics.
            </p>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold mb-4">
            Ready to explore amazing games?
          </h3>
          <a
            href="/game"
            className="inline-block bg-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Browse Games
          </a>
        </div>

      </div>
    </div>
    <Footer></Footer>
        </div>
    );
};

export default About;