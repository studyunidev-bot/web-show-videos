import { TgatData } from '@/types/tgat';
import TgatHeader from './TgatHeader';
import TgatVideoExperience from './TgatVideoExperience';

export default function TgatPage({ data }: { data: TgatData }) {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col">
      <TgatHeader />
      
      <main className="max-w-[1280px] w-full mx-auto px-4 py-6 md:py-8 lg:px-8 flex-grow">
        <TgatVideoExperience data={data} />
      </main>
    </div>
  );
}
