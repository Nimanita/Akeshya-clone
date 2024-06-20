import React from 'react';

import './styles/home-style.css';
import './styles/font.css';
import {useState , useEffect} from 'react';
import Hero from '../components/media/hero-img.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
      
       return (
        <section id="home">
   
      <div class="container home">
      <div class="row">
        <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
          <h1 data-aos="fade-up">Grow your business with Akeshya</h1>
          <h2 data-aos="fade-up" data-aos-delay="400" >We are team of talented website designers, developers & digital marketeers</h2>
          <div data-aos="fade-up" data-aos-delay="800">
            <a href="#about" class="btn-get-started scrollto">Get Started</a>
          </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay="200" >
        <img src = {Hero.src} class = "animated" />
        </div>
      </div>
      </div>
      
      </section>
    );
  }
  
  export default Home;
  