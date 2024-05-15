import Header from './components/Header'
import Hero from './components/Hero'

import imgHeader from './assets/imgs/stars.webp'
import imgHero01 from './assets/imgs/caneca_uni.png'
import imgHero02 from './assets/imgs/camisa_pai.png'
import imgHero03 from './assets/imgs/caneca_autismo_cop.png'
import imgLogo from './assets/imgs/logo.png'

function App() {
    const imagesHeader = [imgHeader, imgLogo]
    const imageHero = [imgHero01, imgHero02, imgHero03]

    return (

        <main className='gackgourndPrimary'>
            <Header images={imagesHeader} />
            <Hero images={imageHero} />
        </main>

    )
}

export default App
