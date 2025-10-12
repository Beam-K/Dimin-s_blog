import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import styles from './App.module.css';
import Header from "./components/layout/Header/Header";
import Main from "./components/layout/Main/main";
import {CategoryProvider} from "./context/CategoryContext";
import Page404 from "./components/errorsPage/404/page404";
import Page500 from "./components/errorsPage/500/page500";

import Donation from "./components/ui/donation/donation";
import AuthorizationWindow from "./components/layout/authorizationWindow/authorizationWindow";


function App() {
    return (<Router>
            <CategoryProvider>

                <div className={styles.App}>
                    <Routes>

                        <Route path="/" element={
                            <>
                                <Header/>
                                <Main/>
                            </>
                        }/>
                        <Route path="don" element={<Donation/>}/>


                        <Route path="/404" element={<Page404/>}/>


                        <Route path="/500" element={<Page500/>}/>
                        <Route path="/author" element={<AuthorizationWindow/>}/>


                        <Route path="*" element={<Page404/>}/>


                    </Routes>
                </div>

            </CategoryProvider>
        </Router>
    );
}

export default App;