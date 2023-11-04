export default function TabButton({ children, onSelect }): React.JSX.Element {
  return <button onClick={onSelect}>{children}</button>;
}
