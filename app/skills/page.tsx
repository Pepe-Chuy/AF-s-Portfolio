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
        <h1 className="font-script font-normal text-9xl text-center text-[#3d3d3d] mb-16">skills</h1>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative w-full aspect-[3/4]">
            <Image src="/images/ticketvert.png" alt="Design work" fill className="object-cover rounded-lg" />
          </div>
          <div className="space-y-8 text-[#4d4d4d]">
            <div>
              <h3 className="font-semibold text-lg mb-3 text-[#3d3d3d]">Strategic and Conceptual Design</h3>
              <ul className="space-y-2 text-sm leading-relaxed">
                <li>• Strategic Design → Developing proposals with a focus on impact, feasibility, and differentiation.</li>
                <li>• Brand Design → Building visual identities aligned with each project’s values.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3 text-[#3d3d3d]">Industrial and Product Design</h3>
              <ul className="space-y-2 text-sm leading-relaxed">
                <li>• Product Design → Creating functional and aesthetic products.</li>
                <li>• Prototype production → eveloping prototypes to validate ideas and test user experiences.</li>
                <li>• Renders → Realistic visualization of projects for communication and presentations.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3 text-[#3d3d3d]">Visual and Graphic design</h3>
              <ul className="space-y-2 text-sm leading-relaxed">
                <li>• Graphic Design → Visual communication and brand storytelling.</li>
                <li>• Artistic Photography & Portraits → Creative and narrative-driven photography.</li>
                <li>• Product Photography & Photo Production → Professional visual production to showcase products</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3 text-[#3d3d3d]">Tools & Software</h3>
              <ul className="space-y-2 text-sm leading-relaxed">
                <li>• Adobe Creative Suite (Illustrator, Photoshop, InDesign, After Effects)</li>
                <li>• Figma (UI/UX design & prototyping)</li>
                <li>• SolidWorks (3D modeling & product design)</li>
                <li>• Substance 3D Stager (materials, textures & rendering)</li>
                <li>• Canva (visual communication & quick layouts)</li>
                <li>• Microsoft Office / Google Workspace (presentations, documents & collaboration)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
