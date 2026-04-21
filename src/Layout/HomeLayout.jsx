import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';


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

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;