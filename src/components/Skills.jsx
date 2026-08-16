// // import React from "react";
// // import { motion } from "framer-motion";
// // import {
// //   Code2,
// //   Database,
// //   Server,
// //   Palette,
// //   Layers3,
// //   Terminal,
// //   Sparkles,
// // } from "lucide-react";

// // const skills = [
// //   {
// //     name: "JavaScript",
// //     level: 92,
// //     icon: <Code2 size={22} />,
// //     category: "Frontend",
// //   },
// //   {
// //     name: "React.js",
// //     level: 90,
// //     icon: <Layers3 size={22} />,
// //     category: "Frontend",
// //   },
// //   {
// //     name: "Tailwind CSS",
// //     level: 94,
// //     icon: <Palette size={22} />,
// //     category: "Frontend",
// //   },
// //   {
// //     name: "Node.js",
// //     level: 86,
// //     icon: <Server size={22} />,
// //     category: "Backend",
// //   },
// //   {
// //     name: "Express.js",
// //     level: 84,
// //     icon: <Terminal size={22} />,
// //     category: "Backend",
// //   },
// //   {
// //     name: "MongoDB",
// //     level: 88,
// //     icon: <Database size={22} />,
// //     category: "Database",
// //   },
// // ];

// // const Skills = () => {
// //   return (
// //     <section
// //       id="skills"
// //       className="relative overflow-hidden bg-[#050505] px-5 py-28 text-white sm:px-8 lg:px-12"
// //     >
// //       {/* Background */}
// //       <div className="pointer-events-none absolute inset-0">
// //         <motion.div
// //           animate={{
// //             x: [0, 80, -40, 0],
// //             y: [0, -30, 40, 0],
// //             scale: [1, 1.12, 0.95, 1],
// //           }}
// //           transition={{
// //             duration: 16,
// //             repeat: Infinity,
// //             ease: "easeInOut",
// //           }}
// //           className="absolute left-[-180px] top-[20%] h-[400px] w-[400px] rounded-full bg-purple-700/10 blur-[130px]"
// //         />

// //         <motion.div
// //           animate={{
// //             x: [0, -70, 30, 0],
// //             y: [0, 50, -30, 0],
// //           }}
// //           transition={{
// //             duration: 14,
// //             repeat: Infinity,
// //             ease: "easeInOut",
// //           }}
// //           className="absolute bottom-[-100px] right-[-150px] h-[420px] w-[420px] rounded-full bg-fuchsia-700/10 blur-[130px]"
// //         />

// //         <div
// //           className="absolute inset-0 opacity-[0.025]"
// //           style={{
// //             backgroundImage:
// //               "linear-gradient(rgba(168,85,247,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,.7) 1px, transparent 1px)",
// //             backgroundSize: "70px 70px",
// //           }}
// //         />
// //       </div>

// //       <div className="relative z-10 mx-auto max-w-7xl">
// //         {/* Heading */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 40 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true, amount: 0.25 }}
// //           transition={{ duration: 0.8 }}
// //           className="mb-16"
// //         >
// //           <div className="mb-5 flex items-center gap-3">
// //             <span className="h-px w-10 bg-purple-400" />

// //             <span className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-300">
// //               My Skills
// //             </span>
// //           </div>

// //           <h2 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-7xl">
// //             Tools I Use
// //             <br />

// //             <span className="bg-gradient-to-r from-purple-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
// //               To Build The Future.
// //             </span>
// //           </h2>

// //           <p className="mt-7 max-w-2xl text-base leading-8 text-white/40 sm:text-lg">
// //             A modern technology stack focused on building beautiful,
// //             scalable and high-performance web applications.
// //           </p>
// //         </motion.div>

// //         {/* Skills Grid */}
// //         <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
// //           {skills.map((skill, index) => (
// //             <SkillCard
// //               key={skill.name}
// //               skill={skill}
// //               index={index}
// //             />
// //           ))}
// //         </div>

// //         {/* Bottom Tech Banner */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 35 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.8, delay: 0.2 }}
// //           className="relative mt-8 overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-2xl sm:p-8"
// //         >
// //           <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-600/10 blur-[80px]" />

// //           <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
// //             <div>
// //               <div className="mb-2 flex items-center gap-2">
// //                 <Sparkles size={16} className="text-purple-300" />

// //                 <span className="text-xs uppercase tracking-[0.25em] text-purple-300">
// //                   Always Learning
// //                 </span>
// //               </div>

// //               <h3 className="text-xl font-bold sm:text-2xl">
// //                 Constantly improving my technology stack.
// //               </h3>

