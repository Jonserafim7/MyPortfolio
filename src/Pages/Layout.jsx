import Header from './Header'
import { Outlet } from 'react-router-dom'
import { Github } from 'lucide-react'
import { Linkedin } from 'lucide-react'

export default function Layout() {
    return (
        <div className="layout">
            <div className="fixed bottom-10 right-10 z-50">
                <div className="flex flex-col items-center justify-center gap-4">
                    <Github size={40} />
                    <Linkedin size={40} />
                </div>
            </div>
            <Header />
            <main className="">
                <Outlet />
            </main>
        </div>
    )
}
