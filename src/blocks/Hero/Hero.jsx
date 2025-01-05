import React from 'react';
import './Hero.scss';
import Me from '../../assets/img/38_c.jpg';


function Hero() {

    return (
        <div id="hero" className="wrapper-hero">
            <section id="about" className="hero">
                <div className="container">
                    <div className="hero-content">
                        <p className="hero-content__text">
                            Здравствуйте! Я&nbsp;люблю создавать удобные
                            и&nbsp;лаконичные&nbsp;интерфейсы. Это&nbsp;мой сайт, где
                            вы&nbsp;можете ознакомиться с&nbsp;моими навыками и&nbsp;опытом.
                        </p>
                        <img className="hero-content__photo" src={Me} alt="me" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero