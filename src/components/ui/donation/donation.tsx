import React from 'react';
import styles from './donation.module.css';

import cup from "../../../assets/images/cupOfCoffee.svg"

function donation() {
    return (
        <div className={styles.feedbackDonation}>
            <div className={styles.donationMain}>
                <p className={styles.donationText}> Было полезно?</p>
                <img src={cup} alt={"Donation"} className={styles.donationImage}/>
            </div>
            <div className={styles.donationButton}>
                Отблагодарить
            </div>
        </div>
    );
}

export default donation;
