'use client';

import { storyblokEditable } from '@storyblok/react';

/** ---- helpers: make ANY input plain text ---- **/
const stripHtml = (html = '') =>
  html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .trim();

// Walk Storyblok Richtext JSON to plain text (keeps paragraphs/newlines)
const richToPlain = (doc) => {
  if (!doc) return '';
  const walk = (node) => {
    if (!node) return '';
    if (node.type === 'text') return node.text || '';
    if (node.type === 'hard_break') return '\n';
    let text = '';
    if (Array.isArray(node.content)) {
      text += node.content.map(walk).join('');
    }
    // put blank line after paragraphs
    if (node.type === 'paragraph') text += '\n\n';
    return text;
  };
  return (doc.content || []).map(walk).join('').replace(/\n{3,}/g, '\n\n').trim();
};

const toPlainText = (value) => {
  if (!value) return '';
  // If editor used Richtext field (JSON doc)
  if (typeof value === 'object' && value.type === 'doc') return richToPlain(value);
  // If editor pasted HTML into a Textarea/WYSIWYG string
  if (typeof value === 'string') return stripHtml(value);
  return '';
};
/** ------------------------------------------- **/

export default function ContentSection({ blok }) {
  const plain = toPlainText(blok.body_richtext);

  return (
    <section {...storyblokEditable(blok)} className="py-10">
      <div className="mx-auto max-w-[1200px] px-4">
        {blok.title && (
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{blok.title}</h2>
        )}

        {/* render pure text, keep line breaks */}
        {plain && (
          <pre className="mt-4 whitespace-pre-wrap text-sm md:text-base leading-7 text-gray-700">
            {plain}
          </pre>
        )}
      </div>
    </section>
  );
}