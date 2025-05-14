import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Layout from '../components/Layout'

export default function Contact() {
    return (
      <>
        <Navbar />
        <main className="min-h-screen px-6 py-24 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
          <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
          <form
            action="https://formspree.io/f/xnndokke" // ← ganti ini
            method="POST"
            className="space-y-4 max-w-xl"
          >
            <div>
              <label className="block mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
            </div>
            <div>
              <label className="block mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </main>
        <Footer />
      </>
    )
  }