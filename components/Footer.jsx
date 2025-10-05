import Link from 'next/link';
import Menu from '@/components/Menu';

export default function Footer({ global }) {
  const menuBlok   = global?.footer_menu?.[0];   // Storyblok 'menu' block
  const socials    = global?.socials || [];      // array of 'social_link' blocks
  const copyright  = global?.copyright_text;

  return (
    <footer className="mt-24 border-t border-white/10 bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
      {/* Top */}
      <div className="mx-auto max-w-[1200px] px-4 py-16 grid gap-10 md:grid-cols-3">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            {/* simple logo dot */}
            <span className="inline-block h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-emerald-400/30" />
            <span className="text-lg font-bold text-white">Play Cards</span>
          </div>
          <p className="mt-3 text-sm text-gray-400 leading-6">
            Beautiful play cards with smoothness.
          </p>
        </div>

        {/* Menu */}
        <div>
          <div className="text-sm font-semibold tracking-wide text-white/90 mb-4">
            Watch
          </div>
          {menuBlok ? (
            <Menu
              blok={menuBlok}
              className="
                gap-3
                [&_li]:leading-6
                [&_a]:text-gray-300
                [&_a:hover]:text-white
                [&_a]:transition-colors
              "
            />
          ) : (
            <p className="text-sm text-gray-400">No links yet</p>
          )}
        </div>

        {/* Socials */}
        <div>
          <div className="text-sm font-semibold tracking-wide text-white/90 mb-4">
            Follow
          </div>
          <ul className="flex flex-wrap gap-3">
            {socials.map((s) => {
              const href   = s.url?.url || s.url?.cached_url || '#';
              const target = s.url?.target === '_blank' ? '_blank' : undefined;
              return (
                <li key={s._uid}>
                  <Link
                    href={href}
                    target={target}
                    className="
                      inline-flex items-center gap-2 rounded-xl
                      border border-white/10 bg-white/5 px-3 py-2 text-sm
                      text-gray-200 backdrop-blur
                      hover:text-white hover:border-white/20 hover:bg-white/[0.08]
                      transition-colors
                    "
                  >
                    {/* tiny dot icon */}
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {s.label || 'Social'}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Divider glow */}
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Bottom bar */}
      <div className="mx-auto max-w-[1200px] px-4 py-6">
        <div className="flex items-center justify-center gap-3 text-xs text-gray-400">
          <div>
            {copyright || '© Your Company'}
          </div>
        </div>
      </div>
    </footer>
  );
}