import Container from "@/app/_components/container";
import Alert from "@/app/_components/main_frame/alert";
import { Intro } from "@/app/_components/main_frame/intro";
import CoverPage from "@/app/_components/coverpage";

export default function Index() {

  return (
    <main>
      <Alert/>
      <Container>
        <Intro />
        <CoverPage />

      </Container>
    </main>
  );
}
