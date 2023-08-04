import Project from "../Project";

const projects = [
    {
        title: "Vet On Call MVP",
        techStacks: "React Native, GraphQL, Sendbird",
        url: "https://www.upwork.com/freelancers/~01cfd344d945d1f282?p=1662465195390513152"
    },
    {
        title: "Pathao Merchant Client",
        techStacks: "React, Dexie, Chakra",
        url: "https://pathao-merchant-client.netlify.app/"
    },
    {
        title: "Project Mayhem",
        techStacks: "Unity, C#",
        url: "https://sy17.itch.io/project-mayhem"
    },
    {
        title: "Prompt Treasure",
        techStacks: "Next.js, Tailwind, Framer Motion, Strapi",
        url: "https://prompt-treasure.vercel.app/"
    },
    {
        title: "IAYH Landing Page",
        techStacks: "React Three Fiber",
        url: "https://i-am-your-hope.vercel.app/"
    }
];

export default function Projects() {
    return (
        <section className="w-full max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-16 pt-16">
                <div className="text-2xl md:text-right uppercase font-bold text-slate-300">
                    Projects
                </div>
                <div className="md:col-span-2 space-y-4">
                    {
                        projects.map((project, index) => (
                            <Project key={index} {...project} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
}