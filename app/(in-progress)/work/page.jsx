'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { Contact, Navbar, Transition } from '@/layout';

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
      <Navbar textColor='text-black' />
      <main className='animate-gradient-slow relative min-h-screen overflow-hidden bg-[#0f0f11] bg-gradient-to-br from-[#0f0f11] via-[#1c1d20] to-[#0f0f11] px-6 pb-20 pt-32 text-white lg:px-24'>
        {/* Background Light Blobs */}
        <div className='absolute left-[-100px] top-[-100px] z-0 size-[300px] rounded-full bg-pink-500 opacity-20 blur-3xl' />
        <div className='absolute bottom-[-100px] right-[-100px] z-0 size-[300px] rounded-full bg-blue-500 opacity-20 blur-3xl' />

        {/* Animated Title */}
        <motion.h1
          className='relative z-10 mb-20 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-center text-5xl font-extrabold text-transparent transition-transform duration-500 hover:scale-105'
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          ⚡ My Selected Work
          <span className='mx-auto mt-2 block h-1 w-24 animate-pulse rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500' />
        </motion.h1>

        {/* Projects Grid */}
        <motion.div
          className='relative z-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              variants={fadeUp}
              custom={index + 1}
              whileHover={{ y: -6 }}
              className='group relative overflow-hidden rounded-xl border border-white/10 bg-[#1c1d20]/60 shadow-2xl backdrop-blur-xl transition-all duration-300'
            >
              <a
                href={project.slug}
                target='_blank'
                rel='noopener noreferrer'
                className='relative block'
              >
                {/* Image Wrapper with aspect-square */}
                <div className='relative aspect-square overflow-hidden rounded-t-xl'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className='ease-[cubic-bezier(0.4,0,0.2,1)] object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/60' />
                </div>

                {/* Text Info */}
                <div className='absolute bottom-6 left-6 z-10 space-y-1 text-white drop-shadow-xl'>
                  <h2 className='text-xl font-semibold tracking-wide'>
                    {project.title}
                  </h2>
                  <p className='text-sm text-gray-300'>{project.service}</p>
                </div>

                {/* Year Badge */}
                <motion.span
                  className='absolute right-4 top-4 z-10 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-3 py-1 text-xs font-bold text-white shadow-md'
                  animate={{ y: [0, -2, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  {project.year}
                </motion.span>

                {/* Glow Border */}
                <div className='absolute inset-0 rounded-xl border border-transparent transition-all duration-300 group-hover:border-fuchsia-600 group-hover:shadow-[0_0_20px_3px_rgba(255,0,255,0.4)]' />
              </a>
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
