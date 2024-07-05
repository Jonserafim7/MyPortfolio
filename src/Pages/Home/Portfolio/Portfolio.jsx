import { ButtonWithIcon } from '@/components/ui/buttonWithIcon'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import SplitType from 'split-type'
import ProjectsGrid from './ProjectsGrid'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Portfolio() {
    // REFS
    const sectionContainerRef = useRef(null)
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
    const overlayRef = useRef(null)
    // const buttonRef = useRef(null)
    const lineTopRef = useRef(null)
    // GSAP ANIMATIONS
    useGSAP(
        () => {
            // VARIABLES
            // const overlaySplit = new SplitType(overlayRef.current.children[0])
            const tl = gsap
                .timeline({
                    scrollTrigger: {
                        trigger: sectionContainerRef.current,
                        start: 'top 20%',
                        end: '+=100%',
                        toggleActions: 'play none none none', //onEnter, onLeave, onEnterBack, onLeaveBack
                        // pin: true,
                        // markers: true,
                    },
                    defaults: {
                        ease: 'power4.out',
                        duration: 1.5,
                    },
                })

                .from(
                    titleRef.current,
                    {
                        yPercent: 100,
                        opacity: 0,
                    },
                    '0'
                )
                .from(
                    subtitleRef.current,
                    {
                        yPercent: 140,
                        opacity: 0,
                    },
                    '-=1.2'
                )

            const scrubTl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionContainerRef.current,
                    start: 'top 80%',
                    end: 'top 10%',
                    scrub: 1,
                    // markers: true,
                },
            })

            scrubTl
                .from(
                    lineTopRef.current,
                    {
                        xPercent: -100,
                    },
                    ''
                )
                .from(
                    overlayRef.current.children[0],
                    {
                        yPercent: -100,
                        stagger: 0.05,
                    },
                    '<'
                )
                // .from(
                //     overlaySplit.chars,
                //     {
                //         yPercent: -100,
                //         stagger: 0.05,
                //     },
                //     '<'
                // )
                .from(
                    overlayRef.current.children[1],
                    {
                        xPercent: 100,
                    },
                    '-=0.5'
                )
        },
        { scope: sectionContainerRef.current }
    )

    return (
        <section
            id="home--portfolio"
            className="mt-10 flex w-full flex-col overflow-hidden md:mt-16"
        >
            {/* HEADING */}
            <div
                ref={sectionContainerRef}
                className="relative flex w-full flex-col items-center overflow-hidden p-2"
            >
                <h2
                    ref={overlayRef}
                    className="flex flex-col font-mont text-[6rem] font-black uppercase leading-none text-indigo-200 opacity-10 md:text-[9.5rem] lg:text-[15rem] xl:text-[22rem]"
                >
                    <span className="translate-x-[-5%]">Port</span>
                    <span className="translate-x-[0%] leading-[0.6]">
                        folio
                    </span>
                </h2>

                <h3 className="mt-5 flex flex-col leading-none md:mt-10 md:text-5xl lg:text-6xl">
                    {/* <span className="text-sm">The</span> */}
                    <span ref={titleRef} className="">
                        Highlighted
                    </span>
                    <span
                        ref={subtitleRef}
                        className="ml-auto italic text-teal-400"
                    >
                        projects
                    </span>
                </h3>

                <div
                    ref={lineTopRef}
                    className="absolute top-0 h-[1px] w-[100%] border-t border-neutral-800 px-40"
                ></div>
            </div>

            {/* PROJECTS */}
            <div className="container py-10 lg:py-20">
                <ProjectsGrid />
            </div>
        </section>
    )
}
