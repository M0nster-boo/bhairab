import { Button } from "@/components/ui/button"

export default function Media() {
  const videos = [
    { id: "dQw4w9WgXcQ", title: "Live at Central Park" },
    { id: "dQw4w9WgXcQ", title: "Studio Session: New Single" },
    { id: "dQw4w9WgXcQ", title: "Behind the Scenes: Music Video" },
  ]

  return (
    <section id="media" className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-purple-300">Media</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {videos.map((video, index) => (
          <div key={index} className="flex flex-col">
            <div className="relative w-full pt-[56.25%]">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg shadow-purple-500/50"
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-purple-200">{video.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button
          className="bg-purple-700 hover:bg-purple-600 text-white"
          onClick={() => window.open("https://www.youtube.com/channel/UCdQwDvXWbZUGLlSZhIYzlqA", "_blank")}
        >
          Subscribe to Our Channel
        </Button>
      </div>
    </section>
  )
}

