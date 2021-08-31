import React from 'react'
import Slider from 'react-slick'
import Banner1 from "../../images/banner1.jpg"
import Banner2 from "../../images/banner2.jpg"
import Banner3 from "../../images/banner3.jpg"
import styles from "./banner.module.css"


import { Link } from "react-router-dom";
class home extends React.Component {

    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
          
        return(
            <div className={styles.banner}>
        <h2> Welcome</h2>
        <Slider {...settings}>
          <div >
          <div className="test" style={{background: `#ccc url(${Banner1})`, minHeight: "70vh", backgroundSize: "cover", backgroundPosition: "center"}} >
            <h3></h3>
            
            <Link to={"/contact"} className="cont">
              Contact Us
            </Link>
          </div>
          </div>


          <div>
          <div className="test" style={{background: `#ccc url(${Banner2})`, minHeight: "70vh", backgroundSize: "cover", backgroundPosition: "center"}} >
            <h3></h3>
          </div>
          </div>

          <div>
          <div className="test" style={{background: `#ccc url(${Banner3})`, minHeight: "70vh", backgroundSize: "cover", backgroundPosition: "center"}} >
            <h3></h3>
          </div>
          </div>
        </Slider>
      </div>

        );
    }
}  
        

export default home
