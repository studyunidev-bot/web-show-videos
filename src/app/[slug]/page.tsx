import { notFound } from 'next/navigation';
import { tgatData } from '@/data/tgat';
import TgatPage from '@/components/tgat/TgatPage';

// Pre-generate static params for only the supported routes
export function generateStaticParams() {
  return ['tgat-1', 'tgat-2', 'tgat-3'].map((slug) => ({
    slug: slug,
  }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Explicitly check for valid slugs to ensure strict 404 for others
  const validSlugs = ['tgat-1', 'tgat-2', 'tgat-3'];
  
  if (!validSlugs.includes(slug)) {
    notFound();
  }
  
  const data = tgatData[slug];

  if (!data) {
    notFound();
  }

  return <TgatPage data={data} />;
}
