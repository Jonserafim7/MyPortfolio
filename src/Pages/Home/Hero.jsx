// Dependencies
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import { ButtonWithIcon } from '@/components/ui/buttonWithIcon'

// GSAP PLUGINS
gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Hero() {
    // Refs
    const sectionContainerRef = useRef(null)
    const headingRef = useRef(null)
    const paragraphRef = useRef(null)
    const ctasRef = useRef(null)

    // GSAP Animations
    useGSAP(
        () => {
            const headingSplit = new SplitType(headingRef.current)
            const paragraphSplit = new SplitType(paragraphRef.current)

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionContainerRef.current,
                    start: 'top 40%',
                    end: 'bottom 99%',
                    toggleActions: 'play none none none', //onEnter, onLeave, onEnterBack, onLeaveBack
                    // markers: true,
                },
                defaults: {
                    ease: 'power4.out',
                    duration: 1,
                },
            })

            tl.from(headingSplit.words, {
                xPercent: 100,
                opacity: 0,
                stagger: 0.2,
            })
                .from(
                    paragraphSplit.lines,
                    {
                        yPercent: 100,
                        opacity: 0,
                        stagger: 0.2,
                    },
                    '-=0.8'
                )
                .from(
                    ctasRef.current.children[0],
                    {
                        xPercent: -150,
                        opacity: 0,
                    },
                    '-=0.8'
                )
                .from(
                    ctasRef.current.children[1],
                    {
                        xPercent: 150,
                        opacity: 0,
                    },
                    '-=0.8'
                )
        },
        { scope: sectionContainerRef }
    )

    // JSX
    return (
        <section
            id="home--hero"
            ref={sectionContainerRef}
            className="grid h-screen w-full items-center"
        >
            <div className="container grid h-max w-max">
                <div className="relative flex flex-col items-center justify-center text-center">
                    <div className="overflow-hidden">
                        <h1
                            ref={headingRef}
                            className="flex flex-col uppercase"
                        >
                            <span className="">Frontend</span>
                            <span className="">Developer</span>
                            <span className="">Portfolio</span>
                        </h1>
                    </div>
                    <div className="overflow-hidden">
                        <p ref={paragraphRef} className="mt-2">
                            Hello, I'm Jonas, I build engaging, user-centric web
                            solutions. <br /> Check out my portfolio to see my
                            work in action.
                        </p>
                    </div>
                    <div className="overflow-hidden">
                        <div ref={ctasRef} className="footer mt-6 flex">
                            <ButtonWithIcon variant="">
                                Portfolio
                            </ButtonWithIcon>
                            <ButtonWithIcon variant="ghost">
                                About me
                            </ButtonWithIcon>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
