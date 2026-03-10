import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import PrinciplesSection from "@/components/PrinciplesSection";
import { projects, buildingNext } from "@/actions/projects";
import styles from "./page.module.css";
import { Github, ArrowUpRight } from "lucide-react";

const stack = [
    "TypeScript",
    "Next.js",
    "React",
    "PartyKit",
    "Cloudflare",
    "Chrome Extensions",
    "Framer Motion",
    "CSS Modules",
];

export default function Home() {
    return (
        <main className={styles.main}>
            <Nav />
            <Hero />

            <section className={styles.aboutSection}>
                <div className="container">
                    <div className={styles.aboutInner}>
                        <p className={styles.eyebrow}>About</p>
                        <div className={styles.aboutBody}>
                            <p className={styles.aboutText}>
                                I build for the communities I belong to — starting with my own.
                                Quran Shield exists because I needed it. HalalifyMusic is next
                                because nobody else is building it right.
                            </p>
                            <p className={styles.aboutText}>
                                I work across an odd range: Islamic productivity tools, multiplayer
                                games, language tech. What ties it together is conviction — when
                                something should exist, I build it. No team, no investors, no waiting.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <PrinciplesSection />

            <section id="projects" className={styles.projectsSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <p className={styles.eyebrow}>Work</p>
                        <h2 className={styles.sectionTitle}>Things I've built</h2>
                    </div>
                    <ProjectGrid projects={projects} />
                </div>
            </section>

            <section className={styles.stackSection}>
                <div className="container">
                    <div className={styles.stackInner}>
                        <p className={styles.stackLabel}>Stack</p>
                        <div className={styles.stackItems}>
                            {stack.map(item => (
                                <span key={item} className={styles.stackItem}>{item}</span>
                            ))}
                        </div>
                    </div>
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

            <section className={styles.ctaSection}>
                <div className="container">
                    <div className={styles.ctaInner}>
                        <h2 className={styles.ctaTitle}>Want to work together?</h2>
                        <p className={styles.ctaBody}>
                            Open to projects, collaborations, and conversations.
                        </p>
                        <a
                            href="https://github.com/HalalifyMusic"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.ctaLink}
                        >
                            Find me on GitHub
                            <ArrowUpRight size={16} />
                        </a>
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
