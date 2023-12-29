import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
	return (
		<header className='flex justify-between px-4 py-2 bg-blue-700 text-white font-bold items-center'>
			<div className='italic text-2xl'>Redux</div>
			<nav className='flex gap-4'>
				<NavLink to='/'>Home</NavLink>
				<NavLink to='/todos'>Todos</NavLink>
				<NavLink to='/login'>Login</NavLink>
				<NavLink to='/register'>Register</NavLink>
			</nav>
		</header>
	)
}
