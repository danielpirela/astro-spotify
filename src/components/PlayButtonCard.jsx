import { usePlayerStore } from '@/store/musicStore'
import { Pause, Play } from './Icons'

export function PlayButtonCard ({id}) {

const {isPlaying, currentMusic, setIsPlaying, setCurrentMusic} = usePlayerStore(state => state)

const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id

const handleClick = async () => {
  console.log(currentMusic)
  if (isPlayingPlaylist) {
    setIsPlaying(false)
    return
  }
  try {

    const res = await fetch(`/api/get-playlist?id=${id}`)
    const data = await res.json()
    const {songs, playlist} = data

    setIsPlaying(true)
    setCurrentMusic({songs, playlist, song: songs[1]})


  }catch(err){
    console.log(err)
  }
  }


  return (
    <button className='bg-green-600 rounded-full p-4' onClick={handleClick}>
        {
            isPlayingPlaylist ? <Pause/> : <Play/>
        }
    </button>
  )
}
