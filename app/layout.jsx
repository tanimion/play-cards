import './globals.css';
export const metadata = { title: 'play-cards', description: 'Next + Storyblok + Tailwind' };
export default function RootLayout({ children }) {
  return (<html lang="en"><body className="bg-gray-50 text-gray-900">{children}</body></html>);
}
