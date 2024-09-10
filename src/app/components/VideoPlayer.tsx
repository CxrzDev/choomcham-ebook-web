'use client'
import { Maximize, Pause, Play } from 'lucide-react';
import { useRef, useState } from 'react';

export default function Video({ src, className }: { src: string, className?: string }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        if (isPlaying) {
            videoRef.current?.pause();
            setIsPlaying(false);
        } else {
            videoRef.current?.play();
            setIsPlaying(true);
        }
    };
    const handleFullScreen = () => {
        // Toggle fullscreen
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            videoRef.current?.requestFullscreen();
        }
    };

    return (
        <>
            <video
                // controls={true}
                className={` ${className}`}
                // width="70%"
                ref={videoRef}
                src={src}
                onClick={handlePlay}
            />
            <button className='absolute ssm:bottom-10 bottom-[45%]  group ' onClick={handlePlay}>
                {isPlaying ? <Pause className='fill-white text-white text-[56px] lg:w-10 lg:h-10 md:h-5 md:w-5 duration-150 group-hover:opacity-100 opacity-0 shadow-md rounded-full bg-[--yellow] p-2' /> : <Play className='fill-white text-white text-[56px] lg:w-10 lg:h-10 md:h-5 md:w-5 shadow-md rounded-full bg-[--yellow] p-2' />}
            </button>
            <button onClick={handleFullScreen}  className='absolute bottom-5 right-5 group '>
            <Maximize color='#ffffff' className='ssm:hidden text-whtie' />
            </button>
        </>
    );
}
