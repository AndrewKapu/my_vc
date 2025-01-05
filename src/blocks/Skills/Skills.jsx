import React from 'react';
import './Skills.scss';
import Icons from '../../assets/img/icons.svg';

function Skills() {

    window.onload = () => {
        // Code for stopping page from scrolling while burger is opened
        function onEntry(entry) {
            entry.forEach(change => {
                if (change.isIntersecting) {
                    change.target.classList.add('show');
                }
            });
        }

        let options = {
            threshold: [0.2]
        };
        let observer = new IntersectionObserver(onEntry, options);
        let elements = document.querySelectorAll('.header, .hero, .skills');

        for (let elm of elements) {
            observer.observe(elm);
        }

        // Code for smooth moving to links on page by anchors
        const anchors = document.querySelectorAll('a[href*="#"]')

        for (let anchor of anchors) {
            anchor.addEventListener('click', function (e) {
                e.preventDefault()

                const blockID = anchor.getAttribute('href').substr(1)

                document.getElementById(blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            })
        }
    };

    return (
        <div className="wrapper-skills">
            <article id="skills" className="skills">
                <div className="container">
                    <h2 className="skills__list-h2">Навыки</h2>
                    <div className="skills__list">
                        {/* item start */}
                        <div className="skills__item">
                            <h3 className="skills__item-h3">Вёрстка</h3>
                            <div className="skills__item-techs">
                                <svg viewBox="0 0 128 128" className="icon">
                                    <use href={`${Icons}#html`} />
                                </svg>
                                <svg viewBox="0 0 128 128" className="icon">
                                    <use href={`${Icons}#css`} />
                                </svg>
                            </div>
                            <p className="skills__item-p">
                                Валидная, кроссбраузерная, адаптивная вёрстка.
                            </p>
                            <h3 className="skills__item-list-h">Технологии</h3>
                            <ul className="skills__item-list">
                                <li className="skills__item-list-elem">HTML5</li>
                                <li className="skills__item-list-elem">CSS3</li>
                                <li className="skills__item-list-elem">SASS</li>
                                <li className="skills__item-list-elem">BEM</li>
                                <li className="skills__item-list-elem">Bootstrap, Tailwind</li>
                                <li className="skills__item-list-elem">PostCSS</li>
                            </ul>
                        </div>
                        {/* item end */}
                        {/* item start */}
                        <div className="skills__item">
                            <h3 className="skills__item-h3">JavaScript</h3>
                            <div className="skills__item-techs">
                                <svg viewBox="0 0 128 128" className="icon">
                                    <use href={`${Icons}#js`} />
                                </svg>
                                <svg viewBox="0 0 128 128" className="icon">
                                    <use href={`${Icons}#ts`} />
                                </svg>
                            </div>
                            <p className="skills__item-p">Глубокое пониамание JavaScript.</p>
                            <h3 className="skills__item-list-h">Технологии</h3>
                            <ul className="skills__item-list">
                                <li className="skills__item-list-elem">ES6+</li>
                                <li className="skills__item-list-elem">ООП</li>
                                <li className="skills__item-list-elem">Прототипы</li>
                                <li className="skills__item-list-elem">Замыкания</li>
                                <li className="skills__item-list-elem">Event Loop</li>
                                <li className="skills__item-list-elem">TypeScript</li>
                            </ul>
                            {/*  ES6+, ООП, Пртотипы */}
                        </div>
                        {/* item end */}
                        {/* item start */}
                        <div className="skills__item">
                            <h3 className="skills__item-h3">React</h3>
                            <svg viewBox="0 0 128 128" className="icon">
                                <use href={`${Icons}#react`} />
                            </svg>
                            <p className="skills__item-p">Практический опыт и понимание философии React.</p>
                            <h3 className="skills__item-list-h">Технологии</h3>
                            <ul className="skills__item-list">
                                <li className="skills__item-list-elem">JSX</li>
                                <li className="skills__item-list-elem">Основные Хуки</li>
                                <li className="skills__item-list-elem">Компонентный подход</li>
                                <li className="skills__item-list-elem">SSR на React (Next JS)</li>
                            </ul>
                        </div>
                        {/* item end */}
                        {/* item start */}
                        <div className="skills__item">
                            <h3 className="skills__item-h3">Сборка, таск-раннеры</h3>
                            <div className="skills__item-techs">
                                <svg viewBox="0 0 128 128" className="icon">
                                    <use href={`${Icons}#webpack`} />
                                </svg>
                                <svg viewBox="0 0 128 128" className="icon">
                                    <use href={`${Icons}#gulp`} />
                                </svg>
                            </div>
                            <p className="skills__item-p">
                                Владение инструментами сборки и автоматизации рутинных задач.
                            </p>
                            <h3 className="skills__item-list-h">Технологии</h3>
                            <ul className="skills__item-list">
                                <li className="skills__item-list-elem">Webpack</li>
                                <li className="skills__item-list-elem">Gulp</li>
                                <li className="skills__item-list-elem">Babel</li>
                            </ul>
                        </div>
                        {/* item end */}
                         {/* item start */}
                         <div className="skills__item">
                            <h3 className="skills__item-h3">GIT</h3>
                            <div className="skills__item-techs">
                                <svg viewBox="0 0 128 128" className="icon">
                                    <use href={`${Icons}#git`} />
                                </svg>
                                <svg viewBox="0 0 128 128" className="icon">
                                    <use href={`${Icons}#github`} />
                                </svg>
                            </div>
                            <p className="skills__item-p">
                                Владение инстурментами командной разработки.
                            </p>
                            <h3 className="skills__item-list-h">Технологии</h3>
                            <ul className="skills__item-list">
                                <li className="skills__item-list-elem">Git</li>
                                <li className="skills__item-list-elem">Github</li>
                                <li className="skills__item-list-elem">Revert</li>
                                <li className="skills__item-list-elem">Работа с ветками</li>
                                <li className="skills__item-list-elem">Pull request</li>
                                <li className="skills__item-list-elem">Resolve кофликтов</li>
                            </ul>
                        </div>
                        {/* item end */}
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Skills