"use client";

import { Project } from "@/actions/projects";
import { ArrowUpRight } from "lucide-react";
import styles from "./ProjectCard.module.css";
import { motion } from "framer-motion";

interface ProjectCardProps {
    project: Project;
    featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
    return (
        <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.card} ${featured ? styles.featuredCard : ""}`}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
            <div className={styles.inner}>
                <div className={styles.top}>
                    <div className={styles.tags}>
                        {project.tags.map(tag => (
                            <span key={tag} className={styles.tag}>{tag}</span>
                        ))}
                    </div>
                    <ArrowUpRight className={styles.arrow} size={18} />
                </div>

                <div className={styles.bottom}>
                    <h3 className={styles.title}>{project.title}</h3>
                    <p className={styles.description}>{project.description}</p>
                </div>
            </div>
        </motion.a>
    );
}
