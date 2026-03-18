import NavBar from './components/navbar';
import Hero from './components/hero';
import ProductViewer from './components/productViewer';

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