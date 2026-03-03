import { useState } from 'react'
import gallery from '../data/galeri'
import { motion, AnimatePresence } from 'framer-motion'

function Gallery () {
  const [visibleCount, setVisibleCount] = useState(6)
  const [selectedImage, setSelectedImage] = useState(null)

  const visibleImages = gallery.slice(0, visibleCount)

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
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
    <section className='py-28 bg-neutral-50'>
      <div className='max-w-6xl mx-auto px-6'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-14'
        >
          <h2 className='text-3xl md:text-4xl font-semibold mb-3'>
            Galeri Angkatan
          </h2>
          <p className='text-neutral-500 italic text-sm md:text-base'>
            Momen Tak Terlupakan
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'
        >
          <AnimatePresence>
            {visibleImages.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
                onClick={() => setSelectedImage(item)}
                className='relative overflow-hidden rounded-2xl cursor-pointer group'
              >
                <img
                  src={item.image}
                  alt={item.caption}
                  className='w-full h-72 object-cover transition duration-700 group-hover:scale-110'
                />

                <div className='absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-end p-4'>
                  <p className='text-white text-sm italic'>{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More */}
        {visibleCount < gallery.length && (
          <div className='text-center mt-12'>
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setVisibleCount(gallery.length)}
              className='px-8 py-3 rounded-full border border-neutral-300 hover:bg-neutral-800 hover:text-white transition'
            >
              Lihat Lebih Banyak
            </motion.button>
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className='fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6'
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className='text-center'
            >
              <img
                src={selectedImage.image}
                alt='Preview'
                className='max-h-[85vh] max-w-[90vw] object-contain rounded-xl mb-4'
              />
              <p className='text-white italic'>{selectedImage.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery
