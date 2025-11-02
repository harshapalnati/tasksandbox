"use client";

import Image from "next/image";
import TaskSandboxMark from "../assests/tasksandbox.png";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] py-12 text-slate-200">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3 tracking-[0.22em]">
          <Image
            src={TaskSandboxMark}
            alt="TaskSandbox logo"
            className="h-10 w-10"
          />
          <span className="text-lg font-medium text-slate-100">TaskSandbox</span>
        </div>

        <div className="flex flex-col items-start gap-2 md:items-end">
          <p className="text-sm text-slate-400">
            Need help? Connect with the team on Discord.
          </p>
          <a
            href="https://discord.gg/jTpP6PgZtt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
          >
            <DiscordIcon className="h-4 w-4 text-white" />
            Join Discord
          </a>
        </div>
      </div>
      <div className="mt-6 px-6 text-center">
        <p className="text-sm font-medium text-slate-400">Copyright © 2025 by RactorLabs</p>
      </div>
    </footer>
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
