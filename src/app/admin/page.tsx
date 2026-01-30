import { getProjects, deleteProject } from "@/actions/projects";
import Link from "next/link";
import { Plus, Edit, Trash2, ExternalLink } from "lucide-react";
import styles from "./page.module.css";
import { revalidatePath } from "next/cache";

export default async function AdminDashboard() {
    const projects = await getProjects();

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Dashboard</h1>
                <Link href="/admin/new" className={styles.addButton}>
                    <Plus size={20} /> New Project
                </Link>
            </header>

            <div className={styles.grid}>
                {projects.map((project) => (
                    <div key={project.id} className={styles.card}>
                        <div className={styles.cardContent}>
                            <h3>{project.title}</h3>
                            <p>{project.description.substring(0, 100)}...</p>
                            <div className={styles.tags}>
                                {project.tags.map(tag => (
                                    <span key={tag} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                        </div>

                        <div className={styles.actions}>
                            <Link href={`/admin/edit/${project.id}`} className={styles.iconBtn}>
                                <Edit size={18} />
                            </Link>
                            <form action={async () => {
                                "use server";
                                await deleteProject(project.id);
                            }}>
                                <button type="submit" className={`${styles.iconBtn} ${styles.deleteBtn}`}>
                                    <Trash2 size={18} />
                                </button>
                            </form>
                        </div>
                    </div>
                ))}

                {projects.length === 0 && (
                    <div className={styles.emptyState}>
                        <p>No projects found. Create your first one!</p>
                    </div>
                )}
            </div>
        </div>
    );
}
