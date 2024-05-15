import style from './Header.module.css'


// eslint-disable-next-line react/prop-types
const Header = ({ images }) => {

    const nav = [
        {
            id: '1',
            titulo: 'Início',
        },
        {
            id: '2',
            titulo: 'Produtos',
        },
        {
            id: '3',
            titulo: 'Fale conosco',
        }
    ]

    return (
        <header className={style.background}>
            {/* <div className={style.imageContainerLeft}>
                <img className={style.headerImgOne} srcSet={images[0]} alt='faiscas' />
                <img className={style.headerImgTwo} srcSet={images[0]} alt='faiscas' />
            </div> */}
            <div className={style.logo}>
                <img alt="" srcSet={images[1]} />
            </div>
            <div className={`${style.navheader}`}>
                <nav>
                    <ul className={style.navheaderList}>
                        {
                            nav.map(item => (
                                <li key={item.id} className={style.navheaderListItem}>
                                    <a href="#">
                                        {item.titulo}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
            {/* <div className={style.imageContainerRight}>
                <img className={style.headerImgOne} srcSet={images[0]} alt='faiscas' />
                <img className={style.headerImgTwo} srcSet={images[0]} alt='faiscas' />
            </div> */}
        </header>
    )

}

export default Header