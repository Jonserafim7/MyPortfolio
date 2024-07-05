import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { Badge } from '@/components/ui/badge'
import { ButtonWithIcon } from '@/components/ui/buttonWithIcon'
import { cn } from '@/lib/utils'
import SplitType from 'split-type'

const ProjectCard = React.forwardRef(
    ({ project, className, ...props }, ref) => {
        // GSAP ANIMATION
        useGSAP(
            () => {
                // VARIABLES
                const card = ref.current
                const projectTitle = card.querySelector('.title-container')
                const projectType = card.querySelector('h4')
                const projectScope = card.querySelector('h5')
                const projectBadges = card.querySelector('.card-badges')
                const projectDescription = card.querySelector('p')
                const descriptionLines = new SplitType(projectDescription)
                const projectButtons = card.querySelector('.buttons-container')
                const cardOverlay = card.querySelector('.card-overlay')
                const cardBg = card.querySelector('.card-bg')

                // TIMELINE
                const tl = gsap
                    .timeline({
                        paused: true,
                        defaults: { duration: 0.5, ease: 'power1.inOut' },
                    })

                    .fromTo(
                        cardOverlay,
                        {
                            background:
                                'linear-gradient(rgb(10 10 10 / 0) 0%,rgb(10, 10, 10, 0.5) 100%)',
                        },
                        {
                            background:
                                'linear-gradient(rgb(10 10 10 / 0) 0%,rgb(10, 10, 10, 1) 100%)',
                        },
                        '0'
                    )
                    .to(
                        cardBg,
                        {
                            scale: 0.7,
                        },
                        '0'
                    )
                    .to(
                        projectTitle.children,
                        {
                            yPercent: -100,
                        },
                        '0'
                    )
                    .from(
                        [projectType, projectScope],
                        {
                            xPercent: -200,
                            stagger: 0.1,
                        },
                        '0'
                    )
                    .from(
                        projectBadges.children,
                        {
                            yPercent: 100,
                            stagger: 0.1,
                            opacity: 0,
                        },
                        '0'
                    )
                    .from(
                        descriptionLines.lines,
                        {
                            yPercent: 20,
                            opacity: 0,
                            stagger: 0.1,
                        },
                        '0'
                    )
                    .from(
                        projectButtons.children,
                        {
                            xPercent: 250,
                            stagger: 0.1,
                        },
                        '0'
                    )

                // EVENT LISTENERS
                card.addEventListener('mouseenter', () => {
                    tl.timeScale(1).play()
                })
                card.addEventListener('mouseleave', () => {
                    tl.timeScale(1.5).reverse()
                })
            },
            { scope: ref.current }
        )

        // JSX RETURN
        return (
            <div
                ref={ref}
                className={cn(
                    `card-container relative grid h-[500px] flex-1 transform-gpu grid-cols-4 overflow-hidden p-4 shadow-3xl duration-500 ease-in-out hover:grow-[2] hover:cursor-pointer hover:rounded-3xl lg:p-8`,
                    className
                )}
            >
                {/* HEADER */}
                <div className="title-container relative z-30 col-span-4 col-start-1 row-start-1 flex h-max flex-col justify-self-end overflow-hidden">
                    <h3 className="title font-mont text-3xl font-black uppercase drop-shadow-lg">
                        {project.title}
                    </h3>
                    <span className="title absolute translate-y-full font-mont text-3xl font-black uppercase drop-shadow">
                        {project.title}
                    </span>
                </div>

                {/* CONTENT */}
                <div className="relative z-30 col-span-4 col-start-1 row-start-2 flex h-full w-full flex-col justify-end self-end justify-self-start lg:col-span-3 xl:col-span-2 xl:col-start-1">
                    <h4 className="text-2xl/none font-medium">
                        {project.type}
                    </h4>
                    <h5 className="font-mont text-2xl font-bold text-teal-500 drop-shadow-md">
                        {project.scope}
                    </h5>
                    <div className="card-badges mt-2 flex w-max gap-2 overflow-hidden">
                        {project.badges.map((badge, index) => (
                            <Badge key={index} variant="">
                                {badge}
                            </Badge>
                        ))}
                    </div>
                    <div className="overflow-hidden">
                        <p className="mt-4 self-end text-base/tight">
                            {project.description}
                        </p>
                    </div>
                </div>

                {/* FOOTER */}
                <div className="buttons-container z-30 col-span-4 col-start-1 row-start-3 flex w-full justify-end self-end justify-self-end xl:col-span-2 xl:col-start-3 xl:row-start-2">
                    {project.live && (
                        <a href={project.live} target="_blank">
                            <ButtonWithIcon
                                variant={'ghost'}
                                size="sm"
                                className=""
                            >
                                <svg
                                    width="30"
                                    height="30"
                                    viewBox="0 0 60 60"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16.225 47.6H15.65L12.825 44.75V44.175L17.15 39.9H20.15L20.525 40.275V43.275L16.25 47.6H16.225ZM12.825 15.775V15.25L15.65 12.425H16.225L20.5 16.7V19.7L20.125 20.075H17.125L12.825 15.775ZM37.725 38.5H33.6L33.25 38.175V28.6C33.25 26.9 32.575 25.6 30.5 25.525C29.45 25.525 28.25 25.525 26.925 25.575L26.75 25.775V38.175L26.4 38.525H22.25L21.925 38.175V21.825L22.25 21.475H31.5C32.3557 21.4717 33.2036 21.6374 33.9951 21.9626C34.7866 22.2878 35.5061 22.766 36.1124 23.3699C36.7186 23.9739 37.1996 24.6915 37.5278 25.4818C37.8561 26.272 38.025 27.1193 38.025 27.975V38.175L37.7 38.525L37.725 38.5ZM16.8 32.4H0.35L0 32.05V27.95L0.35 27.6H16.8L17.15 27.95V32.05L16.8 32.4ZM59.65 32.4H43.2L42.85 32.05V27.95L43.2 27.6H59.65L60 27.95V32.05L59.65 32.4ZM27.625 16.375V4.1L27.975 3.75H32.1L32.45 4.1V16.35L32.1 16.7H27.975L27.625 16.375ZM27.625 55.9V43.65L27.975 43.3H32.1L32.45 43.625V55.9L32.1 56.25H27.975L27.625 55.9Z"
                                        fill="#F5F4F2"
                                    />
                                </svg>
                                <span>Demo</span>
                            </ButtonWithIcon>
                        </a>
                    )}

                    <a href={project.github} target="_blank">
                        <ButtonWithIcon variant="" size="sm">
                            <svg
                                width="30"
                                height="30"
                                viewBox="0 0 60 60"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M30 5C26.717 5 23.4661 5.64664 20.4329 6.90301C17.3998 8.15938 14.6438 10.0009 12.3223 12.3223C7.63392 17.0107 5 23.3696 5 30C5 41.05 12.175 50.425 22.1 53.75C23.35 53.95 23.75 53.175 23.75 52.5V48.275C16.825 49.775 15.35 44.925 15.35 44.925C14.2 42.025 12.575 41.25 12.575 41.25C10.3 39.7 12.75 39.75 12.75 39.75C15.25 39.925 16.575 42.325 16.575 42.325C18.75 46.125 22.425 45 23.85 44.4C24.075 42.775 24.725 41.675 25.425 41.05C19.875 40.425 14.05 38.275 14.05 28.75C14.05 25.975 15 23.75 16.625 21.975C16.375 21.35 15.5 18.75 16.875 15.375C16.875 15.375 18.975 14.7 23.75 17.925C25.725 17.375 27.875 17.1 30 17.1C32.125 17.1 34.275 17.375 36.25 17.925C41.025 14.7 43.125 15.375 43.125 15.375C44.5 18.75 43.625 21.35 43.375 21.975C45 23.75 45.95 25.975 45.95 28.75C45.95 38.3 40.1 40.4 34.525 41.025C35.425 41.8 36.25 43.325 36.25 45.65V52.5C36.25 53.175 36.65 53.975 37.925 53.75C47.85 50.4 55 41.05 55 30C55 26.717 54.3534 23.4661 53.097 20.4329C51.8406 17.3998 49.9991 14.6438 47.6777 12.3223C45.3562 10.0009 42.6002 8.15938 39.5671 6.90301C36.5339 5.64664 33.283 5 30 5Z"
                                    fill="#F5F4F2"
                                />
                            </svg>
                            <span>Code</span>
                        </ButtonWithIcon>
                    </a>
                </div>

                {/* ABSOLUTE IMAGE AND GRADIENT */}
                <div className="card-overlay absolute z-20 h-full w-full bg-gradient-radial filter hover:backdrop:blur-sm"></div>
                <div
                    className={`card-bg absolute inset-0 left-[-25%] top-[-25%] z-10 h-[150%] w-[150%] bg-cover bg-center bg-no-repeat`}
                    style={{
                        backgroundImage: `url('${project.img}')`,
                    }}
                ></div>
            </div>
        )
    }
)

ProjectCard.displayName = 'ProjectCard'
export { ProjectCard }
