import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../store/login'

function Dashboard() {
    const status = useSelector((state) => state.logged.logged)
    const dispatch = useDispatch();
    const handelLogin =()=>{
        let password = document.getElementById('exampleFormControlInput1').value;
        if(password !== ''){dispatch(login(password));}
    }
    const [data , setData] = useState([])
    
    useEffect(() => {
        const load = async () => {
            const res = await fetch('http://localhost/clients/api2.php'); 
            const dat = await res.json();
            setData(dat);
        }
       load()
    }, [])
    if(status){
        return(
                <div id="main">
                    <div className="col-11 mx-auto p-4 my-4 bg-light">
                        <h1 className="text-center my-2">Clients Detail</h1>
                        <table id="table_id"  className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Time</th>
                                    <th>Detail</th>
                                </tr>
                            </thead>
                            <tbody>
                                   {data.map((e, index)=>(
                                    <tr key={index}>
                                        <td>{e.name}</td>
                                        <td>{e.phone}</td>
                                        <td>{e.date}</td>
                                        <td><Link to={`/message/${e.id}`}>See Detail</Link></td>
                                    </tr>
                                   ))
                                    }
                            </tbody>
                        </table>
                    </div>
                </div>
        )
        }
  return (
        <div className="col-10 mx-auto mx-auto d-flex align-items-center justify-content-center" style={{height:'100vh'}}>
            <div className="col-10 col-lg-5">
                    <div className="p-2 row g-2 bg-light p-4">
                            <h2 className="text-center">Log IN</h2>
                        <div className="col-12">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                            <input type="Password" name="password" className="form-control" id="exampleFormControlInput1" placeholder="Password" />
                        </div>
                        <div className="col-12">
                            <input type="button" onClick={handelLogin} className="form-control" name="login" id="exampleFormControlInput1" value="Log In" />
                        </div>
                    </div>
            </div>
        </div>
  )
}

export default Dashboard