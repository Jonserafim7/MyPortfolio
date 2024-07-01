import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Tools() {
    // REFS
    const tl = useRef(null)
    const sectionContainerRef = useRef(null)
    const titleContaineRef = useRef(null)
    const toolsContainerRef = useRef(null)

    // TOOLS ARRAY
    const toolsArray = ['HTML', 'CSS', 'JS', 'REACT', 'FIGMA']
    // map tools array to JSX elements
    const toolsElements = toolsArray.map((tool, index) => (
        <div
            key={index}
            className="flex w-max translate-x-[5%] transform text-[100px] font-bold leading-none text-neutral-300 drop-shadow-xl lg:text-[200px] xl:text-[300px]"
        >
            {tool}
        </div>
    ))

    // GSAP ANIMATIONS
    useGSAP(
        () => {
            // VARIABLES
            const toolsArray = gsap.utils.toArray(
                toolsContainerRef.current.children
            )
            const titleSplit = new SplitType(
                sectionContainerRef.current.querySelector('p')
            )

            // TITLE ANIMATION
            ScrollTrigger.create({
                trigger: sectionContainerRef.current,
                start: 'top 90%',
                toggleActions: 'play none none none', //onEnter, onLeave, onEnterBack, onLeaveBack
                animation: gsap.from(titleSplit.words, {
                    duration: 3,
                    stagger: 0.1,
                    opacity: 0,
                    // y: 100,
                    ease: 'power1.out',
                }),
            })

            // TOOLS ANIMATIONS
            toolsArray.forEach((tool, index) => {
                ScrollTrigger.create({
                    trigger: tool,
                    start: 'top 50%',
                    end: '+=500',
                    scrub: 1,
                    animation: gsap.from(tool, {
                        xPercent: index % 2 === 0 ? -100 : 100,
                        opacity: 0,
                        color: index % 2 === 0 ? '#14b8a6' : '#f43f5e',
                    }),
                })
            })
        },
        { scope: sectionContainerRef.current }
    )

    // JSX
    return (
        <section
            ref={sectionContainerRef}
            className="relative grid w-full overflow-hidden"
            id="home--tools"
        >
            {/* HEADER */}
            <div
                ref={titleContaineRef}
                className="flex items-center justify-center gap-8"
            >
                <p className="mt-2 text-center text-lg lg:text-2xl">
                    Discover the technologies <br /> that drive my work.
                </p>
            </div>

            {/* TOOLS */}
            <div
                ref={toolsContainerRef}
                className="relative mt-20 flex flex-col items-center"
            >
                {toolsElements}
            </div>
        </section>
    )
}
