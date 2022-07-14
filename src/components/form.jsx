import React from 'react'

var error = 0;
      function blankCheck(x){
        if(x == ''){
          error++;
        }
      }

function Form() {


    const load = async (x) => {
        const res = await fetch('http://localhost/clients/api.php',{
    // Adding method type
    method: "POST",
    // Adding body or contents to send
    body: x,
}); 
        const data = await res.text();
        console.log(data);
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
        if(error ===0){
            console.log(error);
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
  return (
    <div>
        
                        <div className="row g-2 col-10 mx-auto my-2">
                            <div className="form-floating mb-3">
                              <h6 className="fs-5 text-uppercase">Fill the Form below</h6>
                            </div>
                            <div className="form-floating mb-3">
                              <input type="text" className="form-control border-light bg-dark text-light" id="name" placeholder="name@example.com" />
                              <label for="name">Name</label>
                            </div>
                            <div className="form-floating mb-3">
                              <input type="email" className="form-control border-light bg-dark text-light" id="email" placeholder="name@example.com" />
                              <label for="email">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                              <input type="text" className="form-control border-light bg-dark text-light" id="phone" placeholder="name@example.com" />
                              <label for="phone">Phone </label>
                            </div>
                            <div className=" mb-3">
                                <select className="form-select bg-dark text-light" id="budget" aria-label="Default select example">
                                  <option selected>Select Budget</option>
                                  <option value="Below 10000">Below 10000</option>
                                  <option value="Below 20000">Below 20000</option>
                                  <option value="Get Consaltant">Get Consaltant</option>
                                </select>
                            </div>
                            <div className="form-floating mb-3">
                              <textarea className="form-control border-light bg-dark text-light" placeholder="Leave a comment here" id="message" style={{height: '200px'}}></textarea>
                              <label for="message">Type your Message</label>
                            </div>
                            <div className="mb-3 col-12 col-lg-12 p-2 mx-auto bg-dark">
                              <button onClick={handelForm} className="col-12 btn d-block float-center mb-4 rounded-pill main-bg-grad-color text-light fw-bold call-home-button2"><span className="fs-4">Submit Now</span> <i className="bi bi-arrow-right float-end call-home-icon bg-light p-2 px-3 rounded-circle text-dark fw-bold"></i></button>
                            </div>
                        </div>
    </div>
  )
}

export default Form