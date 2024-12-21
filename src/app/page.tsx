import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/main_frame/intro";
import CoverPage from "@/app/_components/coverpage";

export default function Index() {

  return (
    <main>
      <Container>
        <Intro />
        <CoverPage />

      </Container>
    </main>
  );
}
