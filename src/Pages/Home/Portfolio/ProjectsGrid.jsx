import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { Badge } from '@/components/ui/badge'
import { ButtonWithIcon } from '@/components/ui/buttonWithIcon'

export default function ProjectsGrid() {
    // REFS
    const sectionContainerRef = useRef(null)

    // PROJECTS DATA
    const projectsData = [
        {
            title: 'Vanlife',
            type: 'Website',
            scope: 'UI/UX',
            badges: ['HTML', 'CSS', 'JS', 'React'],
            description:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero ad quos temporibus omnis neque, dolorem eaque corrupti similique incidunt eius a, molestiae, aut in excepturi fugiat pariatur illum fuga assumenda.',
            img: '/imgs/vanlife.png',
        },
        {
            title: 'Vanlife',
            type: 'Website',
            scope: 'UI/UX',
            badges: ['HTML', 'CSS', 'JS', 'React'],
            description:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero ad quos temporibus omnis neque, dolorem eaque corrupti similique incidunt eius a, molestiae, aut in excepturi fugiat pariatur illum fuga assumenda.',
            img: '/imgs/vanlife.png',
        },
        {
            title: 'Vanlife',
            type: 'Website',
            scope: 'UI/UX',
            badges: ['HTML', 'CSS', 'JS', 'React'],
            description:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero ad quos temporibus omnis neque, dolorem eaque corrupti similique incidunt eius a, molestiae, aut in excepturi fugiat pariatur illum fuga assumenda.',
            img: '/imgs/vanlife.png',
        },
        {
            title: 'Vanlife',
            type: 'Website',
            scope: 'UI/UX',
            badges: ['HTML', 'CSS', 'JS', 'React'],
            description:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero ad quos temporibus omnis neque, dolorem eaque corrupti similique incidunt eius a, molestiae, aut in excepturi fugiat pariatur illum fuga assumenda.',
            img: '/imgs/vanlife.png',
        },
        {
            title: 'Vanlife',
            type: 'Website',
            scope: 'UI/UX',
            badges: ['HTML', 'CSS', 'JS', 'React'],
            description:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero ad quos temporibus omnis neque, dolorem eaque corrupti similique incidunt eius a, molestiae, aut in excepturi fugiat pariatur illum fuga assumenda.',
            img: '/imgs/vanlife.png',
        },
        {
            title: 'Vanlife',
            type: 'Website',
            scope: 'UI/UX',
            badges: ['HTML', 'CSS', 'JS', 'React'],
            description:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero ad quos temporibus omnis neque, dolorem eaque corrupti similique incidunt eius a, molestiae, aut in excepturi fugiat pariatur illum fuga assumenda.',
            img: '/imgs/vanlife.png',
        },
    ]

    function colSpan(index) {
        if (index === 0) return 'col-span-3'
        if (index === 1) return 'col-span-3'
        if (index === 2) return 'col-span-4'
        if (index === 3) return 'col-span-2'
        if (index === 4) return 'col-span-2'
        if (index === 5) return 'col-span-4'
    }

    // PROJECT CARDS JSX
    const projectCards = projectsData.map((project, index) => {
        return (
            <div
                key={index}
                className={`${colSpan(index)} card-container relative mx-auto grid h-[600px] grid-cols-2 grid-rows-2 overflow-hidden p-10 shadow-xl hover:cursor-pointer`}
            >
                {/* TOP RIGHT */}
                <div className="z-30 col-start-2 row-start-1 flex justify-self-end">
                    <h3 className="font-mont text-3xl font-black uppercase">
                        {project.title}
                    </h3>
                </div>

                {/* BOTTOM LEFT */}
                <div className="relative z-30 col-start-1 row-start-2 flex flex-col self-end">
                    <h4 className="text-2xl/none font-medium">
                        {project.type}
                    </h4>
                    <h5 className="text-2xl/none font-medium text-teal-400">
                        {project.scope}
                    </h5>
                    <div className="card-badges mt-2 flex w-max gap-2 overflow-hidden">
                        {project.badges.map((badge, index) => (
                            <Badge key={index} variant="">
                                {badge}
                            </Badge>
                        ))}
                    </div>
                    <p className="mt-4 self-end text-base/tight">
                        {project.description}
                    </p>
                </div>

                {/* BOTTOM RIGHT */}
                <div className="buttons-container z-30 col-start-2 row-start-2 flex self-end justify-self-end">
                    <ButtonWithIcon
                        variant={index % 2 === 0 ? 'default' : 'teal'}
                        size="sm"
                    >
                        Source Code
                    </ButtonWithIcon>
                    <ButtonWithIcon variant={'ghost'} size="sm">
                        Live Demo
                    </ButtonWithIcon>
                </div>

                {/* ABSOLUTE IMAGE AND GRADIENT */}
                <div className="card-overlay absolute z-20 h-full w-full filter"></div>
                <div className="card-bg absolute inset-0 left-[-25%] top-[-25%] z-10 h-[150%] w-[150%] bg-[url('/imgs/vanlife.png')] bg-cover bg-center bg-no-repeat saturate-50"></div>
            </div>
        )
    })

    // GSAP ANIMATIONS
    useGSAP(
        () => {
            // map through all project cards to create timeline for each card
            const cards = gsap.utils.toArray(
                sectionContainerRef.current.children
            )

            cards.forEach((card, index) => {
                // get a reference for the elements inside the card
                const projectType = card.querySelector('h4')
                const projectScope = card.querySelector('h5')
                const projectBadges = card.querySelector('.card-badges')
                const projectDescription = card.querySelector('p')
                const projectButtons = card.querySelector('.buttons-container')
                const cardOverlay = card.querySelector('.card-overlay')
                const cardBg = card.querySelector('.card-bg')

                // create timeline for each card
                const tl = gsap.timeline({
                    paused: true,
                    defaults: { duration: 0.5, ease: 'power1.inOut' },
                })

                // add animations to the timeline
                tl.to(card, {
                    columnSpan: '4',
                })
                    .fromTo(
                        cardOverlay,
                        {
                            background:
                                'radial-gradient(circle at center,rgb(10 10 10 / 0) 0%,rgb(10, 10, 10, 1) 100%)',
                        },
                        {
                            background:
                                'radial-gradient(circle at center,rgb(10 10 10 / 0) 0%,rgb(10, 10, 10, 0.7) 100%)',
                        },
                        '<'
                    )
                    .to(
                        cardBg,
                        {
                            scale: 0.7,
                            filter: 'saturate(1)',
                        },
                        '<'
                    )
                    .from(
                        [projectType, projectScope],
                        {
                            xPercent: -100,
                            stagger: 0.1,
                        },
                        '<'
                    )
                    .from(
                        projectBadges.children,
                        {
                            yPercent: 100,
                            stagger: 0.1,
                        },
                        '<'
                    )
                    .from(
                        projectDescription,
                        {
                            opacity: 0,
                        },
                        '<'
                    )
                    .from(
                        projectButtons.children,
                        {
                            xPercent: 250,
                            stagger: 0.1,
                        },
                        '<'
                    )
                // add event listeners to play and reverse the timeline
                // when the mouse enters and leaves the card
                card.addEventListener('mouseenter', () => {
                    tl.play()
                })
                card.addEventListener('mouseleave', () => {
                    tl.reverse()
                })
            })
        },
        { scope: sectionContainerRef.current }
    )

    // JSX
    return (
        <div
            ref={sectionContainerRef}
            className="relative grid h-full w-full grid-cols-6 gap-2 overflow-hidden rounded-3xl"
        >
            {projectCards}
        </div>
    )
}
