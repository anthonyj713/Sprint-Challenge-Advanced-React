import React from 'react';
import { useDarkMode } from './../hooks/useDarkMode';

const Header = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <div className="header">
      <h1>Womens World Cup</h1>
      <button className="dark-mode__toggle">
        <div className='button'
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </button>
    </div>
  );
};

export default Header;
