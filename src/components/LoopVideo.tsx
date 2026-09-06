import { useRef, useState } from 'react'
import { Play } from 'lucide-react'

interface LoopVideoProps {
    src: string
}

function LoopVideo({ src }: LoopVideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPaused, setIsPaused] = useState(false)

    const toggleVideo = () => {
        if (!videoRef.current) return

        if (videoRef.current.paused) {
            videoRef.current.play()
            setIsPaused(false)
        } else {
            videoRef.current.pause()
            setIsPaused(true)
        }
    }

    return (
        <div className="relative mb-4">
            <video
                ref={videoRef}
                src={src}
                autoPlay
                loop
                muted
                playsInline
                onClick={toggleVideo}
                className="w-full cursor-pointer mb-4 border border-gray-100"
            />

            {isPaused && (
                <button
                    onClick={toggleVideo}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <Play
                        size={30}
                        strokeWidth={1.5}
                        className="text-white opacity-90"
                        fill="white"
                    />
                </button>
            )}
        </div>
    )
}

export default LoopVideo