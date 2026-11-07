export interface FeaturedSong {
  title: string;
  artist: string;
  duration: string;
  streams: string;
  year: string;
  badge: string;
  previewUrl?: string;
}

export interface SongStats {
  streams: string;
  releases: string;
  chartPeak: string;
  listeners: string;
}

export interface SongEntity {
  id: string;
  name: string;
  logo: string;
  category: "Record Label" | "Production House" | "Audio Publishing" | "Recording Studio" | "Featured Artist" | "Indie & Fusion";
  tagline: string;
  established: string;
  genre: string[];
  description: string;
  stats: SongStats;
  featuredSong: FeaturedSong;
  topTracks: string[];
  distribution: string[];
  accentColor: string;
}

export const musicCatalog: SongEntity[] = [
  {
    id: "all-good-music",
    name: "All Good Music",
    logo: "/logos/1.jpeg",
    category: "Record Label",
    tagline: "Pure Soundwaves & Soulful Melodies",
    established: "2021",
    genre: ["Contemporary Pop", "Indie Melodies", "Chillhop", "Acoustic"],
    description:
      "All Good Music is an artist-first independent record label recognized for its gleaming gold vinyl aesthetic, pristine studio mastering, and soulful melodies that consistently break into global streaming algorithmic playlists.",
    stats: {
      streams: "45M+",
      releases: "18 Tracks",
      chartPeak: "#4 Viral 50",
      listeners: "1.2M Monthly",
    },
    featuredSong: {
      title: "Rhythm of Gold",
      artist: "Aarav & Simran",
      duration: "3:42",
      streams: "14.8M",
      year: "2024",
      badge: "Trending Hit",
    },
    topTracks: [
      "Rhythm of Gold",
      "Midnight Chords",
      "Dil Da Sahara",
      "Echoes of You",
    ],
    distribution: [
      "Spotify",
      "Apple Music",
      "YouTube Music",
      "JioSaavn",
      "Amazon Music",
    ],
    accentColor: "#d97706",
  },
  {
    id: "leotech-media-89",
    name: "Leotech Media 89",
    logo: "/logos/2.jpeg",
    category: "Production House",
    tagline: "Roaring Beats & High-Voltage Power Anthems",
    established: "2019",
    genre: ["Desi Hip-Hop", "Punjabi Folk Trap", "Bass Heavy", "Live Acoustic"],
    description:
      "Showcasing the iconic golden lion crest and vintage broadcast microphone, Leotech Media 89 is a powerhouse creative entertainment label producing thunderous beats, raw vocal deliveries, and high-budget cinematic visuals.",
    stats: {
      streams: "72M+",
      releases: "24 Tracks",
      chartPeak: "#2 Punjabi Top 50",
      listeners: "1.8M Monthly",
    },
    featuredSong: {
      title: "Sher-E-Punjab",
      artist: "Harkirat Sandhu ft. Leo",
      duration: "3:15",
      streams: "26.4M",
      year: "2024",
      badge: "Club Sensation",
    },
    topTracks: [
      "Sher-E-Punjab",
      "Urban Roar",
      "Vibe Check 89",
      "Akh Da Nishana",
    ],
    distribution: [
      "Spotify",
      "Apple Music",
      "YouTube Music",
      "Instagram Audio",
      "Wynk",
    ],
    accentColor: "#b45309",
  },
  {
    id: "trusted-tunes",
    name: "Trusted Tunes",
    logo: "/logos/3.jpeg",
    category: "Audio Publishing",
    tagline: "High-Fidelity Audio Curated for the Next Generation",
    established: "2022",
    genre: ["Acoustic Pop", "Ambient Chill", "Bollywood Soft Rock", "Melodic EDM"],
    description:
      "Crafted with golden headphones and acoustic frequencies, Trusted Tunes is dedicated to audiophile-grade mixing, sync-licensing for OTT films, and soothing acoustic compositions that resonate with millions on daily commutes and late nights.",
    stats: {
      streams: "38M+",
      releases: "16 Tracks",
      chartPeak: "#1 Acoustic India",
      listeners: "950K Monthly",
    },
    featuredSong: {
      title: "Echoes in the Rain",
      artist: "Kavya Sharma & Neel",
      duration: "4:05",
      streams: "12.1M",
      year: "2024",
      badge: "Editor's Choice",
    },
    topTracks: [
      "Echoes in the Rain",
      "Tere Bin Yaara",
      "Sonic Breeze",
      "Tu Hai Kahaan",
    ],
    distribution: [
      "Spotify",
      "Apple Music",
      "Dolby Atmos",
      "Tidal",
      "YouTube Music",
    ],
    accentColor: "#ca8a04",
  },
  {
    id: "positive-studios",
    name: "Positive Studios",
    logo: "/logos/4.jpeg",
    category: "Recording Studio",
    tagline: "Where Raw Emotion Meets Acoustical Mastery",
    established: "2020",
    genre: ["Urban Soul", "Commercial Club", "Bollywood Pop", "Lo-Fi Waves"],
    description:
      "Distinguished by its embossed golden musical note 'P' over acoustic soundwaves, Positive Studios provides top-tier tracking, vocal production, and Dolby Atmos audio mastering for leading artists and emerging independent voices.",
    stats: {
      streams: "58M+",
      releases: "32 Productions",
      chartPeak: "#5 National Top 100",
      listeners: "1.5M Monthly",
    },
    featuredSong: {
      title: "Positive Vibe Only",
      artist: "Dev Chauhan ft. Ria",
      duration: "2:58",
      streams: "19.3M",
      year: "2024",
      badge: "Radio Chartbuster",
    },
    topTracks: [
      "Positive Vibe Only",
      "Khaab Unlimited",
      "Chandigarh Nights",
      "Rhythm Raat",
    ],
    distribution: [
      "Spotify",
      "Apple Music",
      "YouTube Music",
      "Amazon Music",
      "Radio Airplay",
    ],
    accentColor: "#2563eb",
  },
  {
    id: "music-empire",
    name: "ME - Music Empire",
    logo: "/logos/5.jpeg",
    category: "Record Label",
    tagline: "Cinematic Soundscapes & Timeless Chartbusters",
    established: "2018",
    genre: ["Cinematic OST", "Sufi Rock Fusion", "Indie Pop", "Retro Wave"],
    description:
      "Featuring the cinematic filmstrip reel and warm celestial glow, Music Empire produces larger-than-life compositions, timeless romantic singles, and background scores synced across web series and box-office productions.",
    stats: {
      streams: "85M+",
      releases: "42 Tracks",
      chartPeak: "#3 Global Asian Charts",
      listeners: "2.4M Monthly",
    },
    featuredSong: {
      title: "Empire Groove",
      artist: "Sameer Sen & The Collective",
      duration: "3:30",
      streams: "31.2M",
      year: "2023",
      badge: "OTT Hit Anthem",
    },
    topTracks: [
      "Empire Groove",
      "Sufiyana Ruh",
      "Midnight Ride",
      "Aasman Tale",
    ],
    distribution: [
      "Spotify",
      "Apple Music",
      "YouTube Music",
      "Netflix Sync",
      "JioCinema",
    ],
    accentColor: "#ea580c",
  },
  {
    id: "sunny-camra",
    name: "Sunny Camra",
    logo: "/logos/6.jpeg",
    category: "Featured Artist",
    tagline: "Trendsetting Punjabi Urban & Swag Anthems",
    established: "Debut 2020",
    genre: ["Punjabi Urban", "Desi Hip-Hop", "Commercial Party", "Street Pop"],
    description:
      "An electric powerhouse in modern Punjabi music, Sunny Camra blends infectious swag, memorable hooks, and high-energy street cadence. His tracks consistently ignite viral TikTok and Instagram Reel trends with millions of creator videos.",
    stats: {
      streams: "124M+",
      releases: "12 Singles",
      chartPeak: "#1 Trending YouTube",
      listeners: "3.1M Monthly",
    },
    featuredSong: {
      title: "Camra Flow",
      artist: "Sunny Camra",
      duration: "3:10",
      streams: "48.6M",
      year: "2024",
      badge: "Viral Reels Hit (#1)",
    },
    topTracks: [
      "Camra Flow",
      "Yaar Di Barat",
      "Gedi Route",
      "High Voltage Swag",
    ],
    distribution: [
      "Spotify",
      "Apple Music",
      "YouTube Music",
      "Instagram Audio",
      "Snapchat Sounds",
    ],
    accentColor: "#e11d48",
  },
  {
    id: "raagverse",
    name: "Raagverse",
    logo: "/logos/7.jpeg",
    category: "Indie & Fusion",
    tagline: "Ancient Indian Raags Reimagined in the Metaverse",
    established: "2023",
    genre: ["Indian Neo-Classical", "Electronic Fusion", "Sitar & Synth", "Experimental"],
    description:
      "A cutting-edge musical universe represented by the bold crimson 'R/' identity. Raagverse unites classical Indian ragas, sitar improvisations, and deep modular synth textures to create an otherworldly sonic experience.",
    stats: {
      streams: "28M+",
      releases: "14 Tracks",
      chartPeak: "#1 Indie Fusion",
      listeners: "780K Monthly",
    },
    featuredSong: {
      title: "Bhairavi Modern",
      artist: "Arjun Pandit ft. Raagverse",
      duration: "4:22",
      streams: "9.8M",
      year: "2024",
      badge: "BBC Asian Network Pick",
    },
    topTracks: [
      "Bhairavi Modern",
      "Yaman Waves",
      "Megh Malhar Electro",
      "Darbar Lounge",
    ],
    distribution: [
      "Spotify",
      "Apple Music",
      "Bandcamp",
      "SoundCloud",
      "YouTube Music",
    ],
    accentColor: "#dc2626",
  },
  {
    id: "as-muzik-empire",
    name: "AS Muzik Empire",
    logo: "/logos/8.jpeg",
    category: "Record Label",
    tagline: "The Royal Standard in Commercial Punjabi & Hits",
    established: "2017",
    genre: ["Commercial Punjabi", "High-Energy Bhangra", "Hip-Hop", "Romantic Ballads"],
    description:
      "Emblazoned with the golden crown crest and victory laurel wreath, AS Muzik Empire is a premier music brand delivering blockbuster releases, chart-topping wedding & club anthems, and international cross-border hits.",
    stats: {
      streams: "165M+",
      releases: "50+ Tracks",
      chartPeak: "#1 Billboard India",
      listeners: "4.2M Monthly",
    },
    featuredSong: {
      title: "Royal Hustle",
      artist: "Amanpreet Singh & Star Crew",
      duration: "3:35",
      streams: "62.4M",
      year: "2024",
      badge: "Platinum Certified",
    },
    topTracks: [
      "Royal Hustle",
      "Dilbar Jaani",
      "Crown & Glory",
      "Jatt Da Muqabla Remix",
    ],
    distribution: [
      "Spotify",
      "Apple Music",
      "YouTube Music",
      "JioSaavn",
      "Amazon Music",
    ],
    accentColor: "#d97706",
  },
];
