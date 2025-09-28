import { StoryblokComponent } from '@storyblok/react';
export default function Page({ blok }) {
  return (<main>{blok.body?.map((nested)=>(<StoryblokComponent blok={nested} key={nested._uid}/>))}</main>);
}
