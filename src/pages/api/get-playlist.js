import { allPlaylists, songs as allSongs } from '@/lib/data'

export async function GET ({request}) {

    try {

        const {url} = request

        const urlObjet = new URL(url)
        const id = urlObjet.searchParams.get('id')

        const playlist = allPlaylists.find(playlist => playlist.id === id)
        const songs = allSongs.filter(song => song.albumId === playlist?.albumId)

        if(playlist && songs) {
            return new Response(JSON.stringify({playlist: playlist, songs: songs}),
            {
                headers: { 'Content-type': 'application/json'}
            }
            )
        }
    }catch (err) {
        return new Response({error : err.message})
    }
    }
