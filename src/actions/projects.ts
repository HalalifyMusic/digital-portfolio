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
    comingSoon?: boolean;
}

const PROJECTS_KEY = "portfolio_projects_v2";

const defaultProjects: Project[] = [
    {
        id: "1",
        title: "Nostalgia Base",
        description: "A multiplayer game hub with classics like Uno, Tic Tac Toe, and Cards Against Humanity.",
        link: "https://uno-game.uno786.partykit.dev/",
        tags: ["Next.js", "Multiplayer", "PartyKit"]
    },
    {
        id: "2",
        title: "Slanglate",
        description: "A web app that translates slang and emojis into plain English.",
        link: "https://slanglate.pages.dev/",
        tags: ["React", "AI", "Language"]
    },
    {
        id: "3",
        title: "Quran Shield",
        description: "An Islamic browser extension that helps Muslims stay focused and protected online.",
        link: "https://quran-shield.vercel.app/",
        tags: ["Extension", "Islamic", "Next.js"]
    },
    {
        id: "4",
        title: "HalalifyMusic",
        description: "A platform for discovering and sharing halal music — built for the Muslim community.",
        link: "#",
        tags: ["Music", "Islamic", "Community"],
        comingSoon: true
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
            await client.set(PROJECTS_KEY, JSON.stringify(defaultProjects));
            return defaultProjects;
        }

        return JSON.parse(data);
    } catch {
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
        throw error;
    } finally {
        if (client) await client.disconnect();
    }
}
