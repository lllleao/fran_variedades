import style from './Hero.module.css'
import { Buttons } from '../../containers/SlideButton/styleButtons'
import { ImageSlide } from '../../containers/SlideImage/styleImgSlide'
import { useEffect, useRef, useState } from 'react'
import propTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
const Hero = ({ images }) => {

    const [contador, setContador] = useState(0)

    const elementos = useRef()
    const elementosCheck = useRef()


    useEffect(() => {
        const autoMove = () => {
            if (contador === 2) {
                setContador(0)
            } else {
                setContador(item => item + 1)
            }
            console.log(contador);

            const inputs = elementosCheck.current.querySelectorAll('input')

            const spans = elementos.current.querySelectorAll('span')
            const spanFilho = inputs[contador].labels[0].childNodes[0]

            for (let i = 0; i < spans.length; i++) {
                spans[i].classList.remove('backFFF')
            }

            spanFilho.classList.add('backFFF')
            inputs[contador].checked = true

        };

        const intervalId = setInterval(autoMove, 3000);

        // Limpeza na desmontagem
        return () => clearInterval(intervalId);
    }, [contador]);


    // console.log(contador)

    const spanChange = (e) => {
        const spans = elementos.current.querySelectorAll('span')
        const spanFilho = e.target.labels[0].childNodes[0]

        for (let i = 0; i < spans.length; i++) {
            spans[i].classList.remove('backFFF')
        }

        spanFilho.classList.add('backFFF')
    }

    const spanBack = (e) => {
        e.target.classList.add('backFFF')
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
                    <ImageSlide ref={elementosCheck}>


                        <input onClick={spanChange} className="slide1" type="radio" name="slide" id="slide1" />

                        <input onClick={spanChange} className="slide2" type="radio" name="slide" id="slide2" />

                        <input onClick={spanChange} className="slide3" type="radio" name="slide" id="slide3" />


                        {
                            images.map(item => (
                                <img key={item} srcSet={item} alt="Foto de uma caneca" />
                            ))
                        }
                    </ImageSlide>
                    <Buttons ref={elementos}>

                        <label htmlFor={`slide1`}>
                            <span onClick={spanBack} className='backFFF'>
                            </span>
                        </label>
                        <label htmlFor={`slide2`}>
                            <span onClick={spanBack}>

                            </span>
                        </label>
                        <label htmlFor={`slide3`}>
                            <span onClick={spanBack}>

                            </span>
                        </label>

                    </Buttons>
                </div>
            </div>
        </section>

    )
}

Hero.propTypes = {
    images: propTypes.arrayOf(propTypes.string).isRequired
}

export default Hero
