import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Music, Sparkles } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/30 via-neon-purple/20 to-neon-magenta/30 blur-3xl" />

              {/* Image container */}
              <div className="relative glass-card p-2 neon-border">
                <img
                  src="/images/dmt.jpg"
                  alt="PSYWAVE DJ performing"
                  className="w-full h-full object-cover rounded-lg"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-lg" />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass-card px-4 py-2 flex items-center gap-2"
              >
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-display text-primary">
                  2+ Years
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 glass-card px-4 py-2 flex items-center gap-2"
              >
                <Music className="w-4 h-4 text-secondary" />
                <span className="text-sm font-display text-secondary">
                  10+ Releases
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm uppercase tracking-widest text-primary font-display">
                My Journey
              </span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              From Underground
              <br />
              <span className="text-primary neon-text">To The Cosmos</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                It all began in 2020, It all started when I heard Technical Hitch – Mama India.
                One track. One moment. A new mission for this new music.
                I began making Psytrance in secret during office hours —
                until i built my own setup and never looked back.
              </p>
              <p>
                What started as obsessive bedroom productions evolved into a
                mad journey. From intimate forest parties
                to private gigs , I've dedicated my life to crafting
                soundscapes that transport listeners to otherworldly dimensions.
              </p>
              <p>
                My sound blends the raw energy of{" "}
                <span className="text-primary">full-on hitechy psytrance</span> with
                intricate <span className="text-secondary">experimental</span>{" "}
                elements, creating a unique fusion that resonates with both the
                underground and mainstream psychedelic community.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { value: "20+", label: "Private Live Sets" },
                { value: "5+", label: "States" },
                { value: "0", label: "Streams" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="font-display text-2xl md:text-3xl font-bold text-primary neon-text">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
