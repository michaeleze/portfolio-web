import { heroContent } from './hero';
import { storyContent } from './story';
import { experienceContent } from './experience';
import { expertiseContent } from './expertise';

export const aboutContent = {
  hero: heroContent,
  story: storyContent,
  experience: experienceContent,
  expertise: expertiseContent
} as const;