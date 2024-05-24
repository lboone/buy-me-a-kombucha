import {getServerSession} from 'next-auth'
import authOptions from '@/lib/authOptions'
import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Auth from './Auth'

const NavBar = async() => {
  const session = await getServerSession(authOptions)
  return (
    <header className="bg-white mb-16 w-full">
      <div className="flex justify-between max-w-7xl mx-auto py-4 px-0">
      <Logo />
      <Menu />
      <Auth
        name={session?.user?.name || ''}
        email={session?.user?.email || ''}
        image={session?.user?.image || ''}
      />
      </div>
    </header>
  )
}

export default NavBar