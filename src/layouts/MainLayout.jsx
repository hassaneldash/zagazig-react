import { Button } from '@/components/ui/button';
import { ThemeContext } from '@/context/ThemeContext';
import Navbar from '@/pages/Navbar';
import React, { use, useContext } from 'react';
import { Outlet } from 'react-router';

const MainLayout = () => {
  // 2 Methods to Consume Data inside Provider
  // 1. useContext
  // const context = useContext(ThemeContext);

  // 2. use => React v19
  const { theme, setTheme } = use(ThemeContext);

  return (
    <div
      className='flex flex-col min-h-screen'
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
      }}>
      <Navbar />

      <main className='container grow mx-auto p-10 max-w-3xl'>
        <Outlet /> {/* Placeholder for the injected component from Route */}
      </main>

      <footer className='border-t p-6 text-center text-sm'>
        <p>© 2026 ITI by Hassan ELDash with 💖</p>
      </footer>
    </div>
  );
};

export default MainLayout;
