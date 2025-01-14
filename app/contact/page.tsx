import { ContactHero } from '@/components/contact/ContactHero';
import { ContactForm } from '@/components/contact/ContactForm';
import PageAnimation from '@/components/PageAnimation';

export default function ContactPage() {
  return (
    <PageAnimation>
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
        <ContactHero />
        <ContactForm />
      </div>
    </PageAnimation>
  );
}
