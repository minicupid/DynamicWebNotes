import React from 'react'
import cx from 'classnames'
import { NavLink } from 'react-router-dom'
import Panel from './Panel'

const Navbar = () => {
  return (
    <nav className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      <NavLink
        to="/"
        className={({ isActive }) =>
          cx('text-blue-500', { 'font-bold decoration-solid': isActive })
        }
      >
        Buttons
      </NavLink>

      <NavLink
        to="/accordion"
        className={({ isActive }) =>
          cx('text-blue-500', { 'font-bold decoration-solid': isActive })
        }
      >
        Accordion
      </NavLink>

      <NavLink
        to="/dropdown"
        className={({ isActive }) =>
          cx('text-blue-500', { 'font-bold decoration-solid': isActive })
        }
      >
        Dropdown
      </NavLink>

      {/* add link here to component page you made for hw */}
    </nav>
  )
}

export default Navbar