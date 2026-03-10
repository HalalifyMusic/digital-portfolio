"use client";

import { motion } from "framer-motion";
import styles from "./PrinciplesSection.module.css";

const principles = [
    {
        num: "01",
        title: "Build from real need",
        body: "Every project I've shipped started as something I personally needed. If I don't feel the problem, I don't build the solution."
    },
    {
        num: "02",
        title: "Ship, then refine",
        body: "Perfection is a delay tactic. Get something real into people's hands, then iterate on what they actually need."
    },
    {
        num: "03",
        title: "Community first",
        body: "I build for communities I'm part of, not for market opportunities. That's why the work feels different."
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.05 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
};

export default function PrinciplesSection() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <p className={styles.eyebrow}>Approach</p>
                    <h2 className={styles.title}>How I think</h2>
                </div>
                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {principles.map((p) => (
                        <motion.div key={p.num} className={styles.principle} variants={itemVariants}>
                            <span className={styles.num}>{p.num}</span>
                            <h3 className={styles.principleTitle}>{p.title}</h3>
                            <p className={styles.principleBody}>{p.body}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
