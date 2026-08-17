// // import { motion } from "framer-motion";
// // import { ArrowUpRight, Code2, Database, Layers3, Sparkles } from "lucide-react";

// // const About = () => {
// //   return (
// //     <section
// //       id="about"
// //       className="relative overflow-hidden bg-[#050505] px-5 py-28 text-white sm:px-8 lg:px-12"
// //     >
// //       {/* Background Glow */}
// //       <div className="pointer-events-none absolute inset-0">
// //         <div className="absolute left-[-150px] top-1/3 h-[350px] w-[350px] rounded-full bg-purple-700/10 blur-[120px]" />
// //         <div className="absolute right-[-150px] bottom-0 h-[350px] w-[350px] rounded-full bg-violet-700/10 blur-[120px]" />
// //       </div>

// //       <div className="relative z-10 mx-auto max-w-7xl">
// //         {/* Section Heading */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true, amount: 0.3 }}
// //           transition={{ duration: 0.7 }}
// //           className="mb-16 max-w-3xl"
// //         >
// //           <div className="mb-5 flex items-center gap-3">
// //             <span className="h-px w-10 bg-purple-500" />

// //             <span className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-300">
// //               About Me
// //             </span>
// //           </div>

// //           <h2 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
// //             Turning Ideas Into{" "}
// //             <span className="bg-gradient-to-r from-purple-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
// //               Digital Experiences.
// //             </span>
// //           </h2>

// //           <p className="mt-6 max-w-2xl text-base leading-7 text-white/40 sm:text-lg">
// //             I build modern, scalable and visually engaging web applications
// //             with a strong focus on performance, clean architecture and
// //             exceptional user experience.
// //           </p>
// //         </motion.div>

// //         {/* Main Grid */}
// //         <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
// //           {/* IMAGE CARD */}
// //           <motion.div
// //             initial={{ opacity: 0, x: -50 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true, amount: 0.25 }}
// //             transition={{ duration: 0.8 }}
// //             className="group relative mx-auto w-full max-w-[470px]"
// //           >
// //             {/* Glow */}
// //             <div className="absolute -inset-5 rounded-[40px] bg-purple-600/20 opacity-50 blur-[60px] transition duration-700 group-hover:opacity-80" />

// //             {/* Glass Card */}
// //             <motion.div
// //               whileHover={{
// //                 rotateY: 4,
// //                 rotateX: -3,
// //                 scale: 1.02,
// //               }}
// //               transition={{ duration: 0.3 }}
// //               className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.035] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
// //             >
// //               {/* Image */}
// //               <div className="relative aspect-[4/5] overflow-hidden rounded-[26px] bg-gradient-to-br from-purple-950 via-[#10091c] to-black">
// //                 {/* 
// //                   CHANGE THIS IMAGE PATH LATER
// //                   Put your image inside:
// //                   src/assets/profile.jpg
// //                 */}
// //                 <img
// //                   src="/src/assets/profile.jpg"
// //                   alt="Profile"
// //                   className="h-full w-full object-cover object-center grayscale-[10%] transition duration-700 group-hover:scale-105"
// //                 />

// //                 {/* Image Overlay */}
// //                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

// //                 {/* Purple Light */}
// //                 <div className="absolute inset-0 bg-purple-600/10 mix-blend-screen" />

// //                 {/* Bottom Info */}
// //                 <div className="absolute bottom-0 left-0 right-0 p-6">
// //                   <p className="text-xs uppercase tracking-[0.25em] text-purple-300">
// //                     Full Stack Developer
// //                   </p>

// //                   <h3 className="mt-2 text-2xl font-bold">
// //                     Building The Future.
// //                   </h3>
// //                 </div>
// //               </div>

