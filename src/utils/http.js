export async function getCurrentTrack() {
  const req = await fetch('https://krtd.049406.xyz/api/nowplaying/krtd')
  const resp = await req.json();
  return resp;
}
