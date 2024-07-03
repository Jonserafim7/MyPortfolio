import { ButtonWithIcon } from '@/components/ui/buttonWithIcon'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function About() {
    // REFS
    const sectionContainerRef = useRef(null)
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
    const paragraphRef = useRef(null)
    const overlayRef = useRef(null)
    const buttonRef = useRef(null)
    const lineTopRef = useRef(null)
    // GSAP ANIMATIONS
    useGSAP(
        () => {
            // VARIABLES
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
                .from(
                    paragraphRef.current,
                    {
                        yPercent: 210,
                        opacity: 0,
                    },
                    '-=1.2'
                )
                .from(
                    buttonRef.current,
                    {
                        xPercent: -100,
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
            className="relative grid h-screen w-full place-content-center overflow-hidden"
        >
            <div className="container grid grid-cols-2 gap-20">
                <aside className="flex flex-col items-end justify-center text-right">
                    <div className="overflow-hidden">
                        <h2 ref={titleRef} className="flex text-8xl">
                            <span className="text-sm">The</span>
                            <span className="">Creative</span>
                        </h2>
                    </div>
                    <div className="overflow-hidden">
                        <p
                            ref={subtitleRef}
                            className="mt-[-0.5rem] text-4xl italic text-teal-400"
                        >
                            mind
                        </p>
                    </div>
                </aside>
                <main className="">
                    <div className="overflow-hidden">
                        <p ref={paragraphRef} className="">
                            With a unique journey from civil engineering to
                            front-end development, I bring a blend of technical
                            precision and creative flair to every project. My
                            passion for crafting user-friendly, visually
                            appealing digital experiences drives my work.
                            Following core principles in UI/UX design and
                            equipped with a strong foundation in HTML, CSS,
                            JavaScript, and React, I'm dedicated to transforming
                            ideas into stunning realities.
                        </p>
                    </div>
                    <div className="mt-6 w-max overflow-hidden">
                        <div ref={buttonRef}>
                            <ButtonWithIcon variant="">
                                Learn more
                            </ButtonWithIcon>
                        </div>
                    </div>
                </main>
            </div>

            <span
                ref={overlayRef}
                className="absolute left-1/2 top-0 z-10 translate-x-[-50%] font-mont text-[28rem] font-bold uppercase leading-none text-indigo-200 opacity-10"
            >
                About
            </span>

            <div
                ref={lineTopRef}
                className="absolute top-0 h-[1px] w-[100%] border-t border-neutral-800 px-40"
            ></div>
        </section>
    )
}
