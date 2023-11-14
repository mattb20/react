export default function TabButton({ title, onSelect, isSelected }: {
  title: string;
  onSelect: any;
  isSelected: boolean;
}): React.JSX.Element {
  return (<button className={isSelected ? 'active' : undefined} onClick={onSelect}>{title}</button>);
}
