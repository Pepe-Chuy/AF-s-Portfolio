import Image from "next/image"
import Link from "next/link"

export default function VisualDesignPage() {
  return (
    <div className="min-h-screen bg-[#f5f1ed]">
      <Link
        href="/"
        className="fixed top-8 left-8 text-[#6d6d6d] hover:text-[#3d3d3d] transition-colors font-serif italic"
      >
        ← Back to home
      </Link>

      <div className="max-w-5xl mx-auto px-4 py-20">
        <h1 className="font-serif italic text-4xl text-center text-[#3d3d3d] mb-16">
          visual & graphic
          <br />
          design
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-[#4d4d4d] leading-relaxed">
            <h3 className="font-semibold text-2xl text-[#3d3d3d]">Game On (2022)</h3>
            <p>
              Game On is a board game designed to maintain social distancing during the COVID-19 pandemic while ensuring
              safety. The system works with motion sensors and Bluetooth connectivity to track player movements and
              identity design and packaging. Designed in Solid Works and branding in Adobe Illustrator and Photoshop.
              Finalist of ITESO's Design Expo.
            </p>
          </div>
          <div className="relative w-full aspect-video">
            <Image src="/images/game-on.jpg" alt="Game On" fill className="object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  )
}
