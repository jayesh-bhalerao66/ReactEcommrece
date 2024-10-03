import React, { useState } from 'react'
import products from './Products'
import SingleProduct from './SingleProduct'
import "./Products.css"
export default function Product() {
  let [prod, setprod] = useState(products)
  let [info, setinfo] = useState([])

  let filtersearch = (sh) => {
    let x = products.filter((fil) => {
      return (fil.type === sh)
    })
    setprod(x)
  }
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 py-4 d-flex justify-content-center ">
            <div className="btns">
              <button class="btn btn-outline-dark" onClick={() => { setprod(products) }}>All</button>
              <button class="btn btn-outline-dark" onClick={() => { filtersearch("mobile") }}>Mobiles</button>
              <button class="btn btn-outline-dark" onClick={() => { filtersearch("laptop") }}>Laptops</button>
              <button class="btn btn-outline-dark" onClick={() => { filtersearch("headset") }}>Headsets</button>
              <button class="btn btn-outline-dark" onClick={() => { filtersearch("tv") }}>TV's</button>
            </div>
          </div>
        </div>
      </div>

      <h1 style={{ fontWeight: "700", textAlign: "center" }} className='mb-3'>Our Latest Mobile</h1>
      <hr />

      <div className="container">
        <div className="row bg-light productscont pt-3">
          {prod.map((p) => {
            return (
              <>
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 crd">
                  <SingleProduct pr={p} info={info} setinfo={setinfo} />
                </div>
              </>
            )
          })}

        </div>
      </div>
    </div>
  )
}
