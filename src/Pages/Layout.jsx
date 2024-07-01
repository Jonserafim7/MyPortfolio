import ParallaxStars from '../assets/ParallaxStars'
import { AlignLeft } from 'lucide-react'
import { Github } from 'lucide-react'
import { Linkedin } from 'lucide-react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function Layout() {
    return (
        <div className="layout">
            <AlignLeft className="fixed left-10 top-10" size={40} />
            <Github className="fixed bottom-10 right-10" size={40} />
            <Linkedin className="fixed bottom-24 right-10" size={40} />
            <ParallaxStars />
            <main className="p-2">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

{
    /* <div className="flex flex-col xl:flex-row">
                <Header />

                <div className="flex flex-col px-2 xl:py-2 xl:pl-0">
                </div>
            </div> */
}
