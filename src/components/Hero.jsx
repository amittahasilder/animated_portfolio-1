import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Mail, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050505] px-5 pb-20 pt-32 text-white sm:px-8 lg:px-12"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -50, 40, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-100px] top-[10%] h-[350px] w-[350px] rounded-full bg-purple-700/20 blur-[110px]"
        />

        <motion.div
          animate={{
            x: [0, -70, 40, 0],
            y: [0, 60, -30, 0],
            scale: [1, 0.9, 1.15, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-100px] top-[5%] h-[400px] w-[400px] rounded-full bg-violet-600/20 blur-[120px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-250px] left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-purple-700/20 blur-[130px]"
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,#050505_85%)]" />
      </div>

      {/* Particles */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 15 }).map((_, index) => (
          <motion.span
            key={index}
            animate={{
              y: [20, -100, -160],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 5 + (index % 3),
              repeat: Infinity,
              delay: index * 0.3,
              ease: "easeOut",
            }}
            className="absolute h-1 w-1 rounded-full bg-purple-300 shadow-[0_0_12px_3px_rgba(168,85,247,0.5)]"
            style={{
              left: `${(index * 37) % 100}%`,
              top: `${45 + ((index * 13) % 45)}%`,
            }}
          />
        ))}
      </div>

      {/* Main */}
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-180px)] max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* LEFT */}
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/[0.07] px-4 py-2 backdrop-blur-xl"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute h-full w-full animate-ping rounded-full bg-purple-400 opacity-60" />
              <span className="relative h-2 w-2 rounded-full bg-purple-400" />
            </span>

            <span className="text-xs font-medium text-purple-200">
              Available for new opportunities
            </span>

            <Sparkles size={13} className="text-purple-300" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-5xl font-black leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl xl:text-[88px]"
          >
            Building
            <br />

            <span className="bg-gradient-to-r from-purple-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Digital
            </span>

            <br />

            Experiences.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="mt-7 max-w-2xl text-base leading-7 text-white/45 sm:text-lg"
          >
            I&apos;m a Full Stack Developer focused on building modern,
            scalable and high-performance web applications using React,
            Node.js, MongoDB and modern technologies.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.45,
            }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 px-6 py-3.5 text-sm font-semibold shadow-[0_10px_40px_rgba(124,58,237,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(124,58,237,0.4)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative">
                View My Work
              </span>

              <ArrowUpRight
                size={17}
                className="relative transition-transform duration-300 group-hover:rotate-45"
              />
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-purple-500/[0.08] hover:text-white"
            >
              Let&apos;s Talk

              <Mail
                size={16}
                className="transition-transform duration-300 group-hover:-rotate-12"
              />
            </a>
          </motion.div>

          {/* Social Text Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-white/25">
              Connect
            </span>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-white/40 transition hover:text-purple-300"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-white/40 transition hover:text-purple-300"
            >
              LinkedIn
            </a>

            <a
              href="mailto:your@email.com"
              className="text-sm text-white/40 transition hover:text-purple-300"
            >
              Email
            </a>
          </motion.div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative mx-auto hidden w-full max-w-[480px] lg:block">
          {/* Glow */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.25, 0.4, 0.25],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -inset-12 rounded-full bg-purple-600/20 blur-[80px]"
          />

          {/* Glass Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              scale: 1.02,
              rotateX: 3,
              rotateY: -3,
            }}
            className="relative rounded-[30px] border border-white/10 bg-white/[0.035] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
          >
            <div className="overflow-hidden rounded-[24px] border border-purple-400/10 bg-[#09060e]">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/5 px-5 py-4">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
                </div>

                <span className="text-[10px] tracking-[0.2em] text-white/20">
                  DEVELOPER.EXE
                </span>
              </div>

              {/* Visual */}
              <div className="relative min-h-[390px] overflow-hidden p-6">
                {/* Orbit 1 */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/20"
                >
                  <span className="absolute -left-1 top-1/2 h-2 w-2 rounded-full bg-purple-300 shadow-[0_0_15px_5px_rgba(168,85,247,0.6)]" />
                </motion.div>

                {/* Orbit 2 */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/20"
                >
                  <span className="absolute -right-1 top-1/2 h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_15px_5px_rgba(139,92,246,0.6)]" />
                </motion.div>

                {/* Glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.3, 0.55, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/30 blur-[40px]"
                />

                {/* Center */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 2, -2, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-1/2 top-1/2 z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-purple-300/20 bg-gradient-to-br from-purple-500/20 to-violet-900/30 shadow-[0_20px_60px_rgba(124,58,237,0.35)] backdrop-blur-xl"
                >
                  <span className="text-3xl font-black text-purple-200">
                    &lt;/&gt;
                  </span>
                </motion.div>

                {/* Frontend */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="absolute left-5 top-8 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-xl"
                >
                  <p className="text-[9px] uppercase tracking-widest text-white/30">
                    Frontend
                  </p>

                  <p className="mt-1 text-xs font-semibold text-purple-200">
                    React.js
                  </p>
                </motion.div>

                {/* Backend */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                  className="absolute right-5 top-16 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-xl"
                >
                  <p className="text-[9px] uppercase tracking-widest text-white/30">
                    Backend
                  </p>

                  <p className="mt-1 text-xs font-semibold text-purple-200">
                    Node.js
                  </p>
                </motion.div>

                {/* Database */}
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    delay: 1,
                  }}
                  className="absolute bottom-10 left-7 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-xl"
                >
                  <p className="text-[9px] uppercase tracking-widest text-white/30">
                    Database
                  </p>

                  <p className="mt-1 text-xs font-semibold text-purple-200">
                    MongoDB
                  </p>
                </motion.div>

                {/* Stack */}
                <motion.div
                  animate={{ y: [0, 7, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: 1.5,
                  }}
                  className="absolute bottom-14 right-7 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-xl"
                >
                  <p className="text-[9px] uppercase tracking-widest text-white/30">
                    Stack
                  </p>

                  <p className="mt-1 text-xs font-semibold text-purple-200">
                    MERN
                  </p>
                </motion.div>
              </div>

              {/* Status */}
              <div className="flex items-center justify-between border-t border-white/5 px-5 py-4">
                <span className="text-[10px] text-white/25">
                  SYSTEM STATUS
                </span>

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />

                  <span className="text-[10px] text-green-300/70">
                    ONLINE
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-4 -top-5 rounded-2xl border border-purple-400/20 bg-black/60 px-4 py-3 shadow-2xl backdrop-blur-xl"
          >
            <p className="text-[9px] uppercase tracking-widest text-white/30">
              Specialization
            </p>

            <p className="mt-1 text-sm font-bold text-purple-200">
              Full Stack
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/25 transition-colors hover:text-purple-300 md:flex"
      >
        <span className="text-[9px] uppercase tracking-[0.35em]">
          Scroll to explore
        </span>

        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;