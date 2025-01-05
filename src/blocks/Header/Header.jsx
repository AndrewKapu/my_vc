import React, { useState } from 'react';
import './Header.scss';
import '../Burger/Burger.scss';
import '../Link/Link.scss';


function Header() {
    let [burgerState, setBurgerState] = useState('closed');

    function toggleBurger(e) {
        let burgerBtn = e.target;
        burgerState = burgerState === 'closed' ? 'opened' : 'closed';
        setBurgerState(burgerState);
        if (burgerState === 'opened') {
            burgerBtn.setAttribute('checked', 'true');
        } else {
            burgerBtn.setAttribute('checked', 'false');
        }
        document.body.classList.toggle('stopScroll');
    }

    function handleBurgerLinkClick() {
        //Step 1: Close burger
        let burgerBtn = document.getElementById('burger-toggle');
        burgerBtn.click();
        document.body.classList.remove('stopScroll');
    }



    return (
        <div className="wrapper-header">
            <div className="container">
                <header className="header">
                    <h1 className="header__h1">
                        <a href="./index.html">
                            Андрей <br />
                            Капустин
                        </a>
                    </h1>
                    <nav className="header__nav">
                        <a className="link" href="#about">
                            Обо мне
                        </a>
                        <a className="link" href="#skills">
                            Навыки
                        </a>
                        <a className="link" href="#">
                            Портфолио
                        </a>
                        <a className="link" href="#">
                            Контакты
                        </a>
                    </nav>
                    {/* Burger start */}
                    <nav className="burger-wrapper">
                        <input id="burger-toggle" className="burger-toggle" type="checkbox"
                            onClick={toggleBurger}
                        />
                        <label className="burger-label" htmlFor="burger-toggle">
                            <span />
                        </label>
                        <ul className="burger-links">
                            <li>
                                <a onClick={handleBurgerLinkClick} href="#about" className="burger__item link">
                                    Обо мне
                                </a>
                            </li>
                            <li>
                                <a onClick={handleBurgerLinkClick} href="#skills" className="burger__item link">
                                    Навыки
                                </a>
                            </li>
                            <li>
                                <a onClick={handleBurgerLinkClick} href="#" className="burger__item link">
                                    Портфолио
                                </a>
                            </li>
                            <li>
                                <a onClick={handleBurgerLinkClick} href="#" className="burger__item link">
                                    Контакты
                                </a>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        </div>
    )
}

export default Header