// //               {/* Floating Badge */}
// //               <motion.div
// //                 animate={{ y: [0, -8, 0] }}
// //                 transition={{
// //                   duration: 4,
// //                   repeat: Infinity,
// //                   ease: "easeInOut",
// //                 }}
// //                 className="absolute right-0 top-10 rounded-2xl border border-purple-400/20 bg-black/70 px-4 py-3 backdrop-blur-xl"
// //               >
// //                 <div className="flex items-center gap-2">
// //                   <Sparkles size={14} className="text-purple-300" />

// //                   <span className="text-xs font-medium text-white/70">
// //                     Creative Developer
// //                   </span>
// //                 </div>
// //               </motion.div>
// //             </motion.div>
// //           </motion.div>

// //           {/* CONTENT */}
// //           <motion.div
// //             initial={{ opacity: 0, x: 50 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true, amount: 0.25 }}
// //             transition={{ duration: 0.8, delay: 0.1 }}
// //           >
// //             <span className="text-sm font-semibold text-purple-300">
// //               Who I Am
// //             </span>

// //             <h3 className="mt-4 text-3xl font-bold sm:text-4xl">
// //               Developer. Creator.
// //               <br />
// //               <span className="text-white/40">Problem Solver.</span>
// //             </h3>

// //             <p className="mt-6 text-base leading-8 text-white/45">
// //               I&apos;m passionate about creating digital products that combine
// //               beautiful interfaces with powerful functionality. My goal is to
// //               transform ideas into reliable and memorable experiences.
// //             </p>

// //             <p className="mt-4 text-base leading-8 text-white/45">
// //               From frontend interfaces to backend systems, I enjoy working
// //               across the full development process and continuously learning
// //               new technologies.
// //             </p>

// //             {/* Technology Cards */}
// //             <div className="mt-8 grid gap-3 sm:grid-cols-3">
// //               <TechCard
// //                 icon={<Code2 size={20} />}
// //                 title="Frontend"
// //                 text="React.js"
// //               />

// //               <TechCard
// //                 icon={<Database size={20} />}
// //                 title="Backend"
// //                 text="Node.js"
// //               />

// //               <TechCard
// //                 icon={<Layers3 size={20} />}
// //                 title="Database"
// //                 text="MongoDB"
// //               />
// //             </div>

// //             {/* CTA */}
// //             <motion.a
// //               href="#contact"
// //               whileHover={{ x: 5 }}
// //               className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-purple-300 transition hover:text-purple-200"
// //             >
// //               Let&apos;s build something great
// //               <ArrowUpRight size={17} />
// //             </motion.a>
// //           </motion.div>
// //         </div>

// //         {/* Stats */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.8 }}
// //           className="mt-24 grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] backdrop-blur-xl sm:grid-cols-3"
// //         >
// //           <Stat number="10+" label="Projects Built" />
// //           <Stat number="100+" label="GitHub Commits" />
// //           <Stat number="24/7" label="Learning Mindset" />
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // const TechCard = ({ icon, title, text }) => {
// //   return (
// //     <motion.div
// //       whileHover={{ y: -5 }}
// //       className="rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition-colors hover:border-purple-400/20 hover:bg-purple-500/[0.05]"
// //     >
// //       <div className="mb-3 text-purple-300">{icon}</div>

// //       <p className="text-xs text-white/30">{title}</p>

// //       <p className="mt-1 text-sm font-semibold text-white/80">{text}</p>
// //     </motion.div>
// //   );
// // };

// // const Stat = ({ number, label }) => {
// //   return (
// //     <div className="border-b border-white/10 p-7 text-center last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
// //       <p className="text-3xl font-black text-purple-300">{number}</p>

// //       <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/30">
// //         {label}
// //       </p>
// //     </div>
// //   );
// // };

// // export default About;


// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// import {
//   ArrowUpRight,
//   Code2,
//   Database,
//   Layers3,
//   Sparkles,
//   Rocket,
// } from "lucide-react";

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="relative overflow-hidden bg-[#050505] px-5 py-32 text-white sm:px-8 lg:px-12"
//     >
//       {/* Background Glow */}
//       <div className="pointer-events-none absolute inset-0">
//         <motion.div
//           animate={{
//             x: [0, 70, -30, 0],
//             y: [0, -40, 30, 0],
//             scale: [1, 1.1, 0.95, 1],
//           }}
//           transition={{
//             duration: 14,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute left-[-180px] top-[15%] h-[400px] w-[400px] rounded-full bg-purple-700/10 blur-[120px]"
//         />

//         <motion.div
//           animate={{
//             x: [0, -50, 30, 0],
//             y: [0, 40, -20, 0],
//           }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute bottom-0 right-[-180px] h-[420px] w-[420px] rounded-full bg-violet-700/10 blur-[130px]"
//         />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mb-20"
//         >
//           <div className="mb-5 flex items-center gap-3">
//             <span className="h-px w-10 bg-purple-400" />

//             <span className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-300">
//               About Me
//             </span>
//           </div>

//           <h2 className="max-w-4xl text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
//             More Than Code.
//             <br />

//             <span className="bg-gradient-to-r from-purple-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
//               I Build Experiences.
//             </span>
//           </h2>

//           <p className="mt-7 max-w-2xl text-base leading-8 text-white/40 sm:text-lg">
//             I&apos;m a Full Stack Developer passionate about creating modern,
//             scalable and high-performance digital experiences.
//           </p>
//         </motion.div>

//         {/* Main */}
//         <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
//           <ProfileCard />

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="mb-5 flex items-center gap-3">
//               <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10">
//                 <Sparkles size={18} className="text-purple-300" />
//               </span>

//               <span className="text-sm font-semibold text-purple-300">
//                 Who I Am
//               </span>
//             </div>

//             <h3 className="text-3xl font-bold leading-tight sm:text-4xl">
//               Developer.
//               <br />
//               <span className="text-white/40">
//                 Creator. Problem Solver.
//               </span>
//             </h3>

//             <p className="mt-7 text-base leading-8 text-white/40">
//               I love creating products where technology meets creativity. I
//               focus on building modern interfaces, powerful backend systems
//               and smooth user experiences.
//             </p>

//             <p className="mt-4 text-base leading-8 text-white/40">
//               Every project is an opportunity to learn, solve difficult
//               problems and create something people enjoy using.
//             </p>

//             {/* Tech Cards */}
//             <div className="mt-9 grid gap-4 sm:grid-cols-3">
//               <TechCard
//                 icon={<Code2 size={20} />}
//                 title="Frontend"
//                 text="React.js"
//               />

//               <TechCard
//                 icon={<Database size={20} />}
//                 title="Backend"
//                 text="Node.js"
//               />

//               <TechCard
//                 icon={<Layers3 size={20} />}
//                 title="Database"
//                 text="MongoDB"
//               />
//             </div>

//             <motion.a
//               href="#contact"
//               whileHover={{ x: 7 }}
//               className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold text-purple-300"
//             >
//               Let&apos;s build something amazing

//               <ArrowUpRight
//                 size={17}
//                 className="transition-transform duration-300 group-hover:rotate-45"
//               />
//             </motion.a>
//           </motion.div>
//         </div>

//         {/* Stats */}
//         <div className="mt-28 grid gap-5 md:grid-cols-3">
//           <StatCard
//             number="10+"
//             label="Projects Built"
//             description="Real-world digital products"
//             icon={<Rocket size={20} />}
//           />

//           <StatCard
//             number="100+"
//             label="GitHub Commits"
//             description="Consistent development"
//             icon={<Code2 size={20} />}
//           />

//           <StatCard
//             number="24/7"
//             label="Learning Mindset"
//             description="Always improving"
//             icon={<Sparkles size={20} />}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// /* ================= PROFILE CARD ================= */

