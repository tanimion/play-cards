'use client';
// Client-side initialization so StoryblokComponent registry exists in the browser
import { storyblokInit, apiPlugin } from '@storyblok/react';
import Page from '@/components/Page';
import CardsGrid from '@/components/CardsGrid';
import Card from '@/components/Card';
import Banner from '@/components/Banner';
import ContentSection from '@/components/ContentSection';
import Menu from '@/components/Menu';
import MenuItem from '@/components/MenuItem';
import GlobalSettings from '@/components/GlobalSettings';

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: { global: GlobalSettings, page: Page, detail_page: Page, cards_grid: CardsGrid, card: Card, banner: Banner, content_section: ContentSection, menu: Menu, menu_item: MenuItem },
  enableFallbackComponent: true,
  apiOptions: { region: process.env.STORYBLOK_REGION || 'eu' },
});
