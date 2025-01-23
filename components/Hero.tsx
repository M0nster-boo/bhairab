import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <Image
        src="/hero-background.jpg" // Replace with your actual hero image file
        alt="Shree Bhairab performing live"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="z-10 text-center p-4 sm:p-8 rounded-lg max-w-xl mx-auto">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-teal-300">Shree Bhairab</h1>
        <p className="text-lg sm:text-xl mb-8 text-gray-300">Unleashing the power of instrumental music</p>
      </div>
    </section>
  )
}

