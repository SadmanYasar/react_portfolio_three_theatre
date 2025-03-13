import Marquee from "react-fast-marquee";

const logoUrls = [
    '/react-native.svg',
    '/graphql.svg',
    '/aws.svg',
    '/mongodb.svg',
    '/nodejs.svg',
    '/svelte.svg',
    '/tailwind.svg',
    '/prisma.svg',
    '/docker.svg',
    '/postgres.svg',
]

export default function TechStacks() {
    return (
        <>
            <div className="w-screen pt-12">
                <Marquee autoFill gradient gradientColor={[0, 0, 0]} speed={60}>
                    {logoUrls.map((logoUrl) => <img src={logoUrl} className="w-32 h-32 px-4 filter hover:grayscale" />)}
                </Marquee>
                <Marquee autoFill direction="right" gradient gradientColor={[0, 0, 0]}>
                    {logoUrls.map((logoUrl) => <img src={logoUrl} className="w-24 h-24 px-4 filter hover:grayscale" />)}
                </Marquee>
            </div>
        </>
    );
}