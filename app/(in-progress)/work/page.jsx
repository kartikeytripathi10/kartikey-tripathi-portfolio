

import Image from 'next/image';
import Link from 'next/link';

import { 
  Contact, 
  Navbar, 
  Transition 
} from '@/layout';
import { projects } from '../../_data/wprojects.js';

export const metadata = {
  title: 'Work',
  description:
    'Helping brands thrive in the digital world. Located in The Netherlands. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Kartikey',
};

export default function Work() {
  return (
    <Transition>
      <Navbar textColor="text-black" />
      <main className="min-h-screen px-6 pt-32 pb-12 lg:px-24">
        <h1 className="text-5xl font-semibold mb-12">Selected Work</h1>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
         {projects.map((project, index) => (
            <Link key={index} href={`/work/${project.slug}`} className="group">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4 flex justify-between items-center text-black">
                <div>
                  <h2 className="text-xl font-medium">{project.title}</h2>
                  <p className="text-sm">{project.service}</p>
                </div>
                <span className="text-sm">{project.year}</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Contact />
    </Transition>
  );
}
