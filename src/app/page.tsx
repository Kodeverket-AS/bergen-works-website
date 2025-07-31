import Link from 'next/link';
import { wpFetchPosts } from '@/lib/apollo/fetch/posts';
import { wpFetchEvents } from '@/lib/apollo/fetch/events/events';
import Hero from '../components/layout/navigation/hero/Hero';
import Partnere from '../components/Partnere';
import Fasiliteter from '../components/Fasiliteter';
import InformationSection from '@/components/Informasjon';
import { ContactForm } from '@/components/forms/ContactForm';
import { ArticlesContainer } from '@/components/layout/articles/container';
import { UpcomingEvents } from '@/components/layout/events/upcomingEvents';

export default async function Home() {
  const articles = await wpFetchPosts({ first: 3 });
  const events = await wpFetchEvents({ first: 3 });

  // Todo gjør om main til å bruke gap for mellomrom, fjern y margin fra underkomponter som bruker det
  return (
    <main className=''>
      <Hero />
      <InformationSection />
      <Fasiliteter />
      <div className='flex flex-col items-center gap-4'>
        <Link href='articles' className='text-3xl'>
          Nyeste artikler
        </Link>
        <ArticlesContainer articles={articles.posts} />
      </div>
      <Partnere />
      <UpcomingEvents events={events.events} />
      <ContactForm />
    </main>
  );
}
