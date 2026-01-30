"use client";

import styles from "./Hero.module.css";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    const scrollToProjects = () => {
        const projectsSection = document.getElementById("projects");
        projectsSection?.scrollIntoView({ behavior: "smooth" });
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
                        Available for new projects
                    </motion.div>
                    
                    <h1 className={styles.title}>
                        Crafting <span className="primary-gradient">Exceptional</span> <br />
                        Digital Experiences
                    </h1>
                    <p className={styles.subtitle}>
                        I design and build high-performance web applications with a focus on clean aesthetics and intuitive usability.
                    </p>

                    <div className={styles.actions}>
                        <button onClick={scrollToProjects} className={styles.cta}>
                            <span>View Projects</span>
                            <ArrowDown size={18} />
                        </button>
                        <a href="mailto:hello@example.com" className={styles.secondaryCta}>
                            Get in touch
                        </a>
                    </div>
                </motion.div>
            </div>

            <div className={styles.glow1} />
            <div className={styles.glow2} />
        </section>
    );
}
