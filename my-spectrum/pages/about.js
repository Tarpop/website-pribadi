import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Layout from '../components/Layout'

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-6 py-24 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <p className="text-lg leading-relaxed">
          Hello! Saya Andika Cahya Wiguna. Saya adalah seorang mahasiswa dari Sekolah Tinggi Teknologi Mandala atau biasa disebut STT Mandala.
        </p>
      </main>
      <Footer />
    </>
  )
}
