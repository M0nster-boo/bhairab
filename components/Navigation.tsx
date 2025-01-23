"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="bg-gray-900 bg-opacity-90 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png" // Replace with your actual logo file
              alt="Shree Bhairab Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-teal-300">Shree Bhairab</span>
          </Link>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-teal-300 hover:text-teal-100">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <ul
            className={`md:flex space-y-4 md:space-y-0 md:space-x-4 ${
              isMenuOpen ? "block" : "hidden"
            } absolute md:relative top-full left-0 right-0 bg-gray-900 md:bg-transparent p-4 md:p-0`}
          >
            <li>
              <button onClick={() => scrollToSection("home")} className="text-teal-300 hover:text-teal-100 block">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("about")} className="text-teal-300 hover:text-teal-100 block">
                About
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("gallery")} className="text-teal-300 hover:text-teal-100 block">
                Gallery
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("media")} className="text-teal-300 hover:text-teal-100 block">
                Media
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("events")} className="text-teal-300 hover:text-teal-100 block">
                Events
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("contact")} className="text-teal-300 hover:text-teal-100 block">
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

