// Server-side (RSC) initialization
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';
import Page from '@/components/Page';
import CardsGrid from '@/components/CardsGrid';
import Card from '@/components/Card';
import Banner from '@/components/Banner';

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: { page: Page, cards_grid: CardsGrid, card: Card, banner: Banner },
  enableFallbackComponent: true,
  apiOptions: { region: process.env.STORYBLOK_REGION || 'eu' },
});
