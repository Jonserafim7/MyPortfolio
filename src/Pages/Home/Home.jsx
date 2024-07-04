// components
import Hero from './Hero'
import About from './About'
import Portfolio from './Portfolio/Portfolio'
import Contact from './Contact'
//react
import { useRef } from 'react'
//gsap
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
//gsap plugins
gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Home() {
    // refs
    const homeRef = useRef(null)

    // gsap animations
    useGSAP(() => {}, { scope: homeRef })
    return (
        <div
            ref={homeRef}
            className="home flex h-full w-full flex-col overflow-hidden"
        >
            <Hero />
            <About />
            <Portfolio />
            <Contact />
        </div>
    )
}
