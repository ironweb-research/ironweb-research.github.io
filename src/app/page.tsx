import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/main_frame/intro";
import Background from "@/app/_components/our-background";
import Services from "@/app/_components/services"
import { SectionSeparator } from "@/app/_components/section-separator";

export default function Index() {

  return (
    <main>
      <Container>
        <Intro />
        <Background />
        <SectionSeparator />
        <Services />

      </Container>
    </main>
  );
}
