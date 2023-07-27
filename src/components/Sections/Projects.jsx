import Project from "../Project";

export default function Projects() {
    return (
        <section className="w-full max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-16 pt-16">
                <div className="text-2xl md:text-right uppercase font-bold text-slate-300">
                    Projects
                </div>
                <div className="md:col-span-2 space-y-4">
                    <Project />
                    <Project />
                    <Project />
                </div>
            </div>
        </section>
    );
}