// //               <p className="mt-2 text-sm text-white/35">
// //                 Exploring TypeScript, Next.js, PostgreSQL, AI and modern
// //                 full-stack architecture.
// //               </p>
// //             </div>

// //             <motion.div
// //               animate={{
// //                 rotate: [0, 4, -4, 0],
// //               }}
// //               transition={{
// //                 duration: 5,
// //                 repeat: Infinity,
// //                 ease: "easeInOut",
// //               }}
// //               className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10 text-purple-300 shadow-[0_0_30px_rgba(139,92,246,0.12)]"
// //             >
// //               <Sparkles size={24} />
// //             </motion.div>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // /* =========================================================
// //    SKILL CARD
// // ========================================================= */

// // const SkillCard = ({ skill, index }) => {
// //   return (
// //     <motion.div
// //       initial={{
// //         opacity: 0,
// //         y: 45,
// //       }}
// //       whileInView={{
// //         opacity: 1,
// //         y: 0,
// //       }}
// //       viewport={{
// //         once: true,
// //         amount: 0.2,
// //       }}
// //       transition={{
// //         duration: 0.65,
// //         delay: index * 0.08,
// //       }}
// //       whileHover={{
// //         y: -9,
// //         scale: 1.02,
// //       }}
// //       className="group relative overflow-hidden rounded-[26px] border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-2xl transition-all duration-500 hover:border-purple-400/30 hover:bg-purple-500/[0.055] hover:shadow-[0_25px_70px_rgba(139,92,246,0.15)]"
// //     >
// //       {/* Hover Glow */}
// //       <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-purple-600/0 blur-[70px] transition-all duration-700 group-hover:bg-purple-600/25" />

// //       {/* Moving Glass */}
// //       <motion.div
// //         initial={{ x: "-150%" }}
// //         whileHover={{ x: "250%" }}
// //         transition={{ duration: 0.9 }}
// //         className="pointer-events-none absolute left-0 top-0 h-full w-20 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
// //       />

// //       <div className="relative z-10">
// //         {/* Top */}
// //         <div className="flex items-start justify-between">
// //           <motion.div
// //             whileHover={{
// //               rotate: 8,
// //               scale: 1.12,
// //             }}
// //             transition={{
// //               type: "spring",
// //               stiffness: 300,
// //               damping: 15,
// //             }}
// //             className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/[0.08] text-purple-300 transition-all duration-500 group-hover:border-purple-400/40 group-hover:bg-purple-500/15 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.2)]"
// //           >
// //             {skill.icon}
// //           </motion.div>

// //           <span className="rounded-full border border-white/[0.07] bg-white/[0.03] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/30 transition-colors group-hover:border-purple-400/20 group-hover:text-purple-300">
// //             {skill.category}
// //           </span>
// //         </div>

// //         {/* Name */}
// //         <div className="mt-6 flex items-end justify-between">
// //           <h3 className="text-xl font-bold text-white/90 transition-colors group-hover:text-white">
// //             {skill.name}
// //           </h3>

// //           <span className="text-sm font-semibold text-purple-300">
// //             {skill.level}%
// //           </span>
// //         </div>

// //         {/* Progress */}
// //         <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/[0.05]">
// //           <motion.div
// //             initial={{ width: 0 }}
// //             whileInView={{
// //               width: `${skill.level}%`,
// //             }}
// //             viewport={{
// //               once: true,
// //             }}
// //             transition={{
// //               duration: 1.2,
// //               delay: 0.2 + index * 0.08,
// //               ease: [0.22, 1, 0.36, 1],
// //             }}
// //             className="relative h-full overflow-hidden rounded-full bg-gradient-to-r from-purple-700 via-violet-500 to-fuchsia-400"
// //           >
// //             {/* Progress Shine */}
// //             <motion.div
// //               animate={{
// //                 x: ["-100%", "250%"],
// //               }}
// //               transition={{
// //                 duration: 2,
// //                 repeat: Infinity,
// //                 repeatDelay: 2,
// //                 ease: "linear",
// //               }}
// //               className="absolute inset-y-0 w-10 skew-x-[-20deg] bg-white/30 blur-sm"
// //             />
// //           </motion.div>
// //         </div>

// //         {/* Bottom */}
// //         <div className="mt-5 flex items-center justify-between">
// //           <span className="text-[10px] uppercase tracking-[0.2em] text-white/20">
// //             Proficiency
// //           </span>

