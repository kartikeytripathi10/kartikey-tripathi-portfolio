'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
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

export default function ContactPageClient() {
  return (
    <main className="px-6 pt-40 pb-24 relative isolate overflow-hidden">

      {/* Fancy blurred background shapes */}
      <div className="absolute inset-0 -z-10 opacity-30 blur-3xl pointer-events-none">
        <div className="absolute left-1/3 top-0 w-[600px] h-[600px] bg-indigo-500 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse" />
        <div className="absolute right-1/4 bottom-0 w-[500px] h-[500px] bg-pink-500 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse delay-500" />
      </div>

      {/* Header */}
      <motion.section
        className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 mb-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        <motion.div
          className="w-44 h-44 flex-shrink-0 rounded-full overflow-hidden border-[5px] border-white shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.1, rotate: 3 }}
        >
          <Image
            src="/images/last.jpg"
            alt="Profile"
            width={180}
            height={180}
            className="object-cover w-full h-full"
          />
        </motion.div>

        <motion.div className="text-center lg:text-left space-y-6" variants={fadeUp} custom={1}>
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent drop-shadow-lg">
            Let’s build something <br /> cool together
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            Whether you have a project, a collaboration idea, or just want to say hi — I’ll do my best to reply!
          </p>
        </motion.div>
      </motion.section>

      {/* Form and Info */}
      <motion.section
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        {/* Contact Form */}
        <motion.form
          className="p-8 rounded-3xl backdrop-blur-md bg-white/5 border border-white/10 shadow-lg space-y-6"
          variants={fadeUp}
          custom={1}
        >
          {['name', 'email', 'message'].map((field, i) => (
            <motion.div key={field} variants={fadeUp} custom={i + 1}>
              <label htmlFor={field} className="block mb-2 text-sm font-medium text-gray-300 capitalize">
                Your {field}
              </label>
              {field === 'message' ? (
                <textarea
                  id={field}
                  rows="4"
                  className="w-full px-4 py-3 bg-[#2c2d31] text-white rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
              ) : (
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  id={field}
                  className="w-full px-4 py-3 bg-[#2c2d31] text-white rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
              )}
            </motion.div>
          ))}
          <motion.button
            type="submit"
            className="w-full px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-md hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Contact Info */}
        <motion.div className="space-y-10 pl-0 lg:pl-16" variants={stagger}>
          <motion.div variants={fadeUp} custom={1}>
            <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
            <p className="text-gray-300">kartikeytripathi07@gmail.com</p>
          </motion.div>

          <motion.div variants={fadeUp} custom={2}>
            <h3 className="text-xl font-semibold mb-2 text-white">Connect on Social</h3>
            <motion.div className="flex flex-col gap-4 text-gray-400 text-lg" variants={stagger}>
              {[
                { href: 'https://www.linkedin.com/in/kartikey-tripathi', label: 'LinkedIn' },
                { href: 'https://github.com/Kartikey-Tripathi', label: 'GitHub' },
                { href: 'https://twitter.com/kartikeycodes', label: 'Twitter' },
              ].map((social, index) => (
                <motion.div
                  key={social.href}
                  variants={fadeUp}
                  custom={index + 3}
                  whileHover={{ x: 6, scale: 1.05 }}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    className="inline-block relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-indigo-400 after:to-pink-400 after:transition-all after:duration-500 hover:after:w-full"
                  >
                    {social.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </main>
  );
}
