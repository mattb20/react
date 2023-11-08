export const sectionDescriptions: Record<string, {details: string}> = {
  components: {
    details:
      'Components are really useful for compartmentalising your front end code and encouraging reusability.',
  },
  jsx: {
    details:
      'JSX is an extended language of JavaScript which enables you to inbed JavaScript attributes and functions into HTML code to create dynamic front ends.',
  },
  props: {
    details:
      'Props can be used as part of the customisable process of creating components.',
  },
  state: {
    details:
      'State is the internal snapshot of your component at any time, including all the functions that React defines on the functional component.',
  },
  bun: {
    details: 'You should consider deploying your code to be run by the bun JavaScript engine as it could be very fast'
  },
  gotchas: {
    details: 'JavaScript is a very interesting language. One of the most puzzling features being the concept of truthy and falsy. 0 and undefined are falsy where as [] and {} are truthy. How confusing!'
  }
};