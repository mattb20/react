type ReactConcept = {
  concept: string;
  title: string;
  details: string;
};

export const reactConcepts: ReactConcept[] = [
  {
    concept: 'components',
    title: 'Components',
    details:
      'Components are really useful for compartmentalising your front end code and encouraging reusability.',
  },
  {
    concept: 'jsx',
    title: 'JSX',
    details:
      'JSX is an extended language of JavaScript which enables you to inbed JavaScript attributes and functions into HTML code to create dynamic front ends.',
  },
  {
    concept: 'props',
    title: 'Props',
    details:
      'Props can be used as part of the customisable process of creating components.',
  },
  {
    concept: 'bun',
    title: 'Bun',
    details:
      'You should consider deploying your code to be run by the bun JavaScript engine as it could be very fast.',
  },
  {
    concept: 'gotchas',
    title: 'Gotchas',
    details: 'JavaScript is a very interesting language. One of the most puzzling features being the concept of truthy and falsy. 0 and undefined are falsy where as [] and {} are truthy. How confusing!',
  },
  {
    concept: 'fragments',
    title: 'Fragments',
    details: 'Fragments allow you to avoid wrapping JSX components unnecessarily with unwanted parent HTML elements.'
  }
];
