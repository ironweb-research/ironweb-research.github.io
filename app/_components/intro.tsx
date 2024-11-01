// import Link from "next/link";
import Image from "next/image";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        <Image
          src={`https://ironweb-research.github.io/logo/Ironweb_github_profile.gif`}
          alt="Logo"
          width={400} // Adjust the width as needed
          height={400} // Adjust the height as needed
          className="mr-2" // Add some margin to the right of the image
        />
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Future is Secure.
      </h4>
    </section>
  );
}