// //           <motion.span
// //             initial={{ opacity: 0 }}
// //             whileInView={{ opacity: 1 }}
// //             viewport={{ once: true }}
// //             transition={{ delay: 0.8 + index * 0.08 }}
// //             className="text-[10px] text-purple-300/60"
// //           >
// //             ● ACTIVE
// //           </motion.span>
// //         </div>
// //       </div>
// //     </motion.div>
// //   );
// // };

// // export default Skills;


// import React, { useRef, useState } from "react";
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// import {
//   Code2,
//   Database,
//   Server,
//   Palette,
//   Layers3,
//   Terminal,
//   Sparkles,
//   GitBranch,
//   ShieldCheck,
//   Boxes,
//   BrainCircuit,
//   Globe,
//   Braces,
//   FileCode2,
//   Container,
//   Workflow,
//   Cpu,
//   Zap,
// } from "lucide-react";

// /* =========================================================
//    SKILLS DATA
// ========================================================= */

// const skills = [
//   {
//     name: "JavaScript",
//     level: 92,
//     icon: <Code2 size={22} />,
//     category: "Frontend",
//   },
//   {
//     name: "TypeScript",
//     level: 88,
//     icon: <Braces size={22} />,
//     category: "Frontend",
//   },
//   {
//     name: "React.js",
//     level: 90,
//     icon: <Layers3 size={22} />,
//     category: "Frontend",
//   },
//   {
//     name: "Next.js",
//     level: 86,
//     icon: <Zap size={22} />,
//     category: "Frontend",
//   },
//   {
//     name: "HTML5",
//     level: 97,
//     icon: <FileCode2 size={22} />,
//     category: "Frontend",
//   },
//   {
//     name: "CSS3",
//     level: 94,
//     icon: <Palette size={22} />,
//     category: "Frontend",
//   },
//   {
//     name: "Tailwind CSS",
//     level: 94,
//     icon: <Palette size={22} />,
//     category: "Frontend",
//   },
//   {
//     name: "Redux Toolkit",
//     level: 84,
//     icon: <Workflow size={22} />,
//     category: "Frontend",
//   },
//   {
//     name: "Node.js",
//     level: 86,
//     icon: <Server size={22} />,
//     category: "Backend",
//   },
//   {
//     name: "Express.js",
//     level: 84,
//     icon: <Terminal size={22} />,
//     category: "Backend",
//   },
//   {
//     name: "REST API",
//     level: 91,
//     icon: <Globe size={22} />,
//     category: "Backend",
//   },
//   {
//     name: "MongoDB",
//     level: 88,
//     icon: <Database size={22} />,
//     category: "Database",
//   },
//   {
//     name: "PostgreSQL",
//     level: 82,
//     icon: <Database size={22} />,
//     category: "Database",
//   },
//   {
//     name: "Prisma",
//     level: 80,
//     icon: <Boxes size={22} />,
//     category: "Database",
//   },
//   {
//     name: "Git & GitHub",
//     level: 93,
//     icon: <GitBranch size={22} />,
//     category: "Tools",
//   },
//   {
//     name: "JWT Auth",
//     level: 86,
//     icon: <ShieldCheck size={22} />,
//     category: "Security",
//   },
//   {
//     name: "Docker",
//     level: 74,
//     icon: <Container size={22} />,
//     category: "DevOps",
//   },
//   {
//     name: "AI / OpenAI",
//     level: 82,
//     icon: <BrainCircuit size={22} />,
//     category: "AI",
//   },
// ];

// /* =========================================================
//    MAIN SKILLS
// ========================================================= */

// const Skills = () => {
//   return (
//     <section
//       id="skills"
//       className="relative overflow-hidden bg-[#030303] px-5 py-28 text-white sm:px-8 lg:px-12"
//     >
//       {/* =====================================================
//           AMBIENT BACKGROUND
//       ====================================================== */}

//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         {/* Purple Orb */}
//         <motion.div
//           animate={{
//             x: [0, 100, -80, 0],
//             y: [0, -60, 50, 0],
//             scale: [1, 1.18, 0.9, 1],
//           }}
//           transition={{
//             duration: 18,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute left-[-180px] top-[10%] h-[500px] w-[500px] rounded-full bg-purple-700/15 blur-[150px]"
//         />

//         {/* Pink Orb */}
//         <motion.div
//           animate={{
//             x: [0, -90, 60, 0],
//             y: [0, 70, -40, 0],
//             scale: [1, 0.9, 1.15, 1],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute bottom-[-180px] right-[-120px] h-[520px] w-[520px] rounded-full bg-fuchsia-700/12 blur-[150px]"
//         />

