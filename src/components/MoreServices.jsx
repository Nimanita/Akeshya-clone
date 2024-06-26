import React from 'react';

import './styles/more-services-style.css';
import './styles/font.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function MoreServices() {
      
       return (
        <section id="more-services" class="more-services">
        <div class="container">
  
          <div class="section-title" data-aos="fade-up">
            <h2>Our Process</h2>
            <p>Over the years we've evolved a tested method for attaining achievement for each one of our clients.</p>
          </div>
  
  
          <div class="row">
            <div class="col-md-6 d-flex align-items-stretch">
              <div class="card"  data-aos="fade-up" data-aos-delay="100">
                <div class="card-body">
                  <h5 class="card-title"><a href="">1. Planning</a></h5>
                  <p class="card-text">We help you turn all of your ideas into a digital product that meets all of your requirements. We begin each project by determining its scope and needs. This is done by collaborating closely with you to ensure that we're all on the same page.</p>
                  
                </div>
              </div>
            </div>
            <div class="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
              <div class="card"  data-aos="fade-up" data-aos-delay="200">
                <div class="card-body">
                  <h5 class="card-title"><a href="">2. Design</a></h5>
                  <p class="card-text"> We build our websites carefully through a series of workshops, wire-framing, and user experience (UX) sessions, resulting in a site that reinforces trust, conveys important brand messaging, and provides a return on innovation.</p>
                  
                </div>
              </div>
  
            </div>
            <div class="col-md-6 d-flex align-items-stretch mt-4">
              <div class="card"  data-aos="fade-up" data-aos-delay="100">
                <div class="card-body">
                  <h5 class="card-title"><a href="">3. Development</a></h5>
                  <p class="card-text">We provide extensive front-end and back-end development that allows your idea to stand alone. Our in-house developers work side-by-side with the artistic team to seek out natural breakpoints inside the content and order practicality based on acknowledged statistics.</p>
                  
                </div>
              </div>
            </div>
            <div class="col-md-6 d-flex align-items-stretch mt-4">
              <div class="card"  data-aos="fade-up" data-aos-delay="200">
                <div class="card-body">
                  <h5 class="card-title"><a href=""></a>4. Marketing</h5>
                  <p class="card-text">We come up with ideas and campaigns to help your business prosper online. Our campaigns and virtual approach have a verified tune report of accomplishing brilliant results, gathering new leads and site visitors in your website and assist them convert. </p>
                  
                </div>
              </div>
            </div>
          </div>
  
        </div>
      </section>
    );
  }

  export default MoreServices;