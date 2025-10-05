import './globals.css';
import '@/lib/storyblok.rsc';
import { getStoryblokApi } from '@storyblok/react/rsc';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export const metadata = { title: 'play-cards', description: 'Next + Storyblok + Tailwind' };

export default async function RootLayout({ children }) {
  const sb = getStoryblokApi();
  const version =
    process.env.NEXT_PUBLIC_STORYBLOK_VERSION ||
    (process.env.NODE_ENV === 'development' ? 'draft' : 'published');

  let global = null;
  try {
    const { data } = await sb.get('cdn/stories/global', { version, resolve_relations: ['menu.items', 'menu_item.link'] });
    global = data.story?.content || null;
  } catch (e) {
    // fail soft: render without global data
  }

  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Header global={global} />
        {children}
        <Footer global={global} />
      </body>
    </html>
  );
}
