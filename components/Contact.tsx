import { MapPin, Mail, Phone } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-purple-300">Contact Us</h2>
      <div className="flex flex-col lg:flex-row justify-center items-start gap-8 max-w-6xl mx-auto">
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-purple-200">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-purple-400" />
                <div>
                  <p className="font-medium text-purple-100">Location</p>
                  <p className="text-gray-300">123 Music Street, New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-purple-400" />
                <div>
                  <p className="font-medium text-purple-100">Email</p>
                  <p className="text-gray-300">contact@awesomeband.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-purple-400" />
                <div>
                  <p className="font-medium text-purple-100">Phone</p>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 aspect-square lg:aspect-video">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648718453!2d-73.98784890000001!3d40.748440700000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c6b5%3A0x35b1cfbc89a6097f!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1625687256832!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-lg shadow-lg shadow-purple-500/50"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

