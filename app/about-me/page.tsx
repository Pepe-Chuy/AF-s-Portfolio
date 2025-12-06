import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="h-screen w-screen bg-[#f1f0ee] overflow-hidden flex flex-col">
      {/* Back Link */}
      <Link
        href="/"
        className="fixed top-8 left-8 text-[#6d6d6d] hover:text-[#3d3d3d] transition-colors font-serif italic"
      >
        ← Back to home
      </Link>

      {/* Main Container */}
      <div className="flex flex-col md:flex-row h-full w-full max-w-none mx-auto mt-20 md:mt-32">
        {/* Image Section */}
        <div className="md:w-1/3 w-full flex-shrink-0 relative mt-20 md:mt-32 flex justify-center">
          <Image
            src="/images/ana-photo.png"
            alt="Ana Fernanda De La Torre"
            width={600}
            height={840}
            className="object-contain rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-2/3 w-full p-12 pr-16 md:pr-32 flex flex-col justify-center text-[#4d4d4d] leading-relaxed font-sans">
          <h1 className="font-script font-normal text-8xl md:text-[10rem] text-[#3d3d3d] mb-16">
            about me
          </h1>
          <p className="text-2xl md:text-3xl mb-6">
            Hi! My name is <span className="font-semibold">Ana Fernanda De La Torre</span>.
          </p>
          <p className="text-xl md:text-2xl mb-6">
            I am a strategic designer, passionate about creating
            solutions that blend aesthetics, functionality and experience.
            I see design as a tool to tell stories, build authentic
            identities and shape memorable human experiences.
          </p>
          <p className="text-xl md:text-2xl">
            When I´m not designing you´ll probably find me sketching ideas, reading, 
            painting or discovering new places to eat. These experiences fuel 
            my creativity and bring balance to my work.
          </p>
        </div>
      </div>
    </div>
  );
}




