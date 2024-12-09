import { createRoot } from "react-dom/client";
import "./index.css";

const root = createRoot(document.getElementById("root"));

function Header() {
  return (
    <header className="header">
      <img src="src/assets/react-logo.png" className="img" alt="React logo" />
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">Pricing</li>
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <main>
      <h1>React is ...</h1>
      <ol>
        <li></li>
        <li></li>
      </ol>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <small>2024</small>
    </footer>
  );
}

function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

root.render(<Page />);
