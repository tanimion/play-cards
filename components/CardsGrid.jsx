import { storyblokEditable, StoryblokComponent } from '@storyblok/react';
export default function CardsGrid({ blok }) {
  return (
    <section {...storyblokEditable(blok)} className="py-12">
      <div className="mx-auto max-w-[1200px] px-4">
        {blok.title && (<h2 className="mb-6 text-2xl font-semibold tracking-tight">{blok.title}</h2>)}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blok.cards?.map((nested)=>(<StoryblokComponent blok={nested} key={nested._uid}/>))}
        </div>
      </div>
    </section>
  );
}
