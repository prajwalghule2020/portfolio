"use client";

import { Mail, Phone, Linkedin, Github, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
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

const contactLinks = [
    {
        icon: Mail,
        label: "Email",
        value: "prajwalghule20@gmail.com",
        href: "https://mail.google.com/mail/?view=cm&fs=1&to=prajwalghule20@gmail.com",
        color: "text-red-400",
        bgColor: "bg-red-500/10 border-red-500/20 hover:bg-red-500/20",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+91 8856067757",
        href: "tel:+918856067757",
        color: "text-green-400",
        bgColor: "bg-green-500/10 border-green-500/20 hover:bg-green-500/20",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        value: "Prajwal Ghule",
        href: "https://www.linkedin.com/in/prajwal-ghule-891a76163/",
        color: "text-blue-400",
        bgColor: "bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/20",
    },
    {
        icon: Github,
        label: "GitHub",
        value: "prajwalghule2020",
        href: "https://github.com/prajwalghule2020",
        color: "text-gray-300",
        bgColor: "bg-white/5 border-white/10 hover:bg-white/10",
    },
];

export default function ContactSection() {
    return (
        <motion.section
            id="contact"
            className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 pb-16 sm:pb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            <motion.h2
                className="flex items-center gap-2 sm:gap-3 text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8"
                variants={itemVariants}
            >
                <MessageCircle className="text-cyan-400" />
                CONTACT
            </motion.h2>

            <motion.p
                className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8"
                variants={itemVariants}
            >
                Feel free to reach out! I&apos;m always open to discussing new projects, opportunities, or collaborations.
            </motion.p>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {contactLinks.map((contact, index) => (
                    <motion.a
                        key={index}
                        href={contact.href}
                        target={contact.href.startsWith("http") ? "_blank" : undefined}
                        rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className={`p-4 sm:p-6 rounded-lg border transition-all duration-300 ${contact.bgColor} flex flex-col items-center justify-center`}
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.03,
                            transition: { duration: 0.2 },
                        }}
                    >
                        <div className="flex flex-col items-center justify-center w-full">
                            <div className="flex items-center gap-3 mb-2 sm:mb-3 justify-center">
                                <contact.icon className={`${contact.color} w-6 h-6 sm:w-7 sm:h-7`} />
                                <h3 className="text-white font-semibold text-sm sm:text-base text-center">{contact.label}</h3>
                            </div>
                            <p className="text-gray-400 text-xs sm:text-sm break-all text-center w-full">{contact.value}</p>
                        </div>
                    </motion.a>
                ))}
            </div>
        </motion.section>
    );
}
