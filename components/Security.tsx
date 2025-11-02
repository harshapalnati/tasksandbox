"use client";

import { motion } from "framer-motion";
import { Shield, Layers, Lock, BadgeCheck, type LucideIcon } from "lucide-react";

const pillars: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Built-in Agents",
    description:
      "TaskSandbox include preloaded agents - FileSystem, Bash, and Browser - so your AI can interact with code, data, and the web immediately.",
    icon: Shield
  },
  {
    title: "Local / Hosted Models",
    description:
      "Inference stays in your VPC by default. External model providers only engage when you opt in.",
    icon: Layers
  },
  {
    title: "Context-Aware Sandboxes",
    description:
      "AI sandboxes that remember what came before. Maintain history, logs, and context between runs for seamless agent continuity.",
    icon: Lock
  },
  {
    title: "Production-Ready",
    description:
      "The same containers you prototype in are the ones you ship - consistent, testable, and ready for production traffic.",
    icon: BadgeCheck
  }
];

export default function Security() {
  return (
    <section className="relative isolate overflow-hidden bg-transparent py-24 text-slate-100">

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 md:flex-row md:items-start md:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-120px" }}
          className="max-w-xl space-y-6"
        >
         
          <h2 className="font-mono text-3xl font-semibold leading-tight text-slate-100 md:text-4xl">
          Let your agents work-not just run code.
          </h2>
          <p className="text-sm text-slate-300 md:text-base">
            TaskSandbox lets agents delegate complex tasks across secure, sandboxed environments built for real-world execution.
          </p>
          <h3 className="mt-5 font-mono text-3xl font-semibold text-slate-100 md:text-4xl">
            Add TaskSandbox to your stack via API or MCP.
          </h3>
          <p className="text-sm text-slate-400 md:text-base">
            Designed to work with LangChain, CrewAI, Agno, and any agent framework you choose.
          </p>
        
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-120px" }}
          className="flex w-full max-w-lg flex-col divide-y divide-white/8 overflow-hidden rounded-none border border-white/8 bg-[#0a0a0a]"
        >
          {pillars.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group flex items-start gap-4 px-8 py-7 transition hover:bg-[#141414]"
            >
              <Icon className="mt-1 h-8 w-8 flex-none text-slate-200" strokeWidth={2} />
              <div className="space-y-2 text-left">
                <h3 className="font-mono text-lg font-semibold text-slate-100">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
