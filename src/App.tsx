import Header from './components/Header.jsx';
import MainGoal from './components/MainGoal.tsx';
import Counter from './components/Counter.jsx';
import './App.css';
import TabButton from './components/TabButton.tsx';
import { sectionDescriptions } from './section-descriptions.ts';
import { useState } from 'react';

type Section = 'components' | 'jsx' | 'props' | 'state' | 'bun' | 'gotchas';

function App() {
  const [section, setSection] = useState('');
  function handleSelect(section: Section) {
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
          <TabButton
            isSelected={section === 'components'}
            onSelect={() => handleSelect('components')}
            title={'Components'}
          />
          <TabButton
            isSelected={section === 'jsx'}
            onSelect={() => handleSelect('jsx')}
            title={'JSX'}
          />
          <TabButton
            isSelected={section === 'props'}
            onSelect={() => handleSelect('props')}
            title={'Props'}
          />
          <TabButton
            isSelected={section === 'state'}
            onSelect={() => handleSelect('state')}
            title={'State'}
          />
          <TabButton
            isSelected={section === 'bun'}
            onSelect={() => handleSelect('bun')}
            title={'Bun'}
          />
          <TabButton
            isSelected={section === 'gotchas'}
            onSelect={() => handleSelect('gotchas')}
            title={'Gotchas'}
          />
        </menu>
        {!section ? 'Please select a topic' : <div>{sectionDescriptions[section].details}</div>}
      </section>
    </>
  );
}

export default App;
