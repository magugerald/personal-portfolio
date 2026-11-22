import Container from "../Container";

export default function Footer() {
  return (
    <footer className="portfolio-footer">
      <Container>
        <div className="portfolio-footer-inner">
          <a className="portfolio-footer-brand" href="#top">
            Gerald Magu<span>.</span>
          </a>
          <p>
            Real estate, data &amp; digital ventures
            <span>© {new Date().getFullYear()} Gerald Magu</span>
          </p>
          <div className="portfolio-footer-links">
            <a href="mailto:magugerald@gmail.com">Email</a>
            <a
              href="https://github.com/magugerald"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/magugerald"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
