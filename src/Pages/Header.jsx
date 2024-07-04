import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import SplitType from 'split-type'
import { ButtonWithIcon } from '@/components/ui/buttonWithIcon'

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin)

export default function Header() {
    // REFS
    const headerRef = useRef(null)
    const menuTl = useRef()
    const githubLinkRef = useRef(null)

    // function to toggle menu
    const toggleMenu = () => {
        menuTl.current.reversed(!menuTl.current.reversed())
    }

    // // GSAP ANIMATIONS
    useGSAP(
        () => {
            // // VARIABLES
            const aside = headerRef.current.children[1]

            const links = gsap.utils.toArray(
                headerRef.current.querySelectorAll('nav li a')
            )
            console.log('links', links)

            // MENU TIMELINE
            menuTl.current = gsap
                .timeline({ defaults: { ease: 'power3.out', duration: 0.3 } })
                .from(aside, {
                    xPercent: 100,
                })
                .to(
                    aside.children[0],
                    {
                        yPercent: -100,
                    },
                    '0.1'
                )
                .from(
                    links,
                    {
                        xPercent: 100,
                        stagger: 0.1,
                    },
                    '0'
                )
                .from(
                    githubLinkRef.current,
                    {
                        xPercent: -100,
                    },
                    '0'
                )
                .reverse()

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
            <div className="w-full px-4">
                <button
                    className="relative flex w-max items-center gap-4 p-8"
                    onClick={toggleMenu}
                >
                    <div className="font-mont text-3xl font-black md:text-4xl">
                        <span className="text-teal-400">J</span>onas
                    </div>
                    <div className="flex h-6 w-8 flex-col justify-between">
                        <div className="h-1 w-1/2 rounded-full bg-neutral-50"></div>
                        <div className="h-1 w-full rounded-full bg-neutral-50"></div>
                        <div className="h-1 w-1/2 self-end rounded-full bg-neutral-50"></div>
                    </div>
                </button>
            </div>

            <aside className="relative flex h-screen w-full flex-col px-8 font-mont font-medium uppercase before:absolute before:inset-0 before:-z-10 before:backdrop-blur-md before:backdrop-brightness-75 lg:px-16">
                <div className="absolute left-0 top-0 h-full w-[1px] translate-y-full border-l border-indigo-400/20"></div>
                <div className="link-mask absolute bottom-0 left-0 ml-2 overflow-hidden">
                    <a
                        ref={githubLinkRef}
                        href="https://github.com/Jonserafim7"
                        target="_blank"
                    >
                        <ButtonWithIcon variant="ghost" size="">
                            <svg
                                width="30"
                                height="30"
                                viewBox="0 0 60 60"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M30 5C26.717 5 23.4661 5.64664 20.4329 6.90301C17.3998 8.15938 14.6438 10.0009 12.3223 12.3223C7.63392 17.0107 5 23.3696 5 30C5 41.05 12.175 50.425 22.1 53.75C23.35 53.95 23.75 53.175 23.75 52.5V48.275C16.825 49.775 15.35 44.925 15.35 44.925C14.2 42.025 12.575 41.25 12.575 41.25C10.3 39.7 12.75 39.75 12.75 39.75C15.25 39.925 16.575 42.325 16.575 42.325C18.75 46.125 22.425 45 23.85 44.4C24.075 42.775 24.725 41.675 25.425 41.05C19.875 40.425 14.05 38.275 14.05 28.75C14.05 25.975 15 23.75 16.625 21.975C16.375 21.35 15.5 18.75 16.875 15.375C16.875 15.375 18.975 14.7 23.75 17.925C25.725 17.375 27.875 17.1 30 17.1C32.125 17.1 34.275 17.375 36.25 17.925C41.025 14.7 43.125 15.375 43.125 15.375C44.5 18.75 43.625 21.35 43.375 21.975C45 23.75 45.95 25.975 45.95 28.75C45.95 38.3 40.1 40.4 34.525 41.025C35.425 41.8 36.25 43.325 36.25 45.65V52.5C36.25 53.175 36.65 53.975 37.925 53.75C47.85 50.4 55 41.05 55 30C55 26.717 54.3534 23.4661 53.097 20.4329C51.8406 17.3998 49.9991 14.6438 47.6777 12.3223C45.3562 10.0009 42.6002 8.15938 39.5671 6.90301C36.5339 5.64664 33.283 5 30 5Z"
                                    fill="#F5F4F2"
                                />
                            </svg>
                            <span>Github</span>
                        </ButtonWithIcon>
                    </a>
                </div>

                <nav className="mt-[10vh] md:text-2xl">
                    <ul className="flex flex-col gap-10">
                        <li>
                            <div className="link-mask overflow-hidden">
                                <a
                                    className="relative flex flex-col"
                                    href="#home--hero"
                                >
                                    <span>Start</span>
                                    <span className="absolute translate-y-full">
                                        Start
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
        </header>
    )
}
