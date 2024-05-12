import { useState } from 'react'

import style from './Hero.module.css'

const Hero = ({ images }) => {
    const [contador, setContador] = useState(0)

    const move = (e) => {
        setContador()
    }

    return (
        <section className={style.hero}>
            <div className={`${style.containerHero} container`}>
                <div className={style.heroCall}>
                    <h1 className={style.heroTitle}>
                        O LIMITE É SUA IMAGINAÇÃO
                    </h1>
                    <button className={style.heroButton} type="button">GARANTA JÁ O SEU</button>
                </div>
                <div className={style.heroCarrossel}>
                    <div className={style.slides}>
                        <input className={style.slide1} type="radio" name="slide" id="slide1" />
                        <input className={style.slide2} type="radio" name="slide" id="slide2" />
                        <input className={style.slide3} type="radio" name="slide" id="slide3" />


                        <img className={`${style.heroCarrosselImg} ${contador === 1? move(): ''}`} srcSet={images[0]} alt="" />
                        <img className={`${style.heroCarrosselImg}`} srcSet={images[0]} alt="" />
                        <img className={`${style.heroCarrosselImg}`} srcSet={images[0]} alt="" />
                    </div>
                    <div className={style.slideButton}>
                        <label className={style.label1} htmlFor="slide1">
                            <span>

                            </span>
                        </label>
                        <label className={style.label2} htmlFor="slide2">
                            <span>

                            </span>
                        </label>
                        <label className={style.label3} htmlFor="slide3">
                        <span>

                        </span>
                        </label>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero