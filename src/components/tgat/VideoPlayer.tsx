'use client';

import { forwardRef } from 'react';

interface VideoPlayerProps {
  src: string;
  poster: string;
  onTimeUpdate?: (e: React.SyntheticEvent<HTMLVideoElement, Event>) => void;
}

const VideoPlayer = forwardRef<HTMLVideoElement, VideoPlayerProps>(
  ({ src, poster, onTimeUpdate }, ref) => {
    return (
      <div className="w-full aspect-video bg-black rounded-md overflow-hidden shadow-sm relative group">
        <video
          ref={ref}
          controls
          playsInline
          preload="metadata"
          poster={poster}
          onTimeUpdate={onTimeUpdate}
          className="w-full h-full object-contain bg-black"
          onError={(e) => {
            const target = e.target as HTMLVideoElement;
            target.style.display = 'none';
            
            const fallback = target.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = 'flex';
          }}
        >
          <source src={src} type="video/mp4" />
          <p>Your browser does not support HTML video.</p>
        </video>
        
        {/* Fallback state when video is unavailable or error occurs */}
        <div className="absolute inset-0 flex-col items-center justify-center bg-gray-100 hidden">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
            </svg>
          </div>
          <p className="text-gray-500 font-medium text-center px-4">วิดีโอเฉลยจะถูกเพิ่มภายหลัง</p>
        </div>
      </div>
    );
  }
);

VideoPlayer.displayName = 'VideoPlayer';

export default VideoPlayer;
