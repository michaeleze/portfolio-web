import { ContactHero } from '@/components/contact/ContactHero';
import { ContactForm } from '@/components/contact/ContactForm';
import PageAnimation from '@/components/PageAnimation';

export default function ContactPage() {
  return (
      <div className="min-h-screen">
        <ContactHero />
        <ContactForm />
      </div>
  );
}
