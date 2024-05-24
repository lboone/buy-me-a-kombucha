import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Auth from './Auth'

const NavBar = () => {
  return (
    <header className="bg-white mb-16">
      <div className="flex justify-between max-w-7xl mx-auto p-4">
      <Logo />
      <Menu />
      <Auth />
      </div>
    </header>
  )
}

export default NavBar