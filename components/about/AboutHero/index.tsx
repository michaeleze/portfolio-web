'use client';

import { aboutContent } from '@/lib/content/about';
import { HeroTitle } from './HeroTitle';
import { HeroSubtitle } from './HeroSubtitle';

export function AboutHero() {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <HeroTitle title={aboutContent.hero.title} />
        <HeroSubtitle subtitle={aboutContent.hero.subtitle} />
      </div>
    </section>
  );
}