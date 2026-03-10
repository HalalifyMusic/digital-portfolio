"use client";

import { Project } from "@/actions/projects";
import { ExternalLink, ArrowUpRight, Clock } from "lucide-react";
import styles from "./ProjectCard.module.css";
import { motion } from "framer-motion";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <motion.div
            className={`${styles.card} ${project.comingSoon ? styles.cardDimmed : ""}`}
            whileHover={{ y: project.comingSoon ? 0 : -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <div className={styles.glow} />
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.titleRow}>
                        <h3 className={styles.title}>{project.title}</h3>
                        {project.comingSoon && (
                            <span className={styles.comingSoonBadge}>
                                <Clock size={11} />
                                Coming Soon
                            </span>
                        )}
                    </div>
                    {!project.comingSoon && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.linkIcon}
                            title="Visit Website"
                        >
                            <ExternalLink size={16} />
                        </a>
                    )}
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
                    {!project.comingSoon && (
                        <ArrowUpRight className={styles.arrow} size={20} />
                    )}
                </div>
            </div>
        </motion.div>
    );
}
