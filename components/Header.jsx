import Link from 'next/link';
import Menu from '@/components/Menu';

export default function Header({ global }) {
  const menuBlok = global?.header_menu?.[0]; // 'menu' block
  return (
    <header className="bg-white/80 backdrop-blur sticky top-0 z-40 border-b">
      <div className="mx-auto max-w-[1200px] px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">Play Cards</Link>
        {menuBlok ? <Menu blok={menuBlok} className="gap-6" /> : null}
      </div>
    </header>
  );
}