// components/Menu.jsx
import { StoryblokComponent, storyblokEditable } from '@storyblok/react';

export default function Menu({ blok, className = '' }) {
  return (
    <nav {...storyblokEditable(blok)}>
      <ul className={`flex flex-wrap items-center gap-5 ${className}`}>
        {blok.items?.map((item) => (
          <StoryblokComponent blok={item} key={item._uid} />
        ))}
      </ul>
    </nav>
  );
}