import { Carousel } from '@/components/Carousel';
import Hero from '@/components/home/Hero';
export default function Home() {
  return (
    <div className="h-screen flex gap-4 justify-around flex-col md:flex-row">
      <Hero />
      <div className="before:content-['Projects'] before:font-bold before:uppercase before:text-3xl before:w-[0] before:block before:h-[2px] before:bg-neutral-900 dark:before:bg-neutral-100 before:relative before:z-10">
        <Carousel />
      </div>
    </div>
  );
}
