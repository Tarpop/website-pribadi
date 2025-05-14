import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          I'm a developer who loves building modern web applications with Next.js & Tailwind CSS.
        </p>
        <div className="space-x-4">
          <Link href="/projects" className="px-5 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
            View Projects
          </Link>
          <Link href="/contact" className="px-5 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600">
            Contact Me
          </Link>
        </div>
      </div>
    </Layout>
  )
}