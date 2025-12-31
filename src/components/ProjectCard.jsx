export default function ProjectCard({ title, link, description, tools }) {
  return (
    <div className="project-card">
      <h3>
        {link ? <a href={link} target="_blank" rel="noreferrer">{title}</a> : title}
      </h3>
      <p>{description}</p>
      <p className="tools">Tools: {tools}</p>
    </div>
  );
}
