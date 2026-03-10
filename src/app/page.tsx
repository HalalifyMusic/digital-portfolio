"use client";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { getProjects, Project } from "@/actions/projects";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

export default function Home() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        getProjects().then(setProjects);
    }, []);

    return (
        <main className={styles.main}>
            <Nav />
            <Hero />

            <section id="projects" className={styles.projectsSection}>
                <div className="container">
                    <motion.div
                        className={styles.sectionHeader}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className={styles.sectionTitle}>Selected Work</h2>
                        <p className={styles.sectionSubtitle}>Things I've built and shipped.</p>
                    </motion.div>
                    <div className={styles.grid}>
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <footer className={styles.footer}>
                <div className="container">
                    <div className={styles.footerInner}>
                        <span className={styles.footerName}>AK</span>
                        <p className={styles.footerText}>© {new Date().getFullYear()}</p>
                        <a
                            href="https://github.com/HalalifyMusic"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.footerGithub}
                        >
                            <Github size={16} />
                        </a>
                    </div>
                </div>
            </footer>
        </main>
    );
}
