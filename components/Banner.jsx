import Image from 'next/image';
import { storyblokEditable } from '@storyblok/react';

const hrefFromLink = (link) => {
  if (!link) return '#';
  if (link.linktype === 'story' && link.cached_url) return '/' + link.cached_url;
  return link.url || link.cached_url || '#';
};

export default function Banner({ blok }) {
  const href = hrefFromLink(blok.button);

  return (
    <section {...storyblokEditable(blok)} className="py-6">
      <div className="relative mx-auto max-w-[1200px] px-4">
        <div className="relative h-[320px] md:h-[420px] lg:h-[520px] overflow-hidden rounded-2xl">
          {blok.bg_image?.filename ? (
            <Image
              src={blok.bg_image.filename}
              alt={blok.bg_image.alt || blok.title || 'Banner background'}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300" />
          )}

          {/* overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* centered content */}
          <div className="relative z-10 flex h-full items-center justify-center px-4">
            <div className="max-w-3xl text-center text-white">
              {blok.title && (
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                  {blok.title}
                </h1>
              )}
              {blok.description && (
                <p className="mt-4 text-base md:text-lg/relaxed opacity-90">
                  {blok.description}
                </p>
              )}
              {(blok.button_text || blok.button) && (
                <a
                  href={href}
                  target={blok.button?.target === '_blank' ? '_blank' : undefined}
                  rel={blok.button?.target === '_blank' ? 'noopener noreferrer' : undefined}
                  className="mt-6 inline-flex items-center justify-center rounded-xl bg-white/90 px-6 py-3 text-sm font-semibold text-gray-900 backdrop-blur transition hover:bg-white"
                >
                  {blok.button_text || 'Get started'}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}