//         {/* Center Glow */}
//         <motion.div
//           animate={{
//             opacity: [0.15, 0.35, 0.15],
//             scale: [1, 1.15, 1],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[160px]"
//         />

//         {/* Grid */}
//         <div
//           className="absolute inset-0 opacity-[0.035]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(168,85,247,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,.8) 1px, transparent 1px)",
//             backgroundSize: "70px 70px",
//           }}
//         />

//         {/* Noise */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030303_75%)]" />
//       </div>

//       {/* =====================================================
//           CONTENT
//       ====================================================== */}

//       <div className="relative z-10 mx-auto max-w-7xl">
//         {/* ===================================================
//             HEADER
//         ==================================================== */}

//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 0.9 }}
//           className="mb-16"
//         >
//           <div className="mb-5 flex items-center gap-3">
//             <motion.span
//               animate={{
//                 width: ["40px", "75px", "40px"],
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="h-px bg-gradient-to-r from-purple-400 to-fuchsia-400"
//             />

//             <span className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-300">
//               My Skills
//             </span>
//           </div>

//           <h2 className="max-w-5xl text-4xl font-black leading-[1.02] tracking-[-0.05em] sm:text-5xl md:text-7xl">
//             Full Stack
//             <br />

//             <span className="bg-gradient-to-r from-purple-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
//               Technology Stack.
//             </span>
//           </h2>

//           <p className="mt-7 max-w-2xl text-base leading-8 text-white/40 sm:text-lg">
//             Technologies I use to design, develop and deploy modern,
//             scalable and high-performance digital experiences.
//           </p>
//         </motion.div>

//         {/* ===================================================
//             SKILLS GRID
//         ==================================================== */}

//         <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//           {skills.map((skill, index) => (
//             <SkillCard
//               key={skill.name}
//               skill={skill}
//               index={index}
//             />
//           ))}
//         </div>

//         {/* ===================================================
//             BOTTOM BANNER
//         ==================================================== */}

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="relative mt-8 overflow-hidden rounded-[28px] border border-purple-400/10 bg-white/[0.025] p-6 backdrop-blur-2xl sm:p-8"
//         >
//           {/* Animated Border Glow */}
//           <motion.div
//             animate={{
//               opacity: [0.1, 0.35, 0.1],
//             }}
//             transition={{
//               duration: 3,
//               repeat: Infinity,
//             }}
//             className="pointer-events-none absolute inset-0 rounded-[28px] shadow-[inset_0_0_60px_rgba(139,92,246,0.08)]"
//           />

//           <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-600/15 blur-[80px]" />

//           <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
//             <div>
//               <div className="mb-2 flex items-center gap-2">
//                 <Sparkles
//                   size={16}
//                   className="text-purple-300"
//                 />

//                 <span className="text-xs uppercase tracking-[0.25em] text-purple-300">
//                   Always Learning
//                 </span>
//               </div>

//               <h3 className="text-xl font-bold sm:text-2xl">
//                 Building. Learning. Evolving.
//               </h3>

//               <p className="mt-2 max-w-2xl text-sm text-white/35">
//                 Constantly exploring Next.js, TypeScript, PostgreSQL,
//                 AI engineering, cloud architecture and modern DevOps.
//               </p>
//             </div>

//             <motion.div
//               animate={{
//                 rotate: [0, 8, -8, 0],
//                 scale: [1, 1.08, 1],
//               }}
//               transition={{
//                 duration: 5,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/[0.08] text-purple-300 shadow-[0_0_40px_rgba(139,92,246,0.2)]"
//             >
//               <Sparkles size={24} />
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// /* =========================================================
//    3D MOUSE FOLLOWING SKILL CARD
// ========================================================= */

// const SkillCard = ({ skill, index }) => {
//   const cardRef = useRef(null);

//   const [hovered, setHovered] = useState(false);

//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const rotateX = useSpring(
//     useTransform(mouseY, [-0.5, 0.5], [8, -8]),
//     {
//       stiffness: 180,
//       damping: 20,
//     }
//   );

//   const rotateY = useSpring(
//     useTransform(mouseX, [-0.5, 0.5], [-8, 8]),
//     {
//       stiffness: 180,
//       damping: 20,
//     }
//   );

//   const spotlightX = useTransform(
//     mouseX,
//     [-0.5, 0.5],
//     ["0%", "100%"]
//   );

//   const spotlightY = useTransform(
//     mouseY,
//     [-0.5, 0.5],
//     ["0%", "100%"]
//   );

