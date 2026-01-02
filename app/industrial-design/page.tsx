import Image from "next/image"
import Link from "next/link"

export default function IndustrialDesignPage() {
  return (
    <div className="min-h-screen bg-[#f5f1ed] overflow-x-hidden">
      <Link
        href="/"
        className="fixed top-4 left-4 md:top-8 md:left-8 text-[#6d6d6d] hover:text-[#3d3d3d] transition-colors font-serif italic z-10"
      >
        ← Back to home
      </Link>

      <div className="max-w-6xl mx-auto px-8 py-20">
        <h1 className="font-script font-normal text-6xl sm:text-7xl md:text-[10rem] text-[#3d3d3d] mb-16">
          Industrial & product design<br />
        </h1>

        <div className="space-y-20 md:hidden">
          <section className="space-y-6">
            <div className="space-y-4 text-[#4d4d4d] leading-relaxed font-medium">
              <h3 className="font-bold text-2xl text-[#3d3d3d]">Perfume Packaging (2023)</h3>
              <p>
                Digital and physical development of an innovative perfume container, designed with ergonomic form and
                structural originality. <strong>Modeled in SolidWorks, rendered in Adobe Substance, and prototyped using 3D resin
                printing.</strong>
              </p>
            </div>
            <div className="relative w-full max-w-md mx-auto aspect-square">
              <Image
                src="/images/perfume.png"
                alt="Perfume Packaging"
                fill
                className="object-contain"
              />
            </div>
          </section>

          <section className="space-y-6">
            <div className="space-y-4 text-[#4d4d4d] leading-relaxed font-medium">
              <h3 className="font-semibold text-2xl text-[#3d3d3d]">Headphones (2024)</h3>
              <p>
                Inspired by Lamborghini's bold geometric design language, these functional headphones combine aesthetics with
                performance. The design process focused on angular forms and integrated magnets for attachment, resulting in a
                futuristic and distinctive product. The project was developed in <strong>SolidWorks, textured in Adobe Substance</strong>,
                and brought to life with 3D printing, alongside a stand designed for presentation.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative w-full aspect-[3/4]">
                <Image
                  src="/images/headphones_head.png"
                  alt="Headphones on mannequin"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div className="relative w-full aspect-square">
                <Image
                  src="/images/headphones.png"
                  alt="Headphones detail"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="space-y-4 text-[#4d4d4d] leading-relaxed">
              <h3 className="font-semibold text-2xl text-[#3d3d3d]">PureDial (2024)</h3>
              <p>
                PureDial is a design project aimed at protecting and improving the quality of life for users undergoing
                hemodialysis. The wearable device was conceptualized through sketching, ideation, and prototyping to adapt to
                different body areas where treatment is performed. <strong>Renderings were created in Marvelous Designer</strong> to
                simulate fabric and usability. This project highlights a user-centered approach focused on comfort, adaptability,
                and discretion in medical product design.
              </p>
            </div>
            <div className="relative w-full max-w-md mx-auto aspect-[3/4]">
              <Image
                src="/images/puredial.png"
                alt="PureDial wearable device"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </section>

          <section className="space-y-6">
            <div className="space-y-4 text-[#4d4d4d] leading-relaxed font-medium">
              <h3 className="font-semibold text-2xl text-[#3d3d3d]">Tattoo Machine – Proposal (2025)</h3>
              <p>
                The proposal combines aesthetics with functionality, integrating modern materials and a sleek form to improve
                user comfort during extended sessions.
              </p>
            </div>
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
                  src="/images/tattoo_3.png"
                  alt="Tattoo machine concept 2"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative w-full col-span-2 aspect-[5/3]">
                <Image
                  src="/images/tattoo_2.png"
                  alt="Tattoo machine render"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </section>
        </div>

        <div className="hidden md:block space-y-24">
          {/* Perfume Packaging */}

          <div className="grid md:grid-cols-2 gap-16 items-center">
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
            <div className="flex flex-col justify-center space-y-4 text-[#4d4d4d] leading-relaxed font-medium h-full">
              <h3 className="font-bold text-2xl text-[#3d3d3d]">Perfume Packaging (2023)</h3>
              <p>
                Digital and physical development of an innovative perfume container, designed with ergonomic form and 
                structural originality. <strong>Modeled in SolidWorks, rendered in Adobe Substance, and prototyped using 3D resin 
                printing.</strong>
              </p>
            </div>
          </div>

          {/* Headphones */}
          <div className="grid md:grid-cols-4 gap-8 min-h-[95vh] relative">
            {/* First image – slightly shorter, fully visible, extending into next section */}
            <div className="flex items-start justify-center md:col-span-1 md:row-span-1">
              <div className="relative w-[95%] md:w-[105%] h-[55vh] md:h-[80vh]">
                <Image 
                  src="/images/headphones_head.png" 
                  alt="Headphones on mannequin" 
                  fill 
                  className="object-contain rounded-lg" 
                />
              </div>
            </div>

            {/* Text – spans columns 2–4, slightly below center */}
            <div className="md:col-span-3 flex items-start md:items-center">
              <div className="mt-20 md:mt-32 space-y-4 text-[#4d4d4d] leading-relaxed font-medium">
                <h3 className="font-semibold text-2xl text-[#3d3d3d]">Headphones (2024)</h3>
                <p>
                  Inspired by Lamborghini's bold geometric design language, these functional headphones combine 
                  aesthetics with performance. The design process focused on angular forms and integrated magnets for 
                  attachment, resulting in a futuristic and distinctive product. The project was developed in <strong>SolidWorks, 
                  textured in Adobe Substance</strong>, and brought to life with 3D printing, alongside a stand designed for 
                  presentation.
                </p>
              </div>
            </div>

            {/* Second image – bigger and lower */}
            <div className="flex items-start justify-center md:absolute md:top-32 md:right-0 w-[30%]">
              <div className="relative w-full aspect-square">
                <Image 
                  src="/images/headphones.png" 
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
          <div className="grid md:grid-cols-2 gap-8 items-start min-h-[85vh]">
            {/* Left images scaled and overlapped */}
            <div className="flex gap-0 justify-center relative">
              <div className="relative w-[55%] aspect-[3/4] z-10">
                <Image 
                  src="/images/tattoo_1.png" 
                  alt="Tattoo machine concept 1" 
                  fill 
                  className="object-cover rounded-lg" 
                />
              </div>
              <div className="relative w-[55%] aspect-[3/4] -ml-12">
                <Image 
                  src="/images/tattoo_3.png" 
                  alt="Tattoo machine concept 2" 
                  fill 
                  className="object-cover rounded-lg" 
                />
              </div>
            </div>

            {/* Text with inline image */}
            <div className="space-y-4 text-[#4d4d4d] leading-relaxed font-medium -ml-8">
              <h3 className="font-semibold text-2xl text-[#3d3d3d]">
                Tattoo Machine – Proposal (2025)
              </h3>

              <p className="relative">
                {/* Inline image floated to top-right */}
                <span className="relative float-right w-96 h-80 ml-4 mb-2">
                  <Image
                    src="/images/tattoo_2.png"
                    alt="Tattoo machine render"
                    fill
                    className="object-contain"
                  />
                </span>
                The proposal combines aesthetics with functionality, integrating modern materials and a sleek form to
                improve user comfort during extended sessions.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}