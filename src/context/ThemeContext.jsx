import { createContext, useState } from 'react';

// Create Context, Default fallback value
export const ThemeContext = createContext(null);

// Create Provider Component to hold state and wrap entire application
export const ThemeProvider = ({ children }) => {
  // Create State, We want to share
  const [theme, setTheme] = useState('light');

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
};

/*
  {
    theme: theme,
    setTheme: setTheme
  }

  => 
  { theme, setTheme }
*/
