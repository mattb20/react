export default function TabButton({ title, onSelect, isSelected }): React.JSX.Element {
  return (<button className={isSelected ? 'active' : undefined} onClick={onSelect}>{title}</button>);
}
