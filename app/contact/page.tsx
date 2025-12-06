import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f5f1ed] flex items-center justify-center">
      <Link
        href="/"
        className="fixed top-8 left-8 text-[#6d6d6d] hover:text-[#3d3d3d] transition-colors font-serif italic"
      >
        ← Back to home
      </Link>

      <div className="max-w-2xl mx-auto px-4 text-center">
        <h1 className="font-script font-normal text-8xl md:text-[10rem] text-[#3d3d3d] text-center mb-16">
          Contact
        </h1>
        <p className="text-[#6d6d6d] text-lg mb-8">
          Let&apos;s create something meaningful together.
        </p>

        <div className="space-y-3 text-[#4d4d4d]">
          <p className="font-semibold text-xl">
            Ana Fernanda De La Torre Martínez Rojas
          </p>
          <p className="italic">Strategic Designer Specialist</p>
          <p>Cel: <span className="font-medium">3317033199</span></p>
          <p>
            Correo:{" "}
            <a
              href="mailto:ana0170@outlook.com"
              className="underline hover:text-[#3d3d3d] transition-colors"
            >
              ana0170@outlook.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
