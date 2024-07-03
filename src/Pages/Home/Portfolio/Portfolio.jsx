import { ButtonWithIcon } from '@/components/ui/buttonWithIcon'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import ProjectsGrid from './ProjectsGrid'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Portfolio() {
    // REFS
    const sectionContainerRef = useRef(null)
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
    const overlayRef = useRef(null)
    const buttonRef = useRef(null)
    const lineTopRef = useRef(null)
    // GSAP ANIMATIONS
    useGSAP(
        () => {
            // VARIABLES
            const overlaySplit = new SplitType(overlayRef.current.children[0])
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
                    overlaySplit.chars,
                    {
                        yPercent: -100,
                        stagger: 0.05,
                    },
                    '<'
                )
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
        <section className="flex w-full flex-col overflow-hidden">
            {/* HEADING */}
            <div
                ref={sectionContainerRef}
                className="relative grid h-screen w-full place-content-center overflow-hidden"
            >
                <div className="container flex items-center justify-center gap-20">
                    <div className="overflow-hidden py-2">
                        <h2 className="flex flex-col text-8xl">
                            {/* <span className="text-sm">The</span> */}
                            <span ref={titleRef} className="">
                                Highlighted
                            </span>
                            <span
                                ref={subtitleRef}
                                className="ml-auto font-roboto text-4xl italic text-teal-400"
                            >
                                projects
                            </span>
                        </h2>
                    </div>
                </div>

                <div
                    ref={overlayRef}
                    className="absolute left-1/2 top-0 z-10 flex translate-x-[-50%] flex-col font-mont text-[28rem] font-bold uppercase leading-none text-indigo-200 opacity-10"
                >
                    <span className="translate-x-[-10%]">Port</span>
                    <span className="translate-x-[0%] leading-[0.6]">
                        folio
                    </span>
                </div>

                <div
                    ref={lineTopRef}
                    className="absolute top-0 h-[1px] w-[100%] border-t border-neutral-800 px-40"
                ></div>
            </div>

            {/* PROJECTS */}
            <div className="container w-full">
                <ProjectsGrid />
            </div>

            {/* CTA */}
            <div className="mt-20 grid w-full place-content-center overflow-hidden">
                <div ref={buttonRef}>
                    <ButtonWithIcon variant="">
                        View all projects
                    </ButtonWithIcon>
                </div>
            </div>
        </section>
    )
}
