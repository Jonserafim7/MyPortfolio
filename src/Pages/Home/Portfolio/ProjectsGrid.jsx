import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function ProjectsGrid() {
    // REFS
    const sectionContainerRef = useRef(null)

    // GSAP ANIMATIONS
    useGSAP(() => {}, { scope: sectionContainerRef })

    return (
        <div
            ref={sectionContainerRef}
            className="grid h-full w-full gap-2 overflow-hidden rounded-3xl"
        >
            <div className="flex h-[600px] gap-2">
                <div className="flex h-full flex-1 grow-[2] items-center justify-center bg-violet-400 hover:grow-[2.5]">
                    1
                </div>
                <div className="flex h-full flex-1 items-center justify-center bg-teal-400 hover:grow-[1.5]">
                    2
                </div>
            </div>
            <div className="flex h-[600px] gap-2">
                <div className="flex h-full flex-1 items-center justify-center bg-rose-400 hover:grow-[1.5]">
                    1
                </div>
                <div className="flex h-full flex-1 grow-[1.5] items-center justify-center bg-amber-400 hover:grow-[2.5]">
                    2
                </div>
            </div>
            <div className="flex h-[600px] gap-2">
                <div className="flex h-full flex-1 items-center justify-center bg-slate-400 hover:grow-[2.5]">
                    1
                </div>
                <div className="flex h-full flex-1 items-center justify-center bg-green-400 hover:grow-[1.5]">
                    2
                </div>
            </div>
        </div>
    )
}
