import React from 'react';
import styles from './App.module.css';
import Header from "./components/layout/Header/Header";
import Main from "./components/layout/Main/main";

function App() {
    return (
        <div className={styles.App}>
            <Header/>
            <Main/>

        </div>
    );
}

export default App;
