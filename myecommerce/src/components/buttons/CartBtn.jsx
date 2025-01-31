import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'


function CartBtn() {
  //we get a state of addItem
  //write the file name not a functon
  const state = useSelector((state) => state.addItem)
  return (
    <>
      <NavLink  to="/cart" className="btn btn-outline-primary ms-2 me-4 ">
        <span className='fa fa-shopping-cart me-1 '> </span>  Cart ({state.length})
      </NavLink>
    </>
  )
}

export default CartBtn

