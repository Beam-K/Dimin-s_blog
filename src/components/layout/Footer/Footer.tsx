import React from 'react';
import styles from './Footer.module.css';
import tg from "../../../assets/images/tg.png"
import githab from "../../../assets/images/githab.png"
import {Link} from "react-router-dom";


function Footer() {

    return (
        <div className={styles.footer}>

            <div className={styles.iconForFooter}>
                <Link to="https://t.me/melkovdev">
                    <img src={tg} alt="tg" className={styles.tg}/>
                </Link>
                <Link to="https://github.com/mlkvs">
                    <img src={githab} alt="githab" className={styles.tg}/>
                </Link>


            </div>
            <div className={styles.linkForFooter}>
                <Link to='https://t.me/mrrebrik_user' className={styles.linkForFooter}>
                    @melkov
                </Link>
            </div>


        </div>
    );
}

export default Footer;