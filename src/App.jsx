import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <main>
        <Hero />

        <section
          id="about"
          className="flex min-h-screen items-center justify-center bg-purple-950/10"
        >
          <h2 className="text-5xl font-bold">
            <About/>
          </h2>
        </section>

        <section
          id="skills"
          className="flex min-h-screen items-center justify-center"
        >
          <h2 className="text-5xl font-bold">
            <Skills/>
          </h2>
        </section>

        <section
          id="projects"
          className="flex min-h-screen items-center justify-center bg-purple-950/10"
        >
          <h2 className="text-5xl font-bold">
            Projects
          </h2>
        </section>

        <section
          id="resume"
          className="flex min-h-screen items-center justify-center"
        >
          <h2 className="text-5xl font-bold">
            Resume
          </h2>
        </section>

        <section
          id="contact"
          className="flex min-h-screen items-center justify-center bg-purple-950/10"
        >
          <h2 className="text-5xl font-bold">
            Contact
          </h2>
        </section>
      </main>
    </div>
  );
}

export default App;