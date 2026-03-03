import { motion } from "framer-motion";

function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.25, 0.8, 0.25, 1] }
    }
  };

  return (
    <section
      id="about"
      className="bg-white py-20 md:py-32 text-neutral-800 font-montserrat"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* ===== Header ===== */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-cinzel text-4xl md:text-5xl mb-4">
            Tentang Kami
          </h2>

          <p className="text-neutral-500 text-base md:text-lg">
            Apa arti Aveora bagi kami?
          </p>
        </motion.div>

        {/* ===== Body (Opinion Layout Style) ===== */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-start justify-center gap-10 md:gap-14 flex-wrap text-left"
        >
          {/* Image */}
          <div className="w-full md:w-auto max-w-md">
            <img
              src="../assets/logo.jpg"
              alt="Aveora 2026"
              className="w-full h-auto rounded-xl shadow-md"
            />
          </div>

          {/* Content */}
          <div className="max-w-2xl flex-1 text-[1.05rem] leading-[1.9] text-neutral-700 font-light space-y-6">
            <p>
              Generasi Aveora 2026 bukan sekadar kumpulan nama dalam daftar
              hadir. Ia adalah cerita yang tumbuh pelan, tentang tawa yang tak
              direncanakan, tentang lelah yang dibagi bersama, dan tentang mimpi
              yang diam-diam kami rawat tanpa banyak suara.
            </p>

            <p>
              Di tengah tekanan, keraguan, dan tuntutan yang datang silih
              berganti, Aveora menjadi ruang aman. Tempat kami belajar jatuh
              tanpa merasa sendirian. Tempat kami memahami bahwa tumbuh memang
              tidak selalu mudah, tapi selalu mungkin.
            </p>

            <p>
              Jika suatu hari waktu memisahkan langkah kami, semoga kenangan
              tentang Aveora tetap tinggal — bukan sebagai nostalgia kosong,
              melainkan sebagai bukti bahwa kami pernah berjalan bersama dalam
              satu irama.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;