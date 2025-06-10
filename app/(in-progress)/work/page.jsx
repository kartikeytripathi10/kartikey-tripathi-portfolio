'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar, Contact, Transition } from '@/layout';
import { projects } from '../../_data/wprojects.js';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function Work() {
  return (
    <Transition>
      <Navbar textColor="text-black" />
      <main className="relative min-h-screen px-6 pt-32 pb-20 lg:px-24 text-white overflow-hidden bg-[#0f0f11] bg-gradient-to-br from-[#0f0f11] via-[#1c1d20] to-[#0f0f11] animate-gradient-slow">
        
        {/* Background Light Blobs */}
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-500 opacity-20 blur-3xl rounded-full z-0" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-500 opacity-20 blur-3xl rounded-full z-0" />

        {/* Animated Title */}
        <motion.h1
          className="relative z-10 text-5xl font-extrabold mb-20 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-500"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          ⚡ My Selected Work
          <span className="block mt-2 h-1 w-24 mx-auto bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full animate-pulse" />
        </motion.h1>

        {/* Projects Grid */}
        <motion.div
          className="relative z-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              variants={fadeUp}
              custom={index + 1}
              whileHover={{ y: -6 }}
              className="group relative rounded-xl overflow-hidden shadow-2xl bg-[#1c1d20]/60 backdrop-blur-xl border border-white/10 transition-all duration-300"
            >
              <Link href={`/work/${project.slug}`} className="block relative">
                
                {/* Image */}
                <div className="overflow-hidden relative rounded-t-xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
                </div>

                {/* Text Info */}
                <div className="absolute bottom-6 left-6 z-10 text-white space-y-1 drop-shadow-xl">
                  <h2 className="text-xl font-semibold tracking-wide">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-300">{project.service}</p>
                </div>

                {/* Year Badge */}
                <motion.span
                  className="absolute top-4 right-4 z-10 bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-3 py-1 rounded-full text-xs font-bold text-white shadow-md"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {project.year}
                </motion.span>

                {/* Glow Border */}
                <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-fuchsia-600 group-hover:shadow-[0_0_20px_3px_rgba(255,0,255,0.4)] transition-all duration-300" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Optional Noise Overlay */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
      </main>

      <Contact />
    </Transition>
  );
}
