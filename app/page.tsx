import { Carousel } from '@/components/Carousel';
import Hero from '@/components/home/Hero';
export default function Home() {
  return (
    <div className="h-full flex gap-4 justify-around flex-col md:flex-row">
      <Hero />
        <Carousel />
    </div>
  );
}
