

import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDarkMode } from '../hooks/useDarkMode.js'
import DarkModeButton from '../buttons/darkModeButton.jsx'

const pages = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "About",
        path: "/about",
    },
]

const NavBar = () => {
  const { palette } = useDarkMode()
  const location = useLocation()

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 24px',
    borderBottom: `1px solid ${palette.icons}`,
    background: palette.background
  }

  const linkListStyle = {
    display: 'flex',
    gap: '20px',
    listStyle: 'none',
    margin: 0,
    padding: 0
  }

  const linkStyle = {
    textDecoration: 'none',
    color: palette.text,
    padding: '8px 12px',
    borderRadius: '4px',
    transition: 'background-color 0.2s ease'
  }

  const activeLinkStyle = {
    ...linkStyle,
    background: palette.accent,
    color: palette.background
  }

  return (
    <nav style={navStyle}>
      <ul style={linkListStyle}>
        {pages.map((page) => (
          <li key={page.path}>
            <Link 
              to={page.path} 
              style={location.pathname === page.path ? activeLinkStyle : linkStyle}
            >
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
      <DarkModeButton />
    </nav>
  )
}

export default NavBar