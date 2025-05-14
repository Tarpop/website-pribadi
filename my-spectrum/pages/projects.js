import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'
import Layout from '../components/Layout'

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-6 py-24 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <h1 className="text-4xl font-bold mb-6">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              slug={project.slug}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
