import React from 'react'
import { Link } from "react-router-dom";


function Footer() {
  return (
        <>
    <div className="col-12 col-lg-8 mx-auto text-light my-4 pt-4 px-4">
        <div className="row g-3 m-0 border-bottom py-4">
            <div className="col-12 col-lg-5" data-aos="fade-down" data-aos-duration="2000">
            <h3 className="fs-4">Brand Private Limited</h3><br/>
            <a href="mailto:mail@dummy.net" className="text-decoration-none text-light my-2"><i className="bi bi-envelope p-1 main-grad-color2 rounded-circle"></i> <span className="fs-4"> mail@dummy.net</span></a><br />
            <a href="tel:9004562674" className="text-decoration-none text-light my-2"><i className="bi bi-telephone p-1 main-grad-color2 rounded-circle"></i> <span className="fs-4"> +91 9007125634</span></a>
            </div>
            <div className="col-6 col-lg-2" data-aos="fade-up" data-aos-duration="2000">
                <p className="fw-bold my-2 fs-4">Links</p><br />
                <Link to="/" className="text-decoration-none text-light my-1 fs-5">Home</Link><br />
                <Link to="/" className="text-decoration-none text-light my-1 fs-5">About Us</Link><br />
                <Link to="contact" className="text-decoration-none text-light my-1 fs-5">Contact Us</Link><br />
                <Link to="" className="text-decoration-none text-light my-1 fs-5">Our Services</Link><br />
                <Link to="/demo" className="text-decoration-none text-light my-1 fs-5">Demo Sites</Link><br />
            </div>
            <div className="col-6 col-lg-2" data-aos="fade-down" data-aos-duration="2000">
                <p className="fw-bold my-2 fs-4">Social</p><br />
                <a href="/#"  className="text-decoration-none text-light my-1 fs-5">Facebook</a><br />
                <a href="/#" className="text-decoration-none text-light my-1 fs-5">WhatsApp</a><br />
                <a href="/#" className="text-decoration-none text-light my-1 fs-5">Twitter</a><br />
                <a href="/#" className="text-decoration-none text-light my-1 fs-5">Instagram</a><br />
            </div>
            <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-duration="2000">
                <p className="fw-bold my-2 fs-4">Visit</p><br />
                <p className="fs-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis.</p>
            </div>
        </div>
        <div className="text-center pt-4 fs-6">
            © 2020 All rights reserved | Design by Monu Shaw
        </div>
    </div>
    </>

  )
}

export default Footer