import Image from "next/image"
import Link from "next/link"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#f5f1ed]">
      <Link
        href="/"
        className="fixed top-8 left-8 text-[#6d6d6d] hover:text-[#3d3d3d] transition-colors font-serif italic"
      >
        ← Back to home
      </Link>

      <div className="max-w-5xl mx-auto px-4 py-20">
        <h1 className="font-serif italic text-4xl text-center text-[#3d3d3d] mb-16">projects showcase</h1>

        <div className="space-y-20">
          {/* All Projects Combined */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative w-full aspect-square">
              <Image src="/images/perfume.jpg" alt="Perfume Packaging" fill className="object-cover rounded-full" />
            </div>
            <div className="space-y-4 text-[#4d4d4d] leading-relaxed">
              <h3 className="font-semibold text-2xl text-[#3d3d3d]">Perfume Packaging (2023)</h3>
              <p>
                Digital and physical development of an innovative perfume container, designed with ergonomics and
                aesthetics in mind.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-[#4d4d4d] leading-relaxed order-2 md:order-1">
              <h3 className="font-semibold text-2xl text-[#3d3d3d]">Headphones (2024)</h3>
              <p>
                Created by combining a bold design language, these functional headphones combine aesthetics with
                performance.
              </p>
            </div>
            <div className="relative w-full aspect-[3/4] order-1 md:order-2">
              <Image src="/images/headphones.jpg" alt="Headphones" fill className="object-cover rounded-lg" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative w-full aspect-[3/4]">
              <Image src="/images/puredial.jpg" alt="PureDial" fill className="object-cover rounded-lg" />
            </div>
            <div className="space-y-4 text-[#4d4d4d] leading-relaxed">
              <h3 className="font-semibold text-2xl text-[#3d3d3d]">PureDial (2024)</h3>
              <p>
                PureDial is a design project aimed at enhancing and improving the quality of life for users undergoing
                hemodialysis.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-[#4d4d4d] leading-relaxed order-2 md:order-1">
              <h3 className="font-semibold text-2xl text-[#3d3d3d]">Tattoo Machine - Proposal (2025)</h3>
              <p>
                This concept explores the fusion of artisan craftsmanship and modern engineering with dynamic surface
                texture.
              </p>
            </div>
            <div className="relative w-full aspect-[3/4] order-1 md:order-2">
              <Image src="/images/tattoo-machine.jpg" alt="Tattoo Machine" fill className="object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
