import React from 'react';
import AdminLayout from '../layout/AdminLayout.tsx'; 
import '../css/Menu.css';
import SliderComponent from './SliderComponent';
import Carousel from './Carousel';
import ImageBanner from './imageBanner.js';
import Footer from './footer';

const DashboardAdmin = () => {
  return (
    <AdminLayout>
      <div className="App">
        <div className="MainBanner">
          <SliderComponent />
        </div>

        <div className="Carousel-Cartelera">
          <h1>Cartelera</h1>
          <Carousel />
          <br />
        </div>

        <div className="banner">
          <ImageBanner />
        </div>

        <div className="Carousel-Estrenos">
          <h1>Estrenos</h1>
          <Carousel />
          <br />
          <br />
        </div>

        <Footer />
      </div>
    </AdminLayout>
  );
}

export default DashboardAdmin;