import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { remove } from '../store/cartSlice';
var total = 0;
function Cart() {
  const items =  useSelector((state) => state.cart.cartItem)
  const dispatch = useDispatch();
  const handleRemove=(pId)=>{
    dispatch(remove(pId));
  }
      total= 0;
      items.map(i=> (total+= +(i.price*i.quantity)));  
  if(items.length === 0){
    return(
      <h1 className='text-center mt-4 pt-4 text-danger'>No Items In Cart</h1>
    )
  }

  

  
  
  return (
    <div>
      <h2 className='text-center'>Cart</h2>
      <input type="text"id="mail" name="mail" placeholder="Email" required />
                  <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Item</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((x, index)=>(
                    <tr>
                      <th scope="row" key={index}>{++index}</th>
                      <td>{x.title}</td>
                      <td>{x.price}</td>
                      <td>{x.quantity}</td>
                      <td >{x.quantity*x.price}<div onClick={()=>handleRemove(x.id)} className="mx-2 btn btn-sm btn-danger float-end"><i className="bi bi-x-square"></i></div></td>
                    </tr>
                  ))}
                  <tr>
                  <th scope="row"></th>
                  <td ></td>
                  <td ></td>
                  <td >Total</td>
                  <td> {total}</td>
                  </tr>
                  </tbody>
                </table>
                <div className="col-10 mx-auto"> <button className='btn btn-success col-2 mx-auto d-block'>Check Out</button></div>

    </div>
  )
}

export default Cart