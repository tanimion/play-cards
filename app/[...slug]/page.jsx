export const dynamic = 'force-dynamic';

import '@/lib/storyblok.rsc';
import { getStoryblokApi } from '@storyblok/react/rsc';
import StoryblokEntry from '@/components/StoryblokEntry';

export default async function DynamicPage({ params }) {
  const slug = (await params).slug?.join('/') || 'home';
  const sb = getStoryblokApi();
  const version =
    process.env.NEXT_PUBLIC_STORYBLOK_VERSION ||
    (process.env.NODE_ENV === 'development' ? 'draft' : 'published');

  const { data } = await sb.get(`cdn/stories/${slug}`, {
    version,
    resolve_relations: ['cards_grid.cards'],
  });

  return <StoryblokEntry story={data.story} />;
}
