"use client";

import { useState, useEffect } from "react";
import { Github } from "lucide-react";
import styles from "./Nav.module.css";

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
            <div className="container">
                <div className={styles.inner}>
                    <span className={styles.logo}>AK</span>
                    <div className={styles.links}>
                        <button onClick={() => scrollTo("projects")} className={styles.link}>
                            Work
                        </button>
                        <a
                            href="https://github.com/HalalifyMusic"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.github}
                        >
                            <Github size={16} />
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
