import { AlignLeft } from 'lucide-react'

export default function Header() {
    return (
        <div className="fixed left-10 top-10 z-10 flex gap-10">
            <div className="font-space text-4xl font-black">
                <span className="text-teal-400">J</span>onas
            </div>
            <AlignLeft className="" size={40} />
        </div>
    )
}