//   const handleMouseMove = (e) => {
//     const rect = cardRef.current.getBoundingClientRect();

//     const x = (e.clientX - rect.left) / rect.width - 0.5;
//     const y = (e.clientY - rect.top) / rect.height - 0.5;

//     mouseX.set(x);
//     mouseY.set(y);
//   };

//   const handleMouseLeave = () => {
//     setHovered(false);

//     mouseX.set(0);
//     mouseY.set(0);
//   };

//   return (
//     <motion.div
//       ref={cardRef}
//       onMouseMove={handleMouseMove}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={handleMouseLeave}
//       style={{
//         rotateX,
//         rotateY,
//         transformStyle: "preserve-3d",
//       }}
//       initial={{
//         opacity: 0,
//         y: 60,
//         scale: 0.95,
//       }}
//       whileInView={{
//         opacity: 1,
//         y: 0,
//         scale: 1,
//       }}
//       viewport={{
//         once: true,
//         amount: 0.15,
//       }}
//       transition={{
//         duration: 0.7,
//         delay: index * 0.06,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       className="group relative min-h-[250px] cursor-pointer rounded-[26px]"
//     >
//       {/* Outer Glow */}
//       <motion.div
//         animate={{
//           opacity: hovered ? 1 : 0,
//         }}
//         transition={{
//           duration: 0.4,
//         }}
//         className="absolute -inset-[1px] rounded-[26px] bg-gradient-to-r from-purple-500/60 via-fuchsia-500/40 to-violet-500/60 blur-[2px]"
//       />

//       {/* Card */}
//       <div className="relative h-full overflow-hidden rounded-[26px] border border-white/[0.08] bg-[#0a0a0d]/90 p-6 backdrop-blur-2xl">
//         {/* Mouse Spotlight */}
//         <motion.div
//           style={{
//             left: spotlightX,
//             top: spotlightY,
//           }}
//           animate={{
//             opacity: hovered ? 1 : 0,
//           }}
//           className="pointer-events-none absolute h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 blur-[70px]"
//         />

//         {/* Top Border Animation */}
//         <motion.div
//           animate={{
//             x: hovered ? ["-100%", "100%"] : "-100%",
//           }}
//           transition={{
//             duration: 1.2,
//             ease: "easeInOut",
//           }}
//           className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-purple-400 to-transparent"
//         />

//         {/* Glass Shine */}
//         <motion.div
//           animate={{
//             x: hovered ? "180%" : "-120%",
//           }}
//           transition={{
//             duration: 0.9,
//             ease: "easeInOut",
//           }}
//           className="pointer-events-none absolute top-[-30%] h-[160%] w-16 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
//         />

//         <div
//           className="relative z-10"
//           style={{
//             transform: "translateZ(35px)",
//           }}
//         >
//           {/* Top */}
//           <div className="flex items-start justify-between">
//             {/* Icon */}
//             <motion.div
//               animate={
//                 hovered
//                   ? {
//                       rotate: [0, -8, 8, 0],
//                       scale: [1, 1.12, 1],
//                     }
//                   : {
//                       rotate: 0,
//                       scale: 1,
//                     }
//               }
//               transition={{
//                 duration: 0.7,
//               }}
//               className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/[0.08] text-purple-300 shadow-[0_0_25px_rgba(139,92,246,0.08)]"
//             >
//               {/* Icon Glow */}
//               <motion.div
//                 animate={{
//                   opacity: hovered ? 1 : 0,
//                 }}
//                 className="absolute inset-0 rounded-2xl bg-purple-500/20 blur-xl"
//               />

//               <span className="relative z-10">
//                 {skill.icon}
//               </span>
//             </motion.div>

//             {/* Category */}
//             <motion.span
//               animate={{
//                 y: hovered ? -2 : 0,
//               }}
//               className="rounded-full border border-white/[0.07] bg-white/[0.03] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/30"
//             >
//               {skill.category}
//             </motion.span>
//           </div>

//           {/* Name */}
//           <div className="mt-7 flex items-end justify-between">
//             <motion.h3
//               animate={{
//                 x: hovered ? 3 : 0,
//               }}
//               className="text-xl font-bold text-white/90"
//             >
//               {skill.name}
//             </motion.h3>

//             <motion.span
//               animate={{
//                 scale: hovered ? 1.12 : 1,
//               }}
//               className="text-sm font-bold text-purple-300"
//             >
//               {skill.level}%
//             </motion.span>
//           </div>

