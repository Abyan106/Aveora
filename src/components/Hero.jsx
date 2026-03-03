import { motion } from "framer-motion";
import bgImage from "./assets/bg.jpg";

function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden font-montserrat text-white"
    >
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Aveora Background"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.45]"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-cinzel text-5xl sm:text-6xl md:text-8xl font-bold tracking-[0.25em] mb-6"
        >
          AVEORA
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-lg md:text-xl text-neutral-200 font-light mb-8 leading-relaxed"
        >
          Generasi yang tidak hanya berjalan bersama,
          <br />
          tetapi tumbuh dalam satu irama.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 300 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-white text-black font-semibold rounded-lg tracking-wider uppercase text-sm transition duration-300 hover:bg-neutral-200"
        >
          Explore Now
        </motion.button>
      </div>
    </section>
  );
}

export default Hero;