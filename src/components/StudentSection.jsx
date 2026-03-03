import { useState } from 'react'
import { motion } from 'framer-motion'
import students from '../data/students.js'

function StudentSection () {
  const [filter, setFilter] = useState('All')

  const filtered =
    filter === 'All' ? students : students.filter(s => s.class === filter)

  // Container animation (stagger effect)
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  }

  // Item animation
  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.8, 0.25, 1]
      }
    }
  }

  return (
    <section className='py-24 bg-white'>
      <div className='max-w-6xl mx-auto px-6'>
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-3xl md:text-4xl text-center font-semibold mb-10'
        >
          Daftar Mahasiswa
        </motion.h2>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className='flex justify-center gap-4 mb-12'
        >
          {['All', 'A', 'B'].map(btn => (
            <button
              key={btn}
              onClick={() => setFilter(btn)}
              className={`px-6 py-2 rounded-full border transition ${
                filter === btn
                  ? 'bg-neutral-800 text-white'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              {btn}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          key={filter}
          variants={container}
          initial='hidden'
          animate='visible'
          className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'
        >
          {filtered.map(student => (
            <motion.a
              key={student.id}
              href={student.instagram}
              target='_blank'
              rel='noopener noreferrer'
              variants={item}
              className='group block'
            >
              <div className='relative overflow-hidden rounded-xl shadow-md'>
                <img
                  src={student.image}
                  alt={student.name}
                  className='w-full h-64 object-cover group-hover:scale-110 transition duration-500'
                />

                {/* Hover Overlay */}
                <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center'>
                  <p className='text-white font-semibold text-lg tracking-wide'>
                    {student.name}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <p className='mt-4 text-sm text-neutral-600 italic leading-relaxed text-center'>
                "{student.quote}"
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default StudentSection
