export default function SkillGroup({ title, items }) {
  return (
    <div className="skills-group">
      <h3>{title}</h3>
      <ul>
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}
