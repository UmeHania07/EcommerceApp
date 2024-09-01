import React from 'react'
import DATA from '../Data'
import { NavLink } from 'react-router-dom'


function Product() {

  const carditem = (item) => {
    return (
      <div className="card my-5 py-5" key={item.id} style={{ width: "18rem", marginBottom: "20px", cursor: "pointer" }}>
        <img src={item.img} className="card-img-top" alt={item.title} />
        <div className="card-body text-center mt-4">
          <h5 className="card-title">{item.title}</h5>
          <p className='lead'>${item.price}</p>
          <NavLink to={`/product/${item.id}`} className=" btn btn-outline-primary mt-4" >Buy Now</NavLink>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="container py-5">
        <div className='row'>
          <div className='col-12 text-center'>
            <h1>Product</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container ms-6">
        <div className='row justify-content-around'>
          {DATA.map(carditem)}
        </div>
      </div>
    </div>


  )
}

export default Product
