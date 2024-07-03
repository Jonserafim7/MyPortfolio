import { useRef } from 'react'
import { ProjectCard } from './ProjectCard'

export default function ProjectsGrid() {
    // REFS
    const sectionContainerRef = useRef(null)
    const card1Ref = useRef(null)
    const card2Ref = useRef(null)
    const card3Ref = useRef(null)
    const card4Ref = useRef(null)
    const card5Ref = useRef(null)
    const card6Ref = useRef(null)

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

    // JSX
    return (
        <div
            ref={sectionContainerRef}
            className="relative grid h-full w-full gap-2 overflow-hidden rounded-3xl shadow-xl"
        >
            <div className="flex gap-2">
                <ProjectCard
                    ref={card1Ref}
                    project={projectsData[0]}
                    className="grow-[1.5]"
                />
                <ProjectCard ref={card2Ref} project={projectsData[1]} />
            </div>
            <div className="flex gap-2">
                <ProjectCard
                    ref={card3Ref}
                    project={projectsData[0]}
                    className="grow-[1]"
                />
                <ProjectCard
                    ref={card4Ref}
                    project={projectsData[1]}
                    className="grow-[2]"
                />
            </div>
            <div className="flex gap-2">
                <ProjectCard
                    ref={card5Ref}
                    project={projectsData[0]}
                    className="grow-[1]"
                />
                <ProjectCard ref={card6Ref} project={projectsData[1]} />
            </div>
        </div>
    )
}
