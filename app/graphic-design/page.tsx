import Image from "next/image"
import Link from "next/link"

export default function VisualGraphicDesignPage() {
  return (
    <div className="min-h-screen bg-[#f5f1ed] text-[#4d4d4d] font-sans overflow-x-hidden">
      <Link
        href="/"
        className="fixed top-4 left-4 md:top-8 md:left-8 text-[#6d6d6d] hover:text-[#3d3d3d] transition-colors font-serif italic z-50"
      >
        ← Back to home
      </Link>

      <div className="max-w-6xl mx-auto px-8 py-20">
        {/* Title - centered */}
        <h1 className="font-script font-normal text-7xl md:text-8xl text-[#3d3d3d] text-center mb-20">
          visual & graphic<br />design
        </h1>

        {/* Game On - Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-32">
          <div className="space-y-4">
            <h3 className="font-bold text-xl text-[#3d3d3d]">
              Game On (2022)
            </h3>
            <p className="text-base leading-relaxed">
              An interactive game designed to maintain children's physical activity during the
              pandemic while ensuring safety. The system works with motion sensors and Bluetooth
              connectivity. Development included brand identity design and packaging. Designed in
              Solid Works and branding in Adobe Illustrator.{" "}
              <strong>Winner of ITESO's Design Expo.</strong>
            </p>
          </div>
          <div className="relative w-full aspect-[16/9]">
            <Image
              src="/images/game_on.png"
              alt="Game On Project"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* NASA - Image Left, Text and Logo Right */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-32">
          <div className="grid grid-cols-[1fr_auto] gap-4 items-start w-full md:w-[115%] order-2 md:order-1">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/images/NASA_1.png"
                alt="NASA Project"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-36 sm:w-40 md:w-40 aspect-square">
              <Image
                src="/images/NASA_2.png"
                alt="NASA Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="relative h-full flex flex-col order-1 md:order-2">
            {/* Text at bottom left */}
            <div className="space-y-4 mt-auto">
              <h3 className="font-bold text-xl text-[#3d3d3d]">
                NASA Logo (2022)
              </h3>
              <p className="text-base leading-relaxed">
                Created for NASA's EMIDSS-4 satellite competition, this logo was selected as the{" "}
                <strong>national winner</strong> among submissions from multiple universities across Mexico.
                The design integrates precision, innovation, and a sense of exploration aligned with NASA's
                visual identity. It was published in scientific journals and printed on the EMIDSS-4 satellite,
                representing the spirit of collaboration between design and space research.
              </p>
            </div>
          </div>
        </div>

        {/* Peace Poster - Images Left, Text Right */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="flex gap-4 w-full order-2 md:order-1">
            <div className="relative flex-1 aspect-[3/5]">
              <Image
                src="/images/ukraine_1.png"
                alt="Ukraine Awareness 1"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative flex-1 aspect-[3/5]">
              <Image
                src="/images/ukraine_2.png"
                alt="Ukraine Awareness 2"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="space-y-4 order-1 md:order-2">
            <h3 className="font-bold text-xl text-[#3d3d3d]">
              Peace Poster – Ukraine (2022)
            </h3>
            <p className="text-base leading-relaxed">
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