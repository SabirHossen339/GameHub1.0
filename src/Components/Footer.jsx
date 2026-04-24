import React from 'react';
import gameLogo from "../assets/vector-graphic-controller-gamepad-video-games-22.png";
const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center text-white p-10">
  <aside>
    <img className="h-25 w-25 md:h-30 md:w-30" src={gameLogo} alt="" />
    <p className="font-bold text-3xl">
      Game<span className="text-blue-400">Hub</span>
    </p>
    <p className="text-gray-400">A curated library for discovering indie games and the developers behind them.</p>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
</footer>
    );
};

export default Footer;