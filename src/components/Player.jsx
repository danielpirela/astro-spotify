import { useEffect, useRef} from 'react'
import {Play,Pause,Volume,VolumeSilence} from '@/components/Icons'
import { usePlayerStore } from '@/store/musicStore'

export function Player () {

    const audioRef = useRef()

    const {
        isPlaying,
        setIsPlaying,
        setIsCurrentMusic,
        currentMusic
    }= usePlayerStore(state => state)



    const handlePlay = () => {
        setIsPlaying(!isPlaying)
    }

    useEffect(() => {
        isPlaying
        ? audioRef.current.play()
        : audioRef.current.pause()
    },[isPlaying])

    useEffect(() => {
        const {playlist,song,songs } = currentMusic

        console.log(playlist, song)
        if (song ) {
            const src = `/music/${playlist?.id}/0${song?.id}.mp3`
            audioRef.current.src = src
        }
    },[currentMusic])

    return (
        <div className='flex justify-between items-center p-2'>
            <div>
          song
            </div>

            <div className='grid place-content-center gap-4 flex-1 z-30'>
                <div className='flex justify-center items-center'>
                    <button className='bg-white rounded-full p-2' onClick={handlePlay}>
                        {
                            isPlaying ? <Pause/> : <Play/>
                        }
                    </button>
                </div>
            </div>

            <div className='grid place-content-center'>
          valum
            </div>

            <audio ref={audioRef}>

            </audio>
        </div>
    )
}
