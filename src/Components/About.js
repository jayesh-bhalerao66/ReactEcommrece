import React from 'react'
import "./About.css"
import Aboutuscard from './Aboutuscard'
export default function About() {
  let img1 = "images/aboutimg1.jpg"
  let img2 = "images/Aboutimg2.jpg"
  let img3 = "images/aboutimg3.jpg"
  let img4 = "images/aboutimg4.jpg"
  return (
    <div>
      <div className="aboutus">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="ab1 my-4">
                <h1>About Us</h1>
                <hr />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere doloremque veritatis odit similique sequi. Odit amet fuga nam quam quasi facilis sed doloremque saepe sint perspiciatis explicabo totam vero quas provident ipsam, veritatis nostrum velit quos recusandae est mollitia esse fugit dolore laudantium. Ex vel explicabo earum unde eligendi autem praesentium, doloremque distinctio nesciunt porro tempore quis eaque labore voluptatibus ea necessitatibus exercitationem tempora molestias. Ad consequuntur veniam sequi ullam tempore vel tenetur soluta dolore sunt maxime aliquam corporis est, quo saepe dolorem optio minus sint nemo totam dolorum! Reprehenderit delectus expedita a alias nam recusandae illo debitis repellat libero, quasi explicabo molestiae saepe, dolorem tempore itaque eveniet quam dignissimos blanditiis excepturi harum numquam vel nihil? Ipsum</p>
              </div>
            </div>
          </div>
          <div className="row">

            <h1 style={{ textAlign: "center" }}>Our Products</h1>
            <hr />
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12"><Aboutuscard img={img1} nm="Laptops" /></div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12"><Aboutuscard img={img2} nm="AirPods" /></div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12"><Aboutuscard img={img3} nm="Mobiles" /></div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12"><Aboutuscard img={img4} nm="Watches" /></div>
            {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12"><Aboutuscard img={img1}/></div> */}

          </div>
        </div>

      </div>
    </div>
  )
}
