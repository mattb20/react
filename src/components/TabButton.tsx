export default function TabButton({ title, onSelect, isSelected }): React.JSX.Element {
  console.log(isSelected);
  return (<button className={isSelected ? 'active' : null} onClick={onSelect}>{title}</button>);
}
