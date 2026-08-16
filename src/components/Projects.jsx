import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  Code2,
  Layers3,
  ShoppingBag,
  BrainCircuit,
  MessageCircle,
  BriefcaseBusiness,
} from "lucide-react";

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  {
    id: 1,
    title: "NexaCart",
    subtitle: "AI Powered E-Commerce",
    description:
      "A modern full-stack e-commerce platform with smart product discovery, authentication, cart management and secure checkout.",
    category: "Full Stack",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1800&q=90",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    icon: <ShoppingBag size={18} />,
    featured: true,
  },

  {
    id: 2,
    title: "AI Finance",
    subtitle: "Smart Expense Tracker",
    description:
      "AI-powered finance dashboard for tracking expenses, analyzing spending patterns and generating intelligent financial insights.",
    category: "AI",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=90",
    tags: ["Next.js", "TypeScript", "AI", "PostgreSQL"],
    icon: <BrainCircuit size={18} />,
  },

  {
    id: 3,
    title: "DevConnect",
    subtitle: "Developer Community",
    description:
      "A social platform for developers to share projects, connect with talented developers and build professional networks.",
    category: "Social",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=90",
    tags: ["React", "Express", "MongoDB", "JWT"],
    icon: <MessageCircle size={18} />,
  },

  {
    id: 4,
    title: "TaskFlow",
    subtitle: "SaaS Productivity Platform",
    description:
      "A modern project management platform designed for teams to organize tasks, projects and workflows efficiently.",
    category: "SaaS",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=90",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
    icon: <Layers3 size={18} />,
  },

  {
    id: 5,
    title: "HireHub",
    subtitle: "Modern Job Portal",
    description:
      "A full-stack recruitment platform connecting companies with talented developers and professionals.",
    category: "Full Stack",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=90",
    tags: ["React", "Node.js", "MongoDB", "Cloudinary"],
    icon: <BriefcaseBusiness size={18} />,
  },

  {
    id: 6,
    title: "CodeSpace",
    subtitle: "Developer Portfolio",
    description:
      "A premium developer portfolio experience with smooth animations, glassmorphism and interactive UI.",
    category: "Frontend",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=90",
    tags: ["React", "Framer Motion", "Tailwind", "Vite"],
    icon: <Code2 size={18} />,
  },
];

