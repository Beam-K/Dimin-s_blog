import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import styles from './App.module.css';
import Header from "./components/layout/Header/Header";
import Main from "./components/layout/Main/main";
import {CategoryProvider} from "./context/CategoryContext";
import Page404 from "./components/errorsPage/404/page404";
import Page500 from "./components/errorsPage/500/page500";


function App() {
    return (<Router>
            <CategoryProvider>

                <div className={styles.App}>
                    <Routes>
                        {/* Главная страница */}
                        <Route path="/" element={
                            <>
                                <Header/>
                                <Main/>
                            </>
                        }/>

                        {/* Страница 404 */}
                        <Route path="/404" element={<Page404/>}/>

                        {/* Страница 500 */}
                        <Route path="/500" element={<Page500/>}/>

                        {/* Любой другой путь ведет на 404 */}
                        <Route path="*" element={<Page404/>}/>
                    </Routes>
                </div>

            </CategoryProvider>
        </Router>
    );
}

export default App;