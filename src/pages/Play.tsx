import { useState, useRef } from 'react'


let count = 0

function Play() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)


  const handleVideoClick = () => {
    const sdk = window.RB_SDK
    count++

    if (count > 5) {
      sdk.promptInstallWaitForReady()
    }
    if (!videoRef.current) return

    if (videoRef.current.paused) {
      videoRef.current.play()
    } else {
      videoRef.current.pause()
    }
  }

  const handlePlay = () => {
    setIsPlaying(true)
  }

  const handlePause = () => {
    setIsPlaying(false)
  }


  return (
    <div className="video-wrapper" onClick={handleVideoClick}>
      <video
        ref={videoRef}
        src="/video/video.mp4"
        poster="/video/cover.jpg"
        playsInline
        autoPlay
        onPlay={handlePlay}
        onPause={handlePause}
        className="w-[100vw] h-[100vh] object-cover"
      />
      <div
        style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)' }}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] rounded-full flex items-center justify-center cursor-pointer transition-opacity ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <div style={{ color: '#e5e6eb' }} className="w-0 h-0 border-l-[20px] border-t-[12px] border-b-[12px] border-l-white border-t-transparent border-b-transparent ml-2" />
      </div>
    </div>
  )
}

export default Play
