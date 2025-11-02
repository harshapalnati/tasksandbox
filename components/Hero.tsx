'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import TaskSandboxMark from "../assests/tasksandbox.png";
import Logo3 from "../assests/logos/image 3.png";
import Logo4 from "../assests/logos/image 4.png";
import Logo5 from "../assests/logos/image 5.png";
import Logo6 from "../assests/logos/image 6.png";
import Logo7 from "../assests/logos/image 7.png";
import Logo8 from "../assests/logos/image 8.png";

const partnerLogos = [Logo3, Logo4, Logo5, Logo6, Logo7, Logo8];

export default function Hero() {
  return (
    <section className="relative flex w-full justify-center overflow-hidden bg-transparent px-6 py-24 text-slate-100">

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-12">
        <header className="flex items-center justify-between text-[0.72rem] uppercase tracking-[0.3em] text-gray-400">
          <div className="flex items-center gap-3 tracking-[0.22em]">
            <Image
              src={TaskSandboxMark}
              alt="TaskSandbox logo"
              className="h-10 w-10"
            />
            <span className="text-lg font-medium text-slate-100">TaskSandbox</span>
          </div>
          <div className="flex items-center gap-4 text-[0.68rem] tracking-[0.28em]">
            <span className="hidden text-gray-500 md:inline">Join us at</span>
            <div className="flex items-center gap-2">
              <a
                href="https://discord.gg/jTpP6PgZtt"
                aria-label="Discord"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-white/20 bg-white/5 transition hover:border-white/40 hover:bg-white/10"
              >
                <DiscordIcon className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://github.com/RactorLabs/ractorlabs.com"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-white/20 bg-white/5 transition hover:border-white/40 hover:bg-white/10"
              >
                <GitHubIcon className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-9 pt-6 text-left"
        >
          <div className="font-mono text-3xl font-semibold leading-tight text-slate-100 md:text-4xl">
            <p className="mb-2">Every Agent</p>
            <p>
              Needs an{" "}
              <span className="text-orange-400">Tasksandbox.</span>
            </p>
          </div>

          <p className="max-w-2xl text-sm leading-relaxed text-gray-300 md:text-base">
            A clean, isolated environment where your agents can code, browse, and
            automate -- without leaving their sandbox.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#start"
              className="rounded-none border border-gray-600 bg-[#0f0f0f] px-6 py-3 text-sm font-semibold text-white transition hover:border-gray-400"
            >
              Start Building
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#docs"
              className="rounded-none border border-gray-500 px-6 py-3 text-sm font-semibold text-gray-200 transition hover:border-gray-300"
            >
              Read Docs
            </motion.a>
          </div>
        </motion.div>

        <div className="space-y-4 pb-1 text-center md:text-left">
          <p className="text-sm uppercase tracking-[0.4em] text-gray-400">
            Engineered by a world-class team
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:justify-between">
            {partnerLogos.map((src, idx) => {
              const isHarvard = idx === 5; // Harvard
              const isSalesforce = idx === 3; // Salesforce
              const isBig = isHarvard || isSalesforce;
              const heightClass = isBig ? "h-14" : "h-6";
              return (
                <Image
                  key={idx}
                  src={src}
                  alt="partner logo"
                  className={`${heightClass} w-auto opacity-80`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 71 55"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
    >
      <path d="M60.1 4.9A58.7 58.7 0 0 0 46.8.8a40.7 40.7 0 0 0-1.9 3.9 53.5 53.5 0 0 0-16.8 0 36.5 36.5 0 0 0-1.9-3.9 58.5 58.5 0 0 0-13.3 4.1C3.4 19.8 0 34.2 1.2 48.4a59.6 59.6 0 0 0 16.4 8.2c1.3-1.8 2.4-3.6 3.3-5.6a36.9 36.9 0 0 1-5.2-2.5c.4-.3.7-.5 1.1-.8a42 42 0 0 0 36.4 0l1.1.8c-1.6 1-3.4 1.8-5.2 2.5.9 2 2 3.8 3.3 5.6a59.6 59.6 0 0 0 16.4-8.2c1.3-14.2-1.9-28.6-9.7-43.5zM23.6 36.8c-3.2 0-5.8-3-5.8-6.7 0-3.7 2.5-6.7 5.8-6.7 3.3 0 5.9 3 5.8 6.7 0 3.7-2.5 6.7-5.8 6.7zm23.8 0c-3.2 0-5.8-3-5.8-6.7 0-3.7 2.5-6.7 5.8-6.7 3.3 0 5.9 3 5.8 6.7 0 3.7-2.5 6.7-5.8 6.7z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2 0-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82a7.62 7.62 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.05 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
    </svg>
  );
}
