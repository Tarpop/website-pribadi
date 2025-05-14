import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark'
    setDarkMode(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  const toggleTheme = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    document.documentElement.classList.toggle('dark', newMode)
    localStorage.setItem('theme', newMode ? 'dark' : 'light')
  }

 return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow-md">
      <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
        MySite
      </Link>
      <div className="flex gap-4 items-center">
        <Link href="/about" className="text-gray-600 dark:text-gray-200 hover:underline">About</Link>
        <Link href="/projects" className="text-gray-600 dark:text-gray-200 hover:underline">Projects</Link>
        <Link href="/contact" className="text-gray-600 dark:text-gray-200 hover:underline">Contact</Link>
        <button
          onClick={toggleTheme}
          className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  )
}