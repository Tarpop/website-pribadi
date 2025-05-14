import Link from 'next/link'

export default function ProjectCard({ title, description, slug }) {
  return (
    <Link href={`/projects/${slug}`}>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 hover:shadow-lg transition hover:scale-[1.02] cursor-pointer">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </Link>
  )
}
