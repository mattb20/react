import Header from './components/Header.jsx';
import MainGoal from './components/MainGoal.tsx';
import Counter from './components/Counter.jsx';
import './App.css';
import TabButton from './components/TabButton.tsx';
import {reactConcepts } from './section-descriptions.ts';
import { useState } from 'react';


function App() {
  const [section, setSection] = useState('');
  function handleSelect(section: string) {
    setSection(section);
  }
  return (
    <>
      <Header title="Let's do some React"></Header>
      <div className='card'>
        <Counter />
        <MainGoal />
      </div>
      <section id='examples'>
        <h2>Examples</h2>
        <menu>
          {reactConcepts.map((concept) => {
            return <TabButton isSelected={section === concept.concept} onSelect={() => handleSelect(concept.concept)} title={concept.title}/>
          })}
        </menu>
        {!section ? 'Please select a topic' : <div>{reactConcepts.find((concept) => concept.concept === section)?.details}</div>}
      </section>
    </>
  );
}

export default App;