//           {/* Progress */}
//           <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/[0.05]">
//             <motion.div
//               initial={{
//                 width: 0,
//               }}
//               whileInView={{
//                 width: `${skill.level}%`,
//               }}
//               viewport={{
//                 once: true,
//               }}
//               transition={{
//                 duration: 1.3,
//                 delay: 0.2 + index * 0.05,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//               className="relative h-full overflow-hidden rounded-full bg-gradient-to-r from-purple-700 via-violet-500 to-fuchsia-400 shadow-[0_0_15px_rgba(168,85,247,0.45)]"
//             >
//               {/* Progress Shine */}
//               <motion.div
//                 animate={{
//                   x: ["-120%", "300%"],
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   repeatDelay: 1.5,
//                   ease: "linear",
//                 }}
//                 className="absolute inset-y-0 w-10 skew-x-[-20deg] bg-white/40 blur-sm"
//               />
//             </motion.div>
//           </div>

//           {/* Bottom */}
//           <div className="mt-5 flex items-center justify-between">
//             <span className="text-[10px] uppercase tracking-[0.2em] text-white/20">
//               Proficiency
//             </span>

//             <motion.span
//               animate={{
//                 opacity: hovered ? [0.4, 1, 0.4] : 0.45,
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: hovered ? Infinity : 0,
//               }}
//               className="flex items-center gap-1 text-[10px] text-purple-300"
//             >
//               <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.9)]" />
//               ACTIVE
//             </motion.span>
//           </div>
//         </div>

//         {/* Bottom Glow */}
//         <motion.div
//           animate={{
//             opacity: hovered ? 1 : 0,
//           }}
//           className="absolute bottom-[-50px] left-1/2 h-24 w-40 -translate-x-1/2 rounded-full bg-purple-600/30 blur-[50px]"
//         />
//       </div>
//     </motion.div>
//   );
// };

// export default Skills;


import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  Palette,
  Layers3,
  Terminal,
  Sparkles,
  GitBranch,
  ShieldCheck,
  Boxes,
  BrainCircuit,
  Globe,
  Braces,
  FileCode2,
  Container,
  Workflow,
  Zap,
} from "lucide-react";

/* =========================================================
   SKILLS DATA
========================================================= */

const skills = [
  {
    name: "JavaScript",
    level: 92,
    icon: <Code2 size={22} />,
    category: "Frontend",
  },
  {
    name: "TypeScript",
    level: 88,
    icon: <Braces size={22} />,
    category: "Frontend",
  },
  {
    name: "React.js",
    level: 90,
    icon: <Layers3 size={22} />,
    category: "Frontend",
  },
  {
    name: "Next.js",
    level: 86,
    icon: <Zap size={22} />,
    category: "Frontend",
  },
  {
    name: "HTML5",
    level: 97,
    icon: <FileCode2 size={22} />,
    category: "Frontend",
  },
  {
    name: "CSS3",
    level: 94,
    icon: <Palette size={22} />,
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    level: 94,
    icon: <Palette size={22} />,
    category: "Frontend",
  },
  {
    name: "Redux Toolkit",
    level: 84,
    icon: <Workflow size={22} />,
    category: "Frontend",
  },
  {
    name: "Node.js",
    level: 86,
    icon: <Server size={22} />,
    category: "Backend",
  },
  {
    name: "Express.js",
    level: 84,
    icon: <Terminal size={22} />,
    category: "Backend",
  },
  {
    name: "REST API",
    level: 91,
    icon: <Globe size={22} />,
    category: "Backend",
  },
  {
    name: "MongoDB",
    level: 88,
    icon: <Database size={22} />,
    category: "Database",
  },
  {
    name: "PostgreSQL",
    level: 82,
    icon: <Database size={22} />,
    category: "Database",
  },
  {
    name: "Prisma",
    level: 80,
    icon: <Boxes size={22} />,
    category: "Database",
  },
  {
    name: "Git & GitHub",
    level: 93,
    icon: <GitBranch size={22} />,
    category: "Tools",
  },
  {
    name: "JWT Auth",
    level: 86,
    icon: <ShieldCheck size={22} />,
    category: "Security",
  },
  {
    name: "Docker",
    level: 74,
    icon: <Container size={22} />,
    category: "DevOps",
  },
  {
    name: "AI / OpenAI",
    level: 82,
    icon: <BrainCircuit size={22} />,
    category: "AI",
  },
];

/* =========================================================
   MAIN SKILLS SECTION
========================================================= */

