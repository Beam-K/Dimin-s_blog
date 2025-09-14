import React from 'react';
import styles from './inputSearch.module.css';

import SearchIcon from "../../../assets/icons/SearchIcon.svg"


function Search() {
    return (
        <div className={styles.Search}>

            <img src={SearchIcon} alt="Search" className={styles.SearchIcon}/>
            <input className={styles.Input} placeholder="Поиск"/>

        </div>
    )
        ;
}

export default Search;
