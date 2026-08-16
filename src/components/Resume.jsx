import React from "react";
import { motion } from "framer-motion";

/* =========================================================
   RESUME DATA
========================================================= */

const timeline = [
  {
    side: "left",
    year: "2025 — Present",
    title: "Sales Executive & Computer Operator",
    company: "The Brand Shop",
    location: "Bangladesh",
    type: "WORK EXPERIENCE",
    text: "Managing sales, billing, customer communication, inventory records and daily computer operations while maintaining professional customer service.",
    tags: ["Sales", "Customer Management", "Computer Operation"],
  },
  {
    side: "right",
    year: "2023 — 2025",
    title: "Digital Marketing & SEO Expert",
    company: "Full-time",
    location: "Khulna, Bangladesh",
    type: "WORK EXPERIENCE",
    text: "Worked on SEO, keyword research, content optimization, lead generation, Facebook marketing and digital campaign management.",
    tags: ["SEO", "Marketing", "Lead Generation"],
  },
  {
    side: "left",
    year: "2026 — 2029",
    title: "BSc in Computer Science & Engineering",
    company: "Northern University Bangladesh",
    location: "Dhaka, Bangladesh",
    type: "EDUCATION",
    text: "Focused on software engineering, web development, JavaScript, React, backend technologies, databases and modern application development.",
    tags: ["CSE", "Software Engineering", "Web Development"],
  },
  {
    side: "right",
    year: "2020 — 2025",
    title: "Diploma in Engineering — CSE",
    company: "Gopalganj Polytechnic Institute",
    location: "Gopalganj, Bangladesh",
    type: "EDUCATION",
    text: "Built a strong foundation in programming, software development, computer systems, networking, debugging and problem solving.",
    tags: ["Programming", "Networking", "Computer Science"],
  },
];

const projects = [
  {
    number: "01",
    title: "Parcel Delivery",
    stack: "React • Node • MongoDB",
    text: "Full-stack parcel booking, tracking and service-center management platform.",
  },
  {
    number: "02",
    title: "E-Commerce",
    stack: "React • Express • MongoDB",
    text: "Modern e-commerce platform with product management, search, filtering and responsive UI.",
  },
  {
    number: "03",
    title: "Customer Support",
    stack: "React • Node • MongoDB",
    text: "Customer management and support platform with dashboard, CRUD functionality and REST APIs.",
  },
  {
    number: "04",
    title: "AI Web Application",
    stack: "Next.js • React • MongoDB",
    text: "AI-focused full-stack application with API integration, automation and scalable architecture.",
  },
];

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST API",
  "Git",
  "GitHub",
  "Postman",
  "Vercel",
  "SEO",
  "Digital Marketing",
];

/* =========================================================
   MAIN RESUME
========================================================= */

