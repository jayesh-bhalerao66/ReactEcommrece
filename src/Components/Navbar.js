import React, { useContext } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { user } from './Context';
export default function Navbar() {
    let { ct, setct } = useContext(user)
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
                <div class="container-fluid">
                    {/* <a class="navbar-brand" href="#">Shopping Center</a> */}
                    <Link class="navbar-brand" to={"/"}>Shopping Center</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item mx-3">
                                <Link class="nav-link active" aria-current="page" to={"/"}>Home</Link>
                            </li>
                            <li class="nav-item mx-3">
                                <Link class="nav-link active" aria-current="page" to={"/About"}>About</Link>
                            </li>
                            <li class="nav-item mx-3">
                                <Link class="nav-link active" aria-current="page" to={"/Product"}>Product</Link>
                            </li>
                            <li class="nav-item mx-3">
                                <Link class="nav-link active" aria-current="page" to={"/Contact"}>Contact</Link>
                            </li>
                        </ul>
                        <Link to={"/cart"}><div className="cart me-5"><span className='atcno'>{ct.length}</span><ShoppingCartIcon /></div></Link>
                        <Link to={"/login"}><button type="button" class="btn btn-outline-light me-3"><span className='Login'><i class="bi bi-box-arrow-in-right "></i></span> Login</button></Link>
                        <Link to={"/register"}><button type="button" class="btn btn-outline-light"><span className='Login'><i class="bi bi-person-check-fill"></i></span> Register</button></Link>


                    </div>
                </div>
            </nav>
        </div>
    )
}
