"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import analyticsGif from "../assests/gifs/analytics.gif";
import codingGif from "../assests/gifs/codingtask.gif";
import computerGif from "../assests/gifs/computeruse.gif";
import loadingGif from "../assests/gifs/loading.gif";
import rlearningGif from "../assests/gifs/rlearning.gif";
import searchingGif from "../assests/gifs/searchingfiles.gif";

const cases = [
  {
    title: "Deep research tasks",
    description:
      "Give your agent an environment to explore datasets, analyze information, and conduct time-intensive research - safely and efficiently.",
    media: searchingGif,
    link: "#research"
  },
  {
    title: "AI data analysis & visualization",
    description:
      "Run notebooks, scripts, or queries inside an isolated sandbox to process data, generate charts, and share insights securely.",
    media: analyticsGif,
    link: "#analytics"
  },
  {
    title: "Coding tasks",
    description:
      "Enable your agent to write, execute, and debug code with full I/O access - without leaving a secure, containerized workspace.",
    media: codingGif,
    link: "#coding"
  },
  {
    title: "Creative Coding Agents",
    description:
      "Use a sandbox as a code runtime for AI-generated applications. Supports any framework, language, or toolchain your agent needs.",
    media: loadingGif,
    link: "#vibe"
  },
  {
    title: "Reinforcement learning",
    description:
      "Launch and manage thousands of concurrent sandboxes for training loops, policy evaluation, and reward-based experiments.",
    media: rlearningGif,
    link: "#rl"
  },
  {
    title: "Computer use tasks",
    description:
      "Give your agent a virtual desktop sandbox to perform real computer tasks-from app control to GUI automation-safely in the cloud.",
    media: computerGif,
    link: "#computer"
  }
];

export default function UseCases() {
  return (
    <section className="bg-transparent py-24 text-slate-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
        <header className="space-y-6">
          
           <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
             className="max-w-3xl font-mono text-3xl font-semibold leading-[1.15] tracking-tight text-white md:text-4xl"
          >
           Built for agents that turn reasoning into results.
          </motion.h2>
         
        </header>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0, y: 34 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.05, delayChildren: 0.2 }
            }
          }}
          className="grid -m-px overflow-hidden border border-white/8 md:grid-cols-3"
        >
          {cases.map(({ title, description, media, link }, index) => (
            <motion.article
              key={`${title}-${index}`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="group relative flex flex-col items-center gap-6 border border-white/8 bg-[#0a0a0a] px-8 py-12 text-center transition duration-200 hover:-translate-y-[1px] hover:bg-[#141414]"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative flex h-32 w-44 items-center justify-center overflow-hidden rounded-xl"
              >
                <Image
                  src={media}
                  alt={`${title} visualization`}
                  className="h-full w-full object-cover"
                  sizes="176px"
                />
              </motion.div>
              <div className="space-y-2">
                <h3 className="text-base font-semibold uppercase tracking-wide text-white">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {description}
                </p>
              </div>
              <a
                href={link}
                className="rounded-sm bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black transition duration-200 group-hover:bg-slate-200"
              >
                Learn more
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
