"use client";

import { useState } from "react";
import { Project, saveProject } from "@/actions/projects";
import { useRouter } from "next/navigation";
import styles from "./ProjectForm.module.css";
import { ArrowLeft, Save } from "lucide-react";

export default function ProjectForm({ initialData }: { initialData?: Project }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<Project>(
        initialData || {
            id: crypto.randomUUID(),
            title: "",
            description: "",
            link: "",
            tags: [],
        }
    );

    const [tagInput, setTagInput] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAddTag = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && tagInput.trim()) {
            e.preventDefault();
            setFormData({ ...formData, tags: [...formData.tags, tagInput.trim()] });
            setTagInput("");
        }
    };

    const removeTag = (tagToRemove: string) => {
        setFormData({
            ...formData,
            tags: formData.tags.filter((tag) => tag !== tagToRemove),
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        await saveProject(formData);
        setLoading(false);
        router.push("/admin");
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.header}>
                <button type="button" onClick={() => router.back()} className={styles.backButton}>
                    <ArrowLeft size={20} /> Back
                </button>
                <button type="submit" disabled={loading} className={styles.saveButton}>
                    <Save size={20} /> {loading ? "Saving..." : "Save Project"}
                </button>
            </div>

            <div className={styles.group}>
                <label>Project Title</label>
                <input
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Portfolio V2"
                    className={styles.input}
                />
            </div>

            <div className={styles.group}>
                <label>Description</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    placeholder="Project details..."
                    className={styles.textarea}
                />
            </div>

            <div className={styles.group}>
                <label>Project Link</label>
                <input
                    name="link"
                    value={formData.link}
                    onChange={handleChange}
                    required
                    placeholder="https://..."
                    className={styles.input}
                />
            </div>

            <div className={styles.group}>
                <label>Tags (Press Enter to add)</label>
                <div className={styles.tagInputWrapper}>
                    <input
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                        onKeyDown={handleAddTag}
                        placeholder="React, Next.js..."
                        className={styles.input}
                    />
                </div>
                <div className={styles.tags}>
                    {formData.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>
                            {tag}
                            <button type="button" onClick={() => removeTag(tag)}>×</button>
                        </span>
                    ))}
                </div>
            </div>
        </form>
    );
}
