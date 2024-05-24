'use client'
import React from 'react'
import { BiAddToQueue, BiHome, BiInfoCircle, BiMailSend, BiQuestionMark } from 'react-icons/bi'
import { usePathname} from 'next/navigation'

interface MenuType {
    title: string
    href: string
    icon: React.ReactNode
}
const menuItems: MenuType[] = [
    {
        title: 'About',
        href: '/about',
        icon: <BiInfoCircle size={20} />
    },
    {
        title: 'FAQ',
        href: '/faq',
        icon: <BiAddToQueue size={20} />
    },
    {
        title: 'Contact',
        href: '/contact',
        icon: <BiMailSend size={20} />
    }
]
const Menu = () => {
    const pathname = usePathname()
  return (
    <div className="flex items-center gap-4 p-2 text-lg ">
        {menuItems.map((item) => ( 
            <a key={item.title} href={item.href} className={`${pathname === item.href ? 'border-yellow-900' : 'border-white'} flex items-center gap-2 p-2 pb-0 text-lg hover:border-b-2 hover:border-yellow-900 hover:drop-shadow-lg border-b-2`}>
                <span className="text-2xl font-semibold tracking-tighter">{item.icon}</span> {item.title}
            </a>
        ))}
    </div>
  )
}

export default Menu