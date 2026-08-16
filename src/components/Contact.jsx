import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

/* =========================================================
   EMAILJS CONFIG
========================================================= */

const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

/* =========================================================
   CONTACT DATA
========================================================= */

const contactInfo = [
  {
    title: "Email",
    value: "amittahasilder782@gmail.com",
    href: "mailto:amittahasilder782@gmail.com",
    label: "Send me an email",
    icon: "✉",
  },

  {
    title: "WhatsApp",
    value: "+880 1309977804",
    href: "https://wa.me/8801309977804",
    label: "Chat on WhatsApp",
    icon: "◉",
  },

  {
    title: "Location",
    value: "Uttara, Dhaka",
    href: "#",
    label: "Bangladesh",
    icon: "⌖",
  },
];

/* =========================================================
   MAIN CONTACT
========================================================= */

const Contact = () => {
  const formRef = useRef(null);

  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    setStatus("sending");
    setErrorMessage("");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus("success");

      formRef.current.reset();

      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus("error");

      setErrorMessage(
        "Something went wrong. Please try again or contact me on WhatsApp."
      );

      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 5000);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#020203] px-5 py-28 text-white sm:px-8 lg:px-12"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* TOP LEFT */}

        <motion.div
          animate={{
            x: [0, 80, -50, 0],
            y: [0, -40, 50, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-60 -top-60 h-[600px] w-[600px] rounded-full bg-purple-700/15 blur-[170px]"
        />

        {/* TOP RIGHT */}

        <motion.div
          animate={{
            x: [0, -70, 50, 0],
            y: [0, 60, -30, 0],
            scale: [1, 0.9, 1.15, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-60 -top-52 h-[600px] w-[600px] rounded-full bg-fuchsia-700/12 blur-[180px]"
        />

        {/* BOTTOM LEFT */}

        <motion.div
          animate={{
            x: [0, 70, -40, 0],
            y: [0, -50, 50, 0],
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-60 -left-52 h-[600px] w-[600px] rounded-full bg-violet-700/12 blur-[180px]"
        />

        {/* BOTTOM RIGHT */}

        <motion.div
          animate={{
            x: [0, -80, 50, 0],
            y: [0, 50, -40, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-60 -right-52 h-[600px] w-[600px] rounded-full bg-purple-700/15 blur-[180px]"
        />

        {/* CENTER */}

        <motion.div
          animate={{
            scale: [0.8, 1.15, 0.8],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[150px]"
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

        {/* VIGNETTE */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020203_85%)]" />
      </div>

      {/* =====================================================
          FLOATING PARTICLES
      ====================================================== */}

      {[...Array(14)].map((_, index) => (
        <motion.span
          key={index}
          animate={{
            y: [0, -35, 0],
            x: [0, index % 2 === 0 ? 15 : -15, 0],
            opacity: [0.1, 0.6, 0.1],
          }}
          transition={{
            duration: 3 + (index % 4),
            repeat: Infinity,
            delay: index * 0.25,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute h-1 w-1 rounded-full bg-purple-300 shadow-[0_0_12px_rgba(216,180,254,1)]"
          style={{
            left: `${5 + index * 7}%`,
            top: `${15 + ((index * 13) % 70)}%`,
          }}
        />
      ))}

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-6xl">

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
          className="mb-16 text-center"
        >

          <div className="mb-5 flex items-center justify-center gap-3">

            <motion.span
              animate={{
                width: ["25px", "70px", "25px"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-px bg-gradient-to-r from-transparent to-purple-400"
            />

            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-purple-300">
              Get In Touch
            </span>

            <motion.span
              animate={{
                width: ["25px", "70px", "25px"],
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
            Let's Build
            <br />

            <span className="bg-gradient-to-r from-purple-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Something Great.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/35">
            Have a project, idea or opportunity? Send me a message.
            I'll get back to you as soon as possible.
          </p>

        </motion.div>

        {/* ===================================================
            CONTACT GRID
        ==================================================== */}

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">

          {/* =================================================
              LEFT
          ================================================== */}

          <div className="space-y-5">

            {/* STATUS */}

            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
              whileHover={{
                y: -5,
              }}
              className="group relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-2xl transition-all duration-500 hover:border-purple-400/25 hover:shadow-[0_0_60px_rgba(139,92,246,0.12)]"
            >

              <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-purple-600/10 blur-[70px]" />

              <div className="relative">

                <div className="flex items-center gap-3">

                  <motion.span
                    animate={{
                      scale: [0.8, 1.15, 0.8],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,1)]"
                  />

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300">
                    Available for work
                  </span>

                </div>

                <h3 className="mt-5 text-xl font-black">
                  Have an idea?
                </h3>

                <p className="mt-2 text-xs leading-6 text-white/30">
                  Let's turn your idea into a beautiful,
                  scalable digital product.
                </p>

              </div>

            </motion.div>

            {/* CONTACT ITEMS */}

            {contactInfo.map((item, index) => (
              <ContactItem
                key={item.title}
                item={item}
                index={index}
              />
            ))}

            {/* LINKEDIN */}

            <motion.a
              href="https://www.linkedin.com/in/amit-tahasilder-550196391/"
              target="_blank"
              rel="noreferrer"
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
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              whileHover={{
                y: -5,
                scale: 1.015,
              }}
              className="group relative flex items-center justify-between overflow-hidden rounded-[25px] border border-white/[0.07] bg-white/[0.025] p-5 backdrop-blur-2xl transition-all duration-500 hover:border-purple-400/25 hover:bg-purple-500/[0.04]"
            >

              <div className="flex items-center gap-4">

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-purple-400/15 bg-purple-500/10 text-sm font-black text-purple-200 transition-all group-hover:rotate-6 group-hover:bg-purple-500/20">
                  in
                </div>

                <div>

                  <p className="text-xs font-bold">
                    LinkedIn
                  </p>

                  <p className="mt-1 text-[9px] text-white/25">
                    Connect professionally
                  </p>

                </div>

              </div>

              <span className="text-purple-300/50 transition-all group-hover:translate-x-1 group-hover:text-purple-200">
                ↗
              </span>

            </motion.a>

          </div>

          {/* =================================================
              FORM
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
            }}
            className="group relative overflow-hidden rounded-[32px] border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-2xl sm:p-8"
          >

            {/* GLOW */}

            <motion.div
              animate={{
                opacity: [0.05, 0.15, 0.05],
                scale: [0.9, 1.1, 0.9],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-purple-600 blur-[110px]"
            />

            {/* MOVING BORDER */}

            <motion.div
              animate={{
                x: ["-100%", "300%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-0 top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-purple-300 to-transparent"
            />

            <div className="relative z-10">

              <div className="mb-7">

                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-purple-300">
                  Send a message
                </p>

                <h3 className="mt-2 text-2xl font-black">
                  Start a conversation.
                </h3>

              </div>

              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="space-y-5"
              >

                {/* NAME */}

                <div>

                  <label className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.18em] text-white/30">
                    Your Name
                  </label>

                  <input
                    name="user_name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-2xl border border-white/[0.07] bg-black/30 px-4 py-3.5 text-xs text-white outline-none transition-all placeholder:text-white/15 focus:border-purple-400/40 focus:bg-purple-500/[0.04] focus:shadow-[0_0_30px_rgba(139,92,246,0.08)]"
                  />

                </div>

                {/* EMAIL */}

                <div>

                  <label className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.18em] text-white/30">
                    Email Address
                  </label>

                  <input
                    name="user_email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-white/[0.07] bg-black/30 px-4 py-3.5 text-xs text-white outline-none transition-all placeholder:text-white/15 focus:border-purple-400/40 focus:bg-purple-500/[0.04] focus:shadow-[0_0_30px_rgba(139,92,246,0.08)]"
                  />

                </div>

                {/* MESSAGE */}

                <div>

                  <label className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.18em] text-white/30">
                    Message
                  </label>

                  <textarea
                    name="message"
                    required
                    rows="6"
                    placeholder="Tell me about your project..."
                    className="w-full resize-none rounded-2xl border border-white/[0.07] bg-black/30 px-4 py-3.5 text-xs text-white outline-none transition-all placeholder:text-white/15 focus:border-purple-400/40 focus:bg-purple-500/[0.04] focus:shadow-[0_0_30px_rgba(139,92,246,0.08)]"
                  />

                </div>

                {/* STATUS MESSAGE */}

                {status === "success" && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="rounded-2xl border border-emerald-400/20 bg-emerald-500/[0.07] px-4 py-3 text-center text-xs text-emerald-300"
                  >
                    ✓ Message sent successfully!
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="rounded-2xl border border-red-400/20 bg-red-500/[0.07] px-4 py-3 text-center text-xs text-red-300"
                  >
                    {errorMessage}
                  </motion.div>
                )}

                {/* BUTTONS */}

                <div className="flex flex-col gap-3 sm:flex-row">

                  {/* SEND EMAIL */}

                  <motion.button
                    type="submit"
                    disabled={status === "sending"}
                    whileHover={
                      status !== "sending"
                        ? {
                            y: -4,
                            scale: 1.02,
                          }
                        : {}
                    }
                    whileTap={
                      status !== "sending"
                        ? {
                            scale: 0.97,
                          }
                        : {}
                    }
                    className="group/btn relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-full border border-purple-300/20 bg-purple-500/10 px-5 py-3.5 text-xs font-bold text-purple-200 transition-all hover:border-purple-300/40 hover:bg-purple-500/20 hover:shadow-[0_0_35px_rgba(139,92,246,0.15)] disabled:cursor-not-allowed disabled:opacity-60"
                  >

                    {status === "sending" ? (
                      <>
                        <motion.span
                          animate={{
                            rotate: 360,
                          }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="h-4 w-4 rounded-full border-2 border-purple-300/30 border-t-purple-300"
                        />

                        Sending...
                      </>
                    ) : status === "success" ? (
                      <>
                        Message Sent ✓
                      </>
                    ) : (
                      <>
                        <span>
                          Send Message
                        </span>

                        <span className="transition-transform group-hover/btn:translate-x-1">
                          →
                        </span>
                      </>
                    )}

                  </motion.button>

                  {/* WHATSAPP */}

                  <motion.a
                    href="https://wa.me/8801309977804"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{
                      y: -4,
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="flex flex-1 items-center justify-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-500/[0.06] px-5 py-3.5 text-xs font-bold text-emerald-300 transition-all hover:border-emerald-400/35 hover:bg-emerald-500/10 hover:shadow-[0_0_35px_rgba(52,211,153,0.10)]"
                  >
                    WhatsApp
                    <span>↗</span>
                  </motion.a>

                </div>

              </form>

              <div className="mt-6 flex items-center justify-center gap-2 text-center">

                <span className="h-1 w-1 rounded-full bg-purple-400" />

                <span className="text-[8px] uppercase tracking-[0.2em] text-white/15">
                  Your message goes directly to my inbox
                </span>

                <span className="h-1 w-1 rounded-full bg-purple-400" />

              </div>

            </div>

          </motion.div>

        </div>

        {/* ===================================================
            BOTTOM
        ==================================================== */}

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
          }}
          transition={{
            duration: 1,
          }}
          className="mt-20 h-px origin-center bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
        />

        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.3,
          }}
          className="mt-6 text-center text-[9px] uppercase tracking-[0.25em] text-white/15"
        >
          Amit Tahasilder • Web Developer • Full-Stack Developer
        </motion.p>

      </div>
    </section>
  );
};

/* =========================================================
   CONTACT ITEM
========================================================= */

const ContactItem = ({ item, index }) => {
  return (
    <motion.a
      href={item.href}
      target={
        item.title === "WhatsApp"
          ? "_blank"
          : undefined
      }
      rel={
        item.title === "WhatsApp"
          ? "noreferrer"
          : undefined
      }
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
      transition={{
        duration: 0.7,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -5,
        x: 4,
      }}
      className="group relative flex items-center justify-between overflow-hidden rounded-[25px] border border-white/[0.07] bg-white/[0.025] p-5 backdrop-blur-2xl transition-all duration-500 hover:border-purple-400/25 hover:bg-purple-500/[0.04] hover:shadow-[0_0_45px_rgba(139,92,246,0.08)]"
    >

      <div className="pointer-events-none absolute -left-16 -top-16 h-32 w-32 rounded-full bg-purple-600/0 blur-[60px] transition-all duration-500 group-hover:bg-purple-600/20" />

      <div className="relative flex items-center gap-4">

        <motion.div
          whileHover={{
            rotate: 8,
            scale: 1.08,
          }}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-purple-400/15 bg-purple-500/10 text-base text-purple-200 transition-all group-hover:border-purple-400/30 group-hover:bg-purple-500/20"
        >
          {item.icon}
        </motion.div>

        <div>

          <p className="text-xs font-bold">
            {item.title}
          </p>

          <p className="mt-1 text-[10px] text-white/45">
            {item.value}
          </p>

          <p className="mt-1 text-[8px] uppercase tracking-[0.15em] text-white/15">
            {item.label}
          </p>

        </div>

      </div>

      <motion.span
        animate={{
          x: [0, 3, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="relative text-purple-300/40 transition-colors group-hover:text-purple-200"
      >
        ↗
      </motion.span>

    </motion.a>
  );
};

export default Contact;