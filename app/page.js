"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const Home = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <p className='bg-secondary text-primary'>

      <p className='text-2xl'>The current theme is: {theme}</p>
      <p className='text-2xl'>The system theme is: {systemTheme}</p>

      <button
        className="p-4 border-2 bg-primary text-secondary animate-pulse"
        onClick={() => toggleTheme()}
      >TOGGLE</button>

      <div className="test-square"></div>

      <div className="text-green-300">asdfasdf</div>
      <div className="text-green-800">asdfasdf</div>
    </p>
    

    

  );
}

export default Home