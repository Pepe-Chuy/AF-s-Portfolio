import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f5f1ed]">
      <Link
        href="/"
        className="fixed top-8 left-8 text-[#6d6d6d] hover:text-[#3d3d3d] transition-colors font-serif italic"
      >
        ← Back to home
      </Link>

      <div className="max-w-5xl mx-auto px-4 py-20">
        <h1 className="font-serif italic text-4xl text-center text-[#3d3d3d] mb-16">about me</h1>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full aspect-[3/4]">
            <Image
              src="/images/ana-photo.jpg"
              alt="Ana Fernanda De La Torre"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="space-y-4 text-[#4d4d4d] leading-relaxed">
            <p className="font-serif text-lg">
              Hi! My name is <span className="font-semibold">Ana Fernanda De La Torre</span>.
            </p>
            <p>
              I am a Strategic designer, passionate about creating solutions that blend aesthetics, functionality and
              purpose. My work focuses on transforming ideas into meaningful experiences that inspire and shape
              memorable human experiences.
            </p>
            <p>
              What I do: I&apos;m passionate about designing products and experiences that are not only beautiful but
              also intuitive and driven to sell. These experiences fuel my creativity and bring balance to my work.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
