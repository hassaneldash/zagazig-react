import { Button } from '@/components/ui/button';
import { ThemeContext } from '@/context/ThemeContext';
import React, { use } from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  const { theme, setTheme } = use(ThemeContext);

  return (
    <>
      <nav
        className='sticky top-0 z-10 w-full border-b shadow-sm p-4'
        style={{
          backgroundColor: theme === 'light' ? '#fff' : '#333',
          color: theme === 'light' ? '#000' : '#fff',
        }}>
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
          <li>
            <NavLink
              to='/create'
              className={({ isActive }) =>
                `font-medium ${isActive ? 'text-blue-600' : 'hover:text-blue-600'}`
              }>
              Create
            </NavLink>
          </li>
          <li>
            <Button
              variant='outline'
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
              {theme === 'light' ? '🌙' : '☀️'}
            </Button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
