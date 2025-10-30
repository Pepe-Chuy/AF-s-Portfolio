import Image from "next/image"
import Link from "next/link"

export default function VisualGraphicDesignPage() {
  return (
    <div className="min-h-screen bg-[#f5f1ed] text-[#4d4d4d] font-sans">
      <Link
        href="/"
        className="fixed top-8 left-8 text-[#6d6d6d] hover:text-[#3d3d3d] transition-colors font-serif italic"
      >
        ← Back to home
      </Link>

      <div className="max-w-6xl mx-auto px-8 py-20 space-y-24">
        {/* Title */}
        <h1 className="font-script font-normal text-8xl md:text-[10rem] text-[#3d3d3d] mb-16">
          Visual & graphic design<br />
        </h1>

        {/* Game On */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full aspect-[16/9]">
            <Image
              src="/images/game_on.png"
              alt="Game On Project"
              fill
              className="object-contain"
            />
          </div>
          <div className="space-y-4 leading-relaxed">
            <h3 className="font-semibold text-2xl text-[#3d3d3d]">
              Game On (2023)
            </h3>
            <p>
              Branding and visual identity for a sports broadcast show. Developed
              a cohesive graphic system including motion design, typographic
              hierarchy, and an energetic color palette to capture the show’s
              dynamism.
            </p>
          </div>
        </div>

        {/* NASA */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 leading-relaxed order-2 md:order-1">
            <h3 className="font-semibold text-2xl text-[#3d3d3d]">
              NASA Proposal (2024)
            </h3>
            <p>
              Conceptual rebrand for NASA’s public outreach campaigns, emphasizing
              curiosity, exploration, and clarity. The proposal merges typography
              and minimal design to modernize visual communication.
            </p>
          </div>
          <div className="relative w-full aspect-[16/9] order-1 md:order-2">
            <Image
              src="/images/NASA_1.png"
              alt="NASA Project 1"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Second NASA Image */}
        <div className="relative w-full aspect-[16/9]">
          <Image
            src="/images/NASA_2.png"
            alt="NASA Project 2"
            fill
            className="object-contain"
          />
        </div>

        {/* Ukraine */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full aspect-[16/9]">
            <Image
              src="/images/ukraine_1.png"
              alt="Ukraine Awareness 1"
              fill
              className="object-contain"
            />
          </div>
          <div className="space-y-4 leading-relaxed">
            <h3 className="font-semibold text-2xl text-[#3d3d3d]">
              Ukraine Awareness (2023)
            </h3>
            <p>
              Visual campaign supporting awareness and solidarity with Ukraine.
              Focused on simplicity, emotional impact, and color symbolism to
              convey unity and resilience.
            </p>
          </div>
        </div>

        {/* Second Ukraine Image */}
        <div className="relative w-full aspect-[16/9]">
          <Image
            src="/images/ukraine_2.png"
            alt="Ukraine Awareness 2"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}
