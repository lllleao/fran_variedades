import Header from './components/Header'
import Hero from './components/Hero'

import imgHeader from './assets/imgs/stars.webp'
import imgHero from './assets/imgs/caneca_uni.png'


function App() {
    const imagesHeader = [imgHeader]
    const imageHero = [imgHero]

    return (

        <main className='gackgourndPrimary'>
            <Header images={imagesHeader} />
            <Hero images={imageHero} />
        </main>

    )
}

export default App
