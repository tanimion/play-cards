// components/MenuItem.jsx
import Link from 'next/link';
import { storyblokEditable } from '@storyblok/react';

export default function MenuItem({ blok }) {
  const href =
    blok.link?.linktype === 'story' && blok.link?.cached_url
      ? '/' + blok.link.cached_url
      : (blok.link?.url || '#');

  const target = blok.link?.target === '_blank' ? '_blank' : undefined;

  return (
    <li {...storyblokEditable(blok)}>
      <Link href={href} target={target} className="hover:opacity-80 transition">
        {blok.label || 'Link'}
      </Link>
    </li>
  );
}