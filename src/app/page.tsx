import Link from 'next/link';
import { wpFetchPosts } from '@/lib/apollo/fetch/posts';
import Hero from '../components/layout/navigation/hero/Hero';
import Partnere from '../components/Partnere';
import Fasiliteter from '../components/Fasiliteter';
import InformationSection from '@/components/Informasjon';
import Events from '../components/Events';
import { ContactForm } from '@/components/forms/ContactForm';
import { ArticlesContainer } from '@/components/layout/articles/container';

export default async function Home() {
  const articles = await wpFetchPosts({ first: 3 });

  return (
    <main className=''>
      <Hero />
      <InformationSection />
      <Fasiliteter />
      <Partnere />
      <div className='flex flex-col items-center gap-4'>
        <Link href='articles' className='text-3xl'>
          Nyeste artikler
        </Link>
        <ArticlesContainer articles={articles.posts} />
      </div>
      <Events />
      <ContactForm />
    </main>
  );
}
