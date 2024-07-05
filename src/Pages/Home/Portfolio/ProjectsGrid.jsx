import { useRef, useState, useEffect } from 'react'
import { ProjectCard } from './ProjectCard'
import { projectsData } from './projectsData'

export default function ProjectsGrid() {
    // REFS
    const sectionContainerRef = useRef(null)
    const card0Ref = useRef(null)
    const card1Ref = useRef(null)
    const card2Ref = useRef(null)
    const card3Ref = useRef(null)
    const card4Ref = useRef(null)
    const card5Ref = useRef(null)
    const card6Ref = useRef(null)
    const card7Ref = useRef(null)
    const card8Ref = useRef(null)
    const card9Ref = useRef(null)
    const card10Ref = useRef(null)
    const card11Ref = useRef(null)
    const card12Ref = useRef(null)
    const card13Ref = useRef(null)

    // STATE
    const [projects, setProjects] = useState(projectsData)

    // EFFECTS

    // JSX
    return (
        <div
            ref={sectionContainerRef}
            className="relative grid h-max w-full gap-2 overflow-hidden rounded-3xl shadow-xl"
        >
            {/* ROW 1 */}
            <div className="flex flex-col gap-2 md:flex-row">
                {projects[0] && (
                    <ProjectCard
                        ref={card0Ref}
                        project={projects[0]}
                        className="lg:grow-[1.3]"
                    />
                )}
            </div>

            {/* ROW 2 */}
            <div className="flex flex-col gap-2 md:flex-row">
                {projects[1] && (
                    <ProjectCard ref={card1Ref} project={projects[1]} />
                )}
                {projects[2] && (
                    <ProjectCard
                        ref={card2Ref}
                        project={projects[2]}
                        className="grow-[1]"
                    />
                )}
            </div>

            {/* ROW 3 */}
            <div className="flex flex-col gap-2 md:flex-row">
                {projects[3] && (
                    <ProjectCard
                        ref={card3Ref}
                        project={projects[3]}
                        className="grow-[1.2]"
                    />
                )}
                {projects[4] && (
                    <ProjectCard
                        ref={card4Ref}
                        project={projects[4]}
                        className="grow-[1]"
                    />
                )}
            </div>

            {/* ROW 4 */}
            <div className="flex flex-col gap-2 md:flex-row">
                {projects[5] && (
                    <ProjectCard
                        ref={card5Ref}
                        project={projects[5]}
                        className="grow-[1]"
                    />
                )}
            </div>

            {/* ROW 5 */}
            <div className="flex flex-col gap-2 md:flex-row">
                {projects[6] && (
                    <ProjectCard
                        ref={card6Ref}
                        project={projects[6]}
                        className="lg:grow-[1.3]"
                    />
                )}
                {projects[7] && (
                    <ProjectCard ref={card7Ref} project={projects[7]} />
                )}
            </div>

            {/* ROW 6 */}
            <div className="flex flex-col gap-2 md:flex-row">
                {projects[8] && (
                    <ProjectCard
                        ref={card8Ref}
                        project={projects[8]}
                        className="grow-[1]"
                    />
                )}
                {projects[9] && (
                    <ProjectCard
                        ref={card9Ref}
                        project={projects[9]}
                        className="grow-[1.2]"
                    />
                )}
            </div>

            {/* ROW 7 */}
            <div className="flex flex-col gap-2 md:flex-row">
                {projects[10] && (
                    <ProjectCard
                        ref={card10Ref}
                        project={projects[10]}
                        className="grow-[1.1]"
                    />
                )}
                {projects[11] && (
                    <ProjectCard
                        ref={card11Ref}
                        project={projects[11]}
                        className="grow-[1]"
                    />
                )}
            </div>

            {/* ROW 8 */}
            <div className="flex flex-col gap-2 md:flex-row">
                {projects[12] && (
                    <ProjectCard
                        ref={card12Ref}
                        project={projects[12]}
                        className="grow-[1]"
                    />
                )}
            </div>
        </div>
    )
}
