import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, Lock, ExternalLink, Music2 } from "lucide-react";
import { Button } from "./ui/button";

interface Track {
  id: string;
  title: string;
  artist: string;
  coverUrl: string;
  soundcloudUrl: string;
  isPrivate?: boolean;
  releaseYear: string;
}

const tracks: Track[] = [
  {
    id: "1",
    title: "Cosmic Odyssey",
    artist: "PSYWAVE",
    coverUrl: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=400&h=400&fit=crop",
    soundcloudUrl: "https://soundcloud.com",
    releaseYear: "2024",
  },
  {
    id: "2",
    title: "Neural Pathways",
    artist: "PSYWAVE",
    coverUrl: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=400&fit=crop",
    soundcloudUrl: "https://soundcloud.com",
    releaseYear: "2024",
  },
  {
    id: "3",
    title: "Fractal Dreams",
    artist: "PSYWAVE",
    coverUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&h=400&fit=crop",
    soundcloudUrl: "https://soundcloud.com",
    isPrivate: true,
    releaseYear: "2024",
  },
  {
    id: "4",
    title: "Hyperdrive",
    artist: "PSYWAVE",
    coverUrl: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=400&fit=crop",
    soundcloudUrl: "https://soundcloud.com",
    releaseYear: "2023",
  },
  {
    id: "5",
    title: "Quantum Leap",
    artist: "PSYWAVE",
    coverUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=400&fit=crop",
    soundcloudUrl: "https://soundcloud.com",
    releaseYear: "2023",
  },
  {
    id: "6",
    title: "Unreleased Project",
    artist: "PSYWAVE",
    coverUrl: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=400&h=400&fit=crop",
    soundcloudUrl: "https://soundcloud.com",
    isPrivate: true,
    releaseYear: "2024",
  },
];

const TrackCard = ({ track, index }: { track: Track; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={track.soundcloudUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative block"
    >
      <div className="glass-card overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)]">
        {/* Cover Image */}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={track.coverUrl}
            alt={track.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

          {/* Private Badge */}
          {track.isPrivate && (
            <div className="absolute top-3 right-3 glass-card px-3 py-1 flex items-center gap-2 bg-secondary/20 border-secondary/30">
              <Lock className="w-3 h-3 text-secondary" />
              <span className="text-xs font-display text-secondary uppercase tracking-wider">
                Exclusive
              </span>
            </div>
          )}

          {/* Play Button */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-[0_0_30px_hsl(var(--primary)/0.6)]">
              <Play className="w-7 h-7 text-primary-foreground ml-1" />
            </div>
          </motion.div>
        </div>

        {/* Track Info */}
        <div className="p-4">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-display text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                {track.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                {track.artist} • {track.releaseYear}
              </p>
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
          </div>
        </div>
      </div>
    </motion.a>
  );
};

const MusicSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="music" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Music2 className="w-5 h-5 text-primary" />
            <span className="text-sm uppercase tracking-widest text-primary font-display">
              Discography
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Music <span className="text-primary neon-text">Releases</span>
          </h2>

          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore my latest tracks and exclusive unreleased content. Click on
            any track to listen on SoundCloud.
          </p>
        </motion.div>

        {/* Track Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track, index) => (
            <TrackCard key={track.id} track={track} index={index} />
          ))}
        </div>

        {/* More Music CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://soundcloud.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Releases
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MusicSection;
