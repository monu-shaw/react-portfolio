import Aos from 'aos';
import React, { useEffect, useState } from 'react'



    var error = 0;
      function blankCheck(x){
        if(x == ''){
          error++;
        }
      }
      var  data2 = '';
function Contact() {
    const [state, setstate] = useState('row g-2 col-10 mx-auto my-2');
    const [state2, setstate2] = useState('py-4 my-4 px-2 mx-auto d-none');
    const load = async (x) => {
        const res = await fetch('http://localhost/clients/api.php',{
            method: "POST",
            body: x,
    });
        const data = await res.text();
        setstate(state+' d-none');
        setstate2('py-4 my-4 px-2 mx-auto');
    }

    function FormResubmit(){
        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('email').value = '';
        document.getElementById('budget').value = '';
        document.getElementById('message').value = '';
        setstate2('py-4 my-4 px-2 mx-auto d-none');
        setstate('row g-2 col-10 mx-auto my-2');
    }

    function handelForm(){
        error = 0;
        let name = document.getElementById('name').value;
        let phone = document.getElementById('phone').value;
        let email = document.getElementById('email').value;
        let budget = document.getElementById('budget').value;
        let message = document.getElementById('message').value;
          blankCheck(name);
          blankCheck(phone);
          blankCheck(email);
          blankCheck(budget);
          blankCheck(message);
        if(error === 0){
        let formData = new FormData();
        formData.set('contact','1');
        formData.set('name', name);
        formData.set('phone',phone);
        formData.set('email',email);
        formData.set('budget',budget);
        formData.set('message',message);
        load(formData);}else{
            alert('All Feilds Required !')
        }
        
    }
    useEffect(() => {
        Aos.init({
          once: true
      });
      }, []);
    useEffect(() => {
        if(state === 1){
            console.log(state);
        }
      }, [state]);

  return (
      <>
    <div className="col-12 col-lg-8 mx-auto text-light py-lg-4">
        <div className="row g-2 m-0">
            <div className="col-11 col-lg-6 mx-auto mt-4 py-sm-4" data-aos="fade-right" data-aos-duration="2000">
                <h1 className="col-11 col-lg-10 mx-auto mt-4 t-6">Have projects in mind? Let’s work <span className="main-grad-color">together</span></h1>
                <p className="col-11 col-lg-10 mx-auto fs-4">Have a project in mind? Looking to partner or work together? Reach out through the form and I'll get back to you in the next 48 hours.</p>
                <div className="col-11 col-lg-10  mx-auto" data-aos="fade-down" data-aos-duration="2000">
                    <a href="mailto:contact@nexenture.net" className="text-decoration-none text-light my-2"><i className="bi bi-envelope-fill rounded-circle"></i> <span className="fs-4"> contact@nexenture.net</span></a><br />
                    <a href="tel:9007000606" className="text-decoration-none text-light my-2"><i className="bi bi-telephone-fill rounded-circle"></i> <span className="fs-4"> +91 9007000606</span></a>
                </div>
            </div>
            <div className="col-11 col-lg-6 mx-auto d-flex align-items-center pt-4 pt-lg-1" data-aos="fade-left" data-aos-duration="3000">
                <div className="col-12 main-bg-grad-color-2 p-2 d-flex align-items-center" id="form">
                        <div className={state}>
                            <div className="form-floating mb-3">
                              <h6 className="fs-5 text-uppercase">Fill the Form below</h6>
                            </div>
                            <div className="form-floating mb-3">
                              <input type="text" className="form-control border-light bg-dark text-light" id="name" placeholder="name@example.com" />
                              <label htmlFor="name">Name</label>
                            </div>
                            <div className="form-floating mb-3">
                              <input type="email" className="form-control border-light bg-dark text-light" id="email" placeholder="name@example.com" />
                              <label htmlFor="email">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                              <input type="text" className="form-control border-light bg-dark text-light" id="phone" placeholder="name@example.com" />
                              <label htmlFor="phone">Phone </label>
                            </div>
                            <div className=" mb-3">
                                <select className="form-select bg-dark text-light" id="budget" aria-label="Default select example">
                                  <option defaultValue>Select Budget</option>
                                  <option value="Below 10000">Below 10000</option>
                                  <option value="Below 20000">Below 20000</option>
                                  <option value="Get Consaltant">Get Consaltant</option>
                                </select>
                            </div>
                            <div className="form-floating mb-3">
                              <textarea className="form-control border-light bg-dark text-light" placeholder="Leave a comment here" id="message" style={{height: '200px'}}></textarea>
                              <label htmlFor="message">Type your Message</label>
                            </div>
                            <div className="mb-3 col-12 col-lg-12 p-2 mx-auto">
                              <button id="buuton" onClick={handelForm} className="col-12 btn d-block float-center mb-4 rounded-pill main-bg-grad-color text-light fw-bold call-home-button2"><span className="fs-4">Submit Now</span> <i className="bi bi-arrow-right float-end call-home-icon bg-light p-2 px-3 rounded-circle text-dark fw-bold"></i></button>
                            </div>
                        </div>
                        <div className={state2}>
                            <h5 className="my-3 py-md-2"> Thank you for contacting us. We will contact you soon .</h5>
                            <button onClick={FormResubmit} className="col-12 btn d-block float-center mb-4 rounded-pill main-bg-grad-color text-light fw-bold call-home-button2"><span className="fs-4">Submit Another </span> <i className="bi bi-arrow-clockwise float-end call-home-icon bg-light p-2 px-3 rounded-circle text-dark fw-bold"></i></button>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    {/* main section */}
    {/* map section */}
    <div className="col-11 col-lg-8 mx-auto main-bg-grad-color-2 p-4 my-4" data-aos="fade-up" data-aos-duration="2000">
    <iframe className="m-1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.6687037230254!2d88.35183441495926!3d22.554079885192326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027726a6737b7f%3A0xe312fa066824af88!2sNexenture%20Private%20Limited!5e0!3m2!1sen!2sin!4v1654750876211!5m2!1sen!2sin" height="450" style={{border:0,width:'100%'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
    {/* map section */}
    </>


  )
}

export default Contact