import { useContext } from 'react';
import CounterContext from '../context/CounterContext';
const Newpage = () => {
  const [counter] = useContext(CounterContext);

  return <h1>App: {counter}</h1>;
};

export default Newpage;
