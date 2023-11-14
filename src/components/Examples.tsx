import TabButton from "./TabButton";
import { reactConcepts } from "../section-descriptions";
import { useState } from "react";
export default function Examples() {
    const [section, setSection] = useState('');
    function handleSelect(section: string) {
      setSection(section);
    }
    return (
        <section id='examples'>
        <h2>Examples</h2>
        <menu>
          {reactConcepts.map((concept) => {
            return <TabButton isSelected={section === concept.concept} onSelect={() => handleSelect(concept.concept)} title={concept.title}/>
          })}
        </menu>
        {!section ? 'Please select a topic' : <div>{reactConcepts.find((concept) => concept.concept === section)?.details}</div>}
      </section>
    )
}