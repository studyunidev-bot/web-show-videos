'use client';

import { useRef, useState } from 'react';
import { TgatData } from '@/types/tgat';
import VideoPlayer from './VideoPlayer';
import SubjectInfoCard from './SubjectInfoCard';
import ContentOutline from './ContentOutline';
import ShopCTA from './ShopCTA';

export default function TgatVideoExperience({ data }: { data: TgatData }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTimestamp, setActiveTimestamp] = useState<number | null>(null);

  const timestamps = data.sections
    .flatMap(section => section.items)
    .map(item => item.timestamp)
    .sort((a, b) => a - b);

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const time = (e.target as HTMLVideoElement).currentTime;

    let active = null;
    for (let i = timestamps.length - 1; i >= 0; i--) {
      if (time >= timestamps[i]) {
        active = timestamps[i];
        break;
      }
    }
    setActiveTimestamp(active);
  };

  const handleChapterClick = (timestamp: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = timestamp;
      videoRef.current.play().catch(e => console.log('Autoplay prevented:', e));

      if (window.innerWidth < 1024 && containerRef.current) {
        containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div ref={containerRef} className="flex flex-col lg:flex-row gap-5 lg:gap-8 scroll-mt-20">
      {/* Main Video Area: ~67% on Desktop */}
      <div className="w-full lg:w-[67%] flex flex-col space-y-6">
        <VideoPlayer
          ref={videoRef}
          src={data.video}
          poster={data.poster}
          onTimeUpdate={handleTimeUpdate}
        />

        {/* <div className="hidden lg:block">
          <ShopCTA url={data.shopUrl} />
        </div> */}
      </div>

      {/* Sidebar Area: ~33% on Desktop */}
      <div className="w-full lg:w-[33%] flex flex-col space-y-5">
        <SubjectInfoCard
          title={data.title}
          subjectName={data.subjectName}
          setNumber={data.setNumber}
          questionCount={data.questionCount}
          duration={data.duration}
        />

        <ContentOutline
          sections={data.sections}
          activeTimestamp={activeTimestamp}
          onChapterClick={handleChapterClick}
        />

        {/* <div className="lg:hidden">
          <ShopCTA url={data.shopUrl} />
        </div> */}
      </div>
    </div>
  );
}
