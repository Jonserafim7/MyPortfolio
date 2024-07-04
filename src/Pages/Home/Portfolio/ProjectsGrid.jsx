import { useRef, useState } from 'react'
import { ProjectCard } from './ProjectCard'
import { projectsData } from './projectsData'

export default function ProjectsGrid() {
    // REFS
    const sectionContainerRef = useRef(null)
    const card1Ref = useRef(null)
    const card2Ref = useRef(null)
    const card3Ref = useRef(null)
    const card4Ref = useRef(null)
    const card5Ref = useRef(null)
    const card6Ref = useRef(null)

    // STATE
    const [projects, setProjects] = useState(projectsData)

    // JSX
    return (
        <div
            ref={sectionContainerRef}
            className="relative grid h-full w-full gap-2 overflow-hidden rounded-3xl shadow-xl"
        >
            <div className="flex h-max flex-col gap-2 md:flex-row">
                {projects[0] && (
                    <ProjectCard
                        ref={card1Ref}
                        project={projects[0]}
                        className="lg:grow-[1.3]"
                    />
                )}
                {projects[1] && (
                    <ProjectCard ref={card2Ref} project={projects[1]} />
                )}
            </div>
            <div className="flex h-max flex-col gap-2 md:flex-row">
                {projects[2] && (
                    <ProjectCard
                        ref={card3Ref}
                        project={projects[2]}
                        className="grow-[1]"
                    />
                )}
                {projects[3] && (
                    <ProjectCard
                        ref={card4Ref}
                        project={projects[3]}
                        className="grow-[1.2]"
                    />
                )}
            </div>
            <div className="flex flex-col gap-2 md:flex-row">
                {projects[4] && (
                    <ProjectCard
                        ref={card5Ref}
                        project={projects[4]}
                        className="grow-[1]"
                    />
                )}
                {projects[5] && (
                    <ProjectCard ref={card6Ref} project={projects[5]} />
                )}
            </div>
        </div>
    )
}
