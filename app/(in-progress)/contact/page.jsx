import Image from 'next/image';
import Link from 'next/link';
import { Navbar, Contact, Transition } from '@/layout';

export const metadata = {
  title: 'Contact',
  description:
    'Helping brands thrive in the digital world. Located in India. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Kartikey',
};

export default function ContactPage() {
  return (
    <Transition>
      <div className="min-h-screen bg-[#1c1d20] text-white">
        {/* Navbar */}
        <Navbar textColor="text-white" bgColor="bg-[#1c1d20]" />

        {/* Main content */}
        <main className="px-6 pt-52 pb-24">
          {/* Header Section */}
          <section className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 mb-20">
            {/* Profile Image */}
            <div className="w-40 h-40 flex-shrink-0 rounded-full overflow-hidden border-4 border-white">
              <Image
                src="/images/last.jpg"
                alt="Profile"
                width={160}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Title */}
            <div className="text-center lg:text-left space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
                Let’s build something <br /> cool together
              </h1>
              <p className="text-gray-400 text-lg">
                Whether you have a question or just want to say hi, I’ll try my best to get back to you!
              </p>
            </div>
          </section>

          {/* Form + Contact Info */}
          <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-[#2c2d31] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-[#2c2d31] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Your Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 bg-[#2c2d31] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Send Message
              </button>
            </form>

            {/* Email and Social Info - Right Shifted */}
            <div className="space-y-10 pl-10 lg:pl-32">
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-300">kartikeytripathi07@gmail.com</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Social</h3>
                <div className="flex flex-col gap-4 text-gray-400 text-lg">
                  <Link href="https://www.linkedin.com/in/kartikey-tripathi" target="_blank" className="hover:text-white transition-colors">
                    LinkedIn
                  </Link>
                  <Link href="https://github.com/Kartikey-Tripathi" target="_blank" className="hover:text-white transition-colors">
                    GitHub
                  </Link>
                  <Link href="https://twitter.com/kartikeycodes" target="_blank" className="hover:text-white transition-colors">
                    Twitter
                  </Link>
                </div>
              </div>
            </div>
          </section>

        </main>
          <Contact />
      </div>
    </Transition>
  );
}
