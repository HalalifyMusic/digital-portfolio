"use client";

import { Project } from "@/actions/projects";
import { ExternalLink, ArrowUpRight, Clock } from "lucide-react";
import styles from "./ProjectCard.module.css";
import { motion } from "framer-motion";

interface ProjectCardProps {
    project: Project;
    accent?: string;
}

export default function ProjectCard({ project, accent = "#8b5cf6" }: ProjectCardProps) {
    return (
        <motion.a
            href={project.comingSoon ? undefined : project.link}
            target={project.comingSoon ? undefined : "_blank"}
            rel={project.comingSoon ? undefined : "noopener noreferrer"}
            className={`${styles.card} ${project.comingSoon ? styles.cardDimmed : ""}`}
            style={{ "--accent-color": accent } as React.CSSProperties}
            whileHover={{ y: project.comingSoon ? 0 : -6 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
        >
            <div className={styles.accentBar} />
            <div className={styles.glow} />

            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.titleRow}>
                        <h3 className={styles.title}>{project.title}</h3>
                        {project.comingSoon ? (
                            <span className={styles.comingSoonBadge}>
                                <Clock size={10} />
                                Coming Soon
                            </span>
                        ) : (
                            <span className={styles.externalIcon}>
                                <ExternalLink size={14} />
                            </span>
                        )}
                    </div>
                </div>

                <p className={styles.description}>{project.description}</p>

                <div className={styles.footer}>
                    <div className={styles.tags}>
                        {project.tags.map((tag) => (
                            <span key={tag} className={styles.tag}>{tag}</span>
                        ))}
                    </div>
                    {!project.comingSoon && (
                        <ArrowUpRight className={styles.arrow} size={18} />
                    )}
                </div>
            </div>
        </motion.a>
    );
}
