export const dynamic = 'force-dynamic';

import '@/lib/storyblok.rsc';
import { getStoryblokApi } from '@storyblok/react/rsc';
import StoryblokEntry from '@/components/StoryblokEntry';

export default async function Page({ params }) {
  const slug = (await params).slug?.join('/') || 'home';
  const sb = getStoryblokApi();
  const version = process.env.NODE_ENV === 'development' ? 'draft' : 'published';
  try {
    const { data } = await sb.get(`cdn/stories/${slug}`, { version, resolve_relations: ['cards_grid.cards'] });
    return <StoryblokEntry story={data.story} />;
  } catch (e) {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-16">
      <h1 className="text-2xl font-semibold mb-4">Story load failed</h1>
      <pre className="text-sm bg-gray-100 p-4 rounded">
        {JSON.stringify({
          message: e?.message,
          status: e?.response?.status,
          version,
          hint: '401 = bad token; 404 = slug not in this space/region'
        }, null, 2)}
      </pre>
    </div>
  );
}
}
