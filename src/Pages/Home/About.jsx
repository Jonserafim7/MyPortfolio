import { ButtonWithIcon } from '@/components/ui/buttonWithIcon'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function About() {
    // REFS
    const tl = useRef(null)
    const sectionContainerRef = useRef(null)
    const textContaineRef = useRef(null)
    const videoContainerRef = useRef(null)
    const buttonContainerRef = useRef(null)

    // GSAP ANIMATIONS
    useGSAP(
        () => {
            // VARIABLES
            const sectionContainer = sectionContainerRef.current
            const textContainer = textContaineRef.current
            const videoContainer = videoContainerRef.current
            const tagLineSplit = new SplitType(
                textContainer.querySelector('h2')
            )
            const titleSplit = new SplitType(textContainer.querySelector('h3'))
            const paragraphSplit = new SplitType(
                textContainer.querySelector('p')
            )
            const button = buttonContainerRef.current

            const tl = gsap.timeline({
                defaults: { ease: 'power3.out', duration: 2 },
                scrollTrigger: {
                    trigger: sectionContainer,
                    start: 'top 60%',
                    toggleActions: 'play none restart none', // onEnter, onLeave, onEnterBack, onLeaveBack
                },
            })

            tl.from(videoContainer, {
                xPercent: -100,
                opacity: 0,
            })

                .from(
                    textContainer,
                    {
                        yPercent: 100,
                        opacity: 0,
                    },
                    '-=1.8'
                )

                .from(
                    tagLineSplit.chars,
                    {
                        stagger: 0.1,
                        opacity: 0,
                        duration: 1,
                    },
                    '-=1.5'
                )

                .from(
                    titleSplit.lines,
                    {
                        stagger: 0.3,
                        opacity: 0,
                        yPercent: -30,
                    },
                    '-=2'
                )
                .from(
                    paragraphSplit.lines,
                    {
                        stagger: 0.1,
                        opacity: 0,
                        xPercent: 20,
                    },
                    '-=2'
                )
                .from(
                    button,
                    {
                        xPercent: -100,
                        opacity: 0,
                    },
                    '<'
                )
        },
        { trigger: sectionContainerRef.current }
    )

    return (
        <section
            ref={sectionContainerRef}
            id="home--about"
            className="flex w-full flex-col gap-2 lg:flex-row"
        >
            {/* VIDEO */}
            <div ref={videoContainerRef} className="media-container">
                <video
                    src="/videos/about-video.mov"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    className="video"
                ></video>
            </div>

            {/* CONTENT */}
            <div ref={textContaineRef} className="content-container">
                <h2 className="title">About me</h2>
                <h3 className="subtitle">
                    Creative Mind with a Technical Edge
                </h3>
                <p className="mt-2">
                    With a unique journey from civil engineering to front-end
                    development, I bring a blend of technical precision and
                    creative flair to every project. My passion for crafting
                    user-friendly, visually appealing digital experiences drives
                    my work. Following core principles in UI/UX design and
                    equipped with a strong foundation in HTML, CSS, JavaScript,
                    and React, I'm dedicated to transforming ideas into stunning
                    realities.
                </p>
                <div ref={buttonContainerRef} className="flex mt-6">
                    <ButtonWithIcon type="">Learn more</ButtonWithIcon>
                </div>
            </div>
        </section>
    )
}
