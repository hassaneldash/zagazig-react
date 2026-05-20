import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  return (
    <>
      <nav className='sticky top-0 z-10 w-full border-b shadow-sm p-4'>
        <ul className='container mx-auto flex justify-between items-center '>
          <li>
            {/* <Link to='/'>Home</Link> */}
            <NavLink
              to='/'
              className={({ isActive }) =>
                `font-medium ${isActive ? 'text-blue-600' : 'hover:text-blue-600'}`
              }>
              Home
            </NavLink>
          </li>
          <li>
            {/* <Link to='/about'>About</Link> */}
            <NavLink
              to='/about'
              className={({ isActive }) =>
                `font-medium ${isActive ? 'text-blue-600' : 'hover:text-blue-600'}`
              }>
              About
            </NavLink>
          </li>
          <li>
            {/* <Link to='/path/1/hassan'>Path</Link> */}
            <NavLink
              to='/path/1/hassan'
              className={({ isActive }) =>
                `font-medium ${isActive ? 'text-blue-600' : 'hover:text-blue-600'}`
              }>
              Path
            </NavLink>
          </li>
          <li>
            {/* <Link to='/query?q=123&search=baby'>Query</Link> */}
            <NavLink
              to='/query?q=123&search=baby'
              className={({ isActive }) =>
                `font-medium ${isActive ? 'text-blue-600' : 'hover:text-blue-600'}`
              }>
              Query
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/login'
              className={({ isActive }) =>
                `font-medium ${isActive ? 'text-blue-600' : 'hover:text-blue-600'}`
              }>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/register'
              className={({ isActive }) =>
                `font-medium ${isActive ? 'text-blue-600' : 'hover:text-blue-600'}`
              }>
              Register
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/users'
              className={({ isActive }) =>
                `font-medium ${isActive ? 'text-blue-600' : 'hover:text-blue-600'}`
              }>
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
