"use client";

import { GraduationCap, Trophy, Terminal, Layout, Server, Code } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
    },
};

const hoverVariants = {
    hover: {
        scale: 1.02,
        borderColor: "rgba(255, 255, 255, 0.3)",
        transition: { duration: 0.2 },
    },
};

export default function AboutSection() {
    return (
        <motion.section
            id="about"
            className="max-w-6xl mx-auto px-6 py-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-8">
                    {/* Education */}
                    <motion.div variants={itemVariants}>
                        <h2 className="flex items-center gap-3 text-2xl font-bold text-white mb-6">
                            <GraduationCap className="text-cyan-400" />
                            EDUCATION
                        </h2>
                        <div className="space-y-6">
                            <motion.div
                                className="p-4 rounded-lg bg-white/5 border border-white/10"
                                whileHover="hover"
                                variants={hoverVariants}
                            >
                                <p className="text-sm text-gray-500 mb-1">2023 - 2027</p>
                                <h3 className="text-lg font-semibold text-white">Bachelor of Engineering in Information Technology</h3>
                                <p className="text-gray-400">Savitribai Phule Pune University</p>
                                <p className="text-gray-400 text-sm">Pune Vidhyarthi Griha&apos;s College of Engineering and Technology</p>
                                <span className="inline-block mt-2 px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-md">
                                    CGPA: 9.06/10
                                </span>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Achievements */}
                    <motion.div variants={itemVariants}>
                        <h2 className="flex items-center gap-3 text-2xl font-bold text-white mb-6">
                            <Trophy className="text-yellow-400" />
                            ACHIEVEMENTS
                        </h2>
                        <ul className="space-y-4 text-left">
                            <li className="flex gap-3 text-gray-300">
                                <span className="text-yellow-400">•</span>
                                <span>Active participant in technical clubs and coding contests.</span>
                            </li>
                            <li className="flex gap-3 text-gray-300">
                                <span className="text-yellow-400">•</span>
                                <span>Completed key projects using TypeScript, Next.js, LangChain, and LangGraph.</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Experience */}
                    <motion.div variants={itemVariants}>
                        <h2 className="flex items-center gap-3 text-2xl font-bold text-white mb-6">
                            <Terminal className="text-green-400" />
                            EXPERIENCE
                        </h2>
                        <motion.div
                            className="p-4 rounded-lg bg-white/5 border border-white/10 text-left"
                            whileHover="hover"
                            variants={hoverVariants}
                        >
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-semibold text-white">Freelancer</h3>
                                <span className="text-sm text-gray-500">Jan 2025 - Present</span>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed text-left">
                                Worked as a freelance software developer delivering full-stack web and AI-driven applications for multiple clients. Built scalable backend systems using Node.js, Express.js, and MongoDB, including REST APIs, authentication, and agent-based chatbot workflows. Developed React-based frontend interfaces and led backend development for an event management application with event creation, registration, and administrative features. Collaborated with small teams using Agile practices, contributing to code reviews, debugging, and sprint-based deliveries.

                            </p>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Right Column - Technical Arsenal */}
                <motion.div variants={itemVariants}>
                    <h2 className="flex items-center gap-3 text-2xl font-bold text-white mb-6">
                        <Terminal className="text-cyan-400" />
                        TECHNICAL ARSENAL
                    </h2>

                    {/* Languages */}
                    <div className="mb-6">
                        <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                            <Code size={14} />
                            Languages
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {["JavaScript", "TypeScript", "Python", "SQL"].map((skill) => (
                                <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Frontend */}
                    <div className="mb-6">
                        <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                            <Layout size={14} />
                            Frontend
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {["React", "Next.js", "TailwindCSS", "Redux"].map((skill) => (
                                <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Backend & Tools */}
                    <div className="mb-6">
                        <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                            <Server size={14} />
                            Backend & Tools
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {["Node.js", "Express.js", "PostgreSQL", "Prisma", "MongoDB", "Redis", "REST APIs", "WebSocket", "LangChain", "LangGraph", "Git", "GitHub", "Docker", "Postman", "Vercel"].map((skill) => (
                                <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Professional Skills */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Professional Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {["Design Understanding", "Problem Solving", "Team Collaboration", "Visual Design", "Agile"].map((skill) => (
                                <span key={skill} className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-lg text-cyan-400 text-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
