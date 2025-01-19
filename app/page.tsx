import { Carousel } from '@/components/Carousel';
import Hero from '@/components/home/Hero';
export default function Home() {
  return (
    <div className="h-screen flex gap-4 justify-around flex-col md:flex-row">
      <Hero />
      <div className="before:content-['Projects'] before:font-bold before:uppercase before:text-xl before:w-[0] before:block before:h-[2px] before:relative before:z-10 before:text-neutral-300/80 before:dark:text-neutral-100/30">
        <Carousel />
      </div>
    </div>
  );
}
