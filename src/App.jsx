// ============================================
// App — تجميع كل الأقسام
// ============================================

import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Approach from "./sections/Approach";
import Learning from "./sections/Learning";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      {/* ===== Navbar (ثابت في الأعلى) ===== */}
      <Navbar />

      {/* ===== محتوى الصفحة ===== */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Approach />
        <Learning />
        <Contact />
      </main>

      {/* ===== Footer ===== */}
      <Footer />
    </>
  );
}

export default App;