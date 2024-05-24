import {getServerSession} from 'next-auth'
import authOptions from '@/lib/authOptions'
import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Auth from './Auth'

const NavBar = async() => {
  const session = await getServerSession(authOptions)
  console.log({session})
  return (
    <header className="bg-white mb-16">
      <div className="flex justify-between max-w-7xl mx-auto p-4">
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