import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";


function Message() {
    const [data2 , setData] = useState({})
    const {id} = useParams();
    //alert(id);
    const load = async (x) => {
        const res = await fetch('http://test.nexenture.net/cms/api.php?order_id='+id); 
        const data = await res.json();
        setData(data);
    }
    console.log(data2)
    useEffect(() => {
       load()
    }, [])

  return (
    <div id="main">
        <div className="d-flex align-items-center justify-content-center" style={{height:'100vh'}}>
            <div className="col-11 col-lg-8 mx-auto bg-light">
                <div className="row g-2 p-4">
                    <div className="text-center"><Link to="/dashboard">Back</Link> Clients Details</div>
                    <div className="col-12">
                        <h6>Name :</h6><p>{data2.name}</p>
                    </div>
                    <div className="col-12 col-lg-5">
                        <h6>Email :</h6><p>{data2.email}</p>
                    </div>
                    <div className="col-6 col-lg-5">
                        <h6>Phone :</h6><p>{data2.phone}</p>
                    </div>
                    <div className="col-6 col-lg-2">
                        <h6>Budget :</h6><p>{data2.budget}</p>
                    </div>
                    <div className="col-12">
                        <h6>Message :</h6><p>{data2.message}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Message