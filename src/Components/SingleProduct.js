import React, { useContext } from 'react'
import Prd from './Prd'
import { user } from './Context'

export default function SingleProduct(props) {
    let { ct, setct } = useContext(user)
    // console.log(ct)
    return (
        <div>
            <div className="card">
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
                {/* =======Buttons===== */}
                <div className="ar">
                    <button type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {
                        props.setinfo([props.pr])

                    }}>
                        More details
                    </button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Details</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ width: "200px" }}></button>
                                </div>
                                <div class="modal-body">
                                    <div>
                                        {
                                            props.info.map((ps) => {
                                                return (<Prd setprd={ps} />)
                                            })
                                        }
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        ct.includes(props.pr) ? (<button type="button" class="btn btn-outline-dark py-2 px-5" onClick={() => { setct(ct.filter(c => c.id !== props.pr.id)) }}>Remove From Cart</button>
                        ) :
                            (<button type="button" class="btn btn-outline-dark py-2 px-5" onClick={() => { setct([...ct, props.pr]) }}>Add To Cart</button>)
                    }

                </div>
            </div>
        </div>
    )
}
