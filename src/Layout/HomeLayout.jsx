import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import PopularGames from '../Components/PopularGames';

const HomeLayout = () => {
  return (
    <div>
      <navbar>
        <Navbar></Navbar>
      </navbar>

      <main>
        <section className="banner">
          <Banner></Banner>
        </section>
        <section className="main">
          <Outlet></Outlet>
        </section>
      </main>

      <footer></footer>
    </div>
  );
};

export default HomeLayout;