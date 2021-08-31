import React from 'react'
import styles from './customers.module.css'
import card1 from "../../images/banner14.jpg"
import card2 from "../../images/banner16.jpg"


function customers() {
    return (
        <div className={styles.customers}>
            <div class="container">
  <div class="row">
    <div class="col-md-6">
     <img src={card1} alt="card1"/>
    </div>
    <div class="col-md-6">
    <img src={card2} alt="card2"/>

    </div>
  </div>
</div>
        </div>
    )
}

export default customers