const Skills = () => {
  const sectionRef = useRef(null);

  const [mouse, setMouse] = useState({
    x: 50,
    y: 50,
    active: false,
  });

  /* =======================================================
     MOUSE TRACKING
  ======================================================= */

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setMouse({
      x,
      y,
      active: true,
    });
  };

  const handleMouseLeave = () => {
    setMouse((prev) => ({
      ...prev,
      active: false,
    }));
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden bg-[#030303] px-5 py-28 text-white sm:px-8 lg:px-12"
    >
      {/* =====================================================
          MOUSE FOLLOWING PURPLE ATMOSPHERE
      ====================================================== */}

      <motion.div
        animate={{
          opacity: mouse.active ? 1 : 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `radial-gradient(
            700px circle at ${mouse.x}% ${mouse.y}%,
            rgba(139,92,246,0.17),
            rgba(124,58,237,0.07) 30%,
            transparent 70%
          )`,
        }}
      />

      {/* =====================================================
          LARGE PURPLE AURORA
      ====================================================== */}

      <motion.div
        animate={{
          x: [0, 100, -60, 0],
          y: [0, -80, 40, 0],
          scale: [1, 1.2, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-[-200px] top-[15%] h-[500px] w-[500px] rounded-full bg-purple-700/15 blur-[160px]"
      />

      {/* =====================================================
          SECOND AURORA
      ====================================================== */}

      <motion.div
        animate={{
          x: [0, -100, 70, 0],
          y: [0, 60, -50, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 21,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-[-180px] right-[-150px] h-[550px] w-[550px] rounded-full bg-fuchsia-700/12 blur-[170px]"
      />

      {/* =====================================================
          CENTER AURA
      ====================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[150px]"
      />

      {/* =====================================================
          GRID
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168,85,247,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,.8) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* =====================================================
          DARK VIGNETTE
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030303_80%)]" />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ===================================================
            HEADER
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
          }}
          className="mb-16"
        >
          {/* Small Label */}

          <div className="mb-5 flex items-center gap-3">
            <motion.span
              animate={{
                width: ["35px", "70px", "35px"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-px bg-gradient-to-r from-purple-400 to-fuchsia-400"
            />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-300">
              My Skills
            </span>
          </div>

          {/* Heading */}

          <h2 className="max-w-5xl text-4xl font-black leading-[1.02] tracking-[-0.05em] sm:text-5xl md:text-7xl">
            Full Stack
            <br />

            <span className="bg-gradient-to-r from-purple-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Technology Stack.
            </span>
          </h2>

          {/* Description */}

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/40 sm:text-lg">
            Technologies I use to design, develop and deploy modern,
            scalable and high-performance digital experiences.
          </p>
        </motion.div>

        {/* ===================================================
            SKILLS GRID
        ==================================================== */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <PremiumSkillCard
              key={skill.name}
              skill={skill}
              index={index}
            />
          ))}
        </div>

        {/* ===================================================
            BOTTOM LEARNING CARD
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
            delay: 0.2,
          }}
          className="relative mt-8 overflow-hidden rounded-[30px] border border-white/[0.06] bg-white/[0.02] p-8 backdrop-blur-2xl"
        >
          {/* Background Glow */}

          <motion.div
            animate={{
              x: [-80, 100, -80],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-purple-600 blur-[100px]"
          />

          <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              {/* Label */}

              <div className="mb-2 flex items-center gap-2">
                <Sparkles
                  size={15}
                  className="text-purple-300"
                />

                <span className="text-xs uppercase tracking-[0.3em] text-purple-300">
                  Always Learning
                </span>
              </div>

              {/* Title */}

              <h3 className="text-2xl font-bold">
                Building. Learning. Evolving.
              </h3>

              {/* Description */}

              <p className="mt-2 max-w-2xl text-sm leading-7 text-white/35">
                Exploring modern full-stack architecture, AI,
                cloud infrastructure, DevOps and next-generation
                web technologies.
              </p>
            </div>

            {/* Animated Icon */}

            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-300 shadow-[0_0_40px_rgba(139,92,246,0.2)]"
            >
              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.1, 0.25, 0.1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute inset-0 rounded-2xl bg-purple-500 blur-xl"
              />

              <Sparkles
                size={24}
                className="relative z-10"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* =========================================================
   PREMIUM FLOATING SKILL CARD
========================================================= */

const PremiumSkillCard = ({ skill, index }) => {
  return (
    <motion.div
      /* =====================================================
         ENTRANCE
      ====================================================== */

      initial={{
        opacity: 0,
        y: 50,
        scale: 0.96,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}

      /* =====================================================
         FLOATING
      ====================================================== */

      animate={{
        y: [0, -7, 0, 6, 0],
      }}
      transition={{
        y: {
          duration: 5 + (index % 4),
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.2,
        },
      }}

      /* =====================================================
         HOVER
      ====================================================== */

      whileHover={{
        y: -14,
        scale: 1.025,
        transition: {
          duration: 0.35,
          ease: "easeOut",
        },
      }}
      className="group relative"
    >
      {/* ===================================================
          SOFT OUTER PURPLE AURA
      ==================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        whileHover={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="absolute -inset-5 rounded-[35px] bg-purple-600/10 blur-[45px]"
      />

      {/* ===================================================
          MAIN CARD
      ==================================================== */}

      <div className="relative min-h-[255px] overflow-hidden rounded-[28px] border border-white/[0.055] bg-[#09090c]/80 p-6 backdrop-blur-2xl transition-all duration-700 group-hover:border-purple-400/[0.12] group-hover:bg-[#0d0914]/90">
        {/* =================================================
            INTERNAL MOVING AURA
        ================================================== */}

        <motion.div
          animate={{
            x: ["-30%", "120%", "-30%"],
            y: ["20%", "-20%", "20%"],
          }}
          transition={{
            duration: 10 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute h-32 w-32 rounded-full bg-purple-500/[0.04] blur-[60px]"
        />

        {/* =================================================
            HOVER CENTER LIGHT
        ================================================== */}

        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
          <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/[0.07] blur-[70px]" />
        </div>

        {/* =================================================
            CONTENT
        ================================================== */}

        <div className="relative z-10">
          {/* =================================================
              TOP
          ================================================== */}

          <div className="flex items-start justify-between">
            {/* ICON */}

            <motion.div
              whileHover={{
                scale: 1.12,
                rotate: 8,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
              className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/[0.07] text-purple-300 transition-all duration-500 group-hover:bg-purple-500/[0.13] group-hover:shadow-[0_0_35px_rgba(139,92,246,0.18)]"
            >
              {/* Icon Aura */}

              <motion.div
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.1, 0.25, 0.1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute inset-0 rounded-2xl bg-purple-500 blur-xl"
              />

              <span className="relative z-10">
                {skill.icon}
              </span>
            </motion.div>

            {/* CATEGORY */}

            <span className="rounded-full bg-white/[0.025] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/25 transition-all duration-500 group-hover:bg-purple-500/[0.07] group-hover:text-purple-300/70">
              {skill.category}
            </span>
          </div>

          {/* =================================================
              NAME + PERCENTAGE
          ================================================== */}

          <div className="mt-7 flex items-end justify-between">
            <motion.h3
              whileHover={{
                x: 3,
              }}
              className="text-xl font-bold text-white/85 transition-colors duration-500 group-hover:text-white"
            >
              {skill.name}
            </motion.h3>

            <span className="text-sm font-bold text-purple-300/80">
              {skill.level}%
            </span>
          </div>

          {/* =================================================
              PROGRESS BAR
          ================================================== */}

          <div className="mt-5 h-[3px] overflow-hidden rounded-full bg-white/[0.06]">
            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: `${skill.level}%`,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.5,
                delay: 0.3 + index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative h-full rounded-full bg-gradient-to-r from-purple-700 via-violet-500 to-fuchsia-400"
            >
              {/* Progress Light */}

              <motion.div
                animate={{
                  x: ["-100%", "300%"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                  ease: "linear",
                }}
                className="absolute inset-y-0 w-8 skew-x-[-20deg] bg-white/40 blur-sm"
              />
            </motion.div>
          </div>

          {/* =================================================
              BOTTOM
          ================================================== */}

          <div className="mt-6 flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/15">
              Proficiency
            </span>

            <motion.span
              animate={{
                opacity: [0.25, 0.7, 0.25],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: index * 0.15,
              }}
              className="flex items-center gap-1 text-[10px] text-purple-300/60"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.9)]" />

              ACTIVE
            </motion.span>
          </div>
        </div>

        {/* =================================================
            MOVING BOTTOM LIGHT
        ================================================== */}

        <motion.div
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 6 + index,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute bottom-0 h-px w-24 bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"
        />

        {/* =================================================
            BOTTOM PURPLE GLOW
        ================================================== */}

        <motion.div
          animate={{
            opacity: [0.05, 0.12, 0.05],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: index * 0.1,
          }}
          className="pointer-events-none absolute bottom-[-60px] left-1/2 h-32 w-40 -translate-x-1/2 rounded-full bg-purple-600 blur-[55px]"
        />
      </div>
    </motion.div>
  );
};

export default Skills;