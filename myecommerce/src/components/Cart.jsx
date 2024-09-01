import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteItem } from '../redux/action/Index'


function Cart() {
    const state = useSelector((state) => state.addItem)
    const dispatch = useDispatch()

    const cartitems =(cartitem) => {
      return(
        <div className='px-4 my-5 bg-light rounded-3'key={cartitem.id}>
            <div className="container py-4">
                <button className='btn-close float-end' aria-label='close'></button>
                <div className="row justify-content-center">
                   <div className="col-md-4">
                    <img src={cartitem.img} alt={cartitem.title} />
                   </div>
                    <div className="col-md-4">
                        <h3></h3>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
      )
    }
  return (
    <>
      {state.length !== 0 && state.map(cartitems)}
    </>
  )
}

export default Cart
