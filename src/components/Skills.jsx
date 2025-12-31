import SkillGroup from "./SkillGroup";

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="section-title">Core Skills</h2>
      <div className="skills-grid">
        <SkillGroup title="Frontend Development" items={["HTML", "CSS", "JavaScript", "Responsive & Mobile-First Design", "Modern UI Layouts"]} />
        <SkillGroup title="UI/UX & Product Design" items={["Figma", "User-Centered Design", "Wireframing & Visual Systems", "Design Consistency"]} />
        <SkillGroup title="Research & Documentation" items={["Design Research", "Content Structuring", "Clear Technical Documentation"]} />
        <SkillGroup title="Collaboration & Communication" items={["Team Collaboration", "Clear Communication", "User-Focused Problem Solving"]} />
        <SkillGroup title="Version Control" items={["Git", "GitHub"]} />
      </div>
    </section>
  );
}
