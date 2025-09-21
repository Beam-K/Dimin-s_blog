import React from 'react';
import styles from './App.module.css';
import Header from "./components/layout/Header/Header";
import Main from "./components/layout/Main/main";
import {CategoryProvider} from "./context/CategoryContext"
import Page404 from "./components/errorsPage/404/page404";
import Page500 from "./components/errorsPage/500/page500";

function App() {
    const [currentView, setCurrentView] = React.useState('main');

    return (
        <CategoryProvider>
            <div className={styles.App}>
                {/* Временные кнопки переключения */}
                <div style={{position: 'fixed', top: '10px', right: '10px', zIndex: 1000}}>
                    <button onClick={() => setCurrentView('main')} style={{margin: '5px'}}>
                        Главная
                    </button>
                    <button onClick={() => setCurrentView('404')}
                            style={{margin: '5px', background: 'red', color: 'white'}}>
                        404
                    </button>
                    <button onClick={() => setCurrentView('500')}
                            style={{margin: '5px', background: 'blue', color: 'white'}}>
                        500
                    </button>
                </div>

                {/* Переключение между видами */}
                {currentView === 'main' && (
                    <>
                        <Header/>
                        <Main/>
                    </>
                )}
                {currentView === '404' && <Page404/>}
                {currentView === '500' && <Page500/>}
            </div>
        </CategoryProvider>
    );
}

export default App;
