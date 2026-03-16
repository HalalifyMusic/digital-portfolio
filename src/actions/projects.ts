export interface Project {
    id: string;
    title: string;
    description: string;
    link: string;
    tags: string[];
    featured?: boolean;
    comingSoon?: boolean;
}

export const projects: Project[] = [
    {
        id: "3",
        title: "Quran Shield",
        description: "Islamic browser extension helping Muslims stay focused online. Blocks distractions, surfaces Quran reminders, and protects your attention. Built as a real tool I use daily.",
        link: "https://quran-shield.vercel.app/",
        tags: ["Extension", "Islamic", "Next.js"],
        featured: true
    },
    {
        id: "1",
        title: "Nostalgia Base",
        description: "Real-time multiplayer game hub — Uno, Tic Tac Toe, Cards Against Humanity. Built room-state sync from scratch using PartyKit.",
        link: "https://uno-game.uno786.partykit.dev/",
        tags: ["Next.js", "Multiplayer", "PartyKit"]
    },
    {
        id: "2",
        title: "Slanglate",
        description: "Translate internet slang and emojis into plain English. For anyone who's stared at a text and had no idea what it meant.",
        link: "https://slanglate.pages.dev/",
        tags: ["React", "AI", "Language"]
    },
    {
        id: "5",
        title: "LLM Pricing",
        description: "Compare pricing across 56+ language models from 11 providers. Cost calculator for estimating real monthly spend based on token usage.",
        link: "https://llm-pricing-theta.vercel.app/",
        tags: ["Next.js", "AI", "Tool"]
    },
];

export const buildingNext: Pick<Project, 'id' | 'title' | 'description' | 'tags'> = {
    id: "4",
    title: "HalalifyMusic",
    description: "A platform for discovering and sharing halal music — built for the Muslim community.",
    tags: ["Music", "Islamic", "Community"]
};
