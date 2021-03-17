import { useContext } from 'react';
import CounterContext from '../../context/CounterContext';

const CounterToggler = () => {
  const [counter, setCounter] = useContext(CounterContext);
  return (
    <button
      onClick={() => {
        setCounter(counter + 1);
      }}
    >
      Increase Counter
    </button>
  );
};

export default CounterToggler;
