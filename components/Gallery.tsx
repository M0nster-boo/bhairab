"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut, RotateCw, Grid, Columns, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

const images = [
  { src: "/images/gallery/band-performance-2023.jpg", alt: "Shree Bhairab live performance 2023" },
  { src: "/images/gallery/guitarist-solo.jpg", alt: "Guitarist's electrifying solo" },
  { src: "/images/gallery/drummer-in-action.jpg", alt: "Drummer in action" },
  { src: "/images/gallery/crowd-cheering.jpg", alt: "Excited crowd cheering" },
  { src: "/images/gallery/backstage-moment.jpg", alt: "Candid backstage moment" },
  { src: "/images/gallery/album-signing.jpg", alt: "Band signing new albums for fans" },
]

type ViewMode = "grid" | "slider" | "slideshow"

export default function Gallery() {
  const [showAll, setShowAll] = useState(false)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [zoom, setZoom] = useState(1)
  const [rotation, setRotation] = useState(0)
  const [viewMode, setViewMode] = useState<ViewMode>("grid")
  const [isPlaying, setIsPlaying] = useState(false)

  const toggleShowAll = () => setShowAll(!showAll)

  const openImage = (index: number) => setSelectedImage(index)
  const closeImage = () => {
    setSelectedImage(null)
    setZoom(1)
    setRotation(0)
    setIsPlaying(false)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length)
      setZoom(1)
      setRotation(0)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length)
      setZoom(1)
      setRotation(0)
    }
  }

  const zoomIn = () => setZoom(zoom * 1.2)
  const zoomOut = () => setZoom(Math.max(0.5, zoom / 1.2))
  const rotate = () => setRotation((rotation + 90) % 360)

  const toggleSlideshow = () => {
    setIsPlaying(!isPlaying)
    if (!isPlaying && selectedImage === null) {
      setSelectedImage(0)
    }
  }

  useState(() => {
    let interval: NodeJS.Timeout
    if (isPlaying) {
      interval = setInterval(nextImage, 3000)
    }
    return () => clearInterval(interval)
  }, [isPlaying])

  return (
    <section id="gallery" className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-teal-300">Gallery</h2>
      <div className="mb-4 flex flex-wrap justify-center gap-2">
        <Button
          onClick={() => setViewMode("grid")}
          variant={viewMode === "grid" ? "default" : "outline"}
          className="bg-teal-700 hover:bg-teal-600 text-white"
        >
          <Grid className="w-4 h-4 mr-2" /> Grid
        </Button>
        <Button
          onClick={() => setViewMode("slider")}
          variant={viewMode === "slider" ? "default" : "outline"}
          className="bg-teal-700 hover:bg-teal-600 text-white"
        >
          <Columns className="w-4 h-4 mr-2" /> Slider
        </Button>
        <Button
          onClick={toggleSlideshow}
          variant={isPlaying ? "default" : "outline"}
          className="bg-teal-700 hover:bg-teal-600 text-white"
        >
          {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />} Slideshow
        </Button>
      </div>
      {viewMode === "grid" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.slice(0, showAll ? images.length : 6).map((image, index) => (
            <div key={index} className="relative aspect-w-4 aspect-h-3 cursor-pointer" onClick={() => openImage(index)}>
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-md shadow-teal-500/50 transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      )}
      {viewMode === "slider" && (
        <div className="relative max-w-3xl mx-auto">
          <Button
            variant="ghost"
            onClick={prevImage}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-teal-300 hover:text-teal-100 hover:bg-teal-800/50"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            onClick={nextImage}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-teal-300 hover:text-teal-100 hover:bg-teal-800/50"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
          <div className="aspect-w-16 aspect-h-9">
            <Image
              src={images[selectedImage || 0].src}
              alt={images[selectedImage || 0].alt}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg shadow-teal-500/50"
            />
          </div>
        </div>
      )}
      <div className="mt-8 text-center">
        <Button onClick={toggleShowAll} className="bg-teal-700 hover:bg-teal-600 text-white">
          {showAll ? "Show Less" : "View More"}
        </Button>
      </div>
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative w-full h-full flex items-center justify-center">
            <Button
              variant="ghost"
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-teal-300 hover:text-teal-100 hover:bg-teal-800/50"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-teal-300 hover:text-teal-100 hover:bg-teal-800/50"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              onClick={closeImage}
              className="absolute top-4 right-4 text-teal-300 hover:text-teal-100 hover:bg-teal-800/50"
            >
              <X className="h-6 w-6" />
            </Button>
            <div className="relative" style={{ transform: `scale(${zoom}) rotate(${rotation}deg)` }}>
              <Image
                src={images[selectedImage].src || "/placeholder.svg"}
                alt={images[selectedImage].alt}
                width={800}
                height={600}
                objectFit="contain"
                className="shadow-2xl shadow-teal-500/50"
              />
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
              <Button
                variant="ghost"
                onClick={zoomIn}
                className="text-teal-300 hover:text-teal-100 hover:bg-teal-800/50"
              >
                <ZoomIn className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                onClick={zoomOut}
                className="text-teal-300 hover:text-teal-100 hover:bg-teal-800/50"
              >
                <ZoomOut className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                onClick={rotate}
                className="text-teal-300 hover:text-teal-100 hover:bg-teal-800/50"
              >
                <RotateCw className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

