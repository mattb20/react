export default function TabButton({ title, onSelect }): React.JSX.Element {
  return <button onClick={onSelect}>{title}</button>;
}
