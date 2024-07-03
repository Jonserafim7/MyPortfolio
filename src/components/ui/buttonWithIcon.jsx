import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const ButtonWithIcon = React.forwardRef(({ children, size, variant }, ref) => {
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
                    containerRef.current.children[0],
                    {
                        xPercent: -10,
                    },
                    '<'
                )
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
            className="relative flex items-center gap-2 overflow-hidden"
            size={size || 'default'}
            variant={variant || 'default'}
        >
            {/* TEXT */}
            <div className="relative z-10 flex flex-col overflow-hidden">
                <div className="flex items-center justify-center gap-2">
                    {children}
                </div>
                <div className="absolute flex translate-y-full items-center justify-center gap-2">
                    {children}
                </div>
            </div>
            {/* ICON */}
            <ArrowRight className="absolute right-[10%] z-10 h-[1.2em] w-[1.2em]" />
            {/* BACKGROUND */}
            {variant != 'ghost' && (
                <div className={`absolute inset-0 scale-y-0`}></div>
            )}
        </Button>
    )
})

ButtonWithIcon.displayName = 'ButtonIcon'

export { ButtonWithIcon }
