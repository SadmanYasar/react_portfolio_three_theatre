export default function Project({ title, techStacks, url }) {
    return (
        <div className="w-full">
            <div className="h-36 w-full rounded-md border-white hover:border-cyan-400 border p-1">
                <a href={url} target="_blank" className="flex flex-col h-full w-full rounded-md items-center justify-center bg-black">
                    <h1 className="text-2xl font-black text-white">{title}</h1>
                    <div className="text-slate-300 text-md font-mono">{techStacks}</div>
                </a>
            </div>
        </div>
    );
}