import { faTelegram, faDiscord } from "@fortawesome/free-brands-svg-icons";

export const icons = {
  play: { src: '/assets/icons/play.svg', alt: 'play icon' },
  pause: { src: '/assets/icons/pause.svg', alt: 'pause icon' },
  loading: { src: '/assets/icons/loader.svg', alt: 'loading icon' },
  volumeOff: { src: '/assets/icons/volume-x.svg', alt: 'volume off icon' },
  volumeLow: { src: '/assets/icons/volume.svg', alt: 'volume low icon' },
  volumeMedium: { src: '/assets/icons/volume-1.svg', alt: 'volume medium icon' },
  volumeHigh: { src: '/assets/icons/volume-2.svg', alt: 'volume high icon' },
  headphones: { src: '/assets/icons/headphones.svg', alt: 'headphones icon' },
  mic: { src: '/assets/icons/mic.svg', alt: 'microphone icon' },
}

export const socialLinks = [
  { icon: faTelegram, url: "https://t.me/krtd_radio", color: "27, 145, 207" },
  { icon: faDiscord, url: "https://discord.com/invite/kDygPTm", color: "114, 137, 218" },
]

export const sources = [
  { info: "128 kbps", url: "https://krtd.049406.xyz/listen/krtd/low" },
  { info: "320 kbps", url: "https://krtd.049406.xyz/listen/krtd/high" },
]

export const bgImages = [
  "bg01.jpeg",
  "bg07.jpeg",
  "bg08.jpeg",
  "bg09.jpeg",
  "bg10.jpeg",
  "bg11.jpeg",
  "bg02.jpg",
  "bg05.jpg",
  "bg02.gif",
  "bg03.gif",
  "bg05.gif",
  "bg06.gif",
  "bg12.jpeg",
  "bg13.jpg",
]
