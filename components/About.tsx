"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const members = [
  {
    name: "John Doe",
    instrument: "Guitar",
    bio: "Virtuoso guitarist with a passion for experimental sounds.",
    image: "/john-doe.jpg", // Replace with actual image file
  },
  {
    name: "Jane Smith",
    instrument: "Drums",
    bio: "Rhythm master with years of experience in various genres.",
    image: "/jane-smith.jpg", // Replace with actual image file
  },
  {
    name: "Mike Johnson",
    instrument: "Bass",
    bio: "Provides the foundation with his innovative bass lines.",
    image: "/mike-johnson.jpg", // Replace with actual image file
  },
  {
    name: "Sarah Williams",
    instrument: "Keyboard",
    bio: "Creates atmospheric soundscapes that define the band's unique style.",
    image: "/sarah-williams.jpg", // Replace with actual image file
  },
]

export default function About() {
  const [currentMember, setCurrentMember] = useState(0)

  const nextMember = () => {
    setCurrentMember((prev) => (prev + 1) % members.length)
  }

  const prevMember = () => {
    setCurrentMember((prev) => (prev - 1 + members.length) % members.length)
  }

  return (
    <section id="about" className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-purple-300">About Us</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
        <Image
          src="/band-photo.jpg" // Replace with your actual band photo
          alt="Shree Bhairab"
          width={400}
          height={400}
          className="rounded-lg shadow-lg shadow-purple-500/50 w-full max-w-sm"
        />
        <div className="max-w-md">
          <p className="text-base text-justify sm:text-lg mb-4 text-gray-300">
            Shree Bhairab is a group of passionate musicians dedicated to creating unforgettable experiences through our
            instrumental music. Formed in 2020, we've been pushing the boundaries of modern rock with our unique sound
            and electrifying performances.
          </p>
          <p className="text-base text-justify sm:text-lg text-gray-300">
            Our influences range from classic rock legends to contemporary indie artists, resulting in a sound that's
            both familiar and refreshingly new. Join us on our musical journey and be part of something extraordinary.
          </p>
        </div>
      </div>
      <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-purple-300">Meet the Band</h3>
      <div className="relative max-w-md mx-auto">
        <Button
          variant="ghost"
          onClick={prevMember}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-purple-300 hover:text-purple-100 hover:bg-purple-800/50"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          onClick={nextMember}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-purple-300 hover:text-purple-100 hover:bg-purple-800/50"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentMember * 100}%)` }}
          >
            {members.map((member, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="rounded-full mx-auto mb-4 border-4 border-purple-500 shadow-lg shadow-purple-500/50"
                />
                <h4 className="text-xl font-bold mb-2 text-center text-purple-200">{member.name}</h4>
                <p className="text-purple-400 mb-2 text-center">{member.instrument}</p>
                <p className="text-center text-gray-300">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

