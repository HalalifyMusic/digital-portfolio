"use server";

import { createClient } from "redis";
import { revalidatePath } from "next/cache";

export interface Project {
    id: string;
    title: string;
    description: string;
    link: string;
    tags: string[];
    image?: string;
}

const PROJECTS_KEY = "portfolio_projects";

// Default projects to seed the database
const defaultProjects: Project[] = [
    {
        id: "1",
        title: "AI Dashboard",
        description: "Modern analytics dashboard built with React and D3.js for visualizing machine learning metrics.",
        link: "https://example.com/ai-dashboard",
        tags: ["React", "D3.js", "TypeScript"]
    },
    {
        id: "2",
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with Next.js, featuring real-time inventory and payment processing.",
        link: "https://example.com/ecommerce",
        tags: ["Next.js", "Stripe", "PostgreSQL"]
    },
    {
        id: "3",
        title: "Mobile Fitness App",
        description: "Cross-platform fitness tracking application with workout plans and progress visualization.",
        link: "https://example.com/fitness",
        tags: ["React Native", "Firebase", "Health API"]
    }
];

async function getRedisClient() {
    const client = createClient({ url: process.env.REDIS_URL });
    await client.connect();
    return client;
}

export async function getProjects(): Promise<Project[]> {
    let client;
    try {
        client = await getRedisClient();
        const data = await client.get(PROJECTS_KEY);

        if (!data) {
            // Seed with defaults if empty
            await client.set(PROJECTS_KEY, JSON.stringify(defaultProjects));
            return defaultProjects;
        }

        return JSON.parse(data);
    } catch (error) {
        console.error("Redis Error:", error);
        return defaultProjects;
    } finally {
        if (client) await client.disconnect();
    }
}

export async function saveProject(project: Project) {
    let client;
    try {
        client = await getRedisClient();
        const projects = await getProjects();
        const index = projects.findIndex((p) => p.id === project.id);

        if (index >= 0) {
            projects[index] = project;
        } else {
            projects.push(project);
        }

        await client.set(PROJECTS_KEY, JSON.stringify(projects));
        revalidatePath("/");
        revalidatePath("/admin");
    } catch (error) {
        console.error("Redis Save Error:", error);
        throw error;
    } finally {
        if (client) await client.disconnect();
    }
}

export async function deleteProject(id: string) {
    let client;
    try {
        client = await getRedisClient();
        const projects = await getProjects();
        const filtered = projects.filter((p) => p.id !== id);
        await client.set(PROJECTS_KEY, JSON.stringify(filtered));
        revalidatePath("/");
        revalidatePath("/admin");
    } catch (error) {
        console.error("Redis Delete Error:", error);
        throw error;
    } finally {
        if (client) await client.disconnect();
    }
}
