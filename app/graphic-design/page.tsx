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
              Game On (2022)
            </h3>
            <p>
              An interactive game designed to maintain children’s physical activity during the
              pandemic while ensuring safety. The system works with motion sensors and Bluetooth
              connectivity. Development included brand identity design and packaging. Designed in
              Solid Works and branding in Adobe Illustrator.{" "}
              <strong>Winner of ITESO’s Design Expo.</strong>
            </p>
          </div>
        </div>

        {/* NASA */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left large image */}
          <div className="relative w-full aspect-[16/9] order-1 md:order-1">
            <Image
              src="/images/NASA_1.png"
              alt="NASA Project 1"
              fill
              className="object-contain"
            />
          </div>

          {/* Text with logo at top right */}
          <div className="relative space-y-4 leading-relaxed order-2 md:order-2">
            {/* Small logo positioned outside text flow */}
            <div className="flex justify-end mb-4">
              <div className="relative w-28 h-28 md:w-36 md:h-36">
                <Image
                  src="/images/NASA_2.png"
                  alt="NASA Logo small"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h3 className="font-semibold text-2xl text-[#3d3d3d]">
              NASA Logo (2022)
            </h3>
            <p>
              Created for NASA’s EMIDSS-4 satellite competition, this logo was selected as the{" "}
              <strong>national winner</strong> among submissions from multiple universities across Mexico.
              The design integrates precision, innovation, and a sense of exploration aligned with NASA’s
              visual identity. It was published in scientific journals and printed on the EMIDSS-4 satellite,
              representing the spirit of collaboration between design and space research.
            </p>
          </div>
        </div>

        {/* Peace Poster – Ukraine */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Two images side by side on the left */}
          <div className="flex gap-6 w-full">
            <div className="relative flex-1 aspect-[4/5]">
              <Image
                src="/images/ukraine_1.png"
                alt="Ukraine Awareness 1"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative flex-1 aspect-[4/5]">
              <Image
                src="/images/ukraine_2.png"
                alt="Ukraine Awareness 2"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Text on the right */}
          <div className="space-y-4 leading-relaxed">
            <h3 className="font-semibold text-2xl text-[#3d3d3d]">
              Peace Poster – Ukraine (2022)
            </h3>
            <p>
              Developed as part of a semiotics design project, this poster promotes
              peace during the war in Ukraine, using symbolic language and visual harmony
              to convey resilience and hope. The concept was guided by semiotic
              principles, emphasizing contrast, color psychology, and minimal form.{" "}
              <strong>
                The piece was selected among international participants and
                featured in global exhibitions and publications as a call for empathy
                through design.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