// const ProfileCard = () => {
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const rotateX = useSpring(
//     useTransform(mouseY, [-200, 200], [7, -7]),
//     {
//       stiffness: 180,
//       damping: 20,
//     }
//   );

//   const rotateY = useSpring(
//     useTransform(mouseX, [-200, 200], [-7, 7]),
//     {
//       stiffness: 180,
//       damping: 20,
//     }
//   );

//   const handleMouseMove = (event) => {
//     const rect = event.currentTarget.getBoundingClientRect();

//     const x = event.clientX - rect.left - rect.width / 2;
//     const y = event.clientY - rect.top - rect.height / 2;

//     mouseX.set(x);
//     mouseY.set(y);
//   };

//   const handleMouseLeave = () => {
//     mouseX.set(0);
//     mouseY.set(0);
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, x: -50 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.9 }}
//       className="mx-auto w-full max-w-[470px]"
//     >
//       <motion.div
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         style={{
//           rotateX,
//           rotateY,
//           transformStyle: "preserve-3d",
//         }}
//         className="group relative"
//       >
//         {/* Glow */}
//         <motion.div
//           animate={{
//             scale: [1, 1.08, 1],
//             opacity: [0.2, 0.4, 0.2],
//           }}
//           transition={{
//             duration: 5,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute -inset-8 rounded-[45px] bg-purple-600/20 blur-[70px]"
//         />

//         {/* Glass */}
//         <div className="relative rounded-[35px] border border-white/10 bg-white/[0.035] p-3 shadow-[0_40px_120px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
//           <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-[#0b0712]">
//             <img
//               src="/src/assets/profile.jpg"
//               alt="Profile"
//               className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
//             />

//             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

//             <div className="absolute inset-0 bg-purple-600/5 transition duration-500 group-hover:bg-purple-600/15" />

//             {/* Scan Animation */}
//             <motion.div
//               animate={{
//                 y: ["-100%", "120%", "-100%"],
//               }}
//               transition={{
//                 duration: 5,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//               className="absolute left-0 right-0 h-24 bg-gradient-to-b from-transparent via-purple-400/10 to-transparent"
//             />

//             <div className="absolute bottom-0 left-0 right-0 p-7">
//               <p className="text-[10px] uppercase tracking-[0.3em] text-purple-300">
//                 Full Stack Developer
//               </p>

//               <h3 className="mt-2 text-3xl font-black">
//                 Building The Future.
//               </h3>
//             </div>
//           </div>

//           {/* Floating Available */}
//           <motion.div
//             animate={{
//               y: [0, -8, 0],
//             }}
//             transition={{
//               duration: 4,
//               repeat: Infinity,
//             }}
//             className="absolute -right-4 top-12 rounded-2xl border border-purple-400/20 bg-black/70 px-4 py-3 shadow-xl backdrop-blur-xl"
//           >
//             <div className="flex items-center gap-2">
//               <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

//               <span className="text-xs text-white/70">
//                 Available
//               </span>
//             </div>
//           </motion.div>

//           {/* MERN */}
//           <motion.div
//             animate={{
//               y: [0, 8, 0],
//             }}
//             transition={{
//               duration: 4.5,
//               repeat: Infinity,
//             }}
//             className="absolute -bottom-4 -left-4 rounded-2xl border border-white/10 bg-black/70 px-4 py-3 backdrop-blur-xl"
//           >
//             <p className="text-[9px] uppercase tracking-widest text-white/25">
//               Stack
//             </p>

//             <p className="mt-1 text-sm font-bold text-purple-200">
//               MERN
//             </p>
//           </motion.div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// /* ================= TECH CARD ================= */

// const TechCard = ({ icon, title, text }) => {
//   return (
//     <motion.div
//       whileHover={{
//         y: -8,
//         scale: 1.03,
//       }}
//       transition={{
//         type: "spring",
//         stiffness: 300,
//         damping: 18,
//       }}
//       className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-xl"
//     >
//       <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

//       <div className="relative">
//         <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10 text-purple-300 transition duration-300 group-hover:rotate-6 group-hover:scale-110">
//           {icon}
//         </div>

//         <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
//           {title}
//         </p>

//         <p className="mt-1 font-semibold text-white/80">
//           {text}
//         </p>
//       </div>
//     </motion.div>
//   );
// };

// /* ================= STAT CARD ================= */

// const StatCard = ({
//   number,
//   label,
//   description,
//   icon,
// }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       whileHover={{
//         y: -10,
//         scale: 1.02,
//       }}
//       transition={{
//         duration: 0.6,
//       }}
//       className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 backdrop-blur-2xl"
//     >
//       {/* Hover Glow */}
//       <div className="absolute inset-0 bg-gradient-to-br from-purple-600/[0.12] via-transparent to-fuchsia-500/[0.05] opacity-0 transition duration-500 group-hover:opacity-100" />

//       {/* Moving Light */}
//       <motion.div
//         animate={{
//           x: ["-150%", "250%"],
//         }}
//         transition={{
//           duration: 4,
//           repeat: Infinity,
//           repeatDelay: 3,
//         }}
//         className="absolute top-0 h-full w-16 skew-x-12 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
//       />

//       <div className="relative">
//         <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10 text-purple-300 transition duration-500 group-hover:rotate-12 group-hover:scale-110">
//           {icon}
//         </div>

//         <h3 className="bg-gradient-to-r from-white via-purple-200 to-fuchsia-300 bg-clip-text text-5xl font-black text-transparent">
//           {number}
//         </h3>

//         <h4 className="mt-3 text-lg font-bold text-white/85">
//           {label}
//         </h4>

//         <p className="mt-2 text-sm text-white/30">
//           {description}
//         </p>

//         <div className="mt-7 h-px overflow-hidden bg-white/5">
//           <motion.div
//             initial={{ width: 0 }}
//             whileInView={{ width: "100%" }}
//             viewport={{ once: true }}
//             transition={{ duration: 1 }}
//             className="h-full bg-gradient-to-r from-purple-500 to-transparent"
//           />
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// // export default About;
import React, {
  useEffect,
  useState,
} from "react";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  ArrowUpRight,
  Code2,
  Database,
  Layers3,
  Sparkles,
  Rocket,
} from "lucide-react";


const About = () => {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[#050505]
        px-5
        py-28
        text-white
        sm:px-8
        lg:px-12
      "
    >

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Left Purple Glow */}
        <motion.div
          animate={{
            x: [0, 70, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[-180px]
            top-[15%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-purple-700/10
            blur-[120px]
          "
        />

        {/* Right Purple Glow */}
        <motion.div
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 40, -20, 0],
            scale: [1, 0.95, 1.08, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-0
            right-[-180px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-violet-700/10
            blur-[130px]
          "
        />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(168,85,247,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,.7) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>


      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">


        {/* =====================================================
            HEADING
        ====================================================== */}

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
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mb-20"
        >

          {/* Small Label */}

          <div className="mb-5 flex items-center gap-3">

            <motion.span
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 40,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                h-px
                bg-purple-400
              "
            />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.3em]
                text-purple-300
              "
            >
              About Me
            </span>

          </div>


          {/* Main Heading */}

          <h2
            className="
              max-w-4xl
              text-4xl
              font-black
              leading-[1.05]
              tracking-[-0.04em]
              sm:text-5xl
              md:text-7xl
            "
          >
            More Than Code.

            <br />

            <span
              className="
                bg-gradient-to-r
                from-purple-300
                via-violet-400
                to-fuchsia-400
                bg-clip-text
                text-transparent
              "
            >
              I Build Experiences.
            </span>
          </h2>


          {/* Description */}

          <p
            className="
              mt-7
              max-w-2xl
              text-base
              leading-8
              text-white/40
              sm:text-lg
            "
          >
            I&apos;m a Full Stack Developer passionate about
            creating modern, scalable and high-performance
            digital experiences.
          </p>

        </motion.div>



        {/* =====================================================
            MAIN ABOUT CONTENT
        ====================================================== */}

        <div
          className="
            grid
            items-center
            gap-16
            lg:grid-cols-[0.85fr_1.15fr]
          "
        >


          {/* =================================================
              PROFILE IMAGE
          ================================================= */}

          <ProfileCard />


          {/* =================================================
              ABOUT TEXT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
            }}
          >

            {/* Who I Am */}

            <div className="mb-5 flex items-center gap-3">

              <span
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-purple-400/20
                  bg-purple-500/10
                "
              >
                <Sparkles
                  size={18}
                  className="text-purple-300"
                />
              </span>

              <span
                className="
                  text-sm
                  font-semibold
                  text-purple-300
                "
              >
                Who I Am
              </span>

            </div>


            {/* Title */}

            <h3
              className="
                text-3xl
                font-bold
                leading-tight
                sm:text-4xl
              "
            >
              Developer.

              <br />

              <span className="text-white/40">
                Creator. Problem Solver.
              </span>
            </h3>


            {/* Paragraph */}

            <p
              className="
                mt-7
                text-base
                leading-8
                text-white/40
              "
            >
              I love creating products where technology
              meets creativity. I focus on building modern
              interfaces, powerful backend systems and
              smooth user experiences.
            </p>


            <p
              className="
                mt-4
                text-base
                leading-8
                text-white/40
              "
            >
              Every project is an opportunity to learn,
              solve difficult problems and create something
              people enjoy using.
            </p>


            {/* =================================================
                TECHNOLOGY CARDS
            ================================================== */}

            <div
              className="
                mt-9
                grid
                gap-4
                sm:grid-cols-3
              "
            >

              <TechCard
                icon={<Code2 size={20} />}
                title="Frontend"
                text="React.js"
              />

              <TechCard
                icon={<Database size={20} />}
                title="Backend"
                text="Node.js"
              />

              <TechCard
                icon={<Layers3 size={20} />}
                title="Database"
                text="MongoDB"
              />

            </div>


            {/* CTA */}

            <motion.a
              href="#contact"
              whileHover={{
                x: 7,
              }}
              className="
                group
                mt-9
                inline-flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-purple-300
              "
            >
              Let&apos;s build something amazing

              <ArrowUpRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:rotate-45
                "
              />

            </motion.a>

          </motion.div>

        </div>



        {/* =====================================================
            PREMIUM STATS
        ====================================================== */}

        <div
          className="
            mt-20
            grid
            gap-4
            md:grid-cols-3
          "
        >

          <PremiumStat
            value={10}
            suffix="+"
            label="Projects Built"
            description="Real-world digital products"
            icon={<Rocket size={18} />}
          />


          <PremiumStat
            value={100}
            suffix="+"
            label="GitHub Commits"
            description="Consistent development"
            icon={<Code2 size={18} />}
          />


          <PremiumStat
            value={24}
            suffix="/7"
            label="Learning Mindset"
            description="Always improving"
            icon={<Sparkles size={18} />}
          />

        </div>

      </div>

    </section>
  );
};



/* =========================================================
   PROFILE CARD
========================================================= */

const ProfileCard = () => {

  const mouseX = useMotionValue(0);

  const mouseY = useMotionValue(0);


  const rotateX = useSpring(
    useTransform(
      mouseY,
      [-200, 200],
      [7, -7]
    ),
    {
      stiffness: 180,
      damping: 20,
    }
  );


  const rotateY = useSpring(
    useTransform(
      mouseX,
      [-200, 200],
      [-7, 7]
    ),
    {
      stiffness: 180,
      damping: 20,
    }
  );


  const handleMouseMove = (event) => {

    const rect =
      event.currentTarget.getBoundingClientRect();


    const x =
      event.clientX -
      rect.left -
      rect.width / 2;


    const y =
      event.clientY -
      rect.top -
      rect.height / 2;


    mouseX.set(x);

    mouseY.set(y);
  };


  const handleMouseLeave = () => {

    mouseX.set(0);

    mouseY.set(0);
  };


  return (

    <motion.div
      initial={{
        opacity: 0,
        x: -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.9,
      }}
      className="
        mx-auto
        w-full
        max-w-[470px]
      "
    >

      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="group relative"
      >


        {/* Glow */}

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -inset-8
            rounded-[45px]
            bg-purple-600/20
            blur-[70px]
          "
        />


        {/* Glass Card */}

        <div
          className="
            relative
            rounded-[35px]
            border
            border-white/10
            bg-white/[0.035]
            p-3
            shadow-[0_40px_120px_rgba(0,0,0,0.55)]
            backdrop-blur-2xl
          "
        >

          {/* Image Container */}

          <div
            className="
              relative
              aspect-[4/5]
              overflow-hidden
              rounded-[28px]
              bg-[#0b0712]
            "
          >

            <img
              src="/src/assets/port.png"
              alt="Profile"
              className="
                h-full
                w-full
                object-cover
                object-center
                transition
                duration-700
                group-hover:scale-105
              "
            />


            {/* Dark Overlay */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black
                via-black/10
                to-transparent
              "
            />


            {/* Purple Overlay */}

            <div
              className="
                absolute
                inset-0
                bg-purple-600/5
                transition
                duration-500
                group-hover:bg-purple-600/15
              "
            />


            {/* Scan Animation */}

            <motion.div
              animate={{
                y: [
                  "-100%",
                  "120%",
                  "-100%",
                ],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                left-0
                right-0
                h-24
                bg-gradient-to-b
                from-transparent
                via-purple-400/10
                to-transparent
              "
            />


            {/* Bottom Text */}

            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                p-7
              "
            >

              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-purple-300
                "
              >
                Full Stack Developer
              </p>


              <h3
                className="
                  mt-2
                  text-3xl
                  font-black
                "
              >
                Building The Future.
              </h3>

            </div>

          </div>


          {/* Available Badge */}

          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
              absolute
              -right-4
              top-12
              rounded-2xl
              border
              border-purple-400/20
              bg-black/70
              px-4
              py-3
              shadow-xl
              backdrop-blur-xl
            "
          >

            <div className="flex items-center gap-2">

              <span
                className="
                  h-2
                  w-2
                  animate-pulse
                  rounded-full
                  bg-green-400
                "
              />

              <span
                className="
                  text-xs
                  text-white/70
                "
              >
                Available
              </span>

            </div>

          </motion.div>


          {/* MERN Badge */}

          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
            }}
            className="
              absolute
              -bottom-4
              -left-4
              rounded-2xl
              border
              border-white/10
              bg-black/70
              px-4
              py-3
              backdrop-blur-xl
            "
          >

            <p
              className="
                text-[9px]
                uppercase
                tracking-widest
                text-white/25
              "
            >
              Stack
            </p>

            <p
              className="
                mt-1
                text-sm
                font-bold
                text-purple-200
              "
            >
              MERN
            </p>

          </motion.div>

        </div>

      </motion.div>

    </motion.div>
  );
};



/* =========================================================
   TECHNOLOGY CARD
========================================================= */

const TechCard = ({
  icon,
  title,
  text,
}) => {

  return (

    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 18,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/[0.025]
        p-5
        backdrop-blur-xl
      "
    >

      {/* Hover Purple */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-purple-500/10
          to-transparent
          opacity-0
          transition
          duration-500
          group-hover:opacity-100
        "
      />


      <div className="relative">

        <div
          className="
            mb-4
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-purple-400/20
            bg-purple-500/10
            text-purple-300
            transition
            duration-300
            group-hover:rotate-6
            group-hover:scale-110
          "
        >
          {icon}
        </div>


        <p
          className="
            text-[10px]
            uppercase
            tracking-[0.2em]
            text-white/25
          "
        >
          {title}
        </p>


        <p
          className="
            mt-1
            font-semibold
            text-white/80
          "
        >
          {text}
        </p>

      </div>

    </motion.div>
  );
};



/* =========================================================
   PREMIUM STAT CARD
========================================================= */

const PremiumStat = ({
  value,
  suffix,
  label,
  description,
  icon,
}) => {

  return (

    <motion.div
      initial={{
        opacity: 0,
        y: 35,
        scale: 0.96,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -10,
        scale: 1.025,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[24px]
        border
        border-white/[0.08]
        bg-white/[0.025]
        px-6
        py-5
        backdrop-blur-2xl
        transition-all
        duration-500
        hover:border-purple-400/30
        hover:bg-purple-500/[0.07]
        hover:shadow-[0_25px_70px_rgba(139,92,246,0.18)]
      "
    >

      {/* Purple Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-44
          w-44
          rounded-full
          bg-purple-600/0
          blur-[70px]
          transition-all
          duration-700
          group-hover:bg-purple-600/30
        "
      />


      {/* Moving Light */}

      <motion.div
        initial={{
          x: "-150%",
        }}
        whileHover={{
          x: "250%",
        }}
        transition={{
          duration: 0.9,
        }}
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          h-full
          w-24
          skew-x-[-20deg]
          bg-gradient-to-r
          from-transparent
          via-white/[0.10]
          to-transparent
        "
      />


      {/* Top Line */}

      <div
        className="
          absolute
          left-6
          right-6
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-purple-500/0
          to-transparent
          transition-all
          duration-500
          group-hover:via-purple-400/70
        "
      />


      <div className="relative z-10">


        {/* Icon */}

        <motion.div
          whileHover={{
            rotate: 8,
            scale: 1.12,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
          }}
          className="
            mb-5
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-purple-400/20
            bg-purple-500/[0.08]
            text-purple-300
            shadow-[0_0_20px_rgba(139,92,246,0.05)]
            transition-all
            duration-500
            group-hover:border-purple-400/40
            group-hover:bg-purple-500/15
            group-hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]
          "
        >
          {icon}
        </motion.div>


        {/* Number */}

        <div className="flex items-baseline">

          <CountUp
            end={value}
            suffix={suffix}
          />

        </div>


        {/* Title */}

        <h4
          className="
            mt-1
            text-base
            font-bold
            text-white/85
            transition-colors
            duration-300
            group-hover:text-white
          "
        >
          {label}
        </h4>


        {/* Description */}

        <p
          className="
            mt-1
            text-xs
            text-white/30
            transition-colors
            duration-300
            group-hover:text-purple-100/45
          "
        >
          {description}
        </p>


        {/* Progress Line */}

        <div
          className="
            mt-5
            h-[2px]
            overflow-hidden
            rounded-full
            bg-white/[0.05]
          "
        >

          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: "100%",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.3,
              delay: 0.25,
              ease: "easeOut",
            }}
            className="
              h-full
              bg-gradient-to-r
              from-purple-600
              via-violet-400
              to-transparent
            "
          />

        </div>

      </div>

    </motion.div>
  );
};



/* =========================================================
   COUNT UP
========================================================= */

const CountUp = ({
  end,
  suffix,
}) => {

  const [count, setCount] = useState(0);


  useEffect(() => {

    let start = 0;

    const duration = 1400;

    const stepTime = 30;

    const increment =
      end / (duration / stepTime);


    const timer = setInterval(() => {

      start += increment;


      if (start >= end) {

        start = end;

        clearInterval(timer);
      }


      setCount(Math.floor(start));

    }, stepTime);


    return () => {
      clearInterval(timer);
    };

  }, [end]);


  return (

    <span
      className="
        text-4xl
        font-black
        tracking-tight
        bg-gradient-to-r
        from-white
        via-purple-200
        to-fuchsia-300
        bg-clip-text
        text-transparent
        transition-all
        duration-500
        group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.35)]
      "
    >
      {count}
      {suffix}
    </span>

  );
};


export default About;