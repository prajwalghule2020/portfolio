"use client";

import { ExternalLink, Github, FolderOpen } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
    },
};

interface Project {
    title: string;
    description: string;
    techStack: string[];
    viewLink?: string;
    githubLink?: string;
}

const projects: Project[] = [
    {
        title: "Question Paper Analyzer",
        description: "Developed an AI-powered tool for students and educators to analyze exam papers by listing questions topic-wise, summarizing topic weightage, and highlighting high-priority topics. Integrated a chatbot using LangGraph and mem0 for contextual Q&A. Built with Next.js & TypeScript (frontend, deployed on Vercel) and FastAPI (backend, deployed on Render) using Mistral AI, Gemini API, ImageKit, Quadrant, Redis, and MongoDB, with secure authentication via Clerk.",
        techStack: ["Next.js", "TypeScript", "FastAPI", "LangGraph", "Gemini API", "Redis", "MongoDB", "Clerk"],
        viewLink: "https://question-analyser-xi.vercel.app/",
        githubLink: "#",
    },
    {
        title: "AI Therapist",
        description: "Developed an AI-powered mental health support platform focused on conversational and voice-based therapy experiences. The system features an intelligent chatbot for text-based therapeutic interactions and a real-time voice agent enabling natural, empathetic voice AI sessions. Implemented a memory graph to persist and structure user history, emotional context, and past conversations, enabling personalized, context-aware responses over time.",
        techStack: ["Next.js", "TypeScript", "LangGraph", "Voice AI", "Memory Graph"],
        viewLink: "#",
        githubLink: "#",
    },
    {
        title: "Event Management Application",
        description: "Developed a web-based college event management application using the MERN stack (MongoDB, Express.js, React, and Node.js). The application enables end-to-end event lifecycle management, including event creation, scheduling, participant registration, and administrative oversight. Implemented robust backend APIs for data handling and validation, along with a responsive frontend interface for seamless user interaction.",
        techStack: ["React", "Node.js", "Express.js", "MongoDB"],
        viewLink: "#",
        githubLink: "#",
    },
    {
        title: "Portfolio",
        description: "Built a modern, responsive personal portfolio website showcasing projects, skills, and professional experience. Features an immersive 3D city scene on the landing page using Three.js, smooth animations, and a clean dark theme with a red nebula gradient background. Developed with Next.js 16, TypeScript, and TailwindCSS for optimal performance and developer experience.",
        techStack: ["Next.js", "TypeScript", "TailwindCSS", "Three.js", "GSAP"],
        viewLink: "https://portfolio-kk3spp7ns-prajwals-projects-69cb1494.vercel.app/",
        githubLink: "https://github.com/prajwalghule2020/portfolio",
    },
];

export default function ProjectsSection() {
    return (
        <motion.section
            id="projects"
            className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            <motion.h2
                className="flex items-center gap-2 sm:gap-3 text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8"
                variants={itemVariants}
            >
                <FolderOpen className="text-cyan-400" />
                PROJECTS
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="p-4 sm:p-6 rounded-lg bg-white/5 border border-white/10 transition-colors"
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.02,
                            borderColor: "rgba(255, 255, 255, 0.3)",
                            transition: { duration: 0.2 },
                        }}
                    >
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-4">
                            <h3 className="text-lg sm:text-xl font-bold text-white">{project.title}</h3>
                            <div className="flex gap-2 flex-shrink-0">
                                {project.viewLink && (
                                    <a
                                        href={project.viewLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 px-3 py-1 text-sm bg-cyan-500/20 text-cyan-400 rounded-md hover:bg-cyan-500/30 transition-colors"
                                    >
                                        <ExternalLink size={14} />
                                        View
                                    </a>
                                )}
                                {project.githubLink && (
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 px-3 py-1 text-sm bg-white/10 text-gray-300 rounded-md hover:bg-white/20 transition-colors"
                                    >
                                        <Github size={14} />
                                        GitHub
                                    </a>
                                )}
                            </div>
                        </div>

                        <p className="text-gray-300 text-sm leading-relaxed mb-4 text-left">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400 text-xs"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
