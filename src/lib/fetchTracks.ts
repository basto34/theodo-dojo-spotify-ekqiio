import { SavedTrack, SpotifyType } from 'spotify-types';
const apiToken = 'BQB9QTigIIzyG-QfDB-TeH9ISJbKp934mMRsNFN7gk1HRMQp7pQKn0lk6Hq2IzmzlDcgPPx534lik3PKDzvlO5VCm4rVHCz2pwjWDYo3A3ZSg2ijCLEg65QxEE0VlLXEyDKw_hNPQ3ddSK-ceKo_kUtMzGLCMmeLONUWKEDbkFmT7nPS1TM5-igLWF1kLQL-23Z4iQ';

export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks?limit=50', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
     throw new Error(`Fetching tracks failed with status ${response.status}`)
   }
  const data = await response.json() as { items: SavedTrack[]  };

  return data.items;
};