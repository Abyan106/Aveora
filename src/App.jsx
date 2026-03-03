import Hero from "./components/Hero";
import About from "./components/About";
import StudentSection from "./components/StudentSection";
import Gallery from "./components/Gallery";
import Timeline from "./components/Timeline";
import './index.css'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-100 text-neutral-800">
      <Hero />
      <About />
      <StudentSection />
      <Gallery />
      <Timeline />
    </div>
  );
}

export default App;