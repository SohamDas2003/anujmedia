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
  distributionRole: string;
  tagline: string;
  established: string;
  genre: string[];
  description: string;
  promotionScope: string[];
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
    distributionRole: "Exclusive Digital Distribution & Playlist Promotion",
    tagline: "Pure Soundwaves & Soulful Melodies",
    established: "2021",
    genre: ["Contemporary Pop", "Indie Melodies", "Chillhop", "Acoustic"],
    description:
      "All Good Music is an artist-first independent record label distributed and promoted globally by Anuj Media. We manage their complete DSP delivery pipeline, pitch their tracks directly to Spotify & Apple Music editorial curators, and drive algorithmic streaming momentum for their acoustic and soulful releases.",
    promotionScope: [
      "150+ DSP digital distribution (Spotify, Apple Music, JioSaavn)",
      "Spotify Editorial & Algorithmic Playlist Pitching",
      "Instagram Reels & YouTube Shorts audio seeding",
      "Smart Link pre-save funnels & release analytics",
    ],
    stats: {
      streams: "45M+ Promoted",
      releases: "18 Distributed",
      chartPeak: "#4 Viral 50",
      listeners: "1.2M Monthly",
    },
    featuredSong: {
      title: "Rhythm of Gold",
      artist: "Aarav & Simran",
      duration: "3:42",
      streams: "14.8M Streams",
      year: "2024",
      badge: "Promoted Hit (#4 Viral)",
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
    distributionRole: "YouTube Video Marketing & Club Circuit Distribution",
    tagline: "Roaring Beats & High-Voltage Power Anthems",
    established: "2019",
    genre: ["Desi Hip-Hop", "Punjabi Folk Trap", "Bass Heavy", "Live Acoustic"],
    description:
      "Representing the roaring golden lion emblem, Leotech Media 89 relies on Anuj Media for aggressive video promotion and digital song distribution. We run high-ROI YouTube discovery ad funnels, club DJ digital delivery, and regional Punjabi media campaigns that turn heavy bass anthems into viral street hits.",
    promotionScope: [
      "Targeted YouTube video discovery & pre-roll ad campaigns",
      "Pan-India DJ & nightlife audio pool distribution",
      "Punjab & Delhi NCR hyper-local influencer activations",
      "Content ID & copyright protection management",
    ],
    stats: {
      streams: "72M+ Views & Plays",
      releases: "24 Distributed",
      chartPeak: "#2 Punjabi Top 50",
      listeners: "1.8M Monthly",
    },
    featuredSong: {
      title: "Sher-E-Punjab",
      artist: "Harkirat Sandhu ft. Leo",
      duration: "3:15",
      streams: "26.4M Views",
      year: "2024",
      badge: "Promoted Club Sensation",
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
    distributionRole: "Hi-Res Audio Distribution & OTT Sync Promotion",
    tagline: "High-Fidelity Audio Curated for the Next Generation",
    established: "2022",
    genre: ["Acoustic Pop", "Ambient Chill", "Bollywood Soft Rock", "Melodic EDM"],
    description:
      "Trusted Tunes is distributed through Anuj Media's premium audiophile network. We ensure loss-less Dolby Atmos ingestion across global DSPs, while actively promoting their catalog to OTT music supervisors and ad agencies looking for commercial sync licensing.",
    promotionScope: [
      "Dolby Atmos & Hi-Res lossless audio delivery",
      "OTT series & commercial film synchronization pitching",
      "Curated chill/study playlist network syndication",
      "Multi-territory digital royalty tracking",
    ],
    stats: {
      streams: "38M+ Promoted",
      releases: "16 Distributed",
      chartPeak: "#1 Acoustic India",
      listeners: "950K Monthly",
    },
    featuredSong: {
      title: "Echoes in the Rain",
      artist: "Kavya Sharma & Neel",
      duration: "4:05",
      streams: "12.1M Streams",
      year: "2024",
      badge: "Distributed Single",
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
    distributionRole: "Commercial Release Distribution & Radio Campaigning",
    tagline: "Where Raw Emotion Meets Acoustical Mastery",
    established: "2020",
    genre: ["Urban Soul", "Commercial Club", "Bollywood Pop", "Lo-Fi Waves"],
    description:
      "Behind the iconic gold frequency 'P' logo is Positive Studios, whose audio catalog is distributed and promoted by Anuj Media. We take master recordings directly from their mixing consoles into national FM radio syndication, Spotify algorithmic streams, and brand-sponsored playlists.",
    promotionScope: [
      "National radio station submission & PR across Delhi & Mumbai",
      "Digital DSP release scheduling & metadata enhancement",
      "Social media trend seeding and lyric video campaigns",
      "Commercial brand tie-ins & soundtrack integration",
    ],
    stats: {
      streams: "58M+ Promoted",
      releases: "32 Distributed",
      chartPeak: "#5 National Top 100",
      listeners: "1.5M Monthly",
    },
    featuredSong: {
      title: "Positive Vibe Only",
      artist: "Dev Chauhan ft. Ria",
      duration: "2:58",
      streams: "19.3M Streams",
      year: "2024",
      badge: "Radio & Stream Hit",
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
    distributionRole: "Global Catalog Distribution & Film Score Marketing",
    tagline: "Cinematic Soundscapes & Timeless Chartbusters",
    established: "2018",
    genre: ["Cinematic OST", "Sufi Rock Fusion", "Indie Pop", "Retro Wave"],
    description:
      "Music Empire partners with Anuj Media for worldwide distribution and high-profile promotional campaigns. From web-series theme tracks to cinematic indie ballads, our marketing team expands their footprint across international streaming charts and film communities.",
    promotionScope: [
      "Worldwide cross-platform audio & music video distribution",
      "Netflix & Amazon Prime web-series sync representation",
      "Global South Asian diaspora ad campaigns (UK, US, Canada)",
      "Digital rights collection and master licensing",
    ],
    stats: {
      streams: "85M+ Promoted",
      releases: "42 Distributed",
      chartPeak: "#3 Global Asian Charts",
      listeners: "2.4M Monthly",
    },
    featuredSong: {
      title: "Empire Groove",
      artist: "Sameer Sen & The Collective",
      duration: "3:30",
      streams: "31.2M Streams",
      year: "2023",
      badge: "Promoted OST Hit",
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
    distributionRole: "Exclusive Artist Marketing, Reels Seeding & Distribution",
    tagline: "Trendsetting Punjabi Urban & Swag Anthems",
    established: "Debut 2020",
    genre: ["Punjabi Urban", "Desi Hip-Hop", "Commercial Party", "Street Pop"],
    description:
      "Sunny Camra's viral music catalog is distributed and promoted end-to-end by Anuj Media. We conceptualize and execute viral hook-point campaigns across Instagram Reels, launch targeted YouTube ads, and organize digital listening parties that catapult his singles into top-tier trending lists.",
    promotionScope: [
      "Viral Instagram Reels & TikTok sound seeding (1.2M+ creator videos)",
      "High-velocity YouTube Music premiere campaigns",
      "College fest & youth demographic digital targeting",
      "Single release rollout strategy & fan engagement funnels",
    ],
    stats: {
      streams: "124M+ Total Reach",
      releases: "12 Distributed Singles",
      chartPeak: "#1 Trending YouTube",
      listeners: "3.1M Monthly",
    },
    featuredSong: {
      title: "Camra Flow",
      artist: "Sunny Camra",
      duration: "3:10",
      streams: "48.6M Plays",
      year: "2024",
      badge: "Promoted #1 Viral Track",
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
    distributionRole: "Algorithmic Niche Distribution & Global PR",
    tagline: "Ancient Indian Raags Reimagined in the Metaverse",
    established: "2023",
    genre: ["Indian Neo-Classical", "Electronic Fusion", "Sitar & Synth", "Experimental"],
    description:
      "Anuj Media spearheads the distribution and specialized promotional strategy for Raagverse. We place their boundary-pushing classical/electronic fusion into global indie tastemaker blogs, BBC Asian Network playlists, and niche algorithmic streaming stations.",
    promotionScope: [
      "Global indie tastemaker & cultural blog outreach",
      "BBC Asian Network & overseas radio pitching",
      "Bandcamp, SoundCloud & web3 music community seeding",
      "Curated ambient & electronic fusion playlist placement",
    ],
    stats: {
      streams: "28M+ Promoted",
      releases: "14 Distributed",
      chartPeak: "#1 Indie Fusion",
      listeners: "780K Monthly",
    },
    featuredSong: {
      title: "Bhairavi Modern",
      artist: "Arjun Pandit ft. Raagverse",
      duration: "4:22",
      streams: "9.8M Plays",
      year: "2024",
      badge: "Promoted Editorial Pick",
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
    distributionRole: "Platinum Commercial Distribution & Mega-Campaign Marketing",
    tagline: "The Royal Standard in Commercial Punjabi & Hits",
    established: "2017",
    genre: ["Commercial Punjabi", "High-Energy Bhangra", "Hip-Hop", "Romantic Ballads"],
    description:
      "AS Muzik Empire partners with Anuj Media as its official digital distributor and promotional engine. We manage high-budget album launches, multi-million view YouTube premiere blitzes, Spotify India Top 50 campaigns, and wedding-season dancefloor audio pushes.",
    promotionScope: [
      "Multi-million view YouTube launch & premiere campaigns",
      "Spotify India Top 50 & Billboard India chart push",
      "Influencer dance challenge rollouts across Instagram",
      "Comprehensive digital copyright, sync & publishing protection",
    ],
    stats: {
      streams: "165M+ Promoted",
      releases: "50+ Distributed",
      chartPeak: "#1 Billboard India",
      listeners: "4.2M Monthly",
    },
    featuredSong: {
      title: "Royal Hustle",
      artist: "Amanpreet Singh & Star Crew",
      duration: "3:35",
      streams: "62.4M Streams",
      year: "2024",
      badge: "Promoted Platinum Hit",
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
