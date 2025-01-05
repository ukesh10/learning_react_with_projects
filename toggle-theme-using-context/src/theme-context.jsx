import React, {createContext, useState} from 'react';

export const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: ()=>{}
})
export default function ThemeContextProvider({children}) {
  const [theme, setTheme] = useState('light');
  
  function toggleTheme(){
      setTheme(prevState => (prevState === 'light' ? 'dark': 'light'));
  }
  
  return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
}
