import "./App.css";

function App() {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="logo">MyApp</div>
          <nav className="nav">
            <a href="#">Bosh sahifa</a>
            <a href="#">Haqida</a>
            <a href="#">Xizmatlar</a>
            <a href="#">Bog'lanish</a>
          </nav>
        </div>
      </header>

      <main className="main">
        <section className="hero-section">
          <h1>Xush kelibsiz!</h1>
          <p>Bu React ilovasi - Header, Main va Footer bilan qurilgan.</p>
          <button className="btn">Boshlash</button>
        </section>

        <section className="cards">
          <div className="card">
            <h2>Xizmat 1</h2>
            <p>Bu birinchi xizmat haqida qisqacha ma'lumot.</p>
          </div>
          <div className="card">
            <h2>Xizmat 2</h2>
            <p>Bu ikkinchi xizmat haqida qisqacha ma'lumot.</p>
          </div>
          <div className="card">
            <h2>Xizmat 3</h2>
            <p>Bu uchinchi xizmat haqida qisqacha ma'lumot.</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-container">
          <p>&copy; 2026 MyApp. Barcha huquqlar himoyalangan.</p>
          <div className="footer-links">
            <a href="#">Maxfiylik siyosati</a>
            <a href="#">Foydalanish shartlari</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
