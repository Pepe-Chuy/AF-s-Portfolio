import Image from "next/image"
import Link from "next/link"

export default function IndustrialDesignPage() {
  return (
    <div className="min-h-screen bg-[#f5f1ed]">
      <Link
        href="/"
        className="fixed top-8 left-8 text-[#6d6d6d] hover:text-[#3d3d3d] transition-colors font-serif italic z-10"
      >
        ← Back to home
      </Link>

      <div className="max-w-6xl mx-auto px-8 py-20">
          <h1 className="font-script font-normal text-8xl md:text-[10rem] text-[#3d3d3d] mb-16">
          Industrial & product design<br />
        </h1>

        <div className="space-y-32">
          {/* Perfume Packaging */}
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <div className="relative w-full aspect-square">
                <Image 
                  src="/images/perfume.png" 
                  alt="Perfume Packaging" 
                  fill 
                  className="object-contain" 
                />
              </div>
            </div>
            <div className="space-y-4 text-[#4d4d4d] leading-relaxed pt-8">
              <h3 className="font-semibold text-2xl text-[#3d3d3d]">Perfume Packaging (2023)</h3>
              <p>
                Digital and physical development of an innovative perfume container, designed with ergonomic form and 
                structural originality. <strong>Modeled in SolidWorks, rendered in Adobe Substance, and prototyped using 3D resin 
                printing.</strong>
              </p>
            </div>
          </div>

          {/* Headphones */}
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-4 text-[#4d4d4d] leading-relaxed pt-8 order-2 md:order-1">
              <h3 className="font-semibold text-2xl text-[#3d3d3d]">Headphones (2024)</h3>
              <p>
                Inspired by Lamborghini's bold geometric design language, these functional headphones combine 
                aesthetics with performance. The design process focused on angular forms and integrated magnets for 
                attachment, resulting in a futuristic and distinctive product. The project was developed in <strong>SolidWorks, 
                textured in Adobe Substance</strong>, and brought to life with 3D printing, alongside a stand designed for 
                presentation.
              </p>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <div className="relative w-full aspect-[4/3]">
                <Image 
                  src="/images/headphones.png" 
                  alt="Headphones on mannequin" 
                  fill 
                  className="object-cover rounded-lg" 
                />
              </div>
              <div className="relative w-full aspect-square">
                <Image 
                  src="/images/headphones_head.png" 
                  alt="Headphones detail" 
                  fill 
                  className="object-contain" 
                />
              </div>
            </div>
          </div>

          {/* PureDial */}
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="relative w-full aspect-[3/4]">
              <Image 
                src="/images/puredial.png" 
                alt="PureDial wearable device" 
                fill 
                className="object-cover rounded-lg" 
              />
            </div>
            <div className="space-y-4 text-[#4d4d4d] leading-relaxed pt-8">
              <h3 className="font-semibold text-2xl text-[#3d3d3d]">PureDial (2024)</h3>
              <p>
                PureDial is a design project aimed at protecting and improving the quality of life for users undergoing 
                hemodialysis. The wearable device was conceptualized through sketching, ideation, and prototyping to adapt 
                to different body areas where treatment is performed. <strong>Renderings were created in Marvelous Designer</strong> to 
                simulate fabric and usability. This project highlights a user-centered approach focused on comfort, 
                adaptability, and discretion in medical product design.
              </p>
            </div>
          </div>

          {/* Tattoo Machine */}
          <div className="grid md:grid-cols-2 gap-16 items-start pb-20">
            <div className="space-y-4 text-[#4d4d4d] leading-relaxed pt-8 order-2 md:order-1">
              <h3 className="font-semibold text-2xl text-[#3d3d3d]">Tattoo Machine – Proposal (2025)</h3>
              <p>
                This concept explores the design of an ergonomic tattoo machine, developed with fluid geometries and a 
                dynamic surface texture to enhance grip and precision. The proposal combines aesthetics with functionality, 
                integrating modern materials and a sleek form to improve user comfort during extended sessions. The 
                visualization includes both technical sketches and 3D renderings to highlight its evolution from concept to 
                refined design. <strong>(Solid Works, Adobe 3D, Substance, Procreat)</strong>
              </p>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative w-full aspect-[3/4]">
                  <Image 
                    src="/images/tattoo_1.png" 
                    alt="Tattoo machine concept 1" 
                    fill 
                    className="object-cover rounded-lg" 
                  />
                </div>
                <div className="relative w-full aspect-[3/4]">
                  <Image 
                    src="/images/tattoo_2.png" 
                    alt="Tattoo machine concept 2" 
                    fill 
                    className="object-cover rounded-lg" 
                  />
                </div>
              </div>
              <div className="relative w-full aspect-[16/9]">
                <Image 
                  src="/images/tattoo_3.png" 
                  alt="Tattoo machine render" 
                  fill 
                  className="object-contain" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}