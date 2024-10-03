import React from 'react'

export default function Prd(props) {
  return (
    <div>
      <div className="Prds">
        <div className="prdsImg">
          <img src={props.setprd.image} alt="" width={"96%"} height={"96%"} />
        </div>
        <div className="prdright">
          <h2>{props.setprd.productName}</h2>
          <h2>Rs. {props.setprd.price}</h2>
          <p>{props.setprd.desc}</p>
        </div>
      </div>
    </div>
  )
}
