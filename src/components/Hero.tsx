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
                <div className={styles.content}>
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p className={styles.preTitle}>Developer — Solo</p>
                        <h1 className={styles.displayName}>AK</h1>
                    </motion.div>

                    <motion.div
                        className={styles.body}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p className={styles.subtitle}>
                            Building apps that matter — Islamic productivity tools,
                            multiplayer games, and language tech. Always shipping.
                        </p>

                        <div className={styles.metrics}>
                            <div className={styles.metricItem}>
                                <span className={styles.metricValue}>4</span>
                                <span className={styles.metricLabel}>Apps shipped</span>
                            </div>
                            <div className={styles.metricDivider} />
                            <div className={styles.metricItem}>
                                <span className={styles.metricValue}>Solo</span>
                                <span className={styles.metricLabel}>No team, no VC</span>
                            </div>
                            <div className={styles.metricDivider} />
                            <div className={styles.metricItem}>
                                <span className={styles.metricValue}>2026</span>
                                <span className={styles.metricLabel}>Building now</span>
                            </div>
                        </div>

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
            </div>
        </section>
    );
}
