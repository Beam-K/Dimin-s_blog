import React, {useState} from 'react';
import styles from './authorizationWindow.module.css';
import exit from "../../../assets/icons/exit.svg"
import vk from "../../../assets/icons/socialIcon/vk.svg"
import google from "../../../assets/icons/socialIcon/google.svg"
import yandex from "../../../assets/icons/socialIcon/yandex.svg"

function AuthorizationWindow() {
    const [isChecked, setIsChecked] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className={styles.authorizationWindow}>
            <div className={styles.shellPage}>
                <div className={styles.closeBut}>
                    <img src={exit} alt="Закрыть"/>
                </div>
                <div className={styles.shellContent}>
                    <div className={styles.header}>
                        <h2>Авторизация</h2>
                    </div>
                    <div className={styles.userInputs}>
                        <input
                            className={styles.Input}
                            placeholder="Имя и фамилия"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            className={styles.Input}
                            placeholder="Почта"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            className={styles.Input}
                            placeholder="Пароль"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className={styles.loginBut}>
                            Войти
                        </div>
                    </div>
                    <label className={styles.checkbox}>
                        <input
                            type="checkbox"
                            checked={isChecked} //
                            onChange={(e) => setIsChecked(e.target.checked)}
                            className={styles.hiddenInput}
                        />
                        <span className={`${styles.customCheckbox} ${isChecked ? styles.checked : ''}`}/>
                        <p className={styles.label}>Я соглашаюсь с правилами пользования сайтом и<br/>
                            даю согласие на обработку персональных данных</p>
                    </label>

                    <div>
                        <div className={styles.socialAuth}>
                            <p>Войти через соцсети</p>
                            <div className={styles.socialButtons}>
                                <button className={styles.socialButton}>
                                    <img src={vk} className={styles.socialIcon}/>
                                    ВК
                                </button>
                                <button className={styles.socialButton}>
                                    <img src={google} className={styles.socialIcon}/>
                                    Google
                                </button>
                                <button className={styles.socialButton}>
                                    <img src={yandex} className={styles.socialIcon}/>
                                    Яндекс
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthorizationWindow;