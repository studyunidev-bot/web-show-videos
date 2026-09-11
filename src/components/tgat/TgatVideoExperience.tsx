'use client';

import { useRef, useState, useEffect, useMemo } from 'react';
import { TgatData } from '@/types/tgat';
import VideoPlayer from './VideoPlayer';
import SubjectInfoCard from './SubjectInfoCard';
import ContentOutline from './ContentOutline';
import ShopCTA from './ShopCTA';

export default function TgatVideoExperience({ data }: { data: TgatData }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const allItems = useMemo(() => data.sections.flatMap(section => section.items), [data.sections]);
  const hasPlaylists = useMemo(() => allItems.some(item => item.videoUrl), [allItems]);

  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);
  const [activeTimestamp, setActiveTimestamp] = useState<number | null>(hasPlaylists ? allItems[0]?.timestamp || null : null);

  const currentVideoSrc = hasPlaylists && allItems[activeItemIndex]?.videoUrl 
    ? allItems[activeItemIndex].videoUrl 
    : data.video;

  const timestamps = useMemo(() => allItems.map(item => item.timestamp).sort((a, b) => a - b), [allItems]);

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    if (hasPlaylists) return; // If using individual files, don't update active item based on video time

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

  const handleVideoEnded = () => {
    if (hasPlaylists && activeItemIndex < allItems.length - 1) {
      setActiveItemIndex(prev => prev + 1);
    }
  };

  const handleChapterClick = (timestamp: number) => {
    if (hasPlaylists) {
      const index = allItems.findIndex(item => item.timestamp === timestamp);
      if (index !== -1) {
        setActiveItemIndex(index);
      }
    } else {
      if (videoRef.current) {
        videoRef.current.currentTime = timestamp;
        videoRef.current.play().catch(e => console.log('Autoplay prevented:', e));
      }
    }

    if (window.innerWidth < 1024 && containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Sync activeTimestamp with activeItemIndex when using playlists
  useEffect(() => {
    if (hasPlaylists && allItems[activeItemIndex]) {
      setActiveTimestamp(allItems[activeItemIndex].timestamp);
    }
  }, [activeItemIndex, hasPlaylists, allItems]);

  return (
    <div ref={containerRef} className="flex flex-col lg:flex-row gap-5 lg:gap-8 scroll-mt-20">
      {/* Main Video Area: ~67% on Desktop */}
      <div className="w-full lg:w-[67%] flex flex-col space-y-6">
        <VideoPlayer
          ref={videoRef}
          src={currentVideoSrc || ''}
          poster={data.poster}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleVideoEnded}
        />
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
      </div>
    </div>
  );
}
