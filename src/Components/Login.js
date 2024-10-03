import React from 'react'
import { Link } from 'react-router-dom'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Modal from './Modal';

export default function Login() {
    return (
        <div>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h1 style={{ fontWeight: "500", textAlign: "center" }} >Login</h1>
                        <hr className='mt-4' />
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="frm mx-auto">
                            {/* <form> */}

                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" placeholder='Enter Email Address' aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="inputPassword5" class="form-label">Password</label>
                                <input type="password" id="inputPassword5" placeholder='Password' class="form-control" aria-describedby="passwordHelpBlock" />
                            </div>
                            <span>New Here ?  <Link to={"/register"}>Register</Link></span>
                            <br />

                            <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-outline-dark py-2 px-5 mt-5">Login</button>
                            {/* ================ */}
                            {/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-body">
                                            <div className="congrat">
                                                <p style={{ textAlign: "center", color: "#0c870c" }}><CheckCircleIcon /></p>
                                                <p>Congratulations..</p>
                                                <p>you have successfully logged into your account</p>
                                            </div>
                                        </div>
                                        <div class="modal-footer d-flex justify-content-center">
                                            <button type="button" class="btn btn-success" data-bs-dismiss="modal">Thankyou</button>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <Modal greetings={"you have successfully logged into your account"} />
                            {/* </form> */}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
