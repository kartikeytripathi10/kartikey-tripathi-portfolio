'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { Contact, Navbar, Transition } from '@/layout';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } },
};

const wordFade = {
  hidden: { opacity: 0, y: 10 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' },
  }),
};

const splitWords = text =>
  text.split(' ').map((word, i) => (
    <motion.span
      key={i}
      variants={wordFade}
      custom={i}
      className='mr-2 inline-block'
    >
      {word}
    </motion.span>
  ));

export default function About() {
  return (
    <Transition>
      <Navbar />
      <main className='relative space-y-40 overflow-hidden bg-gradient-to-b from-[#1c1d20] via-[#121315] to-black px-8 pt-52 text-white md:px-20'>
        {/* Decorative Gradient Blobs */}
        <div className='absolute left-0 top-0 size-96 animate-pulse rounded-full bg-purple-500 opacity-20 blur-3xl' />
        <div className='absolute bottom-0 right-0 size-96 animate-pulse rounded-full bg-pink-500 opacity-20 blur-3xl' />

        {/* Hero Section */}
        <motion.section
          className='mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.div
            className='space-y-6 text-center md:w-1/2 md:text-left'
            variants={stagger}
          >
            <h1 className='bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-4xl font-bold leading-tight text-transparent md:text-6xl'>
              {splitWords('Digital designer & developer based in India.')}
            </h1>
            <motion.p
              className='text-lg text-gray-400'
              variants={fadeUp}
              custom={3}
            >
              I help brands thrive in the digital world by creating tailor-made
              websites that are both visually appealing and functionally robust.
            </motion.p>
          </motion.div>

          <motion.div
            className='relative md:w-1/2'
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <Image
              src='/images/last.jpg'
              alt='Profile'
              width={800}
              height={800}
              className='w-full rounded-3xl object-cover shadow-2xl'
            />
          </motion.div>
        </motion.section>

        {/* Capabilities Section */}
        <motion.section
          className='mx-auto max-w-6xl space-y-20'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2
            className='text-center text-3xl font-extrabold text-white md:text-left md:text-5xl'
            variants={fadeUp}
          >
            Capabilities
          </motion.h2>

          <motion.div className='grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3'>
            {[
              {
                title: 'Design',
                items: [
                  'UI/UX Design',
                  'Web & Mobile Design',
                  'Wireframing',
                  'Prototyping',
                ],
              },
              {
                title: 'Development',
                items: [
                  'React / Next.js',
                  'Tailwind CSS',
                  'GSAP / Framer Motion',
                  'Responsive Layouts',
                ],
              },
              {
                title: 'Collaboration',
                items: [
                  'Figma & Adobe XD',
                  'Slack / Notion',
                  'Agile / Scrum',
                  'Client Workshops',
                ],
              },
            ].map((block, idx) => (
              <motion.div
                key={block.title}
                variants={fadeUp}
                custom={idx + 1}
                whileHover={{ scale: 1.05 }}
                className='rounded-2xl border border-white/10 bg-white/5 p-6 shadow-md backdrop-blur-md transition duration-300 ease-in-out'
              >
                <div className='mb-4 h-[2px] w-20 bg-gradient-to-r from-pink-500 to-purple-500' />
                <h3 className='mb-4 text-xl font-semibold'>{block.title}</h3>
                <ul className='space-y-2 text-gray-300'>
                  {block.items.map((item, i) => (
                    <motion.li
                      key={i}
                      variants={fadeUp}
                      custom={i + 2}
                      className='cursor-pointer transition-colors hover:text-white'
                      whileHover={{ scale: 1.05, x: 4 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Awwwards Section */}
        <motion.section
          className='mx-auto max-w-6xl space-y-8 text-center'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <motion.div
            className='flex justify-center'
            variants={fadeUp}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <motion.div
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Image
                src='/images/awwwards.jpg'
                alt='Awwwards Judge'
                width={150}
                height={150}
                className='mx-auto rounded-full border-2 border-purple-500 shadow-lg'
              />
            </motion.div>
          </motion.div>
          <motion.p
            className='text-lg text-gray-400'
            variants={fadeUp}
            custom={2}
          >
            <span className='font-semibold text-white'>
              Awwwards Judge 2019–2025
            </span>{' '}
            <br />
            Recognizing excellence in web design and creativity.
          </motion.p>
        </motion.section>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Contact />
        </motion.div>
      </main>
    </Transition>
  );
}
