export default function Footer() {
  return (
    <footer className="text-center py-6 text-sm text-gray-500">
      © {new Date().getFullYear()} MySpectrum. Built with Next.js & Tailwind CSS.
    </footer>
  )
}