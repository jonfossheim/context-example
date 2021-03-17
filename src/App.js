import { useState, useContext } from 'react';
import Main from './pages/Main';
import Newpage from './pages/Newpage';
import ThemeContext from './context/ThemeContext';
import CounterContext from './context/CounterContext';
import ThemeToggler from './components/theme/ThemeToggler';
import CounterToggler from './components/countertoggler/CounterToggler';

const App = () => {
  const [counter] = useContext(CounterContext);
  const themeHook = useState('light');
  const counterHook = useState(0);
  return (
    <CounterContext.Provider value={counterHook}>
      <ThemeContext.Provider value={themeHook}>
        <ThemeToggler />
        <CounterToggler />
        <Newpage />
        <Main />
      </ThemeContext.Provider>
    </CounterContext.Provider>
  );
};

export default App;
