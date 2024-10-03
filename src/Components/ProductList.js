import React, { useState } from 'react'
import products from './Products'
import SingleProduct from './SingleProduct'
export default function ProductList() {
    let [prod, setprod] = useState(products)
    let [info, setinfo] = useState([])
    let [searchprdct, setsearchprdct] = useState("")

    let filtersearch = (sh, e) => {
        // e.preventDefault()
        let x = products.filter((fil) => {
            let productNameLowerCase = fil.productName.toLowerCase();
            let inputLowerCase = sh.toLowerCase();
            return (productNameLowerCase.includes(inputLowerCase))
        })
        setprod(x)
    }
    let change = (e) => {
        let inputvalue = e.target.value
        setsearchprdct(inputvalue)
        filtersearch(inputvalue)
    }
    return (
        <div>
            <div className="container">
                <div className="row bg-light productscont pt-3" id='shopnow'>

                    <h1>Latest Products</h1>
                    <div className="row">
                        <div className="col-xl-7 col-lg-7"></div>
                        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                            <form class="d-flex sr" role="search" onSubmit={(e) => { filtersearch(searchprdct, e) }}>
                                <input value={searchprdct} onChange={change} class="form-control border border-dark border-3" type="search" placeholder="Search here" aria-label="Search" />
                                {/* <button class="btn btn-dark" type="submit" >Search</button> */}
                            </form>
                        </div>
                    </div>

                    {prod.map((p) => {
                        return (
                            <>
                                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 crd">
                                    <SingleProduct pr={p} info={info} setinfo={setinfo} />
                                </div>
                            </>
                        )
                    })}
                    {/* <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                    <img src={products[0].image} alt="" />
                    <h5>{products[0].productName}</h5>
                    <h5>Rs.{products[0].price}</h5>
                    <p>{products[0].desc}</p>
                    <button type="button" class="btn btn-outline-dark py-2 px-5">Primary</button>
                    <button type="button" class="btn btn-outline-dark py-2 px-5">Primary</button>
                </div> */}
                    {/* <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">hdlk</div>
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">hdlk</div> */}
                </div>
            </div>
        </div>
    )
}
