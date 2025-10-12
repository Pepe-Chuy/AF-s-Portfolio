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
        <h1 className="font-serif italic text-5xl text-[#3d3d3d] mb-8">
          strategic &<br />
          conceptual design
        </h1>
        <p className="text-[#6d6d6d] text-lg mb-8">Let&apos;s create something meaningful together.</p>
        <div className="space-y-4 text-[#4d4d4d]">
          <p>Ana Fernanda De La Torre</p>
          <p className="italic">Strategic Designer Specialist</p>
        </div>
      </div>
    </div>
  )
}
