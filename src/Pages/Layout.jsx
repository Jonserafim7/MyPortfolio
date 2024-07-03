import Header from './Header'
import { Outlet } from 'react-router-dom'
import { Github } from 'lucide-react'
import { Linkedin } from 'lucide-react'

export default function Layout() {
    return (
        <div className="layout">
            <Header />
            <main className="">
                <Outlet />
            </main>
        </div>
    )
}
