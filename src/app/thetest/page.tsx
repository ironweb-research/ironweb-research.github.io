"use client"
import Image from "next/image";
import Container from "@/app/_components/container";
import { SectionSeparator } from "@/app/_components/section-separator";
import { IRONWEB_ONE_SVG } from "@/lib/constants"

export default function TestPage() {
  return (
    <main>
      <Container>
      <h1 className="title">
        Welcome to <a href="https://ironweb-research.github.io/">Ironweb!</a>
      </h1>

      <p className="description">Testing Page</p>
      <ul className="">
        <p>Create demo for sharing.</p>
      </ul>
        
    <Image 
      className="svg-element"
      src={IRONWEB_ONE_SVG}
      alt={`Cover Image for`}
      width={80}
      height={80}
    />
      <SectionSeparator />
    </Container>
    </main>
  );
}
