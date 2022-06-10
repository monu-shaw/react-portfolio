import React from 'react'
import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';


function Product() {
    const {data: product, status} =  useSelector((state) => state.product)
    const dispatch = useDispatch();
    //const [product, setProduct] = useState([]);

  
    
    useEffect(()=>{
        dispatch(fetchProducts())
    },[])

    const handleAdd = (product)=>{
        dispatch(add(product));
        
    };
    if(status == 'loading'){
      return(
        <h1>Loading..</h1>
      )
    }
    if(status == 'error'){
      return(
        <h1>Error</h1>
      )
    }
  return (
    <div className="container">
    <div className="row g-2 mx-auto p-card pb-4">
    {product.map(x=>(
          <div className="col" key={x.id}>
          <div className="card border-0" style={{width: '11rem', borderRadius: '10px',paddingTop: '5px',padding: '2px'}}>
              <img src={x.image} style={{width:'100%',height:'8rem'}} className="card-img-top" alt="..."/>
              <div className="card-body" style={{padding: '5px'}}>
                <h6 className="card-title" style={{height:'1rem'}}>{x.title.slice(0, 15)} ..</h6>
                <p className="card-text" style={{height:'1rem',marginBottom: '2rem'}}>{x.description.slice(0, 20)} ..</p>
                <p className="card-text fs-4">{x.price}</p>
                  <div className="input-group mb-3">
                    <span className="input-group-text" ><div className="info" >-</div></span>
                      <input type="text" className="form-control text-center p-1" id="quan{x.id}" onChange={(e)=>console.log(e)} name="quan" value="1"/>
                    <span className="input-group-text " ><div className="info" >+</div></span>
                  </div>
                  <button className='btn btn-outline-info d-block w-100' onClick={()=>handleAdd(x)}>Add</button>
                
              </div>  
            </div>
          </div>
      ))}
    </div>
    </div>
  )
}

export default Product