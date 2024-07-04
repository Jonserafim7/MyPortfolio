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
                    ctasRef.current.children,
                    {
                        scale: 0,
                        opacity: 0,
                        stagger: 0.2,
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
            className="relative flex h-screen w-full flex-col"
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
                    <div
                        ref={ctasRef}
                        className="footer mt-6 flex items-center"
                    >
                        <a
                            href="https://wa.me/5519993230833?text="
                            target="_blank"
                        >
                            <ButtonWithIcon variant="">
                                <svg
                                    className=""
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M19.05 4.91C18.1332 3.98392 17.0412 3.24967 15.8376 2.75005C14.6341 2.25043 13.3431 1.99546 12.04 2C6.57999 2 2.12999 6.45 2.12999 11.91C2.12999 13.66 2.58999 15.36 3.44999 16.86L2.04999 22L7.29999 20.62C8.74999 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91ZM12.04 20.15C10.56 20.15 9.10999 19.75 7.83999 19L7.53999 18.82L4.41999 19.64L5.24999 16.6L5.04999 16.29C4.22773 14.977 3.79113 13.4592 3.78999 11.91C3.78999 7.37 7.48999 3.67 12.03 3.67C14.23 3.67 16.3 4.53 17.85 6.09C18.6175 6.85396 19.2257 7.76266 19.6394 8.76342C20.0531 9.76419 20.264 10.8371 20.26 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.56 13.99C16.31 13.87 15.09 13.27 14.87 13.18C14.64 13.1 14.48 13.06 14.31 13.3C14.14 13.55 13.67 14.11 13.53 14.27C13.39 14.44 13.24 14.46 12.99 14.33C12.74 14.21 11.94 13.94 11 13.1C10.26 12.44 9.76999 11.63 9.61999 11.38C9.47999 11.13 9.59999 11 9.72999 10.87C9.83999 10.76 9.97999 10.58 10.1 10.44C10.22 10.3 10.27 10.19 10.35 10.03C10.43 9.86 10.39 9.72 10.33 9.6C10.27 9.48 9.76999 8.26 9.56999 7.76C9.36999 7.28 9.15999 7.34 9.00999 7.33H8.52999C8.35999 7.33 8.09999 7.39 7.86999 7.64C7.64999 7.89 7.00999 8.49 7.00999 9.71C7.00999 10.93 7.89999 12.11 8.01999 12.27C8.13999 12.44 9.76999 14.94 12.25 16.01C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.69 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.03 14.27C16.96 14.16 16.81 14.11 16.56 13.99Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                <span>Phone</span>
                            </ButtonWithIcon>
                        </a>

                        <a href="mailto:jonserafim7@gmail.com" target="_blank">
                            <ButtonWithIcon
                                variant={'ghost'}
                                size=""
                                className=""
                            >
                                <svg
                                    className="mr-2 h-auto w-10"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M20 18H18V9.25L12 13L6 9.25V18H4V6H5.2L12 10.25L18.8 6H20M20 4H4C2.89 4 2 4.89 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4Z"
                                        fill="currentColor"
                                    />
                                </svg>

                                <span>Email</span>
                            </ButtonWithIcon>
                        </a>
                    </div>
                </div>
            </div>
            <footer className="flex w-full justify-center self-end py-10 text-sm">
                <p>Site designed and developed by yours truly, Jonas.</p>
            </footer>
        </section>
    )
}
