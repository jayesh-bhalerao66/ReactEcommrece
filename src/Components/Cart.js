import React, { useContext, useEffect, useState } from 'react'
import { user } from './Context'
import "./Cart.css"
import Cartproduct from './Cartproduct'
import emptyCart from './shopping.png'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
export default function Cart() {
    let { ct, setct } = useContext(user)
    let [total, settotal] = useState(0)
    useEffect(() => {
        settotal(ct.reduce((x, y) => {
            return (x + y.price)
        }, 0))
    }, [ct])
    return (
        <div>
            <div className="container-fluid bg-warning">
                <div className="row">
                    <div className="col-xl-12">
                        <h1>My Cart</h1>
                        <h2>Total Rs. {total}</h2>
                    </div>
                </div>
            </div>
            <div className="cartMain">
                <div className="container bg-light">
                    <div className="row py-3">
                        {
                            (ct.length === 0) ? (
                                <div className="emcrt">
                                    <img src={emptyCart} height={"400px"} width={"400px"} />
                                </div>
                            ) : (
                                ct.map((prx) => {
                                    return (
                                        <>
                                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 crd">
                                                <Cartproduct pr={prx} />
                                            </div>

                                        </>
                                    )
                                })
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-warning">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="buynow">
                            <button class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">BUY NOW</button>
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-body">
                                            <div className="congrat">
                                                <p style={{ textAlign: "center", color: "#0c870c" }}><CheckCircleIcon /></p>
                                                <p>Congratulations..</p>
                                                <p>Your Order Has Been Placed</p>
                                            </div>
                                        </div>
                                        <div class="modal-footer d-flex justify-content-center">
                                            <button type="button" class="btn btn-success" data-bs-dismiss="modal" onClick={() => { setct([]) }}>Thankyou</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
