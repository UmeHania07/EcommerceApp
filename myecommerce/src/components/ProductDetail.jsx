import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import DATA from '../Data'
import { useDispatch } from 'react-redux'
import { addItem, deleteItem } from '../redux/action/Index'

function ProductDetail() {
  const [cartBtn, setCartBtn] = useState("Add to Cart")

  {/* Now we need a product id which is pass from the product page */ }
  const pro = useParams()
  const proDetail = DATA.filter(e => e.id == pro.id)
  const product = proDetail[0];
  console.log(product)


  //we need to store usedispatch in a variable
  const dispatch = useDispatch()

  const handleCart = (product) => {
    if (cartBtn === "Add to Cart") {

      dispatch(addItem(product))

      setCartBtn("Remove from Cart")
    } else {
      dispatch(deleteItem(product))

      setCartBtn("Add to Cart")
    }
  }

  return (
    <>
      <div className="container my-5 py3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img src={product.img} alt={product.title} height={"400px"} />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className='display-5 fw-bold'>{product.title}</h1>
            <hr />
            <h2 className='my-4'>${product.price}</h2>
            <p className='lead'>{product.desc}</p>
            <button onClick={() => handleCart(product)} className='btn btn-outline-primary my-5'>{cartBtn}</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail
