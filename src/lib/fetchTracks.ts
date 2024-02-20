import { SavedTrack, SpotifyType } from 'spotify-types';
const apiToken = 'BQDWqJdT0KJcI6EAWBs4LusSs4mwHHjR-Y-MXPhBsPLFu2rVv19XenoAbAEiQdGhkGCPq4y9K_DAiYGqgqZDX__36Z117V8b2DEiae2OyNDwYaIX_owmQvxyS97HJ5hxhsFEQXYH7p_crXSKFMlWuh1c4Ulw1u4L71QAjPLeTDHEOgjr8RfE2wgkayY2C4-D-AWvBw';

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