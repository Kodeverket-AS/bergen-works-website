// Global
import { wpFetchEventsServer } from '@/lib/apollo/server/events/events';
import { wpFetchPostsPaginatedServer } from '@/lib/apollo/server/articles/postsPaginated';

// Components
import Hero from '../components/layout/navigation/hero/Hero';
import { Partnere } from '../components/Partnere';
import { Fasiliteter } from '../components/Fasiliteter';
import { InformationSection } from '@/components/Informasjon';
import { ContactForm } from '@/components/forms/ContactForm';
import { ArticlesContainer } from '@/components/layout/articles/container';
import { UpcomingEvents } from '@/components/layout/events/upcomingEvents';
import { VippsCardsContainer } from '@/components/layout/services/vippsContainer';

export default async function Home() {
  const articles = await wpFetchPostsPaginatedServer({ first: 3 });
  const events = await wpFetchEventsServer({ first: 3 });

  return (
    <main className='flex flex-col gap-3 md:gap-6'>
      <Hero />
      <InformationSection />
      <VippsCardsContainer />
      <Fasiliteter />
      <ArticlesContainer articles={articles.posts} />
      <Partnere />
      <UpcomingEvents events={events.events} />
      <ContactForm />
    </main>
  );
}
