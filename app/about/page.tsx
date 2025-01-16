import { AboutHero } from '@/components/about/AboutHero';
import { AboutStory } from '@/components/about/AboutStory';
import { AboutExperience } from '@/components/about/AboutExperience';
import { TechStack } from '@/components/about/TechStack';
import { Expertise } from '@/components/about/Expertise';
import PageAnimation from '@/components/PageAnimation';

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutExperience />
      <TechStack />
      <Expertise />
    </>
  );
}
