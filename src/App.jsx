import NavBar from './components/navbar';
import Hero from './components/hero';
import ProductViewer from './components/productViewer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

//import SplashCursor from './components/cursor/splashCursor';

const App = () => {
    return (
        <main>
            {/* <SplashCursor /> */}
            <NavBar />
            <Hero />
            <ProductViewer />
        </main>
    )
}

export default App