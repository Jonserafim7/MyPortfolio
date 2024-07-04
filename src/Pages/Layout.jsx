import Header from './Header'
import { Outlet } from 'react-router-dom'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Layout() {
    const layoutRef = useRef(null)
    useGSAP(
        () => {
            gsap.to('progress', {
                value: 100,
                ease: 'none',
                scrollTrigger: { scrub: 0.3 },
            })
        },
        { scope: layoutRef.current }
    )
    return (
        <div ref={layoutRef} className="layout relative overflow-hidden">
            <progress max="100" value="0"></progress>
            <Header />
            <main className="">
                <Outlet />
            </main>
        </div>
    )
}
