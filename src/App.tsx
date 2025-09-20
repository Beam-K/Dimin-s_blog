import React from 'react';
import styles from './App.module.css';
import Header from "./components/layout/Header/Header";
import Main from "./components/layout/Main/main";
import {CategoryProvider} from "./context/CategoryContext"

function App() {
    return (
        <CategoryProvider>
            <div className={styles.App}>
                <Header/>
                <Main/>
            </div>
        </CategoryProvider>
    );
}

export default App;
