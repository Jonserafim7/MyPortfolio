import { ButtonWithIcon } from '@/components/ui/buttonWithIcon'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import AboutAccordion from './AboutAccordion'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function About() {
    // REFS
    const sectionContainerRef = useRef(null)
    const titleRef = useRef(null)
    const paragraphRef = useRef(null)
    const overlayRef = useRef(null)
    // const buttonRef = useRef(null)
    const lineTopRef = useRef(null)

    // GSAP ANIMATIONS
    useGSAP(
        () => {
            // VARIABLES

            // SPLITTING TEXT
            const paragraphSplit = new SplitType(paragraphRef.current)

            //TIMELINE
            const tl = gsap
                .timeline({
                    scrollTrigger: {
                        trigger: sectionContainerRef.current,
                        start: 'top 20%',
                        end: '+=100%',
                        toggleActions: 'play none none none', //onEnter, onLeave, onEnterBack, onLeaveBack
                    },
                    defaults: {
                        ease: 'power4.out',
                        duration: 1.5,
                    },
                })

                // .from(
                //     creativeMind,
                //     {
                //         xPercent: -100,
                //         opacity: 0,
                //         stagger: 0.2,
                //     },
                //     '0'
                // )
                // .from(
                //     technicalEdge,
                //     {
                //         yPercent: -100,
                //         opacity: 0,
                //         stagger: 0.2,
                //     },
                //     '-=1.2'
                // )

                .from(
                    paragraphSplit.lines,
                    {
                        yPercent: -210,
                        opacity: 0,
                        stagger: 0.1,
                    },
                    '-=1.2'
                )
            // .from(
            //     buttonRef.current,
            //     {
            //         xPercent: -100,
            //         opacity: 0,
            //     },
            //     '-=1.2'
            // )

            const scrubTl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionContainerRef.current,
                    start: 'top bottom',
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
                    overlayRef.current,
                    {
                        xPercent: 100,
                    },
                    '<'
                )
        },
        { scope: sectionContainerRef.current }
    )

    return (
        <section
            ref={sectionContainerRef}
            className="relative grid w-full overflow-hidden"
            id="home--about"
        >
            <div className="grid w-full place-content-center">
                <h2
                    ref={overlayRef}
                    className="z-10 font-mont text-[6rem] font-black uppercase leading-none text-indigo-200 opacity-10 md:text-[9.5rem] lg:text-[15rem] xl:text-[22rem]"
                >
                    About
                </h2>
            </div>

            <div className="container flex flex-col py-10 lg:py-20">
                <div className="flex w-full">
                    <h3 ref={titleRef} className="">
                        From Concept to Code:{' '}
                        <span className="text-teal-400">My Journey</span>
                    </h3>
                </div>

                <div className="mt-4 flex w-full items-center">
                    <p ref={paragraphRef} className="">
                        Hello, I'm Jonas, a front-end developer with a
                        foundational background in civil engineering. Bridging
                        the gap between structured engineering and creative web
                        development, my career transition is driven by a passion
                        to merge technical precision with aesthetic design.
                        Skilled in HTML, CSS, JavaScript, and React, I focus on
                        creating digital experiences that prioritize beauty and
                        functionality. Join me as we delve into my professional
                        journey, explore my evolving skill set, and look towards
                        future aspirations in the dynamic field of technology.
                    </p>
                </div>

                <div className="mt-4">
                    <AboutAccordion />
                </div>
            </div>

            <div
                ref={lineTopRef}
                className="absolute top-0 h-[1px] w-[100%] border-t border-neutral-800"
            ></div>
        </section>
    )
}
