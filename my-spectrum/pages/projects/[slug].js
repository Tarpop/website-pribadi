import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import projects from '../../data/projects';
import Link from 'next/link';

export default function ProjectDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Layout><p className="text-center py-10">Project not found.</p></Layout>;

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="mb-4">{project.description}</p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Technologies</h2>
        <ul className="list-disc list-inside mb-4">
          {project.technologies.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>
        <h2 className="text-xl font-semibold mb-2">Features</h2>
        <ul className="list-disc list-inside mb-6">
          {project.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
        <div className="space-x-4">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">GitHub</a>
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Live Demo</a>
        </div>
        <div className="mt-8">
          <Link href="/" className="text-gray-500 hover:underline">← Back to Home</Link>
        </div>
      </div>
    </Layout>
  );
}
