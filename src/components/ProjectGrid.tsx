"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Project } from "@/actions/projects";
import styles from "./ProjectGrid.module.css";

const ACCENTS = ["#06b6d4", "#10b981", "#8b5cf6", "#f59e0b"];

interface ProjectGridProps {
    projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
    return (
        <div className={styles.grid}>
            {projects.map((project, index) => (
                <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                    <ProjectCard project={project} accent={ACCENTS[index % ACCENTS.length]} />
                </motion.div>
            ))}
        </div>
    );
}
