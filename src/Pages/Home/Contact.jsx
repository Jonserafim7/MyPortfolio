// Dependencies
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import { ButtonWithIcon } from '@/components/ui/buttonWithIcon'

// GSAP PLUGINS
gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Contact() {
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
            id="home--contact"
            ref={sectionContainerRef}
            className="flex h-screen w-full flex-col"
        >
            <div className="grid h-full">
                <div className="relative flex flex-col items-center justify-center text-center">
                    <h2 ref={headingRef} className="flex flex-col uppercase">
                        <span className="">Let's Work</span>
                        <span className="font-black">Together</span>
                    </h2>
                    <p ref={paragraphRef} className="mt-2">
                        I'm excited to work on new projects and challenges.{' '}
                        <br />
                        Let's talk about how I can help.
                    </p>
                    <div ref={ctasRef} className="footer mt-6 flex">
                        <ButtonWithIcon variant="">Contact</ButtonWithIcon>
                        <ButtonWithIcon variant="ghost">
                            Learn more
                        </ButtonWithIcon>
                    </div>
                </div>
            </div>
            <footer className="flex w-full justify-center self-end py-10 text-sm">
                <p>Site designed and developed by yours truly, Jonas.</p>
            </footer>
        </section>
    )
}
