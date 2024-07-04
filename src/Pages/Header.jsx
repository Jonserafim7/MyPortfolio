import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import SplitType from 'split-type'

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin)

export default function Header() {
    // REFS
    const headerRef = useRef(null)
    const menuTl = useRef()

    // function to toggle menu
    const toggleMenu = () => {
        menuTl.current.reversed(!menuTl.current.reversed())
    }

    // GSAP ANIMATIONS
    useGSAP(
        () => {
            // VARIABLES
            const container = headerRef.current.children[0]
            // console.log('container', container)

            const aside = headerRef.current.children[0].children[0]
            // console.log('aside', aside)

            const logo = headerRef.current.children[0].children[1]
            // console.log('logo', logo)

            const links = gsap.utils.toArray(
                headerRef.current.querySelectorAll('a')
            )
            // console.log('links', links)

            // MENU TIMELINE
            menuTl.current = gsap
                .timeline({ defaults: { ease: 'power3.out', duration: 0.3 } })
                .to(container, {
                    xPercent: 55,
                })
                .to(
                    logo,
                    {
                        xPercent: -15,
                    },
                    '0'
                )
                .from(
                    links,
                    {
                        xPercent: -100,
                        stagger: 0.1,
                    },
                    '0'
                )
                .reverse()
                .to(
                    aside.children[0],
                    {
                        yPercent: -100,
                    },
                    '0.1'
                )

            // LINKS ANIMATION
            links.forEach((link) => {
                let tl = gsap
                    .timeline({ paused: true })
                    .to([link.children[0], link.children[1]], {
                        yPercent: -100,
                        color: '#2dd4bf',
                        ease: 'power3.inOut',
                        duration: 0.3,
                    })

                link.addEventListener('mouseenter', () => tl.play())
                link.addEventListener('mouseleave', () => tl.reverse())

                // SCROLL TO LINK
                let element = document.querySelector(link.getAttribute('href'))

                const linkST = ScrollTrigger.create({
                    trigger: element,
                    start: 'top top',
                })

                link.addEventListener('click', (e) => {
                    e.preventDefault()
                    gsap.to(window, {
                        duration: 1,
                        scrollTo: linkST.start,
                        overwrite: 'auto',
                    })
                })
            })
        },
        { scope: headerRef.current }
    )

    return (
        <header
            ref={headerRef}
            className="fixed top-0 z-50 flex h-[10vh] w-full"
        >
            <div className="flex -translate-x-[55%] gap-10">
                <aside className="relative flex h-screen flex-col bg-neutral-865 px-16 font-mont font-normal uppercase">
                    <div className="absolute right-0 top-0 h-full w-[1px] translate-y-full border-r border-indigo-400/20"></div>

                    <nav className="mt-[10vh] text-2xl">
                        <ul className="flex flex-col gap-10">
                            <li>
                                <div className="link-mask overflow-hidden">
                                    <a
                                        className="relative flex flex-col"
                                        href="#home--hero"
                                    >
                                        <span>Home</span>
                                        <span className="absolute translate-y-full">
                                            Home
                                        </span>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="link-mask overflow-hidden">
                                    <a
                                        className="relative flex flex-col"
                                        href="#home--about"
                                    >
                                        <span>About</span>
                                        <span className="absolute translate-y-full">
                                            About
                                        </span>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="link-mask overflow-hidden">
                                    <a
                                        className="relative flex flex-col"
                                        href="#home--portfolio"
                                    >
                                        <span>Portfolio</span>
                                        <span className="absolute translate-y-full">
                                            Portfolio
                                        </span>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="link-mask overflow-hidden">
                                    <a
                                        className="relative flex flex-col"
                                        href="#home--contact"
                                    >
                                        <span>Contact</span>
                                        <span className="absolute translate-y-full">
                                            Contact
                                        </span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </aside>
                <div className="relative flex items-center gap-8 px-5">
                    {' '}
                    <button onClick={toggleMenu}>
                        <div className="flex h-6 w-8 flex-col justify-between">
                            <div className="h-1 w-1/2 rounded-full bg-neutral-50"></div>
                            <div className="h-1 w-full rounded-full bg-neutral-50"></div>
                            <div className="h-1 w-1/2 self-end rounded-full bg-neutral-50"></div>
                        </div>
                    </button>
                    <div className="font-mont text-3xl font-black md:text-4xl">
                        <span className="text-teal-400">J</span>onas
                    </div>
                </div>
            </div>
        </header>
    )
}
