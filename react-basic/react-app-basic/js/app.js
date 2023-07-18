const Header = () => {
  return (
    <header>
      <h2>Cities</h2>
    </header>
  );
};

const Section = () => {
  return (
    <section>
      <nav>
        <ul>
          <li>
            <a href="#">London</a>
          </li>
          <li>
            <a href="#">Paris</a>
          </li>
          <li>
            <a href="#">Tokyo</a>
          </li>
        </ul>
      </nav>

      <article>
        <h1>London</h1>
        <p>
          London is the capital city of England. It is the most populous city in
          the United Kingdom, with a metropolitan area of over 13 million
          inhabitants.
        </p>
        <p>
          Standing on the River Thames, London has been a major settlement for
          two millennia, its history going back to its founding by the Romans,
          who named it Londinium.
        </p>
      </article>
    </section>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>footer</p>
    </footer>
  );
};
const rootEl = document.querySelector("#root");

const App = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <Section></Section>
      <Footer></Footer>
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(rootEl);
root.render(<App />);
