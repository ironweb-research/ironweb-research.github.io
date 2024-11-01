import Container from "./_components/container";
import Alert from "./_components/alert";
import { Intro } from "./_components/intro";
export const dynamic = 'force-static';
export default function Home() {
  return (
    <main>
      <Alert/>
      <Container>
      <Intro />
        <h1 className="title">
          Welcome to <a href="https://ironweb-research.github.io/">Ironweb!</a>
        </h1>

        <p className="description">
          We are a start-up research company where we dream about and develop the next-gen web security suite
        </p>

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h3>Our Roots &rarr;</h3>
            <p>This is how our company comes about.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Our Expertise &rarr;</h3>
            <p>Our people are the most important assets!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="card"
          >
            <h3>Our Views on Today's Internet Security &rarr;</h3>
            <p>Disarraied but Monopolized.</p>
          </a>

          <a
            href="https://ironweb-research.github.io/we_are/"
            // target="_blank"
            // rel="noopener noreferrer"
            className="card"
          >
            <h3>Our Blog &rarr;</h3>
            <p>
              Who we are defines our fields of expertise, views and research topics.
            </p>
          </a>
        </div>
      
      </Container>
    </main>

    
  );
}
