'use client';

import { useState } from 'react';

import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const SERVICE_ID = 'service_rndmdts';
const TEMPLATE_ID = 'template_gji40ub';
const PUBLIC_KEY = 'leT-JfR2fCVdVPWe5';

export default function ContactPageClient() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = e => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        setLoading(false);
        setIsSubmitted(true);
      })
      .catch(error => {
        setLoading(false);
        alert('Oops! Something went wrong. Please try again later.');
        console.error(error);
      });
  };

  return (
    <main className='relative isolate overflow-hidden px-6 pb-24 pt-40'>
      {/* Background Shapes */}
      <div className='pointer-events-none absolute inset-0 -z-10 opacity-30 blur-3xl'>
        <div className='absolute left-1/3 top-0 size-[600px] animate-pulse rounded-full bg-indigo-500 opacity-40 mix-blend-multiply blur-2xl' />
        <div className='absolute bottom-0 right-1/4 size-[500px] animate-pulse rounded-full bg-pink-500 opacity-40 mix-blend-multiply blur-2xl delay-500' />
      </div>

      {/* Header */}
      <motion.section className='mx-auto mb-24 flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-start'>
        <motion.div
          className='size-44 shrink-0 overflow-hidden rounded-full border-[5px] border-white shadow-lg'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.1, rotate: 3 }}
        >
          <Image
            src='/images/last.jpg'
            alt='Profile'
            width={180}
            height={180}
            className='size-full object-cover'
          />
        </motion.div>

        <motion.div className='space-y-6 text-center lg:text-left'>
          <h1 className='bg-gradient-to-r from-white to-gray-300 bg-clip-text text-5xl font-bold leading-tight tracking-tight text-transparent drop-shadow-lg sm:text-6xl'>
            Let’s build something <br /> cool together
          </h1>
          <p className='mx-auto max-w-xl text-lg leading-relaxed text-gray-400 lg:mx-0'>
            Whether you have a project, a collaboration idea, or just want to
            say hi — I’ll do my best to reply!
          </p>
        </motion.div>
      </motion.section>

      {/* FORM + THANK YOU */}
      <section className='mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2'>
        {!isSubmitted ? (
          <motion.form
            onSubmit={sendEmail}
            className='space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur-md'
          >
            {['name', 'email', 'message'].map(field => (
              <div key={field}>
                <label
                  htmlFor={field}
                  className='mb-2 block text-sm font-medium capitalize text-gray-300'
                >
                  Your {field}
                </label>
                {field === 'message' ? (
                  <textarea
                    name={field}
                    id={field}
                    rows='4'
                    required
                    className='w-full rounded-lg border border-white/20 bg-[#2c2d31] px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400'
                  />
                ) : (
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    name={field}
                    id={field}
                    required
                    className='w-full rounded-lg border border-white/20 bg-[#2c2d31] px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400'
                  />
                )}
              </div>
            ))}
            <button
              type='submit'
              className='w-full rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:shadow-xl'
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        ) : (
          <motion.div className='space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-white shadow-lg backdrop-blur-md'>
            <h2 className='text-3xl font-bold'>Thank you for your message!</h2>
            <p className='text-lg text-gray-300'>
              I&apos;ve received your submission and will get back to you as
              soon as possible, usually within 1-2 business days.
            </p>
          </motion.div>
        )}

        {/* Contact Info */}
        <motion.div className='space-y-10 pl-0 lg:pl-16'>
          <div>
            <h3 className='mb-2 text-xl font-semibold text-white'>Email</h3>
            <p className='text-gray-300'>kartikey10t@gmail.com</p>
          </div>

          <div>
            <h3 className='mb-2 text-xl font-semibold text-white'>
              Connect on Social
            </h3>
            <div className='flex flex-col gap-4 text-lg text-gray-400'>
              {[
                {
                  href: 'https://www.linkedin.com/in/kartikeytripathi22/',
                  label: 'LinkedIn',
                },
                {
                  href: 'https://github.com/kartikeytripathi10',
                  label: 'GitHub',
                },
                { href: 'https://x.com/kartikeyatripa4', label: 'Twitter' },
              ].map(social => (
                <Link
                  key={social.href}
                  href={social.href}
                  target='_blank'
                  className='relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-indigo-400 after:to-pink-400 after:transition-all after:duration-500 hover:after:w-full'
                >
                  {social.label}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
