import React from 'react'
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'
function Navbar() {
    const items =  useSelector(state => state.cart)
  return (
    <div className="row" style={{margin: '0', backgroundColor: '#2ddfed'}}>
    <div className="d-flex align-items-center flex-row bd-highlight justify-content-between">
        <div className="p-2 bd-highlight">
        <Link to="/" className="navbar-brand  fs-2">
            Navbar
        </Link>
        </div>
        <div className="p-2 bd-highlight">
            <div className="container-fluid">
            </div>  
        </div>
        <div className="p-2 bd-highlight">
        <Link to="/cart">
        <button type="button" className="btn btn-success mx-4" >
            <i className="bi bi-bag-heart"></i> {items.length}<span className="badge text-bg-danger"></span>
            </button>
        </Link>
            
        </div>
    </div>
</div>
  )
}

export default Navbar