const img = 'https://media.licdn.com/dms/image/D5603AQEjwJTzxoowUg/profile-displayphoto-shrink_800_800/0/1683264970160?e=2147483647&v=beta&t=80g7pjhga2ytWSd020WK9sjNTvZKNeUh3nDkfZGC0YY'

export default function About() {
    return (
        <section className="w-full min-h-screen max-w-5xl mx-auto px-4 font-fira">
            <div className="flex flex-col">
                <div className="p-1 rounded-full animate-text bg-gradient-to-r from-teal-300 via-purple-500 to-orange-500 self-center">
                    <img src={img} className="w-64 h-64 object-cover rounded-full" />
                </div>
                <div className="text-3xl md:text-4xl text-center pt-12">
                    Full Stack Web Developer
                </div>
                <div className="text-xl md:text-2xl text-center pt-4">
                    Hello! I am a freelancer from Johor Bahru and in the process of making robust web and mobile apps.
                </div>
            </div>
        </section>

    );
}