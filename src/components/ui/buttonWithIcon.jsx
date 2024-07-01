import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

export function ButtonWithIcon({ children, variant, size, ...props }) {
    const containerRef = useRef(null)

    useGSAP(
        () => {
            // variables
            const container = containerRef.current
            const buttonText = containerRef.current.children[0].children
            const icon = containerRef.current.children[1]
            const background = containerRef.current.children[2]

            // timeline
            const tl = gsap.timeline({
                paused: true,
                defaults: { duration: 0.3, ease: 'power4.inOut' },
            })

            tl.to(container, {
                color: () => {
                    if (variant === 'default' || variant === '') {
                        return '#4f46e5'
                    }
                    if (variant === 'rose') {
                        return '#9f1239'
                    }
                    if (variant === 'teal') {
                        return '#115e59'
                    }
                    return
                },
            })
                .to(
                    buttonText,
                    {
                        yPercent: -100,
                    },
                    '<'
                )
                .from(
                    icon,
                    {
                        xPercent: 300,
                    },
                    '<'
                )
            if (background) {
                tl.set(
                    background,
                    {
                        background: () => {
                            if (variant === 'default' || variant === '') {
                                return '#a5b4fc'
                            }
                            if (variant === 'rose') {
                                return '#fda4af'
                            }
                            if (variant === 'teal') {
                                return '#5eead4'
                            } else {
                                return ''
                            }
                        },
                    },
                    '<'
                ).to(
                    background,
                    {
                        scaleY: 100,
                    },
                    '<'
                )
            }

            // event listeners
            container.addEventListener('mouseenter', () => {
                tl.play()
            })
            container.addEventListener('mouseleave', () => {
                tl.reverse()
            })
        },
        { scope: containerRef.current }
    )
    return (
        <Button
            ref={containerRef}
            className="flex items-center gap-2 relative overflow-hidden"
            size={size || 'default'}
            variant={variant || 'default'}
        >
            {/* TEXT */}
            <div className="flex flex-col relative overflow-hidden z-10">
                <div>{children}</div>
                <div className="absolute translate-y-full">{children}</div>
            </div>
            {/* ICON */}
            <ArrowRight className="w-[1.2em] h-[1.2em] absolute right-[10%] z-10" />
            {/* BACKGROUND */}
            {variant != 'ghost' && (
                <div
                    className={`absolute inset-0 scale-y-0 rounded-full`}
                ></div>
            )}
        </Button>
    )
}
