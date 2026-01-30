"use client";

import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { getProjects, Project } from "@/actions/projects";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  return (
    <main className={styles.main}>
      <Hero />

      <section id="projects" className={styles.projectsSection}>
        <div className="container">
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Selected Work
          </motion.h2>
          <div className={styles.grid}>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
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
          <p>© {new Date().getFullYear()} • Minimal Portfolio</p>
        </div>
      </footer >
    </main>
  );
}
