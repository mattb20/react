const reactDescriptions = ['fundamentals', 'building blocks', 'essentials'];

function getRandomInt(max: number) {
  return Math.floor(Math.random() * (max + 1));
}

export default function MainGoal() {
  const description = reactDescriptions[getRandomInt(2)];
  return <div>My main goal: learning the {description} of React!</div>;
}