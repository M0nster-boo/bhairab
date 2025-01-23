import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-teal-300">Follow Us</h3>
            <p className="mb-4 text-gray-400">
              Stay connected with us on social media for the latest updates, behind-the-scenes content, and more!
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-teal-400 hover:text-teal-300">
                <Facebook />
              </Link>
              <Link href="#" className="text-teal-400 hover:text-teal-300">
                <Twitter />
              </Link>
              <Link href="#" className="text-teal-400 hover:text-teal-300">
                <Instagram />
              </Link>
              <Link href="#" className="text-teal-400 hover:text-teal-300">
                <Youtube />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-teal-300">Quick Links</h3>
            <nav>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection("home")} className="text-gray-400 hover:text-teal-300">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("about")} className="text-gray-400 hover:text-teal-300">
                    About
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("gallery")} className="text-gray-400 hover:text-teal-300">
                    Gallery
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("media")} className="text-gray-400 hover:text-teal-300">
                    Media
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("events")} className="text-gray-400 hover:text-teal-300">
                    Events
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("contact")} className="text-gray-400 hover:text-teal-300">
                    Contact
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-teal-300">Legal</h3>
            <p className="mb-2 text-gray-400">&copy; 2023 The Awesome Band. All rights reserved.</p>
            <p className="text-sm text-gray-400">
              Website developed by{" "}
              <Link href="#" className="underline hover:text-teal-300">
                Web Wizards Inc.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

