import React from 'react'
import { Link } from 'react-router-dom'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Modal from './Modal';

export default function Register() {
    return (
        <div>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h1 style={{ fontWeight: "500", textAlign: "center" }} >Register</h1>
                        <hr className='mt-4' />
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="frm mx-auto">
                            <form>
                                <div class="mb-3">
                                    <label for="validationCustom01" class="form-label">Enter Full Name</label>
                                    <input type="text" class="form-control" placeholder='Enter Your Name' required />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" placeholder='Enter Email Address' aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label for="inputPassword5" class="form-label">Password</label>
                                    <input type="password" id="inputPassword5" placeholder='Password' class="form-control" aria-describedby="passwordHelpBlock" />
                                </div>
                                <span>Login Here ?  <Link to={"/login"}>login</Link></span>
                                <br />

                                <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-outline-dark py-2 px-5 mt-5">Register</button>
                                {/* ================ */}
                                {/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-body">
                                                <div className="congrat">
                                                    <p style={{ textAlign: "center", color: "#0c870c" }}><CheckCircleIcon /></p>
                                                    <p>Congratulations..</p>
                                                    <p>you have successfully registered</p>
                                                </div>
                                            </div>
                                            <div class="modal-footer d-flex justify-content-center">
                                                <button type="button" class="btn btn-success" data-bs-dismiss="modal">Thankyou</button>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <Modal greetings={"you have successfully registered"} />

                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
