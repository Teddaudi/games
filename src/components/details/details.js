import React from 'react'
import Detail1 from '../../images/banner7.jpg'
import styles from './details.module.css'

function details() {
    return (
        <div className={styles.details}>
            <div className="detal" style={{background: `#ccc url(${Detail1})`, minHeight: "70vh", backgroundSize: "cover", backgroundPosition: "center"}}>
            <h10>Contact Us</h10>
            <p>Email Address : daudited@gmail.com
                             : naishoes@gmail.com
               Phone No. : +254 707894405
                         : +254 724690324
               Location : Nairobi ,Kenya

            </p>
            </div>
        </div>
    )
}

export default details
