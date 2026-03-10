"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Project } from "@/actions/projects";
import styles from "./ProjectGrid.module.css";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.05 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
};

interface ProjectGridProps {
    projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
    const featured = projects.find(p => p.featured);
    const rest = projects.filter(p => !p.featured);

    return (
        <motion.div
            className={styles.wrapper}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            {featured && (
                <motion.div className={styles.featured} variants={itemVariants}>
                    <ProjectCard project={featured} featured />
                </motion.div>
            )}
            <div className={styles.grid}>
                {rest.map(project => (
                    <motion.div key={project.id} variants={itemVariants}>
                        <ProjectCard project={project} />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
