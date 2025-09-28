import Image from 'next/image';
import { storyblokEditable } from '@storyblok/react';
const hrefFromLink = (link)=>{ if(!link) return '#'; if(link.linktype==='story'&&link.cached_url) return '/'+link.cached_url; return link.url||link.cached_url||'#'; };
export default function Card({ blok }) {
  const href = hrefFromLink(blok.button);
  return (
    <article {...storyblokEditable(blok)} className="flex flex-col justify-start items-start gap-4 rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition hover:shadow-md">
      <div className="relative aspect-square w-full overflow-hidden">
        {blok.image?.filename ? (
          <Image src={blok.image.filename} alt={blok.image.alt||blok.title||''} fill sizes="(min-width:1024px) 30vw, (min-width:768px) 45vw, 90vw" className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-t-2xl rounded-b-none" priority/>
        ) : (<div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" />)}
      </div>
      <div className="p-5 flex flex-col justify-between items-start gap-4">
        <div>
          {blok.title && (<h3 className="text-lg font-bold leading-tight">{blok.title}</h3>)}
          {blok.description && (<p className="mt-2 text-sm leading-6 text-gray-600">{blok.description}</p>)}
        </div>
        <a href={href} target={blok.button?.target==='_blank' ? '_blank':undefined} rel={blok.button?.target==='_blank'?'noopener noreferrer':undefined} className="mt-4 inline-flex items-center justify-center rounded-xl border border-gray-200 px-4 py-2 text-sm font-medium transition hover:border-gray-300 hover:bg-gray-50">
          {blok.button_text || 'Learn more'}
        </a>
      </div>
    </article>
  );
}
