'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Navbar, Transition } from '@/layout';
import { Contact } from '@/layout';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const wordFade = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
    },
  }),
};

const splitWords = (text) =>
  text.split(' ').map((word, i) => (
    <motion.span key={i} variants={wordFade} custom={i} className="inline-block mr-2">
      {word}
    </motion.span>
  ));

export default function About() {
  return (
    <Transition>
      <Navbar />
      <main className="bg-[#1c1d20] text-white px-8 md:px-20 pt-[13rem] space-y-40">

        {/* Hero Section */}
        <motion.section
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.div className="md:w-1/2 space-y-6 text-center md:text-left" variants={stagger}>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              {splitWords('Digital designer & developer based in India.')}
            </h1>
            <motion.p className="text-gray-300 text-lg" variants={fadeUp} custom={3}>
              I help brands thrive in the digital world by creating tailor-made websites that are both visually appealing and functionally robust.
            </motion.p>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/last.jpg"
              alt="Profile"
              width={800}
              height={800}
              className="rounded-xl w-full object-cover"
            />
          </motion.div>
        </motion.section>

        {/* Capabilities Section */}
        <motion.section
          className="max-w-6xl mx-auto space-y-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2 className="text-3xl md:text-5xl font-semibold text-center md:text-left" variants={fadeUp}>
            Capabilities
          </motion.h2>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
            {[
              {
                title: 'Design',
                items: ['UI/UX Design', 'Web & Mobile Design', 'Wireframing', 'Prototyping'],
              },
              {
                title: 'Development',
                items: ['React / Next.js', 'Tailwind CSS', 'GSAP / Framer Motion', 'Responsive Layouts'],
              },
              {
                title: 'Collaboration',
                items: ['Figma & Adobe XD', 'Slack / Notion', 'Agile / Scrum', 'Client Workshops'],
              },
            ].map((block, idx) => (
              <motion.div key={block.title} variants={fadeUp} custom={idx + 1}>
                <div className="h-[2px] w-12 bg-white mb-4" />
                <h3 className="text-xl font-semibold mb-2">{block.title}</h3>
                <ul className="text-gray-300 space-y-1">
                  {block.items.map((item, i) => (
                    <motion.li key={i} variants={fadeUp} custom={i + 2}>
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
          className="max-w-6xl mx-auto text-center space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="flex justify-center" variants={fadeUp}>
            <Image
              src="/images/awwwards.jpg"
              alt="Awwwards Judge"
              width={150}
              height={150}
              className="mx-auto"
            />
          </motion.div>
          <motion.p className="text-lg text-gray-300" variants={fadeUp} custom={2}>
            Awwwards Judge 2019–2025<br />Recognizing excellence in web design and creativity.
          </motion.p>
        </motion.section>

        {/* Contact Section */}
        <Contact />
      </main>
    </Transition>
  );
}
