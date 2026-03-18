import { useRef, useEffect } from "react";

const Hero = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) videoRef.current.playbackRate = 2;
    }, []);

    return (
        <section id="hero">
            <div>
                <h1>MacBook Pro</h1>
                <img src="/title.png" alt="Macbook Title" draggable={false} />
            </div>

            <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline></video>
            <button>Buy</button>
            <p>From $1999 or $119/mo. for 24 mo. <a href="#">Learn more</a></p>
        </section>
    )
}

export default Hero