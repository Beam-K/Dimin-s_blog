import React from 'react';
import styles from './donation.module.css';
import cup from "../../../assets/images/cupOfCoffee.svg"

function donation() {
    return (
        <div className={styles.donation}>
            <div>
                <img src={cup} alt={"Donation"} className={styles.cup}/>
            </div>
            <div className={styles.butDonation}>
                Отблагодарить
            </div>

        </div>
    );
}

export default donation;
