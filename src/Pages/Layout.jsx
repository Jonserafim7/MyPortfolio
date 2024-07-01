import ParallaxStars from '../assets/ParallaxStars'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function Layout() {
    return (
        <div className="layout">
            <ParallaxStars />

            <div className="p-2 flex flex-col xl:flex-row">
                <Header />

                <div className="flex flex-col">
                    <main>
                        <Outlet />
                    </main>

                    <Footer />
                </div>
            </div>
        </div>
    )
}