/* =========================================================
   PROJECTS SECTION
========================================================= */

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#030303] px-5 py-28 text-white sm:px-8 lg:px-12"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Purple Glow */}

        <motion.div
          animate={{
            x: [0, 100, -80, 0],
            y: [0, -50, 60, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-180px] top-[10%] h-[550px] w-[550px] rounded-full bg-purple-700/10 blur-[160px]"
        />

        {/* Pink Glow */}

        <motion.div
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 60, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-220px] right-[-150px] h-[550px] w-[550px] rounded-full bg-fuchsia-700/10 blur-[160px]"
        />

        {/* Center Glow */}

        <div className="absolute left-1/2 top-[45%] h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-violet-600/[0.04] blur-[150px]" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(168,85,247,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,.8) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Vignette */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030303_82%)]" />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ===================================================
            HEADER
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
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
          className="mb-16"
        >
          {/* Small Label */}

          <div className="mb-6 flex items-center gap-3">
            <motion.span
              animate={{
                width: ["35px", "75px", "35px"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-px bg-gradient-to-r from-purple-400 to-fuchsia-400"
            />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-purple-300">
              Selected Work
            </span>
          </div>

          {/* Heading */}

          <h2 className="max-w-5xl text-4xl font-black leading-[1.02] tracking-[-0.05em] sm:text-5xl md:text-7xl">
            Projects that
            <br />

            <span className="bg-gradient-to-r from-purple-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Actually Ship.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/40 sm:text-lg">
            A collection of full-stack applications, AI products,
            SaaS platforms and modern digital experiences.
          </p>
        </motion.div>

        {/* ===================================================
            PROJECT GRID
        ==================================================== */}

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* ===================================================
            CTA
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
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
          className="relative mt-10 overflow-hidden rounded-[30px] border border-purple-400/10 bg-white/[0.025] p-8 backdrop-blur-2xl sm:p-10"
        >
          {/* CTA Glow */}

          <div className="absolute right-[-100px] top-[-100px] h-[250px] w-[250px] rounded-full bg-purple-600/10 blur-[100px]" />

          <div className="relative flex flex-col items-center justify-between gap-7 text-center md:flex-row md:text-left">
            <div>
              <div className="mb-3 flex items-center justify-center gap-2 md:justify-start">
                <Sparkles
                  size={15}
                  className="text-purple-300"
                />

                <span className="text-xs uppercase tracking-[0.25em] text-purple-300">
                  More Projects
                </span>
              </div>

              <h3 className="text-xl font-bold sm:text-2xl">
                Always building something new.
              </h3>

              <p className="mt-2 text-sm text-white/35">
                Explore more experiments, open-source projects and
                development work.
              </p>
            </div>

            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.04,
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group flex items-center gap-3 rounded-full border border-purple-400/20 bg-purple-500/10 px-6 py-3 text-sm font-semibold text-purple-200 transition-all duration-300 hover:border-purple-400/40 hover:bg-purple-500/20 hover:shadow-[0_0_35px_rgba(168,85,247,0.15)]"
            >
              Let's Work Together

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* =========================================================
   PROJECT CARD
========================================================= */

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty(
      "--mouse-x",
      `${x}px`
    );

    cardRef.current.style.setProperty(
      "--mouse-y",
      `${y}px`
    );
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{
        opacity: 0,
        y: 70,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
      }}
      className={`group relative overflow-hidden rounded-[30px] border border-white/[0.07] bg-white/[0.025] backdrop-blur-2xl transition-all duration-500 hover:border-purple-400/20 hover:shadow-[0_20px_80px_rgba(124,58,237,0.12)] ${
        project.featured ? "lg:col-span-2" : ""
      }`}
    >
      {/* ===================================================
          MOUSE SPOTLIGHT
      ==================================================== */}

      <div
        className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(450px circle at var(--mouse-x) var(--mouse-y), rgba(168,85,247,0.14), transparent 55%)",
        }}
      />

      {/* ===================================================
          IMAGE
      ==================================================== */}

      <div
        className={`relative overflow-hidden ${
          project.featured
            ? "aspect-[16/7]"
            : "aspect-[16/10]"
        }`}
      >
        <motion.img
          src={project.image}
          alt={project.title}
          initial={{
            scale: 1.05,
          }}
          whileHover={{
            scale: 1.1,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="h-full w-full object-cover"
        />

        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        {/* Purple Overlay */}

        <div className="absolute inset-0 bg-purple-950/10 mix-blend-screen transition-all duration-700 group-hover:bg-purple-900/20" />

        {/* Shine Animation */}

        <motion.div
          initial={{
            x: "-130%",
          }}
          whileHover={{
            x: "150%",
          }}
          transition={{
            duration: 1,
          }}
          className="absolute top-[-20%] h-[150%] w-24 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />

        {/* Featured */}

        {project.featured && (
          <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white/70 backdrop-blur-xl">
            <Sparkles
              size={13}
              className="text-purple-300"
            />

            Featured
          </div>
        )}

        {/* Category */}

        <div className="absolute right-6 top-6 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white/60 backdrop-blur-xl">
          {project.category}
        </div>

        {/* Floating Arrow */}

        <motion.div
          className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white opacity-0 backdrop-blur-xl transition-all duration-500 group-hover:scale-110 group-hover:bg-purple-600/40 group-hover:opacity-100"
        >
          <ArrowUpRight size={20} />
        </motion.div>
      </div>

      {/* ===================================================
          CONTENT
      ==================================================== */}

      <div className="relative z-30 p-6 sm:p-7">

        {/* Title */}

        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-purple-300">
              {project.icon}

              <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                {project.subtitle}
              </span>
            </div>

            <h3 className="mt-3 text-2xl font-black tracking-tight text-white transition-colors duration-300 group-hover:text-purple-100 sm:text-3xl">
              {project.title}
            </h3>
          </div>

          {/* Project Number */}

          <span className="text-xs font-bold tracking-widest text-white/10">
            0{project.id}
          </span>
        </div>

        {/* Description */}

        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/35">
          {project.description}
        </p>

        {/* Tech Stack */}

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-white/35 transition-all duration-300 group-hover:border-purple-400/10 group-hover:text-white/55"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}

        <div className="mt-7 flex items-center gap-3 border-t border-white/[0.05] pt-6">

          {/* GitHub */}

          <motion.a
            href="#"
            whileHover={{
              y: -2,
            }}
            className="flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.025] px-4 py-2 text-xs font-medium text-white/60 transition-all hover:border-purple-400/20 hover:bg-purple-500/10 hover:text-purple-200"
          >
            GitHub
          </motion.a>

          {/* Live Demo */}

          <motion.a
            href="#"
            whileHover={{
              y: -2,
            }}
            className="group/demo flex items-center gap-2 rounded-full border border-purple-400/15 bg-purple-500/[0.07] px-4 py-2 text-xs font-medium text-purple-200 transition-all hover:border-purple-400/30 hover:bg-purple-500/15 hover:shadow-[0_0_25px_rgba(168,85,247,0.12)]"
          >
            Live Demo

            <ExternalLink
              size={14}
              className="transition-transform duration-300 group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5"
            />
          </motion.a>
        </div>
      </div>

      {/* ===================================================
          BOTTOM GLOW
      ==================================================== */}

      <motion.div
        animate={{
          opacity: [0.04, 0.1, 0.04],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          delay: index * 0.2,
        }}
        className="pointer-events-none absolute bottom-[-80px] left-1/2 h-40 w-56 -translate-x-1/2 rounded-full bg-purple-600 blur-[70px]"
      />
    </motion.article>
  );
};

export default Projects;