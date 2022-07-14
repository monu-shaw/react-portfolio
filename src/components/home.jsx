import React from 'react'
//import Product from '../layout/Product'
import Nexen from '../assets/images/nexen.png'
import Logo1 from '../assets/svg/Logo1.svg'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useEffect } from 'react';
//import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import AOS from 'aos';
import '../assets/css/hover-min.css'
import { Link } from 'react-router-dom';

// images 
import salesdiaries from '../assets/images/salesdiaries.png';
//import hutextiles from '../assets/images/hutextiles.png'
import myhelpinghands from '../assets/images/myhelpinghands.png';
//import nexenture from '../assets/images/nexenture.png'
import rekhavipspa from '../assets/images/rekhavipspa.png';
const project1 = require('../assets/images/hutextiles.png');



function Home() {

  useEffect(() => {
    AOS.init({
      once: true
  });
  }, []);
  return (
   
   <div id="main" className="">
    {/*main app*/}
    <div className="col-12 col-lg-8 mx-auto text-light">
        <div className="row g-2 my-4 py-4 m-0">
            <div className="col-12 col-md-6 col-lg-5 mx-auto my-4 py-4" data-aos="fade-up" data-aos-duration="1500">
                <p className="fss-1 text-light px-4 pt-4 mt-4"><span className="fw-bold main-text main-grad-color fss-1">Digital designer</span><br/>  crafting products that people love.</p>
                <p className="px-4 fs-4">We have a team of passinated designer and developer who works with startups looking to push creative boundaries and create unique user experiences.</p>
                <a href="#" className="btn py-3 mx-2 rounded-pill shadow main-bg-grad-color text-light fw-bold float-start call-home-button">Book a FREE Call <i className="bi bi-telephone call-home-icon bg-light p-2 rounded-circle text-dark"></i></a>
            </div>
            <div className="col-12 col-md-6 col-lg-6 mx-auto my-4 d-flex align-items-center justify-content-center" data-aos="fade-up" data-aos-duration="2000">
                    <div className="col-12 col-md-10 col-lg-10 mx-auto img-container rounded-2">
                        <img className="img" src={Nexen} alt="" />
                    </div>
            </div>
        </div>
    </div>
    {/*main app*/}
   {/*our partners*/}
    <div className="col-12 col-lg-10 mx-auto">
        <hr/>
        <p className="fs-5 text-center text-light" data-aos="fade-in"> Trusted By Our Partner</p>
          <Splide className="mb-3" options={ {rewind: true,arrows: false,pagination:  false,perPage:3,focus: 'center',type: 'loop',autoplay: true,padding: '4rem',
             breakpoints: {
                 640: {
                     perPage:1,
                 },
             }} } aria-label="My Favorite Images" >
            <SplideSlide className='mx-auto' data-splide-interval="1000">
              <img src={Logo1} loading="lazy" alt="Companies Logo" />
            </SplideSlide>
            <SplideSlide className='mx-auto' data-splide-interval="1000">
              <img src={require('../assets/svg/Logo2.svg').default} loading="lazy" alt="Companies Logo" />
            </SplideSlide>
            <SplideSlide className='mx-auto' data-splide-interval="1000">
              <img src={require('../assets/svg/Logo3.svg').default} loading="lazy" alt="Companies Logo" />
            </SplideSlide>
            <SplideSlide className='mx-auto' data-splide-interval="1000">
              <img src={require('../assets/svg/Logo4.svg').default} loading="lazy" alt="Companies Logo" />
            </SplideSlide>
            <SplideSlide className='mx-auto' data-splide-interval="1000">
              <img src={require('../assets/svg/Logo5.svg').default} loading="lazy" alt="Companies Logo" />
            </SplideSlide>
          </Splide>
        <hr/>
    </div>
    {/*our partners*/}
    {/*our Service*/}
    <div className="col-12 col-lg-10 mx-auto mb-3 py-4">
        <h1 className="text-center text-light t-5">Our <span className="main-grad-color">Services</span></h1>
        <p className="text-light text-center col-11 col-lg-6 mx-auto fs-5">If you are looking for someone who will help you to build your digital web presence than congratulations!</p>
        <div className="row g-3 text-light my-4 m-0" data-aos="zoom-in-up" data-aos-duration="1500">
            <div className="col-11 col-lg-3 mx-auto hvr-float">
                <div className="custom-border"></div>
                <div className="bg-dark service-card p-4">
                <div><img src={require('../assets/svg/services_1.svg').default} loading="lazy" alt="Services Logo" className="services-logo mb-3" /><h3 className="heading-4 services-heading">Website Design</h3><p className="body-2">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate</p><div className="gradient-border"></div></div>
                </div>
            </div>
            <div className="col-11 col-lg-3 mx-auto hvr-float">
                <div className="custom-border"></div>
                <div className="bg-dark service-card p-4">
                <div><img src={require('../assets/svg/services_2.svg').default} loading="lazy" alt="Services Logo" className="services-logo mb-3" /><h3 className="heading-4 services-heading">SEO Marketing</h3><p className="body-2">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate</p><div className="gradient-border"></div></div>
                </div>
            </div>
            <div className="col-11 col-lg-3 mx-auto hvr-float">
                <div className="custom-border"></div>
                <div className="bg-dark service-card p-4">
                <div><img src={require('../assets/svg/services_3.svg').default} loading="lazy" alt="Services Logo" className="services-logo mb-3" /><h3 className="heading-4 services-heading">WF Development</h3><p className="body-2">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate</p><div className="gradient-border"></div></div>
                </div>
            </div>
        </div>
    </div>
    {/*our Service*/}
    {/*our project*/}
    <div className="col-12  mt-4 py-4" style={{backgroundColor: '#d7d7d9'}}>
    <div className="col-12 col-lg-10 mx-auto my-4 py-4" >
        <h1 className="text-center text-dark t-5 mt-4" data-aos="fade-up">Our <span className="main-grad-color">Projects</span></h1>
        <p className="text-dark text-center col-11 col-lg-8 mx-auto fs-5" data-aos="fade-up" data-aos-duration="1000">Over the years, We have partnered with startups of all sizes and various stages to create some truly unique products. Here are a few that I feel were the most challenging yet rewarding.</p>
        <div className="row g-3 text-light col-lg-10 mx-auto m-0">
            <div className="col-11 col-lg-5 mx-auto mb-4 custom-margin" data-aos="fade-up" data-aos-duration="2000">
                <div className="card text-dark border-0 p-4 rounded-0 hvr-grow">
                  <div className="col-12" style={{overflow:'hidden',height:'21rem'}}>
                        <img src={project1} loading="lazy" className="card-img-top rounde-0" alt="Project Screensho" style={{top:0,height: 'auto',transform: 'scaleY(1)',overflow: 'hidden'}} />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Masterbase Webdesign</h5>
                    <div className="row">
                        <div className="col-6">
                            <h6 className="text-muted">SUITABLE FOR</h6>
                            <p>FineTech</p>
                        </div>
                        <div className="col-6"></div>
                    </div>
                    <p className="card-text">Some quick project details to added on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-outline-dark border-0 p-2">View Demo <i className="bi bi-arrow-right p-1 rounded-circle main-grad-color2 text-light fw-bold"></i></a>
                  </div>
                </div>
            </div>
            <div className="col-11 col-lg-5 mx-auto mb-4 custom-margin" data-aos="fade-up" data-aos-duration="2000">
                <div className="card text-dark border-0 p-4 rounded-0 hvr-grow">
                  <div className="col-12" style={{overflow:'hidden',height:'21rem'}}>
                        <img src={salesdiaries} className="card-img-top rounde-0 " alt="Project Screenshot" style={{top:0,height: 'auto',transform: 'scaleY(1)',overflow: 'hidden'}} />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Masterbase Webdesign</h5>
                    <div className="row">
                        <div className="col-6">
                            <h6 className="text-muted">SUITABLE FOR</h6>
                            <p>FineTech</p>
                        </div>
                        <div className="col-6"></div>
                    </div>
                    <p className="card-text">Some quick project details to added on the card title and make up the bulk of the card's content.</p>
                    <a href="https://salesdiaries.com/" className="btn btn-outline-dark border-0 p-2">View Live <i className="bi bi-arrow-right p-1 rounded-circle main-grad-color2 text-light fw-bold"></i></a>
                  </div>
                </div>
            </div>
            <div className="col-11 col-lg-5 mx-auto mb-4 custom-margin" data-aos="fade-up" data-aos-duration="2000">
                <div className="card text-dark border-0 p-4 rounded-0 hvr-grow">
                  <div className="col-12" style={{overflow:'hidden',height:'21rem'}}>
                        <img src={myhelpinghands} className="card-img-top rounde-0 " alt="Project Screenshot" style={{top:0,height: 'auto',transform: 'scaleY(1)',overflow: 'hidden'}} />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Masterbase Webdesign</h5>
                    <div className="row">
                        <div className="col-6">
                            <h6 className="text-muted">SUITABLE FOR</h6>
                            <p>FineTech</p>
                        </div>
                        <div className="col-6"></div>
                    </div>
                    <p className="card-text">Some quick project details to added on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-outline-dark border-0 p-2">View Demo <i className="bi bi-arrow-right p-1 rounded-circle main-grad-color2 text-light fw-bold"></i></a>
                  </div>
                </div>
            </div>
            <div className="col-11 col-lg-5 mx-auto mb-4 custom-margin" data-aos="fade-up" data-aos-duration="2000">
                <div className="card text-dark border-0 p-4 rounded-0 hvr-grow">
                  <div className="col-12" style={{overflow:'hidden',height:'21rem'}}>
                        <img src={rekhavipspa} className="card-img-top rounde-0 " alt="Project Screenshot" style={{top:0,height: 'auto',transform: 'scaleY(1)',overflow: 'hidden'}} />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Masterbase Webdesign</h5>
                    <div className="row">
                        <div className="col-6">
                            <h6 className="text-muted">SUITABLE FOR</h6>
                            <p>FineTech</p>
                        </div>
                        <div className="col-6"></div>
                    </div>
                    <p className="card-text">Some quick project details to added on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-outline-dark border-0 p-2">View Demo <i className="bi bi-arrow-right p-1 rounded-circle main-grad-color2 text-light fw-bold"></i></a>
                  </div>
                </div>
            </div>
        </div>
        <div className="col-6 col-md-3 col-lg-2 mx-auto">
        <Link to="/demo" className="btn main-grad-color2 px-4 py-3 rounded-pill text-light border-0 service-button"> View all <i className="bi bi-arrow-right p-2 mx-2 rounded-circle bg-light text-dark fw-bold project-icon"></i></Link>
        </div>
            
    </div>
    </div>
    {/*our Project*/}
    {/*Why Choose Us*/}
    <div className="col-12" id="why">
        <div className="col-12 col-lg-8 mx-auto py-4">
            <div className="row g-3 m-0 py-4">
                <div className="col-12 col-lg-6 text-center py-4 text-light" data-aos="fade-in-down" data-aos-duration="2000">
                    <h1 className=" text-start t-6">Our process that help our clients to <br /><span className="main-grad-color">2x their revnue</span></h1>
                    <p className="fs-5 text-start">we discover this process working more than 10+ in the design industry that why you can trust blindly.</p>
                    <a href="#" className="btn py-3 rounded-pill shadow main-bg-grad-color text-light fw-bold float-start call-home-button">Book a FREE Call <i className="bi bi-telephone call-home-icon bg-light p-2 rounded-circle text-dark"></i></a>
                </div>
                <div className="col-12 col-lg-6 mx-auto">
                    <div className="col-12 mx-auto main-grad-color2 p-4" data-aos="fade-in-up" data-aos-duration="2000">
                        <div className="col 12 m-2 my-3 px-2 py-1 row g-1 bg-light why">
                            <div className="col-3 mt-4 col-lg-2 text-center py-2">
                            <span className="p-3 rounded-circle main-grad-color2 fw-bold text-light">1</span>
                            </div>
                            <div className="col-9 py-2">
                                <h2>Discover your problem</h2>
                                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
                            </div>
                        </div>
                        <div className="col 12 m-2 my-3 px-2 py-1 row g-1 bg-light why">
                            <div className="col-3 mt-4 col-lg-2 text-center py-2">
                            <span className="p-3 rounded-circle main-grad-color2 fw-bold text-light">2</span>
                            </div>
                            <div className="col-9 py-2">
                                <h2>Competative market research</h2>
                                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
                            </div>
                        </div>
                        <div className="col 12 m-2 my-3 px-2 py-1 row g-1 bg-light why">
                            <div className="col-3 mt-4 col-lg-2 text-center py-2">
                            <span className="p-3 rounded-circle main-grad-color2 fw-bold text-light">3</span>
                            </div>
                            <div className="col-9 py-2">
                                <h2>User centric design</h2>
                                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
                            </div>
                        </div>
                        <div className="col 12 m-2 my-3 px-2 py-1 row g-1 bg-light why">
                            <div className="col-3 mt-4 col-lg-2 text-center py-2">
                            <span className="p-3 rounded-circle main-grad-color2 fw-bold text-light">4</span>
                            </div>
                            <div className="col-9 py-2">
                                <h2>Final hand-off</h2>
                                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*Why Choose Us*/}
    {/*Testimonial*/}
    <div className="bg-white col-12 p-4">
        <div className="col-12 col-lg-8 mx-auto">
            <div className="col-12 col-lg-8" data-aos="fade-up" data-aos-duration="2000">
                <h1 className="t-6 col-8 my-2">Clients <span className="main-grad-color">testimonials</span></h1>
                <p className="my-2 col-8 col-lg-7 fs-5">Here is some love words from our clients around the world. Hope you will be here next.</p>
            </div>
            <div className="col-12">
            <Splide aria-label="My Favorite Images">
              <SplideSlide>
                <div className="w-100 black-bg p-4 text-light text-start">
                    <p className="text-warning"><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i></p>
                    <h3 className="my-4">Working with Niloy was a breeze... I was impressed.</h3>
                    <p className="my-4"> "Honestly I felt like Relume saw my vision and helped it come to life exactly how I pictured it. The support was amazing. They were happy to help with everything and SO EASY to work with."</p>
                    <div className="row gx-4">
                        <div className="col-3">
                        <img src="https://uploads-ssl.webflow.com/61f03747d8d407ed117df27f/61f3bec85fc6f68066dc55fa_Client%20Image%201.png" alt="" className="rounded-circle" />
                        </div>
                        <div className="col-8">
                            <h3>Roni Pal</h3>
                            <p>Product Desinger at Blazzings.co</p>
                        </div>
                    </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                  <div className="w-100 black-bg p-4 text-light text-start">
                      <p className="text-warning"><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i></p>
                      <h3 className="my-4">Undoubtly best desinger for SaaS website</h3>
                      <p className="my-4"> "Great template and custom service! I needed to make some specific changes and Rustam sent me a quick step by step video explaining how to make changes.Lorem ipsum dolor ."</p>
                      <div className="row gx-4">
                          <div className="col-3">
                          <img src="https://uploads-ssl.webflow.com/61f03747d8d407ed117df27f/61f3bec85fc6f68066dc55fa_Client%20Image%201.png" alt="" className="rounded-circle" />
                          </div>
                          <div className="col-8">
                              <h3>Rudr Ghosh</h3>
                              <p>Product Desinger at Blazzings.co</p>
                          </div>
                      </div>
                  </div>
              </SplideSlide>
              <SplideSlide>
                  <div className="w-100 black-bg p-4 text-light text-start">
                      <p className="text-warning"><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i></p>
                      <h3 className="my-4">Undoubtly best desinger for SaaS website</h3>
                      <p className="my-4"> "Great template and custom service! I needed to make some specific changes and Rustam sent me a quick step by step video explaining how to make changes.Lorem ipsum dolor ."</p>
                      <div className="row gx-4">
                          <div className="col-3">
                          <img src="https://uploads-ssl.webflow.com/61f03747d8d407ed117df27f/61f3bec85fc6f68066dc55fa_Client%20Image%201.png" alt="" className="rounded-circle" />
                          </div>
                          <div className="col-8">
                              <h3>Rudr Ghosh</h3>
                              <p>Product Desinger at Blazzings.co</p>
                          </div>
                      </div>
                  </div>
              </SplideSlide>
              <SplideSlide>
                  <div className="w-100 black-bg p-4 text-light text-start">
                      <p className="text-warning"><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i></p>
                      <h3 className="my-4">Undoubtly best desinger for SaaS website</h3>
                      <p className="my-4"> "Great template and custom service! I needed to make some specific changes and Rustam sent me a quick step by step video explaining how to make changes.Lorem ipsum dolor ."</p>
                      <div className="row gx-4">
                          <div className="col-3">
                          <img src="https://uploads-ssl.webflow.com/61f03747d8d407ed117df27f/61f3bec85fc6f68066dc55fa_Client%20Image%201.png" alt="" className="rounded-circle" />
                          </div>
                          <div className="col-8">
                              <h3>Rudr Ghosh</h3>
                              <p>Product Desinger at Blazzings.co</p>
                          </div>
                      </div>
                  </div>
              </SplideSlide>
            </Splide>
            </div>
        </div>
    </div>
    {/*Testimonial*/}
    {/*Custom Project*/}
    <div className="col-12 col-lg-10 mx-auto py-4 px-1 my-4 text-light text-center" data-aos="fade-in" data-aos-duration="2000">
        <h1 className="col-12 col-lg-6 mx-auto mt-4 t-6">Have projects in mind? Let’s work <span className="main-grad-color">together</span></h1>
        <p className="fs-6 col-11 col-lg-5 mx-auto">We have a team of passinate designer who works with startups looking to push creative boundaries</p>
        <div className="col-10 col-xl-3 mx-auto">
            <a href="#" className="btn float-center mb-4 py-3 rounded-pill shadow main-bg-grad-color text-light fw-bold call-home-button2">Book a FREE Call <i className="bi bi-telephone call-home-icon bg-light p-2 rounded-circle text-dark"></i></a>
        </div>    
    </div>
    {/*Custom Project*/}
    <hr className="my-4"/>
    </div>
   )
}

export default Home