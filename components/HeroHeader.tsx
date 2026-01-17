"use client";

import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroHeader() {
    return (
        <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                Prajwal Ghule
            </motion.h1>
            <motion.p
                className="text-lg sm:text-xl text-gray-400 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Full Stack Developer
            </motion.p>
            <motion.div
                className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-gray-400 text-sm sm:text-base px-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <span className="flex items-center gap-2">
                    <MapPin size={16} className="sm:w-[18px] sm:h-[18px]" />
                    Pune, India
                </span>
                <a href="mailto:prajwalghule20@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
                    <span className="hidden sm:inline">prajwalghule20@gmail.com</span>
                    <span className="sm:hidden">Email</span>
                </a>
                <a href="https://www.linkedin.com/in/prajwal-ghule-891a76163/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
                    LinkedIn
                </a>
                <a href="https://github.com/prajwalghule2020" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
                    GitHub
                </a>
            </motion.div>
        </motion.div>
    );
}
