import React, { useEffect } from 'react'
import salesdiaries from '../assets/images/salesdiaries.png'
import hutextiles from '../assets/images/hutextiles.png'
import myhelpinghands from '../assets/images/myhelpinghands.png'
import nexenture from '../assets/images/nexenture.png'
import rekhavipspa from '../assets/images/rekhavipspa.png'
import Aos from 'aos'

function Demo() {

    useEffect(() => {
        Aos.init({
          once: true
      });
      }, []);
  return (
    <div className="row g-2 m-0 col-10 mx-auto">
        <div className="col-11 col-lg-6 mx-auto p-1 i-frame">
            <h2 className="text-light px-2"><a href="https://salesdiaries.com/" className="text-decoration-none text-light text-uppercase">salesdiaries <i className="bi bi-arrow-right-short"></i></a></h2>
            <div className="screen">
                <img src={salesdiaries} alt="img" />
            </div>
        </div>
        <div className="col-11 col-lg-6 mx-auto p-1 i-frame">
            <h2 className="text-light px-2"><a href="http://myhelpinghands.in/" className="text-decoration-none text-light text-uppercase">myhelpinghands <i className="bi bi-arrow-right-short"></i></a></h2>
            <div className="screen">
                <img src={myhelpinghands} alt="img" />
            </div>
        </div>
        <div className="col-11 col-lg-6 mx-auto p-1 i-frame">
            <h2 className="text-light px-2"><a href="http://hutextiles.com/" className="text-decoration-none text-light text-uppercase">hutextiles <i className="bi bi-arrow-right-short"></i></a></h2>
            <div className="screen">
                <img src={hutextiles} alt="img" />
            </div>
        </div>
        <div className="col-11 col-lg-6 mx-auto p-1 i-frame">
            <h2 className="text-light px-2"><a href="http://nexenture.net/" className="text-decoration-none text-light text-uppercase">nexenture <i className="bi bi-arrow-right-short"></i></a></h2>
            <div className="screen">
                <img src={nexenture} alt="img" />
            </div>
        </div>
        <div className="col-11 col-lg-6 mx-auto p-1 i-frame">
            <h2 className="text-light px-2"><a href="https://rekhavipspa.com/" className="text-decoration-none text-light text-uppercase">rekhavipspa <i className="bi bi-arrow-right-short"></i></a></h2>
            <div className="screen">
                <img src={rekhavipspa} alt="img" />
            </div>
        </div>
    </div>



  )
}

export default Demo