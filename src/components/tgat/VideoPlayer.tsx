'use client';

import { forwardRef, useEffect, useRef, useState } from 'react';

interface VideoPlayerProps {
  src: string;
  poster: string;
  onTimeUpdate?: (e: React.SyntheticEvent<HTMLVideoElement, Event>) => void;
  onEnded?: () => void;
}

function safeEncodeVideoUrl(url: string): string {
  if (!url) return '';
  try {
    const decoded = decodeURI(url);
    return encodeURI(decoded).replace(/ /g, '%20');
  } catch {
    return encodeURI(url).replace(/ /g, '%20');
  }
}

const VideoPlayer = forwardRef<HTMLVideoElement, VideoPlayerProps>(
  ({ src, poster, onTimeUpdate, onEnded }, ref) => {
    const isFirstRender = useRef(true);
    const [hasError, setHasError] = useState(false);
    const formattedSrc = safeEncodeVideoUrl(src);

    // Reset error state when src changes
    useEffect(() => {
      setHasError(false);
    }, [src]);

    // Only auto-play when user changes video src (e.g. switching chapters/parts), NOT on initial page mount
    useEffect(() => {
      if (isFirstRender.current) {
        isFirstRender.current = false;
        return;
      }

      if (ref && typeof ref !== 'function' && ref.current && formattedSrc) {
        ref.current.load();
        ref.current.play().catch(e => {
          console.log('Autoplay prevented:', e);
        });
      }
    }, [formattedSrc, ref]);

    return (
      <div className="w-full aspect-video bg-black rounded-md overflow-hidden shadow-sm relative group">
        {formattedSrc ? (
          <video
            ref={ref}
            src={formattedSrc}
            {...({ referrerPolicy: 'no-referrer' } as React.HTMLAttributes<HTMLElement>)}
            controls
            controlsList="nodownload"
            onContextMenu={(e) => e.preventDefault()}
            playsInline
            preload="metadata"
            poster={poster}
            onTimeUpdate={onTimeUpdate}
            onEnded={onEnded}
            className={`w-full h-full object-contain bg-black ${hasError ? 'hidden' : 'block'}`}
            onError={(e) => {
              const video = e.currentTarget;
              if (video.error) {
                // Code 1 is MEDIA_ERR_ABORTED (user or script stopped loading previous source)
                if (video.error.code !== 1) {
                  console.error('Video Player Error:', video.error.code, video.error.message);
                  setHasError(true);
                }
              }
            }}
          >
            Your browser does not support HTML video.
          </video>
        ) : null}

        {/* Fallback state when video has error or has no src */}
        {(hasError || !src) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 text-white p-4">
            <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
              </svg>
            </div>
            <p className="text-gray-300 font-medium text-center px-4">
              {hasError ? 'ไม่สามารถเล่นวิดีโอได้ กรุณาลองใหม่อีกครั้ง' : 'วิดีโอเฉลยจะถูกเพิ่มภายหลัง'}
            </p>
            {hasError && (
              <button
                type="button"
                onClick={() => {
                  setHasError(false);
                  if (ref && typeof ref !== 'function' && ref.current) {
                    ref.current.load();
                  }
                }}
                className="mt-3 px-4 py-1.5 text-xs bg-gray-700 hover:bg-gray-600 rounded text-gray-200 transition cursor-pointer"
              >
                ลองโหลดใหม่
              </button>
            )}
          </div>
        )}
      </div>
    );
  }
);

VideoPlayer.displayName = 'VideoPlayer';

export default VideoPlayer;
