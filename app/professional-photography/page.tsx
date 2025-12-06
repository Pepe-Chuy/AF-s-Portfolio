import Image from "next/image"
import Link from "next/link"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#f5f1ed] text-[#4d4d4d] font-sans overflow-x-hidden">
      {/* Back Link */}
      <Link
        href="/"
        className="fixed top-8 left-8 text-[#6d6d6d] hover:text-[#3d3d3d] transition-colors font-serif italic z-50"
      >
        ← Back to home
      </Link>

      <div className="max-w-6xl mx-auto px-8 py-20 space-y-40">
        {/* Main Title */}
        <h1 className="font-script font-normal text-8xl md:text-[10rem] text-[#3d3d3d] text-center mb-16">
          Photography
        </h1>

        {/* Portrait Photography */}
        <section className="space-y-12">
          <h2 className="font-semibold text-4xl text-[#3d3d3d]">Portrait Photography</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative w-full aspect-[3/4]">
              <Image
                src="/images/portrait_1.png"
                alt="Portrait Photography 1"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="relative w-full aspect-[3/4]">
              <Image
                src="/images/portrait_2.png"
                alt="Portrait Photography 2"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="relative w-full aspect-[3/4]">
              <Image
                src="/images/portrait_3.png"
                alt="Portrait Photography 3"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
          <p className="max-w-5xl leading-relaxed">
            This portrait series explores light as an emotional language how contrast,
            texture, and gaze can reveal identity beyond words. Each composition
            captures a moment of introspection, emphasizing natural gestures and subtle
            expressions. The minimalist lighting highlights the individuality of each
            subject while maintaining a cohesive visual rhythm
          </p>
        </section>

        {/* Artistic Photography */}
        <section className="space-y-12">
        <h2 className="font-semibold text-4xl text-[#3d3d3d]">Artistic Photography</h2>

        {/* Split layout */}
        <div className="grid md:grid-cols-2 gap-8 h-[90vh]">
            {/* Left side */}
            <div className="flex flex-col gap-8 h-full">
            {/* Top half - images 1 & 2 (vertical) */}
            <div className="flex flex-1 gap-8">
                <div className="relative w-1/2 h-full">
                <Image
                    src="/images/artistic_1.png"
                    alt="Artistic Photography 1"
                    fill
                    className="object-cover rounded-2xl"
                />
                </div>
                <div className="relative w-1/2 h-full">
                <Image
                    src="/images/artistic_2.png"
                    alt="Artistic Photography 2"
                    fill
                    className="object-cover rounded-2xl"
                />
                </div>
            </div>

            {/* Bottom half - image 3 */}
            <div className="relative flex-1 w-full">
                <Image
                src="/images/artistic_3.png"
                alt="Artistic Photography 3"
                fill
                className="object-cover rounded-2xl"
                />
            </div>
            </div>

            {/* Right side - image 4 */}
            <div className="relative w-full h-full">
            <Image
                src="/images/artistic_4.png"
                alt="Artistic Photography 4"
                fill
                className="object-cover rounded-2xl"
            />
            </div>
        </div>
        <p className="max-w-5xl leading-relaxed">
          An exploration of conceptual and experimental imagery, these works
          challenge perception and visual conventions. Using color, texture, and
          symbolism, the series expresses introspection and emotion, turning
          photography into a medium for personal reflection and visual poetry.
        </p>
        </section>

        {/* Commercial Photography */}
        <section className="space-y-12">
          <h2 className="font-semibold text-4xl text-[#3d3d3d]">Commercial Photography</h2>

          {/* First image full-width at top */}
          <div className="relative w-full aspect-[16/9] mb-12">
            <Image
              src="/images/commercial_1.png"
              alt="Commercial Photography 1"
              fill
              className="object-cover rounded-2xl"
            />
          </div>

          {/* Second row with offset layout */}
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Tall vertical image (left column) */}
            <div className="relative w-full aspect-[3/5]">
              <Image
                src="/images/commercial_2.png"
                alt="Commercial Photography 2"
                fill
                className="object-cover rounded-2xl"
              />
            </div>

            {/* Wide shorter image (spanning two columns) */}
            <div className="md:col-span-2">
              <div className="relative w-full aspect-[5/3] mb-8">
                <Image
                  src="/images/commercial_3.png"
                  alt="Commercial Photography 3"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>

              {/* Text starting in the misaligned gap and continuing below */}
              <p className="max-w-4xl leading-relaxed text-[#4d4d4d]">
                Developed to support branding and visual identity projects, this section
                highlights materials, form, and detail through controlled lighting and composition.
                The interplay between proportion and layout mirrors commercial precision — a dialogue
                between product functionality and aesthetic clarity.
                <br /><br />
                The images were crafted to communicate product value and narrative,
                aligning with each brand’s unique visual language and marketing strategy.
                This visual storytelling approach ensures that each shot not only sells
                but also conveys atmosphere and identity.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
