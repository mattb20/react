export default function TabButton({ title, onSelect }): React.JSX.Element {
  return <button className="active" onClick={onSelect}>{title}</button>;
}
