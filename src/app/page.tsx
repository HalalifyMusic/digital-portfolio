import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import { projects, buildingNext } from "@/actions/projects";
import styles from "./page.module.css";
import { Github } from "lucide-react";

export default function Home() {
    return (
        <main className={styles.main}>
            <Nav />
            <Hero />

            <section id="projects" className={styles.projectsSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <p className={styles.eyebrow}>Work</p>
                        <h2 className={styles.sectionTitle}>Things I've built</h2>
                    </div>
                    <ProjectGrid projects={projects} />
                </div>
            </section>

            <section className={styles.buildingSection}>
                <div className="container">
                    <div className={styles.buildingInner}>
                        <span className={styles.buildingLabel}>Currently building</span>
                        <div className={styles.buildingItem}>
                            <span className={styles.buildingTitle}>{buildingNext.title}</span>
                            <span className={styles.buildingDesc}>{buildingNext.description}</span>
                        </div>
                    </div>
                </div>
            </section>

            <footer className={styles.footer}>
                <div className="container">
                    <div className={styles.footerInner}>
                        <span className={styles.footerName}>AK</span>
                        <p className={styles.footerYear}>© {new Date().getFullYear()}</p>
                        <a
                            href="https://github.com/HalalifyMusic"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.footerGithub}
                            aria-label="GitHub"
                        >
                            <Github size={15} />
                        </a>
                    </div>
                </div>
            </footer>
        </main>
    );
}
