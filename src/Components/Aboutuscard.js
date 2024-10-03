import React from 'react'

export default function Aboutuscard(props) {
  return (
    <div>
      <div className="about_card border border-1 border-dark my-3">
        <div className="aboutcardimg">
          <img src={props.img} alt="" height={"100%"} width={"100%"} />
        </div>
        <div className="aboutcardname">
          <h3>{props.nm}</h3>
        </div>
      </div>
    </div>
  )
}
