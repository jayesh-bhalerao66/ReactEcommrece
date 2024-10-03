import React, { useContext } from 'react'

import { user } from './Context'

export default function Cartproduct(props) {
    let { ct, setct } = useContext(user)
    // console.log(ct)
    return (
        <div>
            <div className="card my-3">
                {/* =========IMAGE=========== */}
                <div className="im">
                    <img src={props.pr.image} alt="" height={"95%"} width={"90%"} />
                </div>
                {/* =============description============ */}
                <div className="des">
                    <h5>{props.pr.productName}</h5>
                    <h5>Rs.{props.pr.price}</h5>
                    <p className='y'>{props.pr.desc}</p>
                </div>

                <button type="button" class="btn btn-outline-dark py-2 px-5" onClick={() => { setct(ct.filter(c => c.id !== props.pr.id)) }}>Remove From Cart</button>
            </div>
        </div>
    )
}
