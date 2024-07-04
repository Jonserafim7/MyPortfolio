import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'

export default function AboutAccordion() {
    return (
        <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
                <AccordionTrigger className="">Journey</AccordionTrigger>
                <AccordionContent>
                    I began my professional journey as a civil engineer, but my
                    passion for technology and design led me to transition into
                    front-end development. With a strong foundation in
                    analytical thinking and problem-solving, I embarked on this
                    exciting new path to combine creativity with technical
                    skills. Today, I am a dedicated front-end developer with a
                    keen eye for detail and a love for crafting beautiful,
                    user-friendly web experiences.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
                <AccordionTrigger className="">Toolbox</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4">
                    Throughout my journey into front-end development, I have
                    diligently built and refined my skills in key areas. My
                    growing expertise includes:
                    <ul className="flex list-disc flex-col gap-2">
                        <li className="">
                            <span className="font-medium text-teal-400">
                                - HTML & CSS:
                            </span>{' '}
                            Crafting responsive, accessible, and visually
                            appealing layouts.
                        </li>
                        <li>
                            <span className="font-medium text-teal-400">
                                - JavaScript & React:
                            </span>{' '}
                            Building dynamic, interactive web applications.
                        </li>
                        <li>
                            <span className="font-medium text-teal-400">
                                - Git:
                            </span>{' '}
                            Version control for managing and collaborating on
                            code.
                        </li>
                        <li>
                            <span className="font-medium text-teal-400">
                                - Figma:
                            </span>{' '}
                            Designing intuitive user interfaces and experiences.
                        </li>
                        <li>
                            <span className="font-medium text-teal-400">
                                - Tailwind CSS:
                            </span>{' '}
                            Utilizing utility-first CSS framework for rapid UI
                            development.
                        </li>
                        <li>
                            <span className="font-medium text-teal-400">
                                - GSAP (GreenSock Animation Platform):
                            </span>{' '}
                            Implementing high-performance animations and
                            transitions.
                        </li>
                        <li>
                            <span className="font-medium text-teal-400">
                                - APIs:
                            </span>{' '}
                            Integrating third-party services and creating
                            seamless data flows.
                        </li>
                    </ul>
                    I continuously strive to stay updated with the latest
                    technologies and best practices to deliver top-notch web
                    solutions.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
                <AccordionTrigger className="">
                    Academic Credentials
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4">
                    <ul className="flex list-disc flex-col gap-2">
                        <li className="">
                            <span className="font-medium text-teal-400">
                                - Bachelor's Degree in Civil Engineering
                                (PUC-Campinas):
                            </span>
                            This program equipped me with solid analytical and
                            problem-solving skills, crucial for any technical
                            field. The curriculum provided a comprehensive
                            understanding of construction, infrastructure
                            design, and project management, preparing me to
                            tackle complex engineering challenges.
                        </li>
                        <li>
                            <span className="font-medium text-teal-400">
                                - Technologist Degree in Systems Analysis and
                                Development (Ongoing at UniEinstein Limeira):
                            </span>
                            Currently pursuing this degree, I am gaining
                            expertise in modern software development
                            methodologies and technologies. The course covers a
                            wide range of topics including Artificial
                            Intelligence, Data Analysis, and Full-stack
                            Development, ensuring a well-rounded education that
                            prepares students for the fast-evolving tech
                            industry.
                        </li>
                        <li>
                            <span className="font-medium text-teal-400">
                                - Front-End Development and UI/UX Courses
                                (Scrimba and DesignCourse):
                            </span>
                            These courses have sharpened my skills in HTML, CSS,
                            JavaScript, and React, and introduced me to the best
                            practices in UI/UX design. They've played a pivotal
                            role in preparing me for a successful career
                            transition from civil engineering to front-end
                            development. Engaging with real-world projects and
                            interactive learning platforms, these courses have
                            enhanced my ability to develop user-centric,
                            visually appealing websites and applications.
                        </li>
                    </ul>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
                <AccordionTrigger className="">
                    Development Philosophy
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4">
                    I believe that great front-end development is about more
                    than just writing code; it's about creating exceptional user
                    experiences. My core principles include:
                    <ul className="flex list-disc flex-col gap-2">
                        <li className="">
                            <span className="font-medium text-teal-400">
                                - User-Centric Design:
                            </span>{' '}
                            Always putting the user first and designing with
                            empathy.
                        </li>
                        <li>
                            <span className="font-medium text-teal-400">
                                - Performance Optimization:
                            </span>{' '}
                            Ensuring fast, efficient, and smooth web
                            applications.
                        </li>
                        <li>
                            <span className="font-medium text-teal-400">
                                - Accessibility:
                            </span>{' '}
                            Making the web inclusive and usable for everyone.
                        </li>
                        <li>
                            <span className="font-medium text-teal-400">
                                - Responsiveness:
                            </span>{' '}
                            Creating adaptable designs that look and function
                            beautifully on any device, ensuring a seamless user
                            experience.
                        </li>
                        <li>
                            <span className="font-medium text-teal-400">
                                - Utilizing AI as a Tool and Instructor:
                            </span>{' '}
                            Embracing artificial intelligence to enhance and not
                            replace the human elements of creativity and
                            decision-making in development processes. AI acts
                            not only as a powerful tool to streamline tasks and
                            optimize outcomes but also as an invaluable tutor,
                            helping new developers like myself to learn and
                            understand complex concepts. It provides guided
                            tutorials, instant feedback, and customized learning
                            paths that accelerate the learning process and
                            deepen understanding, all while ensuring the
                            essential human touch remains at the heart of
                            creating exceptional user experiences.
                        </li>
                        <li>
                            <span className="font-medium text-teal-400">
                                - Continuous Learning:
                            </span>{' '}
                            Staying curious and continuously improving my skills
                            to keep up with the ever-evolving tech landscape.
                        </li>
                    </ul>
                    These principles guide my approach to every project,
                    ensuring quality and excellence in all my work.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
                <AccordionTrigger className="">Looking Ahead</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4">
                    As I continue my journey in the tech world, I have set
                    several key goals for myself:
                    <ul className="flex list-disc flex-col gap-2">
                        <li className="">
                            <span className="font-medium text-teal-400">
                                - Complete My Current Academic Course:
                            </span>{' '}
                            I am dedicated to finishing my technologist degree
                            in Systems Analysis and Development, ensuring I have
                            a strong theoretical and practical foundation.
                        </li>
                        <li>
                            <span className="font-medium text-teal-400">
                                - Enter the Job Market as a Developer:
                            </span>{' '}
                            My immediate goal is to secure a position as a
                            front-end developer, where I can apply my skills,
                            contribute to meaningful projects, and grow
                            professionally.
                        </li>
                        <li>
                            <span className="font-medium text-teal-400">
                                - Learning and Improving:
                            </span>{' '}
                            The tech landscape is ever-evolving, and I am
                            committed to continuous learning. I aim to stay
                            updated with the latest technologies, tools, and
                            best practices to remain competitive and proficient
                            in my field.
                        </li>
                        <li>
                            <span className="font-medium text-teal-400">
                                - Build a Strong Professional Network:
                            </span>{' '}
                            Engaging with the tech community, participating in
                            events, and collaborating with other professionals
                            to expand my network and learn from diverse
                            perspectives.
                        </li>
                        <li>
                            <span className="font-medium text-teal-400">
                                - Contribute to Open Source Projects:
                            </span>{' '}
                            Giving back to the community by contributing to
                            open-source projects, which will also help me
                            sharpen my skills and gain valuable experience.
                        </li>
                    </ul>
                    These goals are the driving force behind my dedication and
                    passion for front-end development. I am excited about the
                    opportunities ahead and look forward to making a significant
                    impact in the industry.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
                <AccordionTrigger className="">
                    Beyond the Code
                </AccordionTrigger>
                <AccordionContent>
                    When I'm not coding or diving into the latest tech trends, I
                    love to spend quality time with the people who matter most
                    in my life. My girlfriend, Giovanna, and I enjoy exploring
                    new places and creating memorable experiences together.
                    Family is also incredibly important to me, and I make it a
                    priority to spend time with them, whether it's a casual
                    get-together or a special occasion. <br /> <br /> Staying
                    active and healthy is another key aspect of my life. I
                    regularly work out to maintain my physical and mental
                    well-being. Exercise not only keeps me fit but also helps me
                    stay focused and energized for my work. <br /> <br /> In my
                    downtime, I enjoy unwinding with computer games. One of my
                    favorites is Path of Exile, which allows me to challenge
                    myself, strategize, and connect with a broader gaming
                    community. Gaming is a fun way for me to relax and recharge
                    after a productive day. <br /> <br /> These hobbies and
                    interests enrich my life, providing a balanced and
                    fulfilling experience that goes beyond my professional
                    endeavors.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
