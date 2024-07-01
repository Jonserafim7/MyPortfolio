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
    const textContainerRef = useRef(null)
    const videoContainerRef = useRef(null)
    const buttonsContainerRef = useRef(null)
    const tl1Ref = useRef(null)
    const tl2Ref = useRef(null)

    // GSAP Animations
    useGSAP(
        () => {
            // Variables
            const sectionContainer = sectionContainerRef.current
            const textContainer = textContainerRef.current
            const videoContainer = videoContainerRef.current
            const buttonsContainer = buttonsContainerRef.current
            const headerSplit = new SplitType(textContainer.querySelector('h1'))
            const subHeaderSplit = new SplitType(
                textContainer.querySelector('p')
            )

            // Animations
            tl1Ref.current = gsap
                .timeline({
                    defaults: { ease: 'power4.inout', duration: 2 },
                    scrollTrigger: {
                        trigger: sectionContainer,
                        start: 'top 60%',
                        end: 'bottom 20%',
                        // onToggle: (self) =>
                        // console.log("toggled, isActive:", self.isActive),
                        // onUpdate: (self) => {
                        //   console.log(
                        //     "progress:",
                        //     self.progress.toFixed(3),
                        //     "direction:",
                        //     self.direction,
                        //     "velocity",
                        //     self.getVelocity(),
                        //   )
                        // },
                    },
                })
                .from(
                    textContainer,
                    {
                        yPercent: -15,
                    },
                    '0'
                )
                .from(
                    videoContainer,
                    {
                        yPercent: 15,
                    },
                    '0'
                )
                .from(
                    headerSplit.words,
                    {
                        stagger: 0.05,
                        opacity: 0,
                        xPercent: -100,
                    },
                    '0.5'
                )
                .from(
                    subHeaderSplit.lines,
                    {
                        yPercent: -100,
                        stagger: 0.1,
                        opacity: 0,
                    },
                    '0.8'
                )
                .from(
                    buttonsContainer.children,
                    {
                        stagger: 0.2,
                        opacity: 0,
                        xPercent: -120,
                    },
                    '1'
                )
        },
        { scope: sectionContainerRef }
    )

    // JSX
    return (
        <section
            id="home--hero"
            ref={sectionContainerRef}
            className="relative h-[90vh] w-full flex flex-col gap-2 lg:flex-row pb-4 xl:h-screen"
        >
            {/* TEXT CONTENT */}
            <div ref={textContainerRef} className="content-container">
                {/* TITLE */}
                <h1 className="">
                    Hello, <br /> I&apos;m Jonas
                </h1>
                {/* SUBTITLE */}
                <p className="md:text-lg lg:text-lg xl:text-2xl mt-2">
                    A frontend developer combining a love for design with
                    technical expertise to build engaging, user-centric web
                    solutions. Check out my portfolio to see my work in action.
                </p>
                <div ref={buttonsContainerRef} className="footer mt-6 flex">
                    {/* CTAS */}
                    <ButtonWithIcon variant="rose">Portfolio</ButtonWithIcon>
                    <ButtonWithIcon variant="ghost">About me</ButtonWithIcon>
                </div>
            </div>
            {/* VIDEO CONTAINER */}
            <div ref={videoContainerRef} className="media-container">
                <video
                    src="/videos/hero-video.mov"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    className="video"
                ></video>
            </div>
        </section>
    )
}
