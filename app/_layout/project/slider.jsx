'use client';

import Image from 'next/image';

import { Center } from '@/components';

/**
 * @param {Object} props
 * @param {'image' | 'video'} props.type
 * @param {string} props.source - relative to /public/images/ (e.g. "project1.jpg" or "demo.mp4")
 */
export function ProjectSlider({ type, source }) {
  const image =
    type === 'image' ? (
      <Image
        src={`/images/${source}`}
        className='object-cover'
        alt='project item'
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    ) : null;

  const video =
    type === 'video' ? (
      <video
        src={`/images/${source}`}
        loop
        muted
        autoPlay
        playsInline
        className='!static !bg-transparent w-full h-full object-cover'
      />
    ) : null;

  return (
    <Center
      className='relative w-1/4 rounded overflow-hidden'
      style={{
        minWidth: '150px',
        height: '20vw',
      }}
    >
      {image}
      {video}
    </Center>
  );
}
