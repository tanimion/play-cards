'use client';

import '@/lib/storyblok.client';
import { StoryblokComponent, useStoryblokState } from '@storyblok/react';

export default function StoryblokEntry({ story }) {
  const liveStory = useStoryblokState(story, { resolveRelations: ['cards_grid.cards'] });
  return <StoryblokComponent blok={liveStory.content} />;
}
