import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { remove } from '../store/cartSlice';
var total;
function Cart() {
  const items =  useSelector((state) => state.cart)
  const dispatch =useDispatch();
  const handleRemove=(pId)=>{
    dispatch(remove(pId));
  }
  return (
    <div>
      <h2 className='text-center'>Cart</h2>
      <input type="text" name="mail" placeholder="Email" required />
                  <table class="table">
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
                    {items.map((x)=>(
                      
                    <tr>
                      <th scope="row">x</th>
                      <td>{x.title}</td>
                      <td>{x.price}</td>
                      <td>1</td>
                      <td ><div onClick={()=>handleRemove(x.id)} class="mx-2 btn btn-sm btn-danger float-end"><i class="bi bi-x-square"></i></div></td>
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
    </div>
  )
}

export default Cart