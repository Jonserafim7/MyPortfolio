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
    const paragraphRef = useRef(null)
    const overlayRef = useRef(null)
    const buttonRef = useRef(null)
    const lineTopRef = useRef(null)

    // GSAP ANIMATIONS
    useGSAP(
        () => {
            // VARIABLES
            const creativeMind = gsap.utils.toArray(
                titleRef.current.children[0].children
            )
            const technicalEdge = gsap.utils.toArray(
                titleRef.current.children[1].children
            )

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

                .from(
                    creativeMind,
                    {
                        xPercent: -100,
                        opacity: 0,
                        stagger: 0.2,
                    },
                    '0'
                )
                .from(
                    technicalEdge,
                    {
                        yPercent: -100,
                        opacity: 0,
                        stagger: 0.2,
                    },
                    '-=1.2'
                )

                .from(
                    paragraphSplit.lines,
                    {
                        yPercent: -210,
                        opacity: 0,
                        stagger: 0.1,
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

            <div className="container flex flex-col p-10 lg:flex-row lg:justify-center lg:gap-10 lg:p-20 xl:gap-20">
                <div className="flex w-full grow overflow-hidden">
                    <h3
                        ref={titleRef}
                        className="flex w-full flex-col md:text-5xl lg:items-end lg:gap-5 xl:text-6xl"
                    >
                        <span className="flex gap-2 lg:flex-col lg:items-end">
                            <span>Creative</span>{' '}
                            <span className="italic text-teal-400"> Mind</span>
                        </span>

                        <span className="flex gap-2 lg:flex-col lg:items-end">
                            <span>Technical</span>
                            <span className="italic text-indigo-400">Edge</span>
                        </span>
                    </h3>
                </div>

                <div className="mt-4 w-full shrink lg:mt-0">
                    <article className="overflow-hidden">
                        <p ref={paragraphRef} className="">
                            With a unique journey from civil engineering to
                            front-end development, I bring a blend of technical
                            precision and creative flair to every project. My
                            passion for crafting user-friendly, visually
                            appealing digital experiences drives my work.
                            <br />
                            <br />
                            Following core principles in UI/UX design and
                            equipped with a strong foundation in HTML, CSS,
                            JavaScript, and React, I'm dedicated to transforming
                            ideas into stunning realities.
                        </p>
                    </article>
                    <div className="mt-8 w-max overflow-hidden xl:mt-10">
                        <div ref={buttonRef}>
                            <ButtonWithIcon variant="">
                                Learn more
                            </ButtonWithIcon>
                        </div>
                    </div>
                </div>
            </div>

            <div
                ref={lineTopRef}
                className="absolute top-0 h-[1px] w-[100%] border-t border-neutral-800"
            ></div>
        </section>
    )
}
