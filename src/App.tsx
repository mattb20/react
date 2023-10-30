import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function Header(props) {
  return (
    <div>
      <header>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
    </header>
    <h1>{ props.title }</h1>
    </div>
  );
}

const reactDescriptions = ['fundamentals', 'building blocks', 'essentials'];

function getRandomInt(max: number) {
  return Math.floor(Math.random() * (max + 1));
}

function MainGoal() {
  const description = reactDescriptions[getRandomInt(2)];
  return <div>My main goal: learning the {description} of React!</div>;
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  );  
}

function App() {
  return (
    <>
      <Header title="Vite + React"></Header>
      <div className='card'>
        <Counter />
        <MainGoal />
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
