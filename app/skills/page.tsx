import Image from "next/image"
import Link from "next/link"

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-[#f5f1ed]">
      <Link
        href="/"
        className="fixed top-8 left-8 text-[#6d6d6d] hover:text-[#3d3d3d] transition-colors font-serif italic"
      >
        ← Back to home
      </Link>

      <div className="max-w-5xl mx-auto px-4 py-20">
        <h1 className="font-serif italic text-4xl text-center text-[#3d3d3d] mb-16">skills</h1>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative w-full aspect-[3/4]">
            <Image src="/images/jeans.jpg" alt="Design work" fill className="object-cover rounded-lg" />
          </div>
          <div className="space-y-8 text-[#4d4d4d]">
            <div>
              <h3 className="font-semibold text-lg mb-3 text-[#3d3d3d]">Industrial and Product Design</h3>
              <ul className="space-y-2 text-sm leading-relaxed">
                <li>• Product Design → Creating functional and aesthetically pleasing products</li>
                <li>• Prototyping → Developing prototypes with a focus on impact, feasibility, and viability</li>
                <li>• 3D Modeling → Realistic visualization of projects for communication and presentation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3 text-[#3d3d3d]">Visual and Graphic Design</h3>
              <ul className="space-y-2 text-sm leading-relaxed">
                <li>• Graphic Design → Visual communication and brand storytelling</li>
                <li>• Photo Photography & Portraits → Capturing moments and emotions</li>
                <li>• Packaging Design → Designing attractive and functional packaging</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3 text-[#3d3d3d]">Tools & Software</h3>
              <ul className="space-y-2 text-sm leading-relaxed">
                <li>• Adobe Suite (Photoshop, Illustrator, InDesign)</li>
                <li>• 3D Software (SolidWorks, Blender, KeyShot)</li>
                <li>• Prototyping tools</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
