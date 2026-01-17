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
                className="text-5xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                Prajwal Ghule
            </motion.h1>
            <motion.p
                className="text-xl text-gray-400 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Full Stack Developer
            </motion.p>
            <motion.div
                className="flex items-center justify-center gap-6 text-gray-400"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <span className="flex items-center gap-2">
                    <MapPin size={18} />
                    Pune, India
                </span>
                <a href="mailto:prajwalghule20@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Mail size={18} />
                    prajwalghule20@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/prajwal-ghule-891a76163/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Linkedin size={18} />
                    LinkedIn
                </a>
                <a href="https://github.com/prajwalghule2020" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Github size={18} />
                    GitHub
                </a>
            </motion.div>
        </motion.div>
    );
}
