// app/(in-progress)/contact/page.jsx
import { Contact, Navbar, Transition } from '@/layout';

import ContactPageClient from './ContactPageClient';

export const metadata = {
  title: 'Contact',
  description:
    'Helping brands thrive in the digital world. Located in India. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Kartikey',
};

export default function ContactPage() {
  return (
    <Transition>
      <div className="min-h-screen bg-[#1c1d20] text-white">
        <Navbar bgColor="bg-[#1c1d20]" />
        <ContactPageClient />
        <Contact />
      </div>
    </Transition>
  );
}
