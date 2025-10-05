'use client';
import { storyblokEditable } from '@storyblok/react';

export default function GlobalSettings({ blok }) {
  // This component intentionally renders almost nothing.
  // The Global story is used to feed Header/Footer, not to be a public page.
  return (
    <section {...storyblokEditable(blok)} className="mx-auto max-w-[1200px] px-4 py-12">
      <h1 className="text-2xl font-bold">Global Settings</h1>
      <p className="mt-2 text-sm text-gray-600">
        Edit the header menu, footer menu, socials, and copyright here.
        These values populate the site header & footer; this page itself isn’t shown publicly.
      </p>
    </section>
  );
}