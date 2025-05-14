export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 text-center bg-gradient-to-br from-purple-200 to-blue-100">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Andika Cahya Wiguna</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          A passionate developer building beautiful web experiences.
        </p>
        <a href="/projects" className="px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
          See My Work
        </a>
      </div>
    </section>
  )
}