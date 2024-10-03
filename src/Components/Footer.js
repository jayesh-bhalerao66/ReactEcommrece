import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
export default function Footer() {
    return (
        <div>
            <div className="container-fluid mt-4">
                <div className="row bg-secondary">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 bg-dark p-3">
                        <div className="about_Footer ps-3">
                            <h2>Shopping Center</h2>
                            <p>
                                The One-stop Shopping Destination.<br></br> E-commerce is revolutionizing the way we all shop in India. Why do you want to hop from one store to another in when we are here.
                            </p>

                        </div>
                        <div className="footer_social ps-3">
                            <Link><i class="fa-brands fa-facebook"></i></Link>
                            <Link><i class="fa-brands fa-square-instagram"></i></Link>
                            <Link><i class="fa-brands fa-square-twitter"></i></Link>
                            <Link><i class="fa-brands fa-linkedin"></i></Link>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 pt-4 bg-dark">
                        <div className="footer_widget">
                            <h6>QUICK LINKS</h6>
                            <ul>
                                <li><Link to={"/"}>Home</Link></li>
                                <li><Link to={"/About"}>About</Link></li>
                                <li><Link to={"/Product"}>Products</Link></li>
                                <li><Link to={"/Contact"}>Contact</Link></li>
                                <li><Link to={"/cart"}>Cart</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 pt-4 bg-dark">
                        <div className="footer_widget">
                            <h6>ACCOUNTS</h6>
                            <ul>
                                <li><Link>My Account</Link></li>
                                <li><Link>Login</Link></li>
                                <li><Link>Order Tracking</Link></li>
                                <li><Link>Checkout</Link></li>
                                <li><Link to={"/Product"}>Wishlist</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 pt-4 bg-dark">
                        <div className="footer_widget">
                            <h6>SUPPORT</h6>
                            <ul>
                                <li><Link href="#">Frequently Asked Questions</Link></li>
                                <li><Link href="#">Terms &amp; Conditions</Link></li>
                                <li><Link href="#">Privacy Policy</Link></li>
                                <li><Link href="#">Report a Payment Issue</Link></li>
                                <li><Link href="#">24/7 Support</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
