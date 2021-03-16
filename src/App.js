import { useState } from 'react';
import Main from './pages/Main';
import ThemeContext from './context/ThemeContext';
import ThemeToggler from './components/theme/ThemeToggler';

const App = () => {
  const themeHook = useState('light');
  return (
    <ThemeContext.Provider value={themeHook}>
      <ThemeToggler />
      <h1>Not using Context</h1>
      <Main />
    </ThemeContext.Provider>
  );
};

export default App;
