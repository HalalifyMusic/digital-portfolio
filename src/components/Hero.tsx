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
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h1 className={styles.title}>
                        Hey, I'm AK.
                    </h1>

                    <p className={styles.subtitle}>
                        I build what interests me — Islamic apps, multiplayer
                        games, language tools. Solo developer, always shipping.
                    </p>

                    <div className={styles.actions}>
                        <button onClick={scrollToProjects} className={styles.cta}>
                            View Work
                            <ArrowDown size={15} />
                        </button>
                        <a
                            href="https://github.com/HalalifyMusic"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.secondaryCta}
                        >
                            <Github size={15} />
                            GitHub
                        </a>
                    </div>
                </motion.div>
            </div>

            <div className={styles.glow} />
        </section>
    );
}
