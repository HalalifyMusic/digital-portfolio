export interface Project {
    id: string;
    title: string;
    description: string;
    link: string;
    tags: string[];
    comingSoon?: boolean;
}

export const projects: Project[] = [
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
