import style from './Header.module.css'

const Hero = ({ images }) => {

    const nav = ['Início', 'Produtos', 'Fale Conosco']

    return (
        <header className={style.background}>
            <div className={style.imageContainerLeft}>
                <img className={style.headerImgOne} srcSet={images[0]} alt='faiscas' />
                <img className={style.headerImgTwo} srcSet={images[0]} alt='faiscas' />
            </div>
            <div className={`container ${style.header}`}>
                <nav>
                    <ul className={style.headerList}>
                        {
                            nav.map(item => (
                                <li key={item} className={style.headerListItem}>
                                    <a href="#">
                                        {item}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
            <div className={style.imageContainerRight}>
                <img className={style.headerImgOne} srcSet={images[0]} alt='faiscas' />
                <img className={style.headerImgTwo} srcSet={images[0]} alt='faiscas' />
            </div>
        </header>
    )

}

export default Hero