const Resume = () => {
  return (
    <section
      id="resume"
      className="relative overflow-hidden bg-[#020203] px-4 py-28 text-white sm:px-6 lg:px-10"
    >
      {/* =====================================================
          4 CORNER AMBIENT GLOW
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* TOP LEFT */}

        <motion.div
          animate={{
            x: [0, 80, -50, 0],
            y: [0, -50, 40, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-52 -top-48 h-[550px] w-[550px] rounded-full bg-purple-700/15 blur-[170px]"
        />

        {/* TOP RIGHT */}

        <motion.div
          animate={{
            x: [0, -70, 50, 0],
            y: [0, 60, -40, 0],
            scale: [1, 0.9, 1.15, 1],
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-52 -top-44 h-[520px] w-[520px] rounded-full bg-fuchsia-700/12 blur-[170px]"
        />

        {/* BOTTOM LEFT */}

        <motion.div
          animate={{
            x: [0, 70, -40, 0],
            y: [0, -40, 60, 0],
          }}
          transition={{
            duration: 21,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-52 -left-48 h-[550px] w-[550px] rounded-full bg-violet-700/12 blur-[170px]"
        />

        {/* BOTTOM RIGHT */}

        <motion.div
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 50, -50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-52 -right-48 h-[550px] w-[550px] rounded-full bg-purple-600/15 blur-[170px]"
        />

        {/* GRID */}

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(168,85,247,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,.8) 1px, transparent 1px)",
            backgroundSize: "75px 75px",
          }}
        />

        {/* CENTER VIGNETTE */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_5%,#020203_88%)]" />

      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 45,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
          }}
          className="mb-20 text-center"
        >

          <div className="mb-5 flex items-center justify-center gap-3">

            <motion.span
              animate={{
                width: ["25px", "65px", "25px"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-px bg-gradient-to-r from-transparent to-purple-400"
            />

            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-purple-300">
              Professional Resume
            </span>

            <motion.span
              animate={{
                width: ["25px", "65px", "25px"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-px bg-gradient-to-l from-transparent to-purple-400"
            />

          </div>

          <h2 className="text-4xl font-black tracking-[-0.06em] sm:text-5xl md:text-7xl">

            My

            <span className="ml-2 bg-gradient-to-r from-purple-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Journey
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-xl text-xs leading-7 text-white/35 sm:text-sm">
            A visual timeline of my education, professional experience,
            projects and technical journey.
          </p>

        </motion.div>


        {/* ===================================================
            PROFILE CARD
        =================================================== */}

        <ProfileCard />


        {/* ===================================================
            TIMELINE
        =================================================== */}

        <div className="mt-24">

          <SectionTitle
            number="01"
            title="Experience &"
            gradient="Education"
          />

          <PremiumTimeline />

        </div>


        {/* ===================================================
            PROJECTS
        =================================================== */}

        <div className="mt-28">

          <SectionTitle
            number="02"
            title="Selected"
            gradient="Projects"
          />

          <div className="grid gap-5 md:grid-cols-2">

            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}

          </div>

        </div>


        {/* ===================================================
            SKILLS
        =================================================== */}

        <div className="mt-28">

          <SectionTitle
            number="03"
            title="Technical"
            gradient="Skills"
          />

          <SkillsCard />

        </div>


        {/* ===================================================
            CTA
        =================================================== */}

        <ResumeCTA />

      </div>
    </section>
  );
};

/* =========================================================
   PROFILE CARD
========================================================= */

const ProfileCard = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
        scale: 0.97,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
      }}
      whileHover={{
        y: -6,
      }}
      className="group relative overflow-hidden rounded-[30px] border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-2xl transition-all duration-700 hover:border-purple-400/25 hover:shadow-[0_0_80px_rgba(139,92,246,0.10)] sm:p-8"
    >

      {/* Moving Shine */}

      <motion.div
        initial={{
          x: "-130%",
        }}
        whileHover={{
          x: "140%",
        }}
        transition={{
          duration: 1.2,
        }}
        className="pointer-events-none absolute top-[-20%] h-[140%] w-24 rotate-[15deg] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent"
      />

      <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">

        <div className="flex items-center gap-4">

          <motion.div
            whileHover={{
              rotate: 360,
              scale: 1.08,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-purple-400/25 bg-purple-500/10 text-sm font-black text-purple-200 shadow-[0_0_40px_rgba(139,92,246,0.18)]"
          >
            <span className="relative z-10">AT</span>

            <motion.div
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute inset-0 rounded-2xl bg-purple-500/20 blur-xl"
            />
          </motion.div>

          <div>

            <h3 className="text-xl font-black tracking-tight">
              Amit Tahasilder
            </h3>

            <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-purple-300">
              Web Developer • Full-Stack Developer
            </p>

            <p className="mt-2 text-[10px] text-white/25">
              Dhaka, Bangladesh
            </p>

          </div>

        </div>

        <div className="flex flex-wrap gap-2">

          <Badge text="MERN" />
          <Badge text="Next.js" />
          <Badge text="SEO" />
          <Badge text="Available" />

        </div>

      </div>

    </motion.div>
  );
};

/* =========================================================
   PREMIUM TIMELINE
========================================================= */

const PremiumTimeline = () => {
  return (
    <div className="relative">

      {/* ===================================================
          CENTRAL TREE
      =================================================== */}

      <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-[2px] -translate-x-1/2 md:block">

        {/* Base line */}

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/50 to-transparent" />

        {/* Wide glow */}

        <div className="absolute left-1/2 top-0 h-full w-[45px] -translate-x-1/2 bg-purple-600/10 blur-[35px]" />

        {/* Moving energy */}

        <motion.div
          animate={{
            top: ["-15%", "115%"],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 h-44 w-[3px] -translate-x-1/2 bg-gradient-to-b from-transparent via-fuchsia-300 to-transparent shadow-[0_0_30px_rgba(217,70,239,1)]"
        />

        {/* Second energy */}

        <motion.div
          animate={{
            top: ["-20%", "120%"],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear",
            delay: 1.5,
          }}
          className="absolute left-1/2 h-28 w-px -translate-x-1/2 bg-purple-200 shadow-[0_0_20px_rgba(168,85,247,1)]"
        />

      </div>


      {/* ===================================================
          MOBILE LINE
      =================================================== */}

      <div className="pointer-events-none absolute bottom-0 left-[9px] top-0 w-px bg-gradient-to-b from-transparent via-purple-500/40 to-transparent md:hidden">

        <motion.div
          animate={{
            y: ["-100%", "110%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-32 w-full bg-gradient-to-b from-transparent via-purple-300 to-transparent shadow-[0_0_20px_rgba(168,85,247,1)]"
        />

      </div>


      {/* ===================================================
          ITEMS
      =================================================== */}

      <div className="space-y-14 md:space-y-24">

        {timeline.map((item, index) => (
          <TimelineRow
            key={item.title}
            item={item}
            index={index}
          />
        ))}

      </div>

    </div>
  );
};

/* =========================================================
   TIMELINE ROW
========================================================= */

const TimelineRow = ({ item, index }) => {
  const left = item.side === "left";

  return (
    <div className="relative grid md:grid-cols-2 md:gap-20">

      {/* LEFT */}

      <div className={`${left ? "md:pr-10" : "hidden md:block"}`}>

        {left && (
          <ResumeTimelineCard
            item={item}
            index={index}
          />
        )}

      </div>


      {/* RIGHT */}

      <div className={`${!left ? "md:pl-10" : "hidden md:block"}`}>

        {!left && (
          <ResumeTimelineCard
            item={item}
            index={index}
          />
        )}

      </div>


      {/* ===================================================
          CENTER NODE
      =================================================== */}

      <div className="absolute left-1/2 top-7 hidden -translate-x-1/2 md:block">

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "linear",
          }}
          className="relative flex h-14 w-14 items-center justify-center rounded-full border border-purple-400/30 bg-[#050407] shadow-[0_0_40px_rgba(139,92,246,0.35)]"
        >

          <div className="absolute inset-1.5 rounded-full border border-dashed border-fuchsia-400/30" />

          <motion.div
            animate={{
              scale: [0.6, 1.25, 0.6],
              opacity: [0.35, 1, 0.35],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
            }}
            className="h-3 w-3 rounded-full bg-purple-200 shadow-[0_0_22px_rgba(216,180,254,1)]"
          />

        </motion.div>

        <motion.div
          animate={{
            scale: [0.8, 1.4, 0.8],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-1/2 -z-10 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600 blur-[30px]"
        />

      </div>


      {/* ===================================================
          CONNECTOR
      =================================================== */}

      <motion.div
        initial={{
          scaleX: 0,
          opacity: 0,
        }}
        whileInView={{
          scaleX: 1,
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.4,
        }}
        transition={{
          duration: 0.7,
        }}
        className={`absolute top-[54px] hidden h-px w-20 md:block ${
          left
            ? "right-1/2 origin-right bg-gradient-to-l from-purple-400/70 to-transparent"
            : "left-1/2 origin-left bg-gradient-to-r from-purple-400/70 to-transparent"
        }`}
      />

    </div>
  );
};

/* =========================================================
   RESUME TIMELINE CARD
========================================================= */

const ResumeTimelineCard = ({ item, index }) => {
  const left = item.side === "left";

  return (
    <motion.article
      initial={{
        opacity: 0,
        x: left ? -90 : 90,
        scale: 0.9,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.18,
      }}
      transition={{
        duration: 0.9,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -10,
        scale: 1.015,
      }}
      className="group relative pl-7 md:pl-0"
    >

      {/* OUTER GLOW */}

      <motion.div
        animate={{
          opacity: [0.08, 0.2, 0.08],
          scale: [0.96, 1.04, 0.96],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: index * 0.4,
        }}
        className="pointer-events-none absolute -inset-5 rounded-[38px] bg-purple-600/10 blur-[40px] transition-all duration-700 group-hover:bg-purple-600/25"
      />

      {/* CARD */}

      <div className="relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#08080b]/85 p-6 backdrop-blur-2xl transition-all duration-700 group-hover:border-purple-400/35 group-hover:bg-[#0c0a10]/95 group-hover:shadow-[0_25px_90px_rgba(139,92,246,0.16)] sm:p-7">

        {/* TOP SHINE */}

        <motion.div
          initial={{
            x: "-140%",
          }}
          whileHover={{
            x: "180%",
          }}
          transition={{
            duration: 1.15,
          }}
          className="pointer-events-none absolute left-[-20%] top-0 h-[2px] w-[45%] bg-gradient-to-r from-transparent via-purple-200 to-transparent"
        />

        {/* MOVING GLASS */}

        <motion.div
          initial={{
            x: "-160%",
          }}
          whileHover={{
            x: "240%",
          }}
          transition={{
            duration: 1.4,
          }}
          className="pointer-events-none absolute top-[-30%] h-[180%] w-20 rotate-[18deg] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent"
        />

        {/* CORNER GLOW */}

        <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-purple-600/0 blur-[75px] transition-all duration-700 group-hover:bg-purple-600/20" />


        {/* CONTENT */}

        <div className="relative z-10">

          {/* META */}

          <div className="flex items-center justify-between gap-3">

            <span className="rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.2em] text-purple-300 shadow-[0_0_20px_rgba(139,92,246,0.08)]">
              {item.year}
            </span>

            <span className="text-[8px] uppercase tracking-[0.18em] text-white/20">
              {item.type}
            </span>

          </div>


          {/* TITLE */}

          <h3 className="mt-5 text-lg font-black tracking-tight text-white transition-all duration-500 group-hover:translate-x-1 group-hover:text-purple-100 sm:text-xl">
            {item.title}
          </h3>


          {/* COMPANY */}

          <div className="mt-2 flex items-center gap-2">

            <motion.span
              animate={{
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(168,85,247,1)]"
            />

            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-purple-300/80">
              {item.company}
            </span>

          </div>


          {/* LOCATION */}

          <div className="mt-2 text-[9px] text-white/20">
            {item.location}
          </div>


          {/* DESCRIPTION */}

          <p className="mt-5 text-[11px] leading-6 text-white/35 sm:text-xs">
            {item.text}
          </p>


          {/* TAGS */}

          <div className="mt-5 flex flex-wrap gap-1.5">

            {item.tags.map((tag, tagIndex) => (

              <motion.span
                key={tag}
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.07 + tagIndex * 0.05,
                }}
                whileHover={{
                  y: -3,
                  scale: 1.04,
                }}
                className="rounded-full border border-white/[0.06] bg-white/[0.025] px-2.5 py-1.5 text-[8px] uppercase tracking-[0.12em] text-white/30 transition-all duration-300 hover:border-purple-400/30 hover:bg-purple-500/10 hover:text-purple-200"
              >
                {tag}
              </motion.span>

            ))}

          </div>


          {/* ANIMATED BOTTOM LINE */}

          <div className="relative mt-6 h-px overflow-hidden bg-white/[0.05]">

            <motion.div
              animate={{
                x: ["-100%", "300%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.5,
              }}
              className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-purple-400/80 to-transparent"
            />

          </div>


          {/* FOOTER */}

          <div className="mt-4 flex items-center justify-between">

            <span className="text-[8px] uppercase tracking-[0.2em] text-white/15">
              Resume Timeline
            </span>

            <motion.span
              animate={{
                x: [0, 5, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
              className="text-xs text-purple-300/60"
            >
              →
            </motion.span>

          </div>

        </div>

      </div>

    </motion.article>
  );
};

/* =========================================================
   PROJECT CARD
========================================================= */

const ProjectCard = ({ project, index }) => {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
        scale: 0.96,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -8,
      }}
      className="group relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-2xl transition-all duration-500 hover:border-purple-400/25 hover:bg-purple-500/[0.035] hover:shadow-[0_25px_70px_rgba(139,92,246,0.10)]"
    >

      {/* Glow */}

      <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-purple-600/0 blur-[75px] transition-all duration-700 group-hover:bg-purple-600/20" />

      {/* Shine */}

      <motion.div
        initial={{
          x: "-150%",
        }}
        whileHover={{
          x: "200%",
        }}
        transition={{
          duration: 1,
        }}
        className="pointer-events-none absolute top-0 h-full w-20 rotate-[15deg] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
      />

      <div className="relative z-10">

        <div className="flex items-center justify-between">

          <span className="text-xs font-black text-purple-300">
            {project.number}
          </span>

          <motion.span
            animate={{
              x: [0, 3, 0],
              y: [0, -3, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="text-lg text-white/15 transition-colors group-hover:text-purple-300"
          >
            ↗
          </motion.span>

        </div>

        <h3 className="mt-6 text-xl font-black transition-colors group-hover:text-purple-100">
          {project.title}
        </h3>

        <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-purple-300/80">
          {project.stack}
        </p>

        <p className="mt-5 text-[11px] leading-6 text-white/30">
          {project.text}
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-white/[0.05] pt-5">

          <span className="text-[8px] uppercase tracking-[0.2em] text-white/15">
            Full Stack Project
          </span>

          <span className="text-[10px] font-semibold text-purple-300/70">
            View →
          </span>

        </div>

      </div>

    </motion.article>
  );
};

/* =========================================================
   SKILLS CARD
========================================================= */

const SkillsCard = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
      }}
      className="group relative overflow-hidden rounded-[30px] border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-2xl sm:p-8"
    >

      {/* Background glow */}

      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -30, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-purple-600/10 blur-[100px]"
      />

      <div className="relative flex flex-wrap gap-2.5">

        {skills.map((skill, index) => (

          <motion.span
            key={skill}
            initial={{
              opacity: 0,
              y: 12,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.035,
            }}
            whileHover={{
              y: -5,
              scale: 1.05,
            }}
            className="rounded-full border border-white/[0.07] bg-black/20 px-3.5 py-2 text-[9px] font-medium uppercase tracking-[0.12em] text-white/35 transition-all duration-300 hover:border-purple-400/35 hover:bg-purple-500/10 hover:text-purple-200 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
          >
            {skill}
          </motion.span>

        ))}

      </div>

    </motion.div>
  );
};

/* =========================================================
   CTA
========================================================= */

const ResumeCTA = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 45,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
      }}
      whileHover={{
        scale: 1.01,
      }}
      className="relative mt-20 overflow-hidden rounded-[34px] border border-purple-400/15 bg-purple-500/[0.035] p-8 text-center shadow-[0_0_100px_rgba(139,92,246,0.05)] sm:p-12"
    >

      {/* Rotating ring */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/[0.07]"
      />

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-fuchsia-400/[0.05]"
      />

      <div className="relative z-10">

        <motion.div
          animate={{
            scale: [0.8, 1.15, 0.8],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
          className="mx-auto h-2 w-2 rounded-full bg-purple-300 shadow-[0_0_25px_rgba(216,180,254,1)]"
        />

        <h3 className="mt-6 text-2xl font-black tracking-tight sm:text-4xl">

          Let's build something

          <span className="ml-2 bg-gradient-to-r from-purple-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            great.
          </span>

        </h3>

        <p className="mx-auto mt-4 max-w-lg text-xs leading-6 text-white/30">
          Open to interesting projects, collaborations and opportunities.
        </p>

        <motion.a
          href="#contact"
          whileHover={{
            y: -5,
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.96,
          }}
          className="mt-7 inline-flex rounded-full border border-purple-300/20 bg-purple-500/10 px-7 py-3 text-xs font-bold text-purple-200 shadow-[0_0_35px_rgba(139,92,246,0.18)] transition-all hover:border-purple-300/40 hover:bg-purple-500/20"
        >
          Contact Me →
        </motion.a>

      </div>

    </motion.div>
  );
};

/* =========================================================
   SECTION TITLE
========================================================= */

const SectionTitle = ({
  number,
  title,
  gradient,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      className="mb-8"
    >

      <div className="mb-3 flex items-center gap-3">

        <span className="text-[9px] font-bold tracking-[0.3em] text-purple-300">
          {number}
        </span>

        <span className="h-px w-10 bg-gradient-to-r from-purple-400 to-transparent" />

      </div>

      <h2 className="text-2xl font-black tracking-tight sm:text-3xl">

        {title}

        <span className="ml-2 bg-gradient-to-r from-purple-300 to-fuchsia-400 bg-clip-text text-transparent">
          {gradient}
        </span>

      </h2>

    </motion.div>
  );
};

/* =========================================================
   BADGE
========================================================= */

const Badge = ({ text }) => {
  return (
    <motion.span
      whileHover={{
        y: -3,
        scale: 1.04,
      }}
      className="rounded-full border border-white/[0.07] bg-black/20 px-3 py-1.5 text-[9px] text-white/35 transition-all duration-300 hover:border-purple-400/30 hover:bg-purple-500/10 hover:text-purple-200"
    >
      {text}
    </motion.span>
  );
};

/* =========================================================
   EXPORT
========================================================= */

export default Resume;