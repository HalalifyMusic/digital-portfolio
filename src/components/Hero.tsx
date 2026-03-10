"use client";

import styles from "./Hero.module.css";
import { ArrowDown, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    const scrollToProjects = () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className={styles.hero}>
            <div className="container">
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className={styles.badge}
                    >
                        solo dev · vibe coder
                    </motion.div>

                    <h1 className={styles.title}>
                        Hey, I'm <span className="primary-gradient">AK.</span>
                    </h1>
                    <p className={styles.subtitle}>
                        I build what interests me — Islamic apps, multiplayer games, language tools.
                        Solo developer, always shipping something new.
                    </p>

                    <div className={styles.actions}>
                        <button onClick={scrollToProjects} className={styles.cta}>
                            <span>View Work</span>
                            <ArrowDown size={18} />
                        </button>
                        <a
                            href="https://github.com/HalalifyMusic"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.secondaryCta}
                        >
                            <Github size={16} />
                            GitHub
                        </a>
                    </div>
                </motion.div>
            </div>

            <div className={styles.glow1} />
            <div className={styles.glow2} />
        </section>
    );
}
