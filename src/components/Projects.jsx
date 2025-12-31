import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Selected Projects</h2>

       <ProjectCard
            title="SpendWise — AI-Powered Finance Tracker"
            link="https://aura-wallet-beta.vercel.app/"
            description="Conceptualized and built a smart financial management platform that helps individuals, students, and small business owners track income and expenses. Features AI-powered spending habit analysis, peak period identification, and splurge tracking to promote better financial decisions. Currently in active development with ongoing feature enhancements."
            tools="React, AI Integration, Responsive Design"
            featured={true}
          />
      <div className="projects">
        <ProjectCard 
          title="Fanimation — Economics Learning Website"
          link="https://jadeetad.github.io/Fanimation-project-website/index.html"
          description="Designed and developed a five-page responsive economics website that transforms complex concepts into clear, beginner-friendly content. Prioritized readability, structured information flow, and seamless performance across devices."
          tools="HTML, CSS, JavaScript"
        />
        <ProjectCard 
          title="Recipe Page — Health-Focused Web Experience"
          link="https://jadeetad.github.io/recipie-page-html/"
          description="Built a clean, responsive recipe platform highlighting healthy meals and nutritional benefits. Emphasized intuitive navigation, visual clarity, and an engaging user experience."
          tools="HTML, CSS, Figma"
        />
        <ProjectCard 
          title="EventSphere — UI/UX Design Collaboration"
          description="Collaborated with a small team to design a modern event discovery platform. Contributed to design research, Figma wireframes, layout systems, and user flow decisions, bridging design concepts with frontend implementation."
          tools="Figma, HTML, CSS, JavaScript"
        />
      </div>
    </section>
  );
}
