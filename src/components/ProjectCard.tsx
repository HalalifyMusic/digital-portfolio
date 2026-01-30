"use client";

import { Project } from "@/actions/projects";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import styles from "./ProjectCard.module.css";
import { motion } from "framer-motion";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <motion.div 
            className={styles.card}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <div className={styles.glow} />
            <div className={styles.content}>
                <div className={styles.header}>
                    <h3 className={styles.title}>{project.title}</h3>
                    <div className={styles.links}>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.linkIcon}
                            title="Visit Website"
                        >
                            <ExternalLink size={18} />
                        </a>
                    </div>
                </div>

                <p className={styles.description}>{project.description}</p>

                <div className={styles.footer}>
                    <div className={styles.tags}>
                        {project.tags.map((tag) => (
                            <span key={tag} className={styles.tag}>
                                {tag}
                            </span>
                        ))}
                    </div>
                    <ArrowUpRight className={styles.arrow} size={20} />
                </div>
            </div>
        </motion.div>
    );
}
