import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import CounterContext from '../context/CounterContext';
import AppTheme from '../utils/AppTheme';

const Main = () => {
  const theme = useContext(ThemeContext)[0];

  const [counter] = useContext(CounterContext);

  const currentTheme = AppTheme[theme];
  return (
    <main
      style={{
        padding: '1rem',
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`
      }}
    >
      <h1>Counter: {counter}</h1>
      <p>This is a paragraph</p>
      <button> This is a button</button>
    </main>
  );
};

export default Main;
