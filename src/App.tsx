import logo from './assets/logo.svg';
import './App.css';
import { useState } from 'react';
import { fetchTracks } from './lib/fetchTracks';
import { useQuery } from '@tanstack/react-query';
import { SavedTrack } from 'spotify-types';
import swal from 'sweetalert';


const trackUrls = [
  'https://p.scdn.co/mp3-preview/742294f35af9390e799dd96c633788410a332e52',
  'https://p.scdn.co/mp3-preview/5a12483aa3b51331aba663131dbac967ccb33d99',
  'https://p.scdn.co/mp3-preview/31f65b6a613010f22316c7be335b62226cf2f263',
  'https://p.scdn.co/mp3-preview/0f6b8a3524ec410020457da4cdd7717f9addce2f',
  'https://p.scdn.co/mp3-preview/ac28d1b0be285ed3bfd8e9fa5fad133776d7cf36',
];



const App = () => {

  const { data: tracks,isLoading } = useQuery({
    queryKey: ['tracks'],
    queryFn: fetchTracks
  });
  console.log(tracks)
  const [trackIndex, setTrackIndex] = useState(0)

  let choix1;
  let choix2;
  let choix3;

const goToNextTrack = () => {
  setTrackIndex(trackIndex + 1);

}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Blind test basto</h1>
      </header>

      <AlbumCover track={tracks ? tracks[trackIndex] : undefined} />;

      <div className="App-images">
        <p>playlist de basto la menace!</p>
        <p>{tracks?.length}</p> 
        <p>{tracks ? tracks[0]?.track.name : 'loading'}</p>
        Albumcover;
        <audio src= {tracks ? tracks[trackIndex]?.track.preview_url : undefined} autoPlay controls />

<button onClick={goToNextTrack}>
    Next track
</button>


      </div>
      <div className="App-buttons"></div>
      <button onClick={() => checkAnswer(tracks ? tracks[trackIndex]?.track.name : 'loading',tracks ? tracks[0]?.track.name : 'loading')}>{tracks ? tracks[getRandomInt(50)]?.track.name : 'loading'}</button>
      <button onClick={() => checkAnswer(tracks ? tracks[trackIndex]?.track.name : 'loading',tracks ? tracks[1]?.track.name : 'loading')}>{tracks ? tracks[getRandomInt(50)]?.track.name : 'loading'}</button>
      <button onClick={() => checkAnswer(tracks ? tracks[trackIndex]?.track.name : 'loading',tracks ? tracks[2]?.track.name : 'loading')}>{tracks ? tracks[getRandomInt(50)]?.track.name : 'loading'}</button>
    </div>

  );
  };
const AlbumCover = ({ track }: {track : SavedTrack | undefined}) =>  {
  const src = track?.track.preview_url; // A changer ;)
    return (
        <img src={src} style={{ width: 400, height: 400 }} />
    );
}

const checkAnswer = (trackName:string | undefined,trackSelectedName:string|undefined)=> {
  if (trackName==trackSelectedName){
    swal('Bravo, tu es un bon toi');
  }
  else {
    swal('c faux tu es un fatigué')
  }

}
function getRandomInt(max:number) {
  return Math.floor(Math.random() * max);
}

export default App;
