import { ServicesHero } from '@/components/services/ServicesHero';
import { ServicesList } from '@/components/services/ServicesList';
import PageAnimation from '@/components/PageAnimation';

export default function ServicesPage() {
  return (
    <PageAnimation>
      <ServicesHero />
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <ServicesList />
        </div>
      </section>
    </PageAnimation>
  